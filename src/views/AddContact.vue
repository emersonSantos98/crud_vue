<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold">Add Contato</p>
            </div>
        </div>
    </div>
    <div class="container mt-3">
        <div class="row align-items-center">
            <div class="col-md-4">
                <img :src="contact.photo"
                    alt="" class="contact-img">
            </div>
            <div class="col-md-4">
                <form @submit.prevent="submitCreate()">
                    <div class="md-2">
                        <input v-model="contact.nome" type="text" class="form-control  my-1" placeholder="Nome">
                    </div>
                    <div class="md-2">
                        <input  v-model="contact.photo" type="text" class="form-control  my-1" placeholder="photo URL">
                    </div>
                    <div class="md-2">
                        <input v-model="contact.email" type="email" class="form-control  my-1" placeholder="Email">
                    </div>
                    <div class="md-2">
                        <input v-model="contact.telefone" type="number" class="form-control  my-1" placeholder="Telefone">
                    </div>
                    <div class="md-2">
                        <input v-model="contact.company" type="text" class="form-control  my-1" placeholder="company">
                    </div>
                    <div class="md-2">
                        <input  v-model="contact.titulo" type="text" class="form-control  my-1" placeholder="titulo">
                    </div>
                    <div class="mb-2">
                        <select v-model="contact.grupoId" class="form-control" v-if="groups.length > 0">
                            <option value="">selecione Gupo</option>
                            <option :value="group.id" v-for="group of groups" :key="group.id">{{group.nome}}</option>
                        </select>
                    </div>
                    <div class="mb-2">
                        <input type="submit" class="btn btn-success" value="Criar">
                    </div>
                </form>
            </div>
        </div>
        <div class="row mt-0">
            <div class="col">
                <router-link to="/" class="btn btn-success"><i class="fa fa-arrow-alt-circle-left"></i>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { ContactService } from '@/services/contactService'

export default {
    nome: "AddContact",
    data : function () {
        return {
            contact : {
                nome:'',
                company:'',
                email:'',
                titulo:'',
                telefone:'',
                photo:'',
                grupoId:'',
            },
            
            groups : []
        }
    },
    created : async function () {
        try {
            let response = await ContactService.getALLGroups();
            this.groups = response.data;
        }
        catch  (error){
            console.log(error);

        }
    },
    methods : {
        submitCreate : async function () {
            try {
                let response = await ContactService.createContact(this.contact);
                if(response){
                    return this.$router.push('/');  
                }
                else{
                    return this.$router.push('/contacts/add');
                }
            }
            catch (error){
                console.log(error);
            }
        }
    }
}
</script>

<style scoped>
</style>