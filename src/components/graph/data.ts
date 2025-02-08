import * as vNG from "v-network-graph"
import jsImg from "@/assets/js-img.png";
import vueImg from "@/assets/vue-img.png";
import tsImg from "@/assets/ts.png";
import reactImg from "@/assets/react.png";
import viteImg from "@/assets/vite.png";
import vitestImg from "@/assets/vitest.png";
import cypressImg from "@/assets/cypress.png";
import dockerImg from "@/assets/docker.png";
import nuxtImg from "@/assets/nuxt.png";
import pwaImg from "@/assets/pwa.png";
import cssImg from "@/assets/css.png";
import scssImg from "@/assets/scss.png";
import tailwindImg from "@/assets/tailwind.png";
import vuetifyImg from "@/assets/vuetify.png";
import piniaImg from "@/assets/pinia.png";
import primeVue from "@/assets/primevue.png";
import unoCss from "@/assets/unocss.png";
import jestImg from "@/assets/jest.png";


export interface TreeNode extends vNG.Node {
  id: string
  name: string
  collapse?: boolean
  children?: Record<string, TreeNode>
}

export type TreeNodes = Record<string, TreeNode>

export const nodeTree: TreeNodes = {
  groupA: {
    id: "groupA",
    name: "JavaScript",
    img: jsImg,
    collapse: false,
    children: {
      node1: {
        id: "groupA/node1",
        name: "TypeScript",
        img: tsImg,
      },
      node2: {
        id: "groupA/node2",
        name: "Vite",
        img: viteImg,

      },
      node3: {
        id: "groupA/node3",
        name: "Docker",
        img: dockerImg,
      },
      node4: {
        id: "groupA/node4",
        name: "PWA",
        img: pwaImg,
      },
      node5: {
        id: "groupA/node5",
        name: "React",
        img: reactImg,
      },
      node6: {
        id: "groupA/node6",
        name: "Jest",
        img: jestImg,
      },
      node7: {
        id: "groupA/node7",
        name: "Cypress",
        img: cypressImg,
      },

    },
  },
  groupB: {
    id: "groupB",
    name: "Vue",
    img: vueImg,
    collapse: false,
    children: {
      node1: {
        id: "groupB/node1",
        name: "Nuxt",
        img: nuxtImg,

      },
      node2: {
        id: "groupB/node2",
        name: "Vitest",
        img: vitestImg,

      },

      node3: {
        id: "groupB/node3",
        name: "Vuetify",
        img: vuetifyImg,
      },
      node4: {
        id: "groupB/node4",
        name: "Pinia",
        img: piniaImg,
      },
      node5: {
        id: "groupB/node5",
        name: "PrimeVue",
        img: primeVue,
      },
      node6: {
        id: "groupB/node6",
        name: "UnoCss",
        img: unoCss,
      },
    },
  },
  groupC: {
    id: "groupC",
    name: "CSS",
    collapse: false,
    img: cssImg,
    children: {
      node1: {
        id: "groupC/node1",
        name: "SCSS",
        img: scssImg,
      },
      node2: {
        id: "groupC/node2",
        name: "Tailwind",
        img: tailwindImg,
      },
    },
  },
  // groupD: {
  //   id: "groupD",
  //   name: "React",
  //   img: reactImg,
  //   collapse: false,
  // }
}

export const edges: vNG.Edges = {
  edge1: { source: "groupA", target: "groupB" },
  edge2: { source: "groupB", target: "groupC" },
  edge3: { source: "groupC", target: "groupA" },
  // Group A
  edgeA_1: { source: "groupA", target: "groupA/node1" },
  edgeA_2: { source: "groupA", target: "groupA/node2" },
  edgeA_3: { source: "groupA", target: "groupA/node3" },
  edgeA_4: { source: "groupA", target: "groupA/node4" },
  edgeA_5: { source: "groupA", target: "groupA/node5" },
  edgeA_6: { source: "groupA", target: "groupA/node6" },
  edgeA_7: { source: "groupA", target: "groupA/node7" },
  // Group B
  edgeB_1: { source: "groupB", target: "groupB/node1" },
  edgeB_2: { source: "groupB", target: "groupB/node2" },
  edgeB_3: { source: "groupB", target: "groupB/node3" },
  edgeB_4: { source: "groupB", target: "groupB/node4" },
  edgeB_5: { source: "groupB", target: "groupB/node5" },
  edgeB_6: { source: "groupB", target: "groupB/node6" },
  // Group C
  edgeC_1: { source: "groupC", target: "groupC/node1" },
  edgeC_2: { source: "groupC", target: "groupC/node2" },
  edgeC_3: { source: "groupC", target: "groupC/node3" },
  // Group D
  // edgeD_1: { source: "groupD", target: "groupD/node1" },
  // edgeD_2: { source: "groupD", target: "groupD/node2" },
  // edgeD_3: { source: "groupD", target: "groupD/node3" },
}

export const layouts: vNG.Layouts = {
  nodes: {
    "groupA": { x: 5.0, y: -60.0 },
    "groupA/node1": { x: -86.8, y: -115.5 },
    "groupA/node2": { x: 0.8, y: -163.7 },
    "groupA/node3": { x: 87.2, y: -113.3 },
    "groupA/node4": { x: 87.2, y: -13.3 },
    "groupA/node5": { x: 0.8, y: 136.7 },
    "groupA/node6": { x: -86.8, y: -13.5 },
    "groupA/node7": { x: -86.8, y: 86.5 },
    "groupB": { x: -53.0, y: 32.0 },
    "groupB/node1": { x: -143.1, y: -15.2 },
    "groupB/node2": { x: -140.5, y: 84.7 },
    "groupB/node3": { x: -53.4, y: 133.8 },
    "groupB/node4": { x: 33.4, y: 133.8 },
    "groupB/node5": { x: 120.5, y: 84.7 },
    "groupB/node6": { x: 123.1, y: -15.2 },
    "groupC": { x: 53.0, y: 32.0 },
    "groupC/node1": { x: 140.7, y: -22.1 },
    "groupC/node2": { x: 144.3, y: 77.8 },
    "groupC/node3": { x: 50.3, y: 132.2 },
  },
}