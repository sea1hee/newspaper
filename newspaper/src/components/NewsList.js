import styled from 'styled-components';
import NewsItem from './NewsItem';
import { useEffect, useState } from 'react';
import axios from 'axios';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px){
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const NewsList = ({category}) => {

    const [articles, setArticles] = useState(null);
    const [isLoading, setLoading] = useState(false);

    const KEY = process.env.REACT_APP_NEWS_API_KEY;

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                console.log(category)
              const query = category === 'all' ? '' : `&category=${category}`
              const response = await axios.get(
                `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${KEY}`
              )
              setArticles(response.data.articles);
            } catch(e){
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    }, [category]);

    console.log(articles);

    if(isLoading){
        console.log("isLoading");
        return <NewsListBlock>대기 중...</NewsListBlock>
    }

    if(!articles){
        console.log("articles is null");
        return null;
    }

    return (
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article}/>
            ))}
        </NewsListBlock>
    )

};

export default NewsList;