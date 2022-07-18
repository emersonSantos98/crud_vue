import axios from "axios";


export class ContactService{
    static serverURL = 'http://localhost:9000';

    static getALLContacts(){
        let dataURL = 'http://localhost:9000/contacts';
        console.log(dataURL);
            return axios.get(dataURL);
           
    }
    
    static getContact(contactId){
        let dataURL = 'http://localhost:9000/contacts/'+ contactId;
            return axios.get(dataURL);
    }

    static createContact(contact){
        let dataURL = 'http://localhost:9000/contacts/';
        return axios.post(dataURL, contact)
    }

    static updateContact(contact, contactId){
        let dataURL = 'http://localhost:9000/contacts/'+ contactId;
        return axios.put(dataURL, contact)
    }

    static deleteContact(contactId){
        let dataURL = 'http://localhost:9000/contacts/'+ contactId;
        return axios.delete(dataURL);
    }


    static getALLGroups() {
        let dataURL = 'http://localhost:9000/groups/';
        return axios.get(dataURL);
    }

     static getGroup(contact){
        let groupId = contact.groupId;
        let dataURL = 'http://localhost:9000/groups/'+ groupId;
            return axios.get(dataURL);
     }
}