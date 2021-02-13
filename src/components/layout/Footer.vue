<template>
  <footer class="footer">
    <h6>Examen VueJS Michael Lacroix</h6>
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
      width: 100%;
      height: 60px;   /* Height of the footer */
      background:rgb(51, 51, 51);
      text-align: center;
      color: white;
  }
</style>