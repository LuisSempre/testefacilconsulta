<template>
  <div>
    <div>
      <router-link to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </router-link>
    </div>
    <div class="d-flex bg-white p-5 justify-content-between shadow-lg">
      <form>
        <div class="container">
          <h1 class="text-primary-0">Sobre o Atendimento</h1>
          <h5 class="mt-4">Detalhes do atendimento</h5>
          <div class="row">
            <div class="col-5">
              <div class="py-2">
                <label for="exampleInputEmail1">Especialidade principal*</label>
                <select
                  class="form-control px-4"
                  :text="selecProfessionais.nome || 'Selecione'"
                >
                  <option>Selecione a especialidade</option>
                  <option
                    v-for="profissional in profissionais"
                    :key="profissional.id"
                    @click="selecProfessionais(profissional)"
                  >
                    {{ profissional.nome }}
                  </option>
                </select>
              </div>
              <div class="py-0.25">
                <div>
                  <label for="exampleInputEmail1"
                    >Informe o preço da consulta*</label
                  >
                  <div class="input-group w-75">
                    <span
                      class="
                        px-2
                        text-white
                        input-group-addon
                        d-flex
                        align-items-center
                        justify-content-center
                      "
                      >R$</span
                    >
                    <input
                      id="msg"
                      type="text"
                      class="form-control"
                      name="msg"
                      placeholder="Valor"
                    />
                  </div>
                </div>
                <div class="mt-4">
                  <p for="exampleInputPassword1">
                    Formas de pagamento da consulta*
                  </p>
                  <div class="bg-gray rounded shadow px-4">
                    <div class="mb-3 py-3 px-5">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        name="blankRadio"
                        id="blankRadio1"
                        value="option1"
                      />
                      <label class="form-check-label ml-4" for="defaultCheck1">
                        Pix
                      </label>
                    </div>
                  </div>
                  <div class="bg-gray rounded shadow px-4">
                    <div class="mb-3 px-5 py-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        name="blankRadio"
                        id="blankRadio1"
                        value="option1"
                      />
                      <label
                        class="form-check-label fw-semibold ml-4"
                        for="defaultCheck1"
                      >
                        Em dinheiro
                      </label>
                    </div>
                  </div>
                  <div class="bg-gray rounded shadow px-4">
                    <div class="mb-3 px-5 py-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        name="blankRadio"
                        id="blankRadio1"
                        value="option1"
                      />
                      <label
                        class="form-check-label fw-semibold ml-4"
                        for="defaultCheck1"
                      >
                        Cartão de crédito
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="grid py-4">
                <div class="progress mt-4">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style="width: 100%"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div>
                  <a>2 de 2</a>
                </div>
              </div>
              <router-link to="/about/:about/:preview">
                <submit-button />
              </router-link>
            </div>
            <div class="col-4">
              <img src="/images/pagetwo.png" alt="Imagem de um profissional" />
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
      profissionais: [],
      selecProfessionais: {},
    };
  },
  created() {
    this.geProfessionaiss();
  },
  methods: {
    geProfessionaiss() {
      api.get("/profissionais").then((response) => {
        this.profissionais = response.data;
      });
    },
    selecProfessionaiss(profissional) {
      this.selecProfessionais = profissional;
    },
  },
};
</script>
