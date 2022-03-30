import { AiOutlineClose } from 'react-icons/ai';
import './videoModal.css';

const VideoModalComponent = ({ videoSrc, closeVideo }) => {
  return (
    <div className='video-modal-container'>
      <div className='video-container'>
        <AiOutlineClose className='icon' onClick={closeVideo} />
        <video src={videoSrc} autoPlay className='video' />
      </div>
    </div>
  );
};

export default VideoModalComponent;
