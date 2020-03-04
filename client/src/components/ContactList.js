import React, { Component } from 'react'
import { getContacts } from '../actions/actions'
import ContactItem from './ContactItem'
import { connect } from 'react-redux'

class ContactList extends Component {

    componentDidMount() {
        this.props.getContacts()
    }
    
    render(){
        return (
            <div>
                <h1>Contact List Page</h1>
                {
                    this.props.contacts.map(el => <ContactItem contact={el} />)
                }
            </div>
        )
    }
}
const mapStateToProps = state => {
    return{
        contacts: state.ContactReducer
    }
}

export default connect(mapStateToProps, { getContacts })(ContactList)
