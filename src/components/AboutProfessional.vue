<template>
  <div class="d-flex align-items-center justify-content-center bg-warning">
    <div
      class="
        d-flex
        mx-auto
        flex-row
        align-items-center
        justify-content-center
        bg-white
        p-4
        shadow-lg
      "
    >
      <div class="m-4 d-flex flex-column aligin-items-start justify-content-end">
        <form>
          <h1 class="text-primary-0">Sobre o profissional</h1>
          <h5 class="mt-4">Dados do profissional</h5>
          <div class="row">
            <div class="col-6">
              <div class="mt-4">
                <label for="exampleInputEmail1">Nome completo*</label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="Digite o nome completo"
                />
              </div>
              <div class="col-8">
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
              </div>
              <div class="row mt-4">
                <div class="col">
                  <label for="exampleInputPassword1">Estado*</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Selecione"
                  />
                </div>
                <div class="col">
                  <label for="exampleInputPassword1">Cidade*</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Selecione"
                  />
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
            <div class="col-6 overflow-hidden">
              <img src="/images/pageone.png" alt="Imagem de um profissional" />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
export default {};
</script>
<style scoped>
input {
  border: 1px solid #483698;
}
h1 {
  color: #483698;
}
.bg-warning {
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
</style>