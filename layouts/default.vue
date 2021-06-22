<template>
  <div class="main">
    <div class="menu">
      <div>
        <div v-for="(item, index) in menuItems" :key="index" :class="item.id">
          <vs-button
            class="s-mb-2 item"
            icon
            circle
            primary
            :flat="$route.path !== item.path"
            :active="$route.path === item.path"
            :to="item.path"
          >
            <i :class="item.icon"></i>

            <template #animate>
              <i :class="item.icon"></i>

              <span class="s-pl-1 menuHover">
                {{ item.name }}
              </span>
            </template>
          </vs-button>
        </div>
      </div>
    </div>
    <Nuxt />
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data: () => ({
    activePath: null,
    hover: false,
  }),
  computed: {
    ...mapState(['menuItems']),
  },
}
</script>

<style scoped lang="scss">
.main {
  background: #eee;
  width: 100vw;
  position: relative;
  .menu {
    position: absolute;
    z-index: 10;
    right: 20px;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-wrap: wrap;

    .item {
      margin-left: auto;
    }

    .menu1,
    .menu2,
    .menu3,
    .menu4,
    .menu5 {
      .menuHover {
        display: none;
      }

      &:hover {
        .item {
          min-width: 100px;
          color: #fff;
          background: rgba(var(--vs-primary), 1);
        }

        .menuHover {
          display: block;
        }
      }
    }
  }
}
</style>
