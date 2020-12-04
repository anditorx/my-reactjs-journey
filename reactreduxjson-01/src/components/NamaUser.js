import React, { Component } from 'react'
import {getUser} from '../actions'
import {connect} from 'react-redux'

export class NamaUser extends Component {

    componentDidMount(){
        // this.props.getUser(this.props.userId)
    }

    render() {
        return (
            <div>
                { this.props.user ? this.props.user.name : null }
            </div>
        )
    }
}

const stateToProps = (state, props) => {
    
    return { user : state.users.find(user => user.id === props.userId) }
}

export default connect(stateToProps, {getUser}) (NamaUser)
