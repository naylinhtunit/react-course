import logo from './logo.svg';
import './App.css';
import { Routes ,Route } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import Header from './components/common/Header';
import Error from './components/common/Error';

function App() {
  return (
    <div className="App container-fluid">
      <Header />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
