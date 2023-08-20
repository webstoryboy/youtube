import React from 'react'
import { Link } from 'react-router-dom'

const Videos = ({ videos, title }) => {
  // console.log(videos)

  const formatDate = (dateString) => {
    const inputDate = new Date(dateString);

    const year = inputDate.getFullYear();
    const month = String(inputDate.getMonth() + 1).padStart(2, '0');
    const day = String(inputDate.getDate()).padStart(2, '0');

    const formattedDateString = `${year}.${month}.${day}`;
    return formattedDateString;
  };
  
  return (
    <section id="view" className="section">
      <h2>오늘의 {title}</h2>
      <div className="view__wrap">
        {videos.map((video, key) => (
          <div className="view__box" key={key}>
            <div className="thumb">
              <Link 
                to={`/video/${video.id.videoId}`} 
                style={{ backgroundImage: `url(${video.snippet.thumbnails.high.url})` }}
              ></Link>
            </div>
            <div className="desc">
              <div className="title">
                <Link to={`/video/${video.id.videoId}`} >
                  {video.snippet.title}
                </Link>
              </div>
              <div className="info">
                <Link to={`/channel/${video.snippet.channelId}`} className="author">
                  {video.snippet.channelTitle}
                </Link>
                <span className="data">
                  {formatDate(video.snippet.publishedAt)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Videos