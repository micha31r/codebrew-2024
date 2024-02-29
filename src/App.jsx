import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './home/HomePage';
import Themes from './themes/ThemesPage';
import SharedLayout from './sharedLayout/SharedLayout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="themes" element={<Themes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
