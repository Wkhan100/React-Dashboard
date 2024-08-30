import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn && <Header />}
      <main>
        <Outlet />
      </main>
      {isLoggedIn && <Footer />}
    </div>
  );
};

export default App;
