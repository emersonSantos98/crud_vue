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
                <img :src="contact.photo" alt="" class="contact-img-big">
            </div>
            <div class="col-md-6">
                <ul class="list-group">
                    <li class="list-group-item">Nome: <span class="fw-bold">{{contact.nome}}</span></li>
                    <li class="list-group-item">Email: <span class="fw-bold">{{contact.email}}</span></li>
                    <li class="list-group-item">Telefone: <span class="fw-bold">{{contact.telefone}}</span></li>
                    <li class="list-group-item">Company: <span class="fw-bold">{{contact.company}}</span></li>
                    <li class="list-group-item">Titulo: <span class="fw-bold">{{contact.titulo}}</span></li>
                    <li class="list-group-item">Grupo: <span class="fw-bold">{{contact.grupoId}}</span></li>
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
import { ContactService } from '@/services/contactService'

export default {
    nome: "ViewContact",
    data : function (){
        return {
            contactId : this.$route.params.contactId,
            loading : false,
            contact : {},
            errorMessage : null,
            // group : {}
        }
    },
    created : async function (){
        try{
             this.loading = true;
            let response = await ContactService.getContact(this.contactId);
            // let groupResponse = await ContactService.getGroup(response.data);
            this.contact = response.data;
            // this.group = groupResponse.data;
            this.loading = false;
        }
        catch (error){
            this.errorMessage = error;
            this.loading = false;

        }
    }
}
</script>

<style scoped>
</style>