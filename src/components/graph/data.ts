import * as vNG from "v-network-graph";
import jsImg from "@/assets/js-img.png";
import vueImg from "@/assets/vue-img.png";
import tsImg from "@/assets/ts.png";
import reactImg from "@/assets/react.png";
import viteImg from "@/assets/vite.png";
import vitestImg from "@/assets/vitest.png";
import cypressImg from "@/assets/cypressImg.png";
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
import graphqlImg from "@/assets/graphql.png";
import nextImg from "@/assets/nextjs.svg?url";
import reduxImg from "@/assets/redux.svg?url";
import zustandImg from "@/assets/zustand.svg?url";
import reactQueryImg from "@/assets/react-query.svg?url";
import reactRouterImg from "@/assets/react-router.svg?url";
import shadcnImg from "@/assets/shadcn.svg?url";

export interface TreeNode extends vNG.Node {
  id: string;
  name: string;
  collapse?: boolean;
  children?: Record<string, TreeNode>;
}

export type TreeNodes = Record<string, TreeNode>;

export const nodeTree: TreeNodes = {
  groupA: {
    id: "groupA",
    name: "JavaScript",
    img: jsImg,
    collapse: true,
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
        name: "Jest",
        img: jestImg,
      },
      node6: {
        id: "groupA/node6",
        name: "Cypress",
        img: cypressImg,
      },
      node7: {
        id: "groupA/node7",
        name: "GraphQL",
        img: graphqlImg,
      },
    },
  },
  groupB: {
    id: "groupB",
    name: "Vue",
    img: vueImg,
    collapse: true,
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
    collapse: true,
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
  groupD: {
    id: "groupD",
    name: "React",
    img: reactImg,
    collapse: true,
    children: {
      node1: {
        id: "groupD/node1",
        name: "Next.js",
        img: nextImg,
      },
      node2: {
        id: "groupD/node2",
        name: "Redux",
        img: reduxImg,
      },
      node3: {
        id: "groupD/node3",
        name: "Zustand",
        img: zustandImg,
      },
      node4: {
        id: "groupD/node4",
        name: "TanStack Query",
        img: reactQueryImg,
      },
      node5: {
        id: "groupD/node5",
        name: "React Router",
        img: reactRouterImg,
      },
      node6: {
        id: "groupD/node6",
        name: "Shadcn",
        img: shadcnImg,
      },
    },
  },
};

export const edges: vNG.Edges = {
  edge1: { source: "groupA", target: "groupB" },
  edge2: { source: "groupB", target: "groupC" },
  edge3: { source: "groupC", target: "groupA" },
  edge4: { source: "groupA", target: "groupD" },
  edge5: { source: "groupD", target: "groupB" },
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
  // Group D — React
  edgeD_1: { source: "groupD", target: "groupD/node1" },
  edgeD_2: { source: "groupD", target: "groupD/node2" },
  edgeD_3: { source: "groupD", target: "groupD/node3" },
  edgeD_4: { source: "groupD", target: "groupD/node4" },
  edgeD_5: { source: "groupD", target: "groupD/node5" },
  edgeD_6: { source: "groupD", target: "groupD/node6" },
};

export const layouts: vNG.Layouts = {
  nodes: {
    groupA: { x: 0.0, y: -70.0 },
    groupB: { x: -70.0, y: 40.0 },
    groupC: { x: 70.0, y: 40.0 },
    groupD: { x: 0.0, y: 100.0 },
  },
};
