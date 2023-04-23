<template>

    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold"></p>
            </div>
        </div>
    </div>
    <div class="container mt-3">
                <pre>teste{{contact}}</pre>
        <div class="row align-items-center">
            <div class="col-md-4">
                <img :src="contact.photo"
                    alt="" class="contact-img">
            </div>
            <div class="col-md-4">
                <form @submit.prevent="updateSubmit()">
                    <div class="md-2">
                        <input v-model="contact.name" type="text" class="form-control  my-1" placeholder="Nome">
                    </div>
                    <div class="md-2">
                        <input v-model="contact.photo" type="text" class="form-control  my-1" placeholder="photo URL">
                    </div>
                    <div class="md-2">
                        <input v-model="contact.email" type="email" class="form-control  my-1" placeholder="Email">
                    </div>
                    <div class="md-2">
                        <input v-model="contact.telefone" type="tel" class="form-control  my-1"
                            placeholder="Telefone">
                    </div>
                    <div class="md-2">
                        <input v-model="contact.company" type="text" class="form-control  my-1" placeholder="company">
                    </div>
                    <div class="md-2">
                        <input v-model="contact.titulo" type="text" class="form-control  my-1" placeholder="titulo">
                    </div>
                    <div class="mb-2">
                        <select v-model="contact.groupId" class="form-control " v-if="groups.length > 0">
                            <option value="">Selecione Gupo</option>
                            <option :value="group.id" v-for="group of groups" :key="group.id">{{ group.name }}</option>
                        </select>
                    </div>
                    <div class="mb-2">
                        <input type="submit" class="btn btn-success" value="Salvar">
                    </div>
                </form>
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
    nome: "EditContact",
    data: function () {
        return {
            contactId: this.$route.params.contactId,
            loading: false,
            contact: {
                name: '',
                company: '',
                email: '',
                titulo: '',
                telefone: '',
                photo: '',
                groupId: '',
            },
            errorMessage: null,
            groups: [],
            groupId: '',
        }
    },
    created: async function () {
        try {
            this.loading = true;
            let response = await contactService.getContact(this.contactId)
            let groupResponse = await groupService.getALLGroups();
            this.contact = response.data;
            this.groups = groupResponse.data;
            this.loading = false;
        }
        catch (error) {
            this.errorMessage = error;
            this.loading = false;

        }
    },
    methods: {
        updateSubmit: async function () {
            try {
                let response = await contactService.updateContact( this.contactId, this.contact);
                if (response) {
                    return this.$router.push('/');
                }
                else {
                    return this.$router.push(`/contacts/edit/${this.contactId}`);
                }
            }
            catch (error) {
                console.log(error);
            }
        }
    }
}
</script>

    <style scoped>
    </style>
