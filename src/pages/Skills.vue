<script setup lang="ts">
import {
  computed,
  onBeforeUnmount,
  onMounted,
  reactive,
  ref,
  watch,
} from "vue";
import * as vNG from "v-network-graph";
import {
  ForceEdgeDatum,
  ForceLayout,
  ForceNodeDatum,
} from "v-network-graph/lib/force-layout";

import * as data from "@/components/graph/data";
import { TreeNode, TreeNodes } from "@/components/graph/data";
import { isDark } from "@/composables/toggle.ts";

import Typed from "typed.js";

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

function adjustNodeSpacing(layouts: vNG.NodePositions, scaleFactor: number) {
  Object.keys(layouts).forEach((key) => {
    const node = layouts[key];
    layouts[key] = {
      x: node.x * scaleFactor,
      y: node.y * scaleFactor,
    };
  });
}

const nodeTree = reactive(data.nodeTree);

const nodes = computed<TreeNodes>(() => {
  const n: TreeNodes = {};
  walkExpandedNodes(nodeTree, (node) => (n[node.id] = node));
  return n;
});
const edges = reactive(data.edges);
const layouts = reactive<vNG.Layouts>(data.layouts);
const layoutsBackup: vNG.NodePositions = {};
const zoomLevel = ref(1.3);

const scaleFactor = 1;
adjustNodeSpacing(layouts.nodes, scaleFactor);

const labelColor = computed(() => (isDark.value ? "#f3f4f6" : "#111827"));
const edgeColor = computed(() =>
  isDark.value ? "rgba(226, 232, 240, 0.45)" : "rgba(100, 116, 139, 0.55)",
);
const leafNodeColor = computed(() => (isDark.value ? "#1e293b" : "#0a1219"));
const parentNodeColor = computed(() =>
  isDark.value ? "rgba(30, 41, 59, 0.35)" : "rgba(255, 255, 255, 0.35)",
);

const configs = reactive(
  vNG.defineConfigs<TreeNode>({
    view: {
      scalingObjects: true,
      autoPanOnResize: true,
      layoutHandler: new ForceLayout({
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
      normal: { color: edgeColor.value, width: 1.5 },
    },
    node: {
      label: {
        direction: "south",
        color: labelColor.value,
        fontSize: 12,
      },
      normal: {
        radius: 40,
      },
    },
  }),
);

watch(
  [labelColor, edgeColor, leafNodeColor, parentNodeColor, isDark],
  () => {
    if (configs.edge?.normal) {
      configs.edge.normal.color = edgeColor.value;
    }
    if (configs.node?.label) {
      configs.node.label.color = labelColor.value;
    }
    if (configs.node?.normal) {
      configs.node.normal.color =
        "transparent" as typeof configs.node.normal.color;
    }
  },
  { immediate: true },
);

const eventHandlers: vNG.EventHandlers = {
  "node:click": ({ node }) => {
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

const layers: vNG.Layers = { badge: "nodes" };

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
  <div class="skills-page w-full" :class="{ 'is-dark': isDark }">
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
          :href="nodes[nodeId]?.img"
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
          />
        </template>
      </template>
    </v-network-graph>

    <div class="hint">
      <span ref="typedElement"></span>
    </div>
  </div>
</template>

<style scoped>
.skills-page {
  position: relative;
  color: #111827;
}

.skills-page.is-dark {
  color: #f3f4f6;
}

.graph {
  width: 100%;
  height: 100vh;
}

.hint {
  position: absolute;
  left: 0.75rem;
  top: 8rem;
  z-index: 2;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  background: transparent;
  color: #334155;
  box-shadow: none;
  max-width: min(90vw, 22rem);
}
</style>

<style>
.face-circle {
  stroke: v-bind(labelColor);
  stroke-width: 1.25;
}

.skills-page.is-dark .face-circle {
  stroke: #cbd5e1;
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

/* v-network-graph label contrast in dark mode */
.skills-page.is-dark .v-ng-node-label text {
  fill: #f3f4f6 !important;
}
</style>
