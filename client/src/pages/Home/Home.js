import React from 'react';

import Movies from './components/Movies';
import Header from './components/Header';
import './style/Home.min.css';

function Home() {
  return (
    <div>
      <Header />
      <Movies />
    </div>
  );
}

export default Home;
