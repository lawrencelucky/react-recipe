import { AiFillPlayCircle } from 'react-icons/ai';
import './card.css';

const CardComponent = ({ name, image, video, playVideo }) => {
  return (
    <div className='card-container'>
      <div className='card-header'>
        <img src={image} alt={name} />
      </div>
      <div className='card-body'>
        <h3>{name}</h3>
      </div>
      {video ? (
        <div className='card-footer'>
          <AiFillPlayCircle className='icon' onClick={() => playVideo(video)} />
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default CardComponent;
