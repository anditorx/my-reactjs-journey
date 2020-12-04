import React, { Component } from 'react'
import {connect} from 'react-redux';
import {getDataPostAndUser} from '../actions'
import NamaUser from '../components/NamaUser'
import {Link} from 'react-router-dom'


export class ListPost extends Component {

  componentDidMount(){
    this.props.getDataPostAndUser()
  }

  renderList () {
    
    if (!this.props.listData.data) {
      return null
    }
    
    const listdata = this.props.listData.data;

    return listdata.map(data => {
      return (
        <div key={data.id}>
        <div className = "card">
          <div className = "card-header">
            <NamaUser userId = {data.userId} />
          </div>
          <div className = "card-body">
            <h5 className = "card-title">{data.title}</h5>
            <p className = "card-text">{data.body}</p>
            <Link to={`/detail/${data.id}`} className="btn btn-primary" >Detail</Link>
            {/* <a href={`/detail/${data.id}`} className="btn btn-primary">Detail</a> */}
          </div>
        </div>
        <br/>
        </div>
      )
    })
  }

  render() {
    // console.log(this.props.listData);
    
    return (
      <div className="container">
        <h3>List Data</h3>
        {this.renderList()}
      </div>
    )
  }
}


const stateToProps = state => {
  // console.log(state)
  return {
    listData : state.listPost
  }
}

export default connect(stateToProps,{getDataPostAndUser}) (ListPost)
