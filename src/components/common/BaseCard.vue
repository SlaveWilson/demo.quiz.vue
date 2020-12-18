<template lang="pug">
.card.rounded.flex
  .top
    slot(name="top")
  .bottom
    slot.bottom(name="bottom")
</template>

<style lang="scss" scoped>
.card {
  box-shadow: 0 4px 21px 0 color(shadow-card);
}

.rounded {
  overflow: hidden;
}

.flex{
  flex-direction: column;
}

.top {
  background-color: color(background-card);
  padding: 2em;
}

.bottom {
  background-color: white;
  padding: 2em;
  flex: 1;
}
</style>