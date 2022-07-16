<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold">Gerenciador de contatos
                    <router-link to="/contacts/add" class="btn btn-success btn-sm">
                        <i class="fa fa-plus-circle">
                        </i> Novo
                    </router-link>
                </p>
                <form class="mt-4">
                    <div class="row">
                        <div class="col-md-5">
                            <input type="text" class="form-control" placeholder="Nome da pesquisa" />
                        </div>
                        <div class="col">
                            <input type="submit" class="btn btn-outline-dark">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <pre>{{ contacts }}</pre>
    <div class="container mt-3">
        <div class="row ">
            <div class="col-md-6">
                <div class="card my-3 list-group-item-success shadow-lg ">
                    <div class="card-body">
                        <div class="row ">
                            <div class="col-sm-4">
                                <img src="https://cdn-icons-png.flaticon.com/512/219/219986.png" alt=""
                                    class="contact-img-card">
                            </div>
                            <div class="col-sm-7">
                                <ul class="list-group">
                                    <li class="list-group-item">Nome: <span class="fw-bold">Nome</span></li>
                                    <li class="list-group-item">Email: <span class="fw-bold">Email</span></li>
                                    <li class="list-group-item">Telefone: <span class="fw-bold">Telefone</span></li>
                                </ul>
                            </div>
                            <div class="col-sm-1 d-flex flex-column justify-center-center align-items-center">
                                <router-link to="/contacts/view/:contactId" class="btn btn-warning my-1">
                                    <i class="fa fa-eye"></i>
                                </router-link>
                                <router-link to="/contacts/edit/:contactId" class="btn btn-primary my-1">
                                    <i class="fa fa-pen"></i>
                                </router-link>
                                <button class="btn btn-danger my-1">
                                    <i class="fa fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    nome: "ContactManager",
}
</script>

<style scoped>
</style>