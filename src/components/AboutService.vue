<template>
  <div class="d-flex align-items-center justify-content-center bg-warning">
    <div class="d-flex bg-white shadow-lg p-5 justify-content-between">
      <form>
        <div class="container">
          <h1 class="text-primary-0">Sobre o Atendimento</h1>
          <h5 class="mt-4">Detalhes do atendimento</h5>
          <div class="row">
            <div class="col-5">
              <div class="mt-4">
                <label for="exampleInputEmail1">Especialidade principal*</label>
                <select class="form-control" id="specials">
                  <option value="">Selecione a especialidade</option>
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
                  <div class="mb-3 bg-gray p-2 shadow-lg rounded">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      name="blankRadio"
                      id="blankRadio1"
                      value="option1"
                    />
                    <label class="form-check-label" for="defaultCheck1">
                      Em dinheiro
                    </label>
                  </div>
                  <div class="mb-3 bg-gray p-2 shadow-md rounded">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      name="blankRadio"
                      id="blankRadio1"
                      value="option1"
                    />
                    <label class="form-check-label" for="defaultCheck2">
                      Pix
                    </label>
                  </div>
                  <div class="mb-3 bg-gray p-2 shadow-md rounded">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      name="blankRadio"
                      id="blankRadio1"
                      value="option1"
                    />
                    <label class="form-check-label" for="defaultCheck3">
                      Cartão de crédito
                    </label>
                    <p>Parcelamento em</p>
                    <div class="form-check">
                      <div>
                        <input
                          class="form-check-input position-static"
                          type="radio"
                          name="blankRadio"
                          id="blankRadio1"
                          value="option1"
                        />
                        <label class="form-check-label" for="blankRadio1">
                          1x, sem juros
                        </label>
                      </div>
                      <div>
                        <input
                          class="form-check-input position-static"
                          type="radio"
                          name="blankRadio"
                          id="blankRadio1"
                          value="option1"
                        />
                        <label class="form-check-label" for="blankRadio1">
                          2x, sem juros
                        </label>
                      </div>
                      <div>
                        <input
                          class="form-check-input position-static"
                          type="radio"
                          name="blankRadio"
                          id="blankRadio1"
                          value="option1"
                        />
                        <label class="form-check-label" for="blankRadio1">
                          3x, sem juros
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
              <button
                type="submit"
                class="
                  w-100
                  btn-lg btn-block
                  rounded
                  mt-4
                  btn btn-primary
                  text-uppercase
                "
              >
                próximo
              </button>
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
export default {
  props: ["about"],
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
.bg-warning {
  background-color: var(--cta-2);
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
.progress {
  height: 30px;
}

.progress-bar {
  background-color: #483698;
}

span {
  background-color: #483698;
  border-radius: 0.25rem 0 0 0.25rem;
}

.bg-gray {
  background-color: var(--secondary-1);
}
</style>