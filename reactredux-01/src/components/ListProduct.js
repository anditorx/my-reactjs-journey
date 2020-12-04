import React, { Component } from 'react'
import {connect} from 'react-redux';
import { ambilData, pilihProduct } from '../actions'

export class ListProduct extends Component {

  componentDidMount(){
    this.props.ambilData();
  }

  renderList(){
    return this.props.listProd.map( item => {
      return (
        <div key={item.id}>
          <h3 onClick={() => this.props.pilihProduct(item)}>{item.namaProduct}</h3>
        </div>
      )
    });
  }

  render() {
    console.log(this.props)
    return (
      <div>
        {this.renderList()}
      </div>
    )
  }
}

const stateToProps = state => {
  return { listProd : state.listProduct }
}

export default connect(stateToProps, {ambilData, pilihProduct})(ListProduct)
