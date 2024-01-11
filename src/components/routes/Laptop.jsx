import { Route, Routes } from 'react-router-dom';
import SecondPage from '../../pages/SecondPage/SecondPage';
import ThirdPage from '../../pages/ThirdPage/ThirdPage';

const Laptop = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SecondPage />} />
        <Route path="/:text" element={<ThirdPage />} />
      </Routes>
    </>
  );
};

export default Laptop;
