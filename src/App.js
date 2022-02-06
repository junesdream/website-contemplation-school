import React from 'react';
import './App.css';
import Header from './components/pages/Header';
import Section from './components/pages/Section';
import Details from "./components/pages/Details";
import Carousel from "./components/pages/Carousel";
import { Data } from './components/rubrik/Data';

function App() {
  return (
		<div className="App">
			<Header />
			<Section />
			<Details />
			<Carousel slides={Data} />		
		</div>
  );
}

export default App;
