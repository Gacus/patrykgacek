import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Github from './pages/Github/Github'
import Home from './pages/Home/Home'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<Layout />}>
        <Route path='github' element={<Github />} />
      </Route>
    </Routes>
  </BrowserRouter>
    
  );
}

export default App;
