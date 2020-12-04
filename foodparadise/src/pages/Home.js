import React, { Component } from 'react'
import ImageAndWelcome from '../components/ImageAndWelcome'
import CityList from '../components/CityList'
import SearchCity from '../components/SearchCity'
import axios from 'axios'
import { API } from '../config/Api'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      keyword: '',
      featuredCities: null,
      citiesResultSearch: [],
      cityKeywordSearch: '',
    }
  }

  changeKeywordHandler = (event) => {
    this.setState({ keyword: event.target.value });
  }

  getFeaturedCities = () => {
    // var url = `https://developers.zomato.com/api/v2.1/cities`
    var url = `${API.zomato.baseUrl}/cities`
    axios.get(url, {
      headers: {
        'user-key': API.zomato.api_key
      },
      params: {
        city_ids: "74,11052,170"
      }
    })
      .then(({ data }) => {
        if (data.status === 'success') {
          this.setState({ featuredCities: data.location_suggestions})
        }
      })
      .catch(err => console.log(err))
  }
    
  searchHandler = () => {
    let keyword = this.state.keyword
    // var url = `https://developers.zomato.com/api/v2.1/cities`
    var url = `${API.zomato.baseUrl}/cities`
    axios.get(url, {
      headers: {
        'user-key': API.zomato.api_key
      },
      params: {
        q: keyword
      }
    })
      .then(({ data }) => {
        if (data.status === 'success') {
          this.setState({ citiesResultSearch: data.location_suggestions, keyword: '', cityKeywordSearch: keyword })
        }
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.getFeaturedCities();
  }

  render() {

    return (
      <>
        <ImageAndWelcome />
        <div className="container" style={{ marginTop: 30, marginBottom: 30 }}>
          <CityList title={'Featured Cities'} cities={this.state.featuredCities} />
          <SearchCity
            value={this.state.keyword}
            onChange={this.changeKeywordHandler}
            onClickSearch={this.searchHandler}
          />
          {
          this.state.cityKeywordSearch !== '' && (
              <CityList
                title={'Search Result'}
                showSubtitle={true}
                subtitle={this.state.cityKeywordSearch}
                cities={this.state.citiesResultSearch}
              />  
            )
          }
        </div>
      </>
    )
  }
}

export default Home