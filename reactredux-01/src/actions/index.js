// action creator
export const ambilData = () => {
  
  const data = [
    {id: 1, namaProduct: 'Nike SB Portmore White Edition', price: '845000', stock: 3},
    {id: 2, namaProduct: 'DC Shoes BW', price: '945000', stock: 5},
    {id: 3, namaProduct: 'Converse 70s Low', price: '745000', stock: 7},
    {id: 4, namaProduct: 'Compas Vintage BW', price: '1145000', stock: 2},
    {id: 5, namaProduct: 'Vans Authentic BW', price: '645000', stock: 12},
    {id: 6, namaProduct: 'Nike SB Portmore Black Edition', price: '845000', stock: 4}
  ]

  // action
  return {
    type: 'AMBIL_DATA',
    data: data
  }
}

export const pilihProduct = (item) => {
  return {
    type: 'PILIH_PRODUCT',
    data: item
  }
}