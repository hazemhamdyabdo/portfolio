<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import * as vNG from "v-network-graph";
import {
  ForceLayout,
  ForceNodeDatum,
  ForceEdgeDatum,
} from "v-network-graph/lib/force-layout";

import { TreeNodes, TreeNode } from "@/components/graph/data";
import * as data from "@/components/graph/data";
import jsImg from "@/assets/js-img.png";

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
const zoomLevel = ref(1.0);

const scaleFactor = 1; // Scale factor to increase node spacing
adjustNodeSpacing(layouts.nodes, scaleFactor);

const configs = reactive(
  vNG.defineConfigs<TreeNode>({
    view: {
      layoutHandler: new ForceLayout({
        positionFixedByClickWithAltKey: true,
        createSimulation: (d3, nodes, edges) => {
          const forceLink = d3
            .forceLink<ForceNodeDatum, ForceEdgeDatum>(edges)
            .id((d: ForceNodeDatum) => d.id);
          return d3
            .forceSimulation(nodes)
            .force("edge", forceLink.distance(100).strength(0.5))
            .force("charge", d3.forceManyBody().strength(-1000))
            .force("center", d3.forceCenter().strength(0.05))
            .alphaMin(0.001);
        },
      }),
    },
    node: {
      normal: {
        radius: 40,
        color: (n) => (n.children ? "#0000cc" : "#8888aa"),
      },
    },
  })
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
        class="face-picture"
        :x="-config.radius * (scale * 0.5)"
        :y="-config.radius * (scale * 0.5)"
        :width="config.radius * scale * 1"
        :height="config.radius * scale * 1"
        :xlink:href="jsImg"
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
</template>

<style>
.graph {
  width: 100%;
  height: 90vh;
  border: 1px solid #ccc;
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
