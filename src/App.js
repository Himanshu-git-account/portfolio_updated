import './App.css';
import React, { useEffect } from 'react';
import Header from './Component/Header/Header';
import AboutMe from './Component/AboutMe';
import TimeLines from './Component/TimeLines';
import Footer from './Component/Footer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

import { BlogsCard } from './Component/BlogsCard';

library.add(fab, faCheckSquare, faCoffee)
function App() {

  return (
    <div className="App">
      <Header />
      <AboutMe />
      <TimeLines />
      <BlogsCard />
      <Footer />
    </div>
  );
}

export default App;
