import React from 'react'

const Newsitem = (props)=> {

    
        let { title, description, imageUrl, newsUrl, author, date, source, } = props;
        return (
            <div className="my-3">

                <div className="card">
                    <div style={{ display: 'flex', justifycontent: 'flex-end', position: 'absolute', right: '0' }}>
                        <span className="badge rounded-pill bg-danger">
                            {source}
                        </span>
                    </div>
                    <img src={!imageUrl ? "https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/devnews/09_06_2023_10_07_59_4110459.jpg?width=920&format=jpeg" : imageUrl} className="card-img-top" alt="..." />

                    <div className="card-body" >
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-danger">By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} rel="noreferrer"className="btn btn-sm btn-dark">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    
}

export default Newsitem