import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormComponent from './components/FormComponent';
import DetailsDisplay from './components/DetailsDisplay';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormComponent />} />
        <Route path="/details" element={<DetailsDisplay />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
