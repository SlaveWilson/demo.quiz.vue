<template lang="pug">
header
  .container.flex.justify-between.items-center
    h1 Drivers License Tests
    router-link(to="/", v-show="$route.name !== 'Index'")
      img(src="@/assets/images/icons/cross.svg", width="20", height="20")
</template>

<style lang="scss" scoped>
header {
  background-image: linear-gradient(to right, color(primary-light), color(primary));
  box-shadow: 0 4px 21px 0 color(shadow-header);
}

.container {
  height: 5rem;
}
</style>
