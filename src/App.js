import { useState, useEffect } from 'react';
import axios from 'axios';
import CardComponent from './components/CardComponent/CardComponent';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import VideoModalComponent from './components/VideoModalComponent/VideoModalComponent';

function App() {
  const [recipeData, setRecipeData] = useState();
  const [videoSrc, setVideoSrc] = useState('');

  useEffect(() => {
    const options = {
      params: { from: '0', size: '36', tags: 'under_30_minutes' },
      headers: {
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
        'X-RapidAPI-Key': '14b34c8444msh9765a1af2d16595p101a55jsn7d520d73032c',
      },
    };

    axios
      .get('https://tasty.p.rapidapi.com/recipes/list', options)
      .then(function (response) {
        setRecipeData(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const playVideo = (video) => {
    setVideoSrc(video);
  };

  const closeVideo = () => {
    setVideoSrc(null);
  };

  return (
    <>
      <HeaderComponent />

      <div className='container'>
        {recipeData?.map((recipe) => (
          <CardComponent
            key={recipe.id}
            name={recipe.name}
            image={recipe.thumbnail_url}
            video={recipe.original_video_url}
            playVideo={playVideo}
          />
        ))}
        {videoSrc ? (
          <VideoModalComponent videoSrc={videoSrc} closeVideo={closeVideo} />
        ) : (
          ''
        )}
      </div>
    </>
  );
}

export default App;
