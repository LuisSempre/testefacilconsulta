<template>
  <div class="bg-warning container-fill">
    <div class="container-md rounded mx-auto my-auto bg-white">
      <div class="row">
        <div class="col-6">
          <div class="card-body">
            <h1 class="mt-4 text-primary-0">Sobre o profissional</h1>
            <h5 class="mt-4">Dados do profissional</h5>
            <form>
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
                <button
                  type="submit"
                  class="
                    btn-lg btn-block
                    rounded-pill
                    mt-4
                    btn btn-primary
                    text-uppercase
                  "
                >
                  próximo
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-6 mt-4">
          <img src="/images/pageone.png" alt="Imagem de um profissional" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
export default {};
</script>

<style>
.text-primary-0 {
  color: #483698;
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