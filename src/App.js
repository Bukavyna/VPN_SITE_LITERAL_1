import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Location from './pages/location/Location';
import Travel from './pages/travel/Travel';
import Trading from './pages/trading/Trading';
import Dating from './pages/dating/Dating';
import Privacy from './pages/privacy/Privacy';
import Refundpolicy from './pages/refundpolicy/Refundpolicy';
import Vulnerabilitydisclosure from './pages/vulnerabilitydisclosure/Vulnerabilitydisclosure';
import OnlineWatch from './pages/onlinewatch/Onlinewatch';
import OnlineChat from './pages/onlinechat/Onlinechat';
import Cyberthreats from './pages/cyberthreats/Cyberthreats';
import ConnectedStatusBlock from './components/connectedStatusBlock/connectedStatusBlock';
import ScrollToTop from './components/scrolToTop/ScrolToTop';
import Footer from './components/footer/Footer';

// import Chooseyes from './pages/chooseyes/Chooseyes';
// import Chooseno from './pages/chooseno/Chooseno';

import './App.css';
import './resourses/fonts/fonts.css';

function App() {
  return (
       <div className="App">
         <ScrollToTop />
         <Header />
         {/*<Chooseyes />*/}
         {/*<Chooseno />*/}
         <Routes>
           <Route path={'/'} element={<Home />} />
           <Route path={'/location'} element={<Location />} />
           <Route path={'/travel'} element={<Travel />} />
           <Route path={'/trading'} element={<Trading />} />
           <Route path={'/dating'} element={<Dating />} />
           <Route path={'/privacy'} element={<Privacy />} />
           <Route path={'/refundpolicy'} element={<Refundpolicy />} />
           <Route path={'/vulnerabilitydisclosure'} element={<Vulnerabilitydisclosure />} />
           <Route path={'/onlinechat'} element={<OnlineChat />} />
           <Route path={'/onlinewatch'} element={<OnlineWatch />} />
           <Route path={'/connectedStatusBlock'} element={<ConnectedStatusBlock />} />
           <Route path={'/cyberthreats'} element={<Cyberthreats />} />
         </Routes>
         <Footer />
       </div>

  );
}

export default App;
