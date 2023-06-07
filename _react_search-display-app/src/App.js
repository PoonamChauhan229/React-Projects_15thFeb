import React, { Component } from 'react'
import './App.css';
import Header from './components/Header'
import ProductDispplay from './components/ProductDispplay'
import JSON from './components/db.json'
import Footer from './components/Footer';

export default class App extends Component {
  constructor(){
    super()
    this.state={
      productData:JSON,
      filteredData:JSON
    }
  }
  filteredProduct=(keyword)=>{
    let output=this.state.productData.filter((data)=>{
      return data.name.toLowerCase().indexOf(keyword.toLowerCase())>-1
    })
   this.setState({
    filteredData:output
   })
  }

  render() {
    return (
      <div className='App'>
        {/* <Header userInput={(data)=>{console.log(data)}}/> */}
        
        <Header userInput={(data)=>{this.filteredProduct(data)}}/>
        <ProductDispplay proddata={this.state.filteredData}/>
        <Footer year="2022" month="September"/>
      </div>
    )
  }
}
