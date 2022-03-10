import React from 'react';
import MainPage from '../Components/MainPage';
import Navbar from '../Components/Navbar';
import "../Styles/Style.css";

const Home = () => {
  return (
    <div className='container'>
      <Navbar/>
      <MainPage/>
    </div>
  )
}

export default Home