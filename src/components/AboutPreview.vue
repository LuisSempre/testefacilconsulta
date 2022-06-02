<template>
  <div>
    <div>
      <router-link to="/about/:about">
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
          <h1 class="text-primary-0">Revisão de cadastro</h1>
          <div class="row">
            <div class="col-5">
              <div class="py-2">
                <p>Nome Completo</p>
              </div>
              <div>
                <div class="py-2">
                  <p>CPF</p>
                </div>
              </div>
              <div>
                <div class="py-2">
                  <p>Número de celular ou telefone</p>
                </div>
              </div>
              <div>
                <div class="py-2">
                  <p>Estado/Cidade</p>
                </div>
              </div>
              <div>
                <div class="py-2">
                  <p>Especialidade</p>
                </div>
              </div>
              <div>
                <div class="py-2">
                  <p>Preço da consulta</p>
                </div>
              </div>
              <div class="py-2">
                <p>Formas de pagamento da consulta</p>
              </div>
              <button
                type="submit"
                class="w-100 btn-block mt-4 btn btn-secondary text-uppercase"
              >
                Cadastrar professional
              </button>
               <button
                type="submit"
                class="w-100 mt-4 border-white border bg-transparent"
              >
                Editar cadastro
              </button>
            </div>
            <div class="col-4">
              <img
                src="/images/pagetrhee.png"
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
export default {
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

.bg-cta-0 {
  height: 100vh;
}
.flex-column {
  height: 100%;
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