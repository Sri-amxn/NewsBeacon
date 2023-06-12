import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';

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
        
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e34febcdc713437088ad91a27de717d6&page=1&pagesize=${this.props.pagesize}`;
        this.setState({loading:true})
        let Data =   await fetch(url);
        let parsedData = await Data.json()
        console.log(parsedData);
        this.setState  ({articles : parsedData.articles, totalResults: parsedData.totalResults, loading:false
        })
    }
    handlePrevclick= async ()=>{
        console.log('prev');
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e34febcdc713437088ad91a27de717d6&page=${this.state.page-1}&pagesize=${this.props.pagesize}`;
        this.setState({loading:true})
        let Data =   await fetch(url);
        let parsedData = await Data.json()
        console.log(parsedData);
       
        this.setState({
            page: this.state.page - 1,
            articles : parsedData.articles,
            loading:false
            
        })
        
    }
    
    handleNextclick= async ()=>{
        console.log('next');
        if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pagesize)){

        }
    else{
                let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e34febcdc713437088ad91a27de717d6&page=${this.state.page +1}&pagesize=${this.props.pagesize}`;
                this.setState({loading:true})
                let Data =   await fetch(url);
                let parsedData = await Data.json()

                console.log(parsedData);

                this.setState({
                    page: this.state.page + 1,
                    articles : parsedData.articles,
                    loading:false


                })
        }

    }
    render() {
        return (
            <div className="container my-3">
                <h1 className="text-center">NewsBeacon-Top headlines</h1>
                {this.state.loading && <Spinner/>}
                
                
                <div className="row">
                {!this.state.loading && this.state.articles.map((element)=>{

                    return <div className="col-md-4" key={element.url} >
                        <Newsitem  title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 89):""} imageUrl={element.urlToImage} newsUrl={element.url} />
                    </div>
                })}
              </div>
              <div className="container d-flex justify-content-between">
              <button disabled={this.state.page<=1} type="button" className="btn btn-dark " onClick={this.handlePrevclick}>&larr; Previous</button>
              <button  disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pagesize)} type="button" className="btn btn-dark " onClick={this.handleNextclick}>Next &rarr;</button>
              </div>
            </div>
        )
    }
}

export default News