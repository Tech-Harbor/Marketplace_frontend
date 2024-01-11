import { Routes, Route } from 'react-router-dom';

import MainLayout from './components/MainLayout/MainLayout.jsx';
import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
// import SecondPage from './pages/SecondPage/SecondPage.jsx';
// import ThirdPage from './pages/ThirdPage/ThirdPage.jsx';

//
import FormTest from './components/FormForTest/FormTest.jsx';
import FormForTestWithImage from './components/FormForTestWithImage/FormForTestWithImage.jsx';
import Mobile from './components/routes/Mobile.jsx';
import Desktop from './components/routes/Desktop.jsx';
import Photo from './components/routes/Photo.jsx';
import Tv from './components/routes/Tv.jsx';
import Audio from './components/routes/Audio.jsx';
import Game from './components/routes/Game.jsx';
import Tablet from './components/routes/Tablet.jsx';
import Laptop from './components/routes/Laptop.jsx';
import ForHome from './components/routes/Home.jsx';
import Kitchen from './components/routes/Kitchen.jsx';
import Climate from './components/routes/Climate.jsx';
import ChargingStation from './components/routes/Chargingstation.jsx';
//

const App = () => {
  return (
    <Routes>
      <Route path="" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/mobiles/*" element={<Mobile />} />
        <Route path="/desktops/*" element={<Desktop />} />
        <Route path="/photo/*" element={<Photo />} />
        <Route path="/tvs/*" element={<Tv />} />
        <Route path="/audio/*" element={<Audio />} />
        <Route path="/games/*" element={<Game />} />
        <Route path="/tablets/*" element={<Tablet />} />
        <Route path="/laptops/*" element={<Laptop />} />
        <Route path="/home/*" element={<ForHome />} />
        <Route path="/kitchen/*" element={<Kitchen />} />
        <Route path="/climate/*" element={<Climate />} />
        <Route path="/charging_stations/*" element={<ChargingStation />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/form" element={<FormTest />} />
      <Route path="/formImage" element={<FormForTestWithImage />} />
    </Routes>
  );
};

export default App;
