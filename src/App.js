import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {createMedia} from '@artsy/fresnel'
import Home from './component/Home';

const {Media, MediaContextProvider} = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024
  }
})

function App() {
  return(
     <MediaContextProvider>
      <Media at='mobile'>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Media>
      <Media greaterThan='mobile'>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Media>
     </MediaContextProvider>
  );
}

export default App;
