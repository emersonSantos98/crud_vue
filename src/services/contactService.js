import axios from "axios";


export class ContactService{
    static serverURL = 'http://localhost:3333';

    static getALLContacts(){
        let dataURL = 'http://localhost:3333/contacts';
        console.log(dataURL);
            return axios.get(dataURL);
           
    }
    
    static getContact(contactId){
        let dataURL = 'http://localhost:3333/contact/'+ contactId;
            return axios.get(dataURL);
    }

    static createContact(contact){
        // let dataURL = 'http://localhost:3333/contacts';
        console.log('contact.grupoId');
        console.log('http://localhost:3333/contacts/?name=' + contact.name + '&company='+ contact.company + '&email=' + contact.email + '&titulo=' + contact.titulo + '&telefone=' + contact.telefone + '&photo=' + contact.photo + '&groupId=' + contact.grupoId);
        return axios.post('http://localhost:3333/contacts/?name=' + contact.name + '&company='+ contact.company + '&email=' + contact.email + '&titulo=' + contact.titulo + '&telefone=' + contact.telefone + '&photo=' + contact.photo + '&groupId=' + contact.grupoId);
    }
       

    static updateContact(contact, contactId){
        let dataURL = 'http://localhost:3333/contact/'+ contactId;
        return axios.put(dataURL, contact)
    }

    static deleteContact(contactId){
        let dataURL = 'http://localhost:3333/contact/'+ contactId;
        return axios.delete(dataURL);
    }


    static getALLGroups() {
        let dataURL = 'http://localhost:3333/groups/';
        return axios.get(dataURL);
    }

     static getGroup(contact){
        let grupoId = contact.groupId;
        console.log('contact');
        console.log(contact);
            console.log('http://localhost:3333/group/'+ grupoId);
        let dataURL = 'http://localhost:3333/group/'+ grupoId;
            return axios.get(dataURL);
     }
}