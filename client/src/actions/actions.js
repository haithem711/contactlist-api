import { GET_CONTACTS } from './types'
import axios from 'axios'

export const getContacts = () => dispatch => {
    axios.get('/contacts')
        .then(res => dispatch({
            type: GET_CONTACTS,
            payload: res.data
        }))
        .catch(err => console.log(err))
}

export const deleteContact = id => dispatch => {
    axios.delete(`/${id}`)
        .then(() => dispatch(getContacts()))
        .catch(err => console.log(err))
}

export const addContact = newContact => dispatch => {
    axios.post('/new-contact', newContact)
        .then(() => dispatch(getContacts()))
        .catch(err => console.log(err))
}

export const editContact = (id, contact) => dispatch => {
    axios.put(`/${id}`, contact)
        .then(() => dispatch(getContacts()))
        .catch(err => console.log(err))
}