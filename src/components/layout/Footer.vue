<template>
  <footer class="footer mt-5">
    <!-- On utilise la directive pour générer le contenu du footer -->
    <h6 v-footer-content="'MLWeb'"></h6>
  </footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style>
  .footer{
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 60px;   /* Height of the footer */
      background:rgb(51, 51, 51);
      text-align: center;
      color: white;
  }
</style>