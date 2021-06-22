<template>
  <div class="home">
    <div class="forma"></div>

    <div class="card">
      <img
        width="460"
        src="https://images.unsplash.com/photo-1580767067898-feb0690afe59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
        alt=""
      />
    </div>
    <div class="s-pl-4 content">
      <h1 class="text--primary s-mb-1">I'M GERMAN CASTRO.</h1>
      <h2>FRONT-END DEVELOPER</h2>

      <p style="max-width: 460px">
        I'm a Peruvian based web designer & front‑end developer focused on
        crafting clean & user‑friendly experiences, I am passionate about
        building excellent software that improves the lives of those around me.
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>
<style scoped lang="scss">
.home {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  .content {
    margin-left: 25%;
  }
  .forma {
    height: 130%;
    width: 400px;
    background: rgba(var(--vs-primary), 1);
    position: absolute;
    left: -10%;
    top: -5%;
    display: flex;
    align-items: center;
    transform: rotate(-20deg);
  }

  .card {
    position: absolute;
    border-radius: var(--vs-radius);
    box-shadow: 5px 5px 10px 10px rgba(0, 0, 0, var(--vs-shadow-opacity));
    left: 25px;
    img {
      border-radius: var(--vs-radius);
      display: block;
    }
  }
}
</style>
