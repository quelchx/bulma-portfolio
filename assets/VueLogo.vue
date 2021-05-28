<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="400"
    height="400"
    viewBox="0 0 256 221"
    preserveAspectRatio="xMinYMin meet"
  >
    <path
      id="down"
      d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36z"
      fill="#41B883"
    />
    <path
      id="down"
      d="M0 0l128 220.8L256 0h-51.2L128 132.48 50.56 0H0z"
      fill="#41B883"
    />
    <path
      id="up"
      d="M50.56 0L128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56z"
      fill="#35495E"
    />
  </svg>
</template>

<script>
export default {
  name: 'VueLogo',
}
</script>

<style lang="scss" scoped>
#down {
  animation: down 3s infinite;
}

#up {
  animation: up 3s infinite;
}

@keyframes up {
  50% {
    transform: translateY(-10px);
  }
  99% {
    transform: translateY(0px);
  }
}

@keyframes down {
  50% {
    transform: translateY(6px);
  }
  99% {
    transform: translateY(0px);
  }
}
</style>
