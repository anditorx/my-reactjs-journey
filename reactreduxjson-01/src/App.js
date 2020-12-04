import React, { Component } from 'react'
import ListPost from './components/ListPost'
import DetailPost from './components/DetailPost'
import {BrowserRouter, Route} from 'react-router-dom'

export class App extends Component {

  render() {
   
    return (
      <div className="container">
        <BrowserRouter>
          <Route path='/' exact component={ListPost} />
          <Route path='/detail/:idpost' component={DetailPost} />
        </BrowserRouter>
      </div>
    )
  }
}



export default App
