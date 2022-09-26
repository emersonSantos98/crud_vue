import axios from "axios";


export class ContactService{
    static serverURL = `http://localhost:3333`;

    static getALLContacts() {
        let dataURL = `${this.serverURL}/contacts`;
        
            return axios.get(dataURL);
           
    }
    
    static getContact(contactId){
        let dataURL = `${this.serverURL}/contact/${contactId}`;
        console.log('dataURL');
        console.log(dataURL);
            return axios.get(dataURL);
    }

    static createContact(contact){
        let dataURL = `${this.serverURL}/contacts/`;
        console.log('dataURL.contact');
        console.log(dataURL,contact);
        return axios.post(dataURL,contact);
    }
       

    static updateContact(contact, contactId){
        let dataURL = `${this.serverURL}/contact/${contactId}`;
        return axios.put(dataURL, contact)
    }

    static deleteContact(contactId){
        let dataURL = `${this.serverURL}/contact/${contactId}`;
        return axios.delete(dataURL);
    }


    static getALLGroups() {
        let dataURL = `${this.serverURL}/groups`;
        return axios.get(dataURL);
    }

     static getGroup(contact){
        let grupoId = contact.groupId;
        console.log('contact.groupId');
        console.log(grupoId);
            let dataURL = `${this.serverURL}/groups/${grupoId}`;
            return axios.get(dataURL);
     }
}