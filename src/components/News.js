import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
    

    constructor() {
        super();
       

        this.state = {
            articles: [],
            loading: false
        }

    }
     async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=e34febcdc713437088ad91a27de717d6";
        let Data =   await fetch(url);
        let parsedData = await Data.json()
        console.log(parsedData);
        this.setState  ({articles : parsedData.articles})
    }
    handlePrevclick= ()=>{
        console.log('prev')
        this.setState({
            
        })
        
    }
    
    handleNextclick= ()=>{
        
        console.log('next')

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
              <button disabled={"this.state.page<=1"} type="button" className="btn btn-dark " onClick={this.handlePrevclick}>&larr; Previous</button>
              <button  type="button" className="btn btn-dark " onClick={this.handleNextclick}>Next &rarr;</button>
              </div>
            </div>
        )
    }
}

export default News