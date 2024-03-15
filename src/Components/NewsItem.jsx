import image from '../assets/newsi3.jpg'

import React from 'react';

const NewsItem = ({title, description, src, url}) => {
    const safeTitle = title ? title.slice(0, 50) : 'No Title Available';
  const safeDescription = description ? description.slice(0, 90) : 'Know about it';

    
    return (
<div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
  <img src={src?src:image} style={{height:"200px",width:"360px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{safeTitle}</h5>
    <p className="card-text">{safeDescription}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
    );


}

export default NewsItem;