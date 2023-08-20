import React, { useEffect, useState } from 'react';
import Category from '../Category';
import Videos from '../Videos';

const MainView = () => {
  const [category, setCategory] = useState("webstoryboy");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=${category}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
    )
    .then(response => response.json())
    .then(result => setVideos(result.items))
    .catch(error => console.log(error));
  }, [category]);

  return (
    <div className="col2">
      <aside id="aside" className="aside__nav">
        <Category category={category} setCategory={setCategory} />
      </aside>
      <div id="contents">
        <Videos videos={videos} title={category} />
      </div>
    </div>
  )
}

export default MainView;