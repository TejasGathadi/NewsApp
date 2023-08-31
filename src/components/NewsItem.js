import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, discription, imgurl, newsurl} = this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{width: "18rem"}}>
                    <img src={!imgurl?"https://cdn.jim-nielsen.com/ios/512/news-break-local-breaking-2018-09-12.png":imgurl} className="card-img-top" alt="img"/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{discription}</p>
                            <a rel='noreferrer' href={newsurl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
