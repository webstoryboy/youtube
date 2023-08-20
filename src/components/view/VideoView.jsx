import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useParams, Link } from 'react-router-dom';
import Loader from '../Loader';

const VideoView = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [comments, setComments] = useState(null);
  console.log(comments)

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${id}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
    )
    // https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=IkJXy4zpQUM&key=AIzaSyATwAOpBF6MOvpTvcQ_OsoymSzf0WLmv6U
    .then(response => response.json())
    .then(result => setVideoDetail(result.items[0]))
    .catch(error => console.log(error));

    fetch(
      `https://youtube.googleapis.com/youtube/v3/commentThreads?maxResults=10&part=snippet&videoId=${id}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
    )
    // https://youtube.googleapis.com/youtube/v3/commentThreads?maxResults=10&part=snippet&videoId=IkJXy4zpQUM&key=AIzaSyATwAOpBF6MOvpTvcQ_OsoymSzf0WLmv6U
    .then(response => response.json())
    .then(result => setComments(result.items))
    .catch(error => console.log(error));

  }, [id]);

  if (!videoDetail?.snippet || !comments?.length) {
    return <Loader />;
  }

  const {
    snippet: { title, channelId, channelTitle, description },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <section id="videoView">
      <div className="video__play">
        <ReactPlayer 
          playing loop controls
          url={`https://www.youtube.com/watch?v=${id}`} 
          width="100%" 
          height="100%" 
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
      </div>
      <div className="video__desc">
        <div className="container">
          <h2 className="title">{title}</h2>
          <div className="info">
            <Link to={`/channel/${channelId}`}>{channelTitle}</Link>
            <span>{viewCount}</span>
            <span>{likeCount}</span>
          </div>
          <div className="desc">{description}</div>
          <div className="comment">
            <h3>댓글</h3>
            {comments.map((comment, key) => (
              <div key={key} className="comment__box">
                <div className="comment__name">
                  <img src={comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} alt="" />
                  <span>{comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}</span>
                </div>
                {comment?.snippet?.topLevelComment?.snippet?.textDisplay}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoView