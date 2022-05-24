<template>
  <div id="app">
    <SobreProfessional />
    <sobre-atendimento />
  </div>
</template>

<script>
import SobreProfessional from "./components/SobreProfessional"
import SobreAtendimento from "./components/SobreAtendimento"
export default {
  name: "App",
  components: {
    SobreProfessional,
    SobreAtendimento
  },
};
</script>

<style>

</style>

