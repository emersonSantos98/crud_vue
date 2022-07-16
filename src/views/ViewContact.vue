<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold">Contato</p>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-4">
                <img src="https://www.pngmart.com/files/21/Admin-Profile-PNG-Clipart.png" alt="" class="contact-img-big">
            </div>
            <div class="col-md-6">
                <ul class="list-group">
                    <li class="list-group-item">Nome: <span class="fw-bold">Nome</span></li>
                    <li class="list-group-item">Email: <span class="fw-bold">Email</span></li>
                    <li class="list-group-item">Telefone: <span class="fw-bold">Telefone</span></li>
                    <li class="list-group-item">Company: <span class="fw-bold">Company</span></li>
                    <li class="list-group-item">Titulo: <span class="fw-bold">Titulo</span></li>
                    <li class="list-group-item">Grupo: <span class="fw-bold">Grupo</span></li>
                </ul>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col">
                <router-link to="/" class="btn btn-success"><i class="fa fa-arrow-alt-circle-left"></i></router-link>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    nome: "ViewContact"
}
</script>

<style scoped>
</style>