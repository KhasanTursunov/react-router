// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.scss'
import Home from './pages/home/Home.jsx'
import About from './pages/about/About.jsx'
import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header.jsx';
import Error from './pages/error/Error.jsx'
function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='*' element={<Error/>}/>
      </Routes>
    </>
  );
}

export default App
