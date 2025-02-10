<script setup lang="ts">
import {computed, onBeforeUnmount, onMounted, reactive, ref, watch} from "vue";
import * as vNG from "v-network-graph";
import {ForceEdgeDatum, ForceLayout, ForceNodeDatum,} from "v-network-graph/lib/force-layout";

import * as data from "@/components/graph/data";
import {TreeNode, TreeNodes} from "@/components/graph/data";
import {isDark} from "@/composables/toggle.ts";

import Typed from 'typed.js';

const typedElement = ref<HTMLSpanElement | null>(null);
let typedInstance: Typed | null = null;

onMounted(() => {
  if (typedElement.value) {
    typedInstance = new Typed(typedElement.value, {
      strings: [
        "Click icons to expand skills or drag to move, zoom with scroll.",
      ],
      typeSpeed: 50,
      backSpeed: 20,
      startDelay: 500,
      backDelay: 1000,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });
  }
});

onBeforeUnmount(() => {
  if (typedInstance) {
    typedInstance.destroy();
  }
});

// Function to adjust node spacing
function adjustNodeSpacing(layouts: vNG.NodePositions, scaleFactor: number) {
  Object.keys(layouts).forEach((key) => {
    const node = layouts[key];
    layouts[key] = {
      x: node.x * scaleFactor,
      y: node.y * scaleFactor,
    };
  });
}

// Nodes containing parent-child relationships
const nodeTree = reactive(data.nodeTree);

// Flatten and hide collapsed nodes
const nodes = computed<TreeNodes>(() => {
  const n: TreeNodes = {};
  walkExpandedNodes(nodeTree, (node) => (n[node.id] = node));
  return n;
});
const edges = reactive(data.edges);
const layouts = reactive<vNG.Layouts>(data.layouts);
const layoutsBackup: vNG.NodePositions = {};
const zoomLevel = ref(1.3);

const scaleFactor = 1; // Scale factor to increase node spacing
adjustNodeSpacing(layouts.nodes, scaleFactor);

const labelColor = computed(() => (!isDark.value ? "#000" : "#fff"));

const configs = reactive(
    vNG.defineConfigs<TreeNode>({
      view: {
        scalingObjects: true,
        autoPanOnResize: true,
        layoutHandler: new ForceLayout({
          // noAutoRestartSimulation: true,
          positionFixedByClickWithAltKey: true,
          createSimulation: (d3, nodes, edges) => {
            const forceLink = d3
                .forceLink<ForceNodeDatum, ForceEdgeDatum>(edges)
                .id((d: ForceNodeDatum) => d.id);
            return d3
                .forceSimulation(nodes)
                .force("edge", forceLink.distance(100).strength(0.8))
                .force("charge", d3.forceManyBody().strength(-1000))
                .force("center", d3.forceCenter().strength(0.05))
                .alphaMin(0.001);
          },
        }),
      },
      edge: {
        normal: {color: "#ccc", width: 1},
      },
      node: {
        label: {direction: "south", color: labelColor.value},
        normal: {
          radius: 40,
          color: (n) => (n.children ? "transparent" : "#0a1219"),
        },
      },
    })
);

watch(labelColor, (newColor) => {
  if (configs.node) {
    if (configs.node.label) {
      configs.node.label.color = newColor;
    }
  }
});
const eventHandlers: vNG.EventHandlers = {
  "node:click": ({node}) => {
    const children = nodes.value[node]?.children;
    const parentPos = layouts.nodes[node];
    if (children && parentPos) {
      nodes.value[node].collapse = !nodes.value[node].collapse;
      if (nodes.value[node].collapse) {
        Object.values(children).forEach((n) => {
          const pos = layouts.nodes[n.id];
          layoutsBackup[n.id] = {
            x: pos ? pos.x - parentPos.x : 0,
            y: pos ? pos.y - parentPos.y : 0,
          };
        });
      } else {
        const z = zoomLevel.value;
        Object.values(children).forEach((n, i) => {
          const pos = layoutsBackup[n.id];
          layouts.nodes[n.id] = {
            x: pos ? pos.x + parentPos.x : parentPos.x + (30 * (i + 1)) / z,
            y: pos ? pos.y + parentPos.y : parentPos.y + (30 * (i + 1)) / z,
          };
          delete layoutsBackup[n.id];
        });
      }
    }
  },
};

const layers: vNG.Layers = {badge: "nodes"};

function walkExpandedNodes(nodes: TreeNodes, cb: (node: TreeNode) => void) {
  for (const n of Object.values(nodes)) {
    cb(n);
    if (!n.collapse && n.children) {
      walkExpandedNodes(n.children, cb);
    }
  }
}
</script>

<template>

  <v-network-graph
      class="graph"
      :nodes="nodes"
      :edges="edges"
      :configs="configs"
      :layers="layers"
      :layouts="layouts"
      :event-handlers="eventHandlers"
      v-model:zoomLevel="zoomLevel"
  >
    <template #override-node="{ nodeId, scale, config, ...slotProps }">
      <circle
          class="face-circle"
          :r="config.radius * scale"
          :fill="config.color"
          v-bind="slotProps"
      />
      <image
          class="face-picture cursor-pointer"
          :x="-config.radius * (scale * 0.5)"
          :y="-config.radius * (scale * 0.5)"
          :width="config.radius * scale * 1"
          :height="config.radius * scale * 1"
          :xlink:href="nodes[nodeId]?.img"
          clip-path="url(#faceCircle)"
      />
    </template>
    <template #badge="{ scale }">
      <template v-for="(pos, node) in layouts.nodes" :key="node">
        <g
            v-if="nodes[node]?.children"
            class="collapse-badge"
            :transform="`translate(${pos.x + 9 * scale}, ${pos.y - 9 * scale})`"
        >
        </g>
      </template>
    </template>
  </v-network-graph>
  <div
      pos-absolute
      text-coolgray
      left-3
      top-32
      bg-gradient-from-zinc
      p-2
      rounded-lg
      shadow-lg
  >
    <span ref="typedElement" dark:text-white></span></div>
</template>

<style>
.graph {
  width: 100%;
  height: 90vh;
}

.face-circle {
  stroke: v-bind(labelColor);
  stroke-width: 0.1;
}

.collapse-badge {
  pointer-events: none;
}

.collapse-badge text {
  font-size: 14px;
  stroke: #fff;
  text-anchor: middle;
  dominant-baseline: middle;
}
</style>
