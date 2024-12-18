import './App.css';
import LoginForm from './Components/LoginForm/LoginForm';
import HomePage from './Components/HomePage/HomePage';
import NoiseAlert from './Components/Upload/NoiseAlert'
import Profile from './Components/Profile/Profile'
import Heatmap from './Components/Heatmap/Heatmap'; // Ensure the path is correct
import { HomePageLayout } from './Components/HomePageLayout/HomePageLayout';
import {Route, Routes, Link} from 'react-router-dom';
function App() {
  return (
    <>
    <Routes>
      <Route path = '/' element = {<LoginForm />} />
      <Route path='/Home' element={<HomePageLayout />}>
        <Route index element={<HomePage /> } />
        <Route path='Upload' element = {<NoiseAlert />} />
        <Route path='Profile' element = {<Profile />} />
        <Route path="Heatmap" element={<Heatmap />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
