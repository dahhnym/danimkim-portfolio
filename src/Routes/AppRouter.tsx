import { Routes, Route } from 'react-router-dom';
import Splash from '../pages/Splash';

const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* 추후에 path 이름 '/'로 변경 예정 */}
        <Route path="/splash" element={<Splash />} />
      </Routes>
    </>
  );
};

export default AppRouter;
