<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
  >
    <path
      fill="none"
      stroke="currentColor"
      stroke-dasharray="68"
      stroke-dashoffset="68"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M3 19.5V4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V16C21 16.5523 20.5523 17 20 17H5.5z"
    >
      <animate
        fill="freeze"
        attributeName="stroke-dashoffset"
        dur="0.6s"
        values="68;0"
      ></animate>
    </path>
  </svg>
</template>

<script lang="ts">
export default {
  name: "LineMdChatBubble",
};
</script>
