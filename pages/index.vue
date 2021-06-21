<template>
  <div class="me">{{ me }}</div>
</template>
<script>
export default {
  data: () => ({
    me: 'Hello, I am developer',
  }),
}
</script>
<style lang="scss" scoped>
.me {
  color: #00bcd4;
  text-align: center;
}
</style>