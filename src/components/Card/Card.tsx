import React, { useContext } from 'react';
import './Card.scoped.scss';
import ImageFadeIn from 'react-image-fade-in';
import { CardPlay, CardPause } from '../icons';
import CurrentSong from '../../context/CurrentSong';
import PlayingStatus from '../../context/PlayingStatus';

interface Props {
  song: { _id: string; name: string; artist: string; cover: string };
}

const Card: React.FC<Props> = ({ song }) => {
  const { currentSong, setCurrentSong } = useContext(CurrentSong);
  const { playing, setPlaying } = useContext(PlayingStatus);

  return (
    <div className="card">
      <div className="cover-container">
        <ImageFadeIn className="cover" src={`${process.env.REACT_APP_BASE_URL}/${song.cover}`} />
      </div>
      <div className="info">
        <div className="title-container">
          <span className="title" title={song.name}>
            {song.name}
          </span>
        </div>
        <div className="description" title={song.artist}>
          {song.artist}
        </div>
      </div>
      <button
        className={`fab ${currentSong?._id === song._id && playing ? 'fab-visible' : ''}`}
        tabIndex={0} // TODO
        aria-hidden="true"
        title="Play"
        onClick={() => {
          if (currentSong?._id === song._id && playing) {
            setPlaying?.(false);
          } else {
            setCurrentSong?.(song);
          }
        }}
      >
        {currentSong?._id === song._id && playing ? (
          <CardPause className="fab-icon" />
        ) : (
          <CardPlay className="fab-icon" />
        )}
      </button>
    </div>
  );
};

export default Card;