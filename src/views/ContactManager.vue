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

    <div class="container" v-if="contacts.length > 0">
        <div class="row 1">
            <div class="col-md-6" v-for="contact of contacts" :key="contact">
                <div class="card my-3 list-group-item-primary shadow-lg ">
                    <div class="card-body">
                        <div class="row ">
                            <div class="col-sm-4">
                                <img :src="contact.photo" alt="" class="contact-img-card">
                            </div>
                            <div class="col-sm-7">
                                <ul class="list-group">
                                    <li class="list-group-item">Nome: <span class="fw-bold">{{ contact.nome }}</span>
                                    </li>
                                    <li class="list-group-item">Email: <span class="fw-bold">{{ contact.email }}</span>
                                    </li>
                                    <li class="list-group-item">Telefone: <span class="fw-bold">{{ contact.telefone
                                    }}</span></li>
                                </ul>
                            </div>
                            <div class="col-sm-1 d-flex flex-column justify-center-center align-items-center">
                                <router-link :to="'/contacts/view/' + contact.id" class="btn btn-warning my-1">
                                    <i class="fa fa-eye"></i>
                                </router-link>
                                <router-link :to="'/contacts/edit/' + contact.id" class="btn btn-primary my-1">
                                    <i class="fa fa-pen"></i>
                                </router-link>
                                <button class="btn btn-danger my-1" @click="DeleteContact(contact.id)">
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
import { ContactService } from "@/services/contactService";
export default {
    nome: "ContactManager",
    data: function () {
        return {
            loading: false,
            contacts: [],
            errorMessage: null
        }

    },
    created: async function () {
        try {
            this.loading = true;
            let response = await ContactService.getALLContacts()
            this.contacts = response.data;
            this.loading = false;
        }
        catch (error) {
            this.errorMessage = error;
            this.loading = false;
        }
    },
    methods: {
        DeleteContact: async function (contactId){
            try {
                this.loading = true;
                let response = await ContactService.deleteContact(contactId);
                if (response) {
                    let response = await ContactService.getALLContacts();
                    this.contacts = response.data;
                    this.loading = false;
                }

            }
            catch (error) {
                this.errorMessage = error;
                this.loading = false;
            }
        }
    }

}
</script>

<style scoped>
</style>