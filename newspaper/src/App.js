import './App.css';
import { useState } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';

function App() {
  const [data, setData] = useState(null);
  const KEY = process.env.REACT_APP_NEWS_API_KEY;
  const onClick = async () => {
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey='+KEY
      )
      setData(response.data);
      console.log(response.data);
    } catch(e){
      console.log(e);
    }
  }

  return (
    <NewsList/>
  );
}

export default App;
