import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
    

    constructor() {
        super();
       

        this.state = {
            articles: [],
            loading: false,
            page: 1
        }

    }
     async componentDidMount(){
        
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=e34febcdc713437088ad91a27de717d6&page=1&pagesize=20";
        let Data =   await fetch(url);
        let parsedData = await Data.json()
        console.log(parsedData);
        this.setState  ({articles : parsedData.articles, totalResults: parsedData.totalResults
        })
    }
    handlePrevclick= async ()=>{
        console.log('prev');
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e34febcdc713437088ad91a27de717d6&page=${this.state.page-1}&pagesize=20`;
        let Data =   await fetch(url);
        let parsedData = await Data.json()
        console.log(parsedData);
       
        this.setState({
            page: this.state.page - 1,
            articles : parsedData.articles

            
        })
        
    }
    
    handleNextclick= async ()=>{
        console.log('next');
        if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

        }
    else{
                let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e34febcdc713437088ad91a27de717d6&page=${this.state.page +1}&pagesize=20`;
                let Data =   await fetch(url);
                let parsedData = await Data.json()

                console.log(parsedData);

                this.setState({
                    page: this.state.page + 1,
                    articles : parsedData.articles


                })
        }

    }
    render() {
        return (
            <div className="container my-3">
                <h2>NewsBeacon-Top headlines</h2>
                
                <div className="row">
                {this.state.articles.map((element)=>{

                    return <div className="col-md-4" key={element.url} >
                        <Newsitem  title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 89):""} imageUrl={element.urlToImage} newsUrl={element.url} />
                    </div>
                })}
              </div>
              <div className="container d-flex justify-content-between">
              <button disabled={this.state.page<=1} type="button" className="btn btn-dark " onClick={this.handlePrevclick}>&larr; Previous</button>
              <button  type="button" className="btn btn-dark " onClick={this.handleNextclick}>Next &rarr;</button>
              </div>
            </div>
        )
    }
}

export default News