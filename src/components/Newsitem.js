import React, { Component } from 'react'

export class Newsitem extends Component {


    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className="my-3">

                <div className="card">
                    <img src={!imageUrl ? "https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/devnews/09_06_2023_10_07_59_4110459.jpg?width=920&format=jpeg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <span style={ {left: '90%' , zIndex: '1'}} class="position-absolute top-0  translate-middle badge rounded-pill bg-danger">
                            {source}
                            
                        </span>

                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-body-secondary">By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem