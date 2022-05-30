<template>
  <div class="d-flex align-items-center justify-content-center bg-cta-0">
    <div class="d-flex bg-white p-5 justify-content-between shadow-lg">
      <form>
        <div class="container">
          <h1 class="text-primary-0">Sobre o Atendimento</h1>
          <h5 class="mt-4">Detalhes do atendimento</h5>
          <div class="row">
            <div class="col-5">
              <div class="mt-4">
                <label for="exampleInputEmail1">Especialidade principal*</label>
                <select
                  class="form-control px-1"
                  :text="selecProfessionais.nome || 'Selecione'"
                >
                  <option>Selecione</option>
                  <option
                    v-for="profissional in profissionais"
                    :key="profissional.id"
                    @click="selecProfessionais(profissional)"
                  >
                    {{ profissional.nome }}
                  </option>
                </select>
              </div>
              <div class="py-4">
                <div>
                  <label for="exampleInputEmail1"
                    >Informe o preço da consulta*</label
                  >
                  <div class="input-group">
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
                  <div class="bg-gray rounded shadow">
                    <div class="mb-3 px-5 py-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        name="blankRadio"
                        id="blankRadio1"
                        value="option1"
                      />
                      <label
                        class="form-check-label ml-4"
                        for="defaultCheck1"
                      >
                        Em dinheiro
                      </label>
                    </div>
                  </div>
                  <div class="bg-gray rounded shadow">
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
                        Pix
                      </label>
                    </div>
                  </div>
                  <div class="bg-gray rounded shadow">
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
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 100%"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
             <SubmitButton />
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

span {
  background-color: #483698;
  border-radius: 0.25rem 0 0 0.25rem;
}

.bg-gray {
  background-color: var(--secondary-1);
}
.px-5 {
  padding-right: 4rem;
  padding-left: 4rem;
}
</style>