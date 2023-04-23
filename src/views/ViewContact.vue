<template>
    <v-progress-linear
      v-if="loading"
      indeterminate
      color="green"
    ></v-progress-linear>

    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold"></p>
            </div>
        </div>
    </div>
    <div class="container" v-if="!loading && isDone()">
        <div class="row align-items-center">
            <div class="col-md-4">
                <img :src="contact.photo" alt="" class="contact-img-big">
            </div>
            <div class="col-md-6">
                <ul class="list-group">
                    <li class="list-group-item">Nome: <span class="fw-bold">{{ contact.name}}</span></li>
                    <li class="list-group-item">Email: <span class="fw-bold">{{ contact.company}}</span></li>
                    <li class="list-group-item">Telefone: <span class="fw-bold">{{ contact.telefone}}</span></li>
                    <li class="list-group-item">Empresa: <span class="fw-bold">{{ contact.email}}</span></li>
                    <li class="list-group-item">Titulo: <span class="fw-bold">{{ contact.titulo}}</span></li>
                    <li class="list-group-item">Grupo: <span class="fw-bold">{{ group.name}}</span></li>
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
import { ContactService, GroupService } from '@/services/contactService'
const contactService = new ContactService();
const groupService = new GroupService();

export default {
    name: "ViewContact",
    data: function () {
        return {
            contactId: this.$route.params.contactId,
            loading: false,
            contact: [],
            errorMessage: null,
            group: {}
        }
    },

    created: async function () {
        try {
            this.loading = true;
            let response = await contactService.getContact(this.contactId)
            this.contact = response.data;
            let groupResponse = await groupService.getGroup(this.contact.groupId);
            this.group = groupResponse.data;
            this.loading = false;
        }
        catch (error) {
            this.errorMessage = error;
            this.loading = false;

        }
    },
    methods: {
        isDone: function () {
            return Object.keys(this.contact).length > 0 && Object.keys(this.group).length > 0;
        },

    }
}
</script>

<style scoped>

</style>
