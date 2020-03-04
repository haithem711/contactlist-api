import React from 'react'
import { connect } from 'react-redux'
import { deleteContact } from '../actions/actions'
import { Link } from 'react-router-dom'

const ContactItem = (props) => {
    return (
        <div className="card">
            <h5>Name: {props.contact.name}</h5>
            <p>Phone: {props.contact.phone}</p>
            <p>Email: {props.contact.email}</p>
            <button onClick={() => props.deleteContact(props.contact._id)}>Delete</button>
            <Link to={`/contact/${props.contact._id}`}><button>Edit</button></Link>
        </div>
    )
}

export default connect(null, { deleteContact })(ContactItem)
