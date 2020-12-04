import React from 'react'
import {connect} from 'react-redux';


function DetailProduct({product}) {

  if (!product) {
    return <div>Pilih Produk ... </div>
  }

  const {id, namaProduct, price, stock} = product;

  console.log(product)
  return (
    <div>
      <h4>Nama Produk : {namaProduct}</h4>
      <p>ID : {id}</p>
      <p>Harga : Rp{price}</p>
      <p>Stock : {stock}</p>
    </div>
  )
  
}

const stateToProps = state => {
  return {
    product : state.itemTerpilih
  }
}

export default connect(stateToProps)(DetailProduct)
