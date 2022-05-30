<template>
  <div class="d-flex align-items-center justify-content-center bg-cta-0">
    <div class="d-flex bg-white p-5 justify-content-between shadow-lg">
      <form>
        <div class="container">
          <h1 class="text-primary-0">Sobre o profissional</h1>
          <h5 class="mt-4">Dados do profissional</h5>
          <div class="row">
            <div class="col-5">
              <div class="mt-4">
                <label for="exampleInputEmail1">Nome completo*</label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="Digite o nome completo"
                />
              </div>
              <div class="mt-4">
                <label for="exampleInputPassword1">CPF*</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Digite um CPF"
                />
              </div>
              <div class="mt-4">
                <label for="exampleInputPassword1">Número de celular*</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="(00) 0 0000-0000"
                />
              </div>
              <div class="row mt-4">
                <div class="col-6">
                  <label for="exampleInputPassword1">Estado*</label>
                  <select
                    class="form-control px-1"
                    :text="selectEstado.nome || 'Selecione'"
                  >
                    <option>Selecione</option>
                    <option
                      v-for="estado in estados"
                      :key="estado.id"
                      @click="selectEstado(estado)"
                    >
                      {{ estado.nome }}
                    </option>
                  </select>
                </div>
                <div class="col-6">
                  <label for="exampleInputPassword1">Cidade*</label>
                  <select
                    class="form-control px-1"
                    :text="selectCidade.nome || 'Selecione'"
                  >
                    <option>Selecione</option>
                    <option
                      v-for="cidade in cidades"
                      :key="cidade.id"
                      @click="selectCidade(cidade)"
                    >
                      {{ cidade.nome }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="progress mt-4">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 50%"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <router-link to="/about/:about">
                <SubmitButton />
              </router-link>
            </div>

            <div class="col-4">
              <img
                class="overflow"
                src="/images/pageone.png"
                alt="Imagem de um profissional"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import api from "@/services/api";
import SubmitButton from "@/components/SubmitButton.vue";
export default {
  components: { SubmitButton },
  data() {
    return {
      estados: [],
      selectEstado: {},
      selectCidade: {},
      cidades: [],
    };
  },
  created() {
    this.getEstados();
    this.getCidades();
  },
  methods: {
    getEstados() {
      api.get("/estados").then((response) => {
        this.estados = response.data;
      });
    },

    getCidades() {
      api.get("/cidades").then((response) => {
        this.cidades = response.data;
      });
    },
    selectEstados(estado) {
      this.selectEstado = estado;
      this.getCidades();
    },
    selectCidades(cidade) {
      this.selectCidade = cidade;
    },
  },
};
</script>
<style scoped>
select {
  border: 1px solid #483698;
}
input {
  border: 1px solid #483698;
}
h1 {
  color: #483698;
}
.bg-cta-0 {
  height: 100vh;
}
.bg-white {
  border-radius: 30px;
}
.flex-column {
  height: 100%;
}
.btn-primary {
  color: #fff;
  background-color: #483698;
  border-color: #483698;
}
.btn-primary:hover {
  color: #fff;
  background-color: #483698;
  border-color: #483698;
}
</style>