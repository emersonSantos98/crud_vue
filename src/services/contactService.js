import {useApi} from '../composables/ApiConect'

const api = useApi()


export function ContactService() {

    this.getALLContacts = () => {
        return new Promise((resolve, reject) => {
            try {
                api.get('contacts/getContactsAll')
                    .then((response) => {
                        resolve(response)
                    })
            } catch (err) {
                reject(err)
            }
        })
    }

    this.getContact = (contactId) => {
        return new Promise((resolve, reject) => {
            try {
                api.get(`contacts/getContactsById/${contactId}`)
                    .then((response) => {
                        resolve(response)
                    })
            } catch (err) {
                reject(err)
            }

        })
    }

    this.createContact = (contact) => {
        return new Promise((resolve, reject) => {
            try {
                api.post('contacts/createContacts', contact)
                    .then((response) => {
                        resolve(response)
                    })
            } catch (err) {
                reject(err)
            }
        })
    }

    this.updateContact = (contact_id, contact) => {
        return new Promise((resolve, reject) => {
            try {
                api.put(`contacts/updateContacts/${contact_id}`, contact)
                    .then((response) => {
                        resolve(response)
                    })
            } catch (err) {
                reject(err)
            }
        })
    }

    this.deleteContact = (contactId) => {
        return new Promise((resolve, reject) => {
            try {
                api.delete(`contacts/deleteContacts/${contactId}`)
                    .then((response) => {
                        resolve(response)
                    })
            } catch (err) {
                reject(err)
            }
        })
    }
}

export function GroupService(){
    this.getALLGroups = () => {
        return new Promise((resolve, reject) => {
            try {
                api.get('groups/getGroupsAll')
                    .then((response) => {
                        resolve(response)
                    })
            } catch (err) {
                reject(err)
            }
        })
    }

    this.getGroup = (groupId) => {
        return new Promise((resolve, reject) => {
            try {
                api.get(`groups/getGroupsById/${groupId}`)
                    .then((response) => {
                        resolve(response)
                    })
            } catch (err) {
                reject(err)
            }

        })
    }

    this.createGroup = (group) => {
        return new Promise((resolve, reject) => {
            try {
                api.post('groups/createGroups', group)
                    .then((response) => {
                        resolve(response)
                    })
            } catch (err) {
                reject(err)
            }
        })
    }

    this.updateGroup = (group_id, group) => {
        return new Promise((resolve, reject) => {
            try {
                api.put(`groups/updateGroups/${group_id}`, group)
                    .then((response) => {
                        resolve(response)
                    })
            } catch (err) {
                reject(err)
            }
        })
    }

    this.deleteGroup = (group_id) => {
        return new Promise((resolve, reject) => {
            try {
                api.delete(`groups/deleteGroups/${group_id}`)
                    .then((response) => {
                        resolve(response)
                    })
            } catch (err) {
                reject(err)
            }
        })
    }
}
