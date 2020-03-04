import React, { Component } from 'react'
import { editContact } from '../actions/actions'
import { connect } from 'react-redux'

class EditContact extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        this.setState(
            this.props.contacts.filter(el => el._id == this.props.match.params.id)[0]
        )
    }
    
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    render(){
        return (
            <div>
                <h1>Edit Contact</h1>
                <div>
                    <div>
                        <label>Name:</label>
                        <input value={this.state.name} type="text" name="name" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>Phone:</label>
                        <input value={this.state.phone} type="text" name="phone" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>Email:</label>
                        <input value={this.state.email} type="text" name="email" onChange={this.handleChange}/>
                    </div>
                </div>
                <button onClick={() => this.props.editContact(this.state._id, {name: this.state.name, phone: this.state.phone, email: this.state.email})}>Edit</button>
                <button onClick={()=> this.props.history.goBack()}>Cancel</button>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return{
        contacts: state.ContactReducer
    }
}
export default connect(mapStateToProps, { editContact })(EditContact)