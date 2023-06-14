import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
   

   const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pagesize}`;
    setLoading(true)
    let Data = await fetch(url);
    props.setProgress(30);
    let parsedData = await Data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
}

useEffect(() => {
     document.title = `${capitalizeFirstLetter(
        props.category
      )} - NewsBeacon`;
    updateNews();
    // eslint-disable-next-line 
}, []);

// const handlePrevclick = async () => {
//     setPage(page-1)
//     updateNews();
// };

// const handleNextclick = async () => {
//     setPage(page+1)
//     updateNews();
// };
const fetchMoreData = async () => {
    
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pagesize=${props.pagesize}`;
    setPage(page+1)

    let Data = await fetch(url);
    let parsedData = await Data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
};
        return(   
           <>
        <h1 className="text-center" style={{marginTop:'90px'}}>
            NewsBeacon-Top {capitalizeFirstLetter(props.category)} headlines{" "}
        </h1>
        {loading && <Spinner />}
        <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner />}
        >
            <div className="container">
                <div className="row">
                    {articles.map((element) => {
                        return (
                            <div className="col-md-4" key={element.url}>
                                <Newsitem
                                    title={element.title ? element.title.slice(0, 45) : ""}
                                    description={
                                        element.description ? element.description.slice(0, 89) : ""
                                    }
                                    imageUrl={element.urlToImage}
                                    newsUrl={element.url}
                                    author={element.author}
                                    date={element.publishedAt}
                                    source={element.source.name}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </InfiniteScroll>
    </>
            )
        };
    
               
                
                

News.defaultProps = {
    country: "in",
    pagesize: 6,
    category: "general",
}

News.propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
}

export default News;
