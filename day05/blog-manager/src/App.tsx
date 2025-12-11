import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import './App.css';
import AllArticles from './pages/All/AllArticles';
import New from './pages/New';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="all" element={<AllArticles />} />
        <Route path="new" element={<New />} />
      </Route>
    </Routes>
  );
}

export default App;