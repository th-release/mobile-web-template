import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/index';

function App() {
  return (
    <BrowserRouter>
      <div className='app-width'>
        <Routes>
          <Route path={'/'} element={<Home />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
