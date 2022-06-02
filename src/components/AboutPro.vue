<template>
  <div class="d-flex bg-white justify-content-between shadow-lg py-5">
    <form id="up-form" v-on:submit.prevent="submit">
      <div class="container">
        <h1>Sobre o profissional</h1>
        <h5 class="mt-4">Dados do profissional</h5>
        <div class="row">
          <div class="col-5">
            <div class="mt-4">
              <label for="exampleInputEmail1">Nome completo*</label>
              <input
                type="text"
                class="form-control px-4"
                placeholder="Digite o nome completo"
                v-model.trim="$v.nome.$model"
                :class="{ 'is-invalid': validationStatus($v.nome) }"
              />
              <div v-if="!$v.nome.required" class="invalid-feedback">
                Error message
              </div>
            </div>
            <div class="mt-4 w-75">
              <label for="exampleInputPassword1">CPF*</label>
              <input
                type="text"
                class="form-control px-4"
                placeholder="Digite um CPF"
                v-model.trim="$v.cpf.$model"
                :class="{ 'is-invalid': validationStatus($v.cpf) }"
              />
              <div v-if="!$v.cpf.required" class="invalid-feedback">
                Error message
              </div>
            </div>
            <div class="mt-4 w-75">
              <label for="exampleInputPassword1">Número de celular*</label>
              <input
                type="text"
                class="form-control px-4"
                placeholder="(00) 0 0000-0000"
                v-model.trim="$v.celular.$model"
                :class="{ 'is-invalid': validationStatus($v.celular) }"
              />
              <div v-if="!$v.celular.required" class="invalid-feedback">
                Error message
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-6">
                <label for="exampleInputPassword1">Estado*</label>
                <select
                  v-model.trim="$v.estado.$model"
                  :class="{ 'is-invalid': validationStatus($v.estado) }"
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
                  v-model.trim="$v.cidade.$model"
                  :class="{ 'is-invalid': validationStatus($v.cidade) }"
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
            <div class="grid py-4">
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
              <div class="">
                <b>1 de 2</b>
              </div>
            </div>
            <router-link to="/about/:about">
              <submit-button />
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
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import api from "@/services/api";
import SubmitButton from "@/components/SubmitButton.vue";
import { required, minLength, maxLength  } from "vuelidate/lib/validators";
export default {
  components: { SubmitButton },
  data() {
    return {
      nome: "",
      cpf: "",
      celular: "",
      estados: [],
      selectEstado: {},
      selectCidade: {},
      cidades: [],
    };
  },
  validations: {
    nome: { required, minLength: minLength(8), maxLength: maxLength(100) },
    cpf: { required, minLength: minLength(11), maxLength: maxLength(11) },
    celular: { required, minLength: minLength(11), maxLength: maxLength(11) },
    estado: { required },
    cidade: { required },
  },
  created() {
    this.getEstados();
    this.getCidades();
  },
  methods: {
    validationStatus(validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    submit() {
      this.$v.$touch();
      if (this.$v.$pendding || this.$v.$error) return;

      alert("Data submit");
    },
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
