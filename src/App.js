import React , { Component } from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Offers from './Components/Offers';
import Vacation from './Components/Vacation';
import Food from './Components/Food';
import Feature from './Components/Feature';
import Reservation from './Components/Reservation';
import Blocks from './Components/Blocks';
import Footer from './Components/Footer';



class App extends Component{
  render(){
    return(
      <div className="App">
        <Header/>
        <About/>
        <Offers/>
        <Vacation/>
        <Food/>
        <Feature/>
        <Reservation/>
        <Blocks/>
        <Footer/>
      </div>
    );
  }
}
export default App;
