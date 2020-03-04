import React, { Component } from 'react'
import { addContact } from '../actions/actions'
import { connect } from 'react-redux'

class AddContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            email: ''
        }
    }
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    render(){
        return (
            <div>
                <h1>Add New Contact</h1>
                <div>
                    <div>
                        <label>Name:</label>
                        <input type="text" name="name" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>Phone:</label>
                        <input type="text" name="phone" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="text" name="email" onChange={this.handleChange}/>
                    </div>
                </div>
                <button onClick={() => {
                    this.props.addContact(this.state)
                    this.props.history.push('/contacts')
                }}>Add</button>
                <button onClick={()=> this.props.history.goBack()}>Cancel</button>
            </div>
        )
    }
}

export default connect(null, { addContact })(AddContact)
