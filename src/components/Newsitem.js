import React, { Component } from 'react'

export class Newsitem extends Component {
   

    render() {
        let { title, description, imageUrl, newsUrl } = this.props;
        return (
            <div className="my-3">

                <div className="card" style={{ width: "18rem" }}>
                    <img src={!imageUrl?"https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/devnews/09_06_2023_10_07_59_4110459.jpg?width=920&format=jpeg":imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem