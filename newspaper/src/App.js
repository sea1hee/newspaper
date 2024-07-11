import { Route, Routes } from '../node_modules/react-router-dom/dist/index';
import './App.css';
import Categories from './components/Categories';
import NewsList from './components/NewsList';
import { useCallback, useState } from 'react';
import NewsPage from './pages/NewsPage';

const App = () => {

  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category => setCategory(category), []);


  return (
    <Routes>
      <Route path="/" element={<NewsPage/>} />
      <Route path="/:category" element={<NewsPage />} />
    </Routes>
  );
}

export default App;
