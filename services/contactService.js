import axios from "axios";


export class ContactService{

    static serveruRL = 'http://localhost:9000';

    static getALLContacts(){
        let dataURL = '${this.serverURL}/contacts';
            return axios.get(dataURL);
    }

    static getContact(contactId){
        let dataURL = '${this.serverURL}/contact/${contactId}';
            return axios.get(dataURL);
    }

    static createContact(contact){
        let dataURL = '${this.serverURL}/contact/';
        return axios.post(dataURL, contact)
    }

    static updateContact(contact, contactId){
        let dataURL = '${this.serverURL}/contact/${contactId}';
        return axios.put(dataURL, contact)
    }

    static deleteContact(contactId){
        let dataURL = '${this.serverURL}/contact/${contactId}';
        return axios.delete(dataURL);
    }


    static getALLGroups() {
        let dataURL = '${this.serverURL}/groups/';
        return axios.get(dataURL);
    }

     static getGroup(contact){
        groupId = contact.groupId;
        let dataURL = '${this.serverURL}/groups/${groupId}';
            return axios.get(dataURL);

     }
}