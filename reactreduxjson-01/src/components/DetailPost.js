import React, { Component } from 'react'
import {getDetailPost, getDataPost} from '../actions'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

export class DetailPost extends Component {

    componentDidMount(){
        const idpost = this.props.match.params.idpost
        this.props.getDetailPost(idpost)
    }

    render() {

        if (!this.props.detailPost) {
            return null
        }

        if (this.props.users.length === 0) {
            return null
        }

        const post = this.props.detailPost
        const user = this.props.users.find(user => user.id === post.userId)
        // console.log(post)
        // console.log(user)

        return (
            <div className='container row'>
                <div className="col-6">
                    <div className="card">
                        <div className='card-header'>
                            <strong>{post.title}</strong>
                        </div>
                        <div className='card-body'>
                            <p>{post.body}</p>
                        </div>
                        <div className='card-footer'>
                            <p>By : {user.name}</p>
                            <p>Email : {user.email}</p>
                            <p>City : {user.address.city}</p>
                        </div>
                    </div>
                    <Link to='/' className='btn btn-primary mt-2'>Back</Link>
                </div>
            </div>
        )
    }
}

const stateToProps = state => {
    return {
        detailPost : state.detailPost,
        users : state.users
    }
}

export default connect(stateToProps, {getDetailPost}) (DetailPost)
