import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const ChannelView = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState();

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${id}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
    )
    // https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=UCsvQSv7EeCMHyYb9ENKAJZw&key=AIzaSyATwAOpBF6MOvpTvcQ_OsoymSzf0WLmv6U
    .then(response => response.json())
    .then(result => setChannelDetail(result.items[0]))
    .catch(error => console.log(error));

  }, [id]);

  return (
    <section id="channelView">
      <div className="channel__wrap">
        <div className="channel__header">
          dd
        </div>
      </div>
    </section>
  )
}

export default ChannelView