import React from 'react';
import './App.css';
import MyInfo from "./components/MyInfo"
import Footer from  "./components/Footer"
import Header from "./components/Header"

function App() {
  return (
    <div className="App">
      <Header />
      <MyInfo />
      <Footer />
    </div>
  );
}

export default App;
