import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home/Home';
import './App.css';
import AllArticles from './pages/All/AllArticles';
import New from './pages/New/New';
import Article from './pages/Article/Article';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="all" element={<AllArticles />} />
        <Route path="new" element={<New />} />
        <Route path="article" element={<Article />} />
      </Route>
    </Routes>
  );
}

export default App;