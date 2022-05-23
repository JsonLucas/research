import { CookiesProvider } from 'react-cookie';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Initial from './pages/Initial';
function App() {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/initial' element={<Initial />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  );
}

export default App;
