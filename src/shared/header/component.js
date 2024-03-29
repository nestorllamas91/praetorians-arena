import { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import Modal from 'react-responsive-modal';

import styles, { stylesGlobal } from '@/shared/header/styles';

export default function Header(props) {
  const [modalVideo, setModalVideo] = useState(false);
  const images = [
    { original: '/assets/images/headers/home-main.jpg' },
    { original: '/assets/images/headers/home-fortress.jpg' },
    { original: '/assets/images/headers/home-desert.jpg' },
    { original: '/assets/images/headers/home-snow.jpg' },
    { original: '/assets/images/headers/home-forest.jpg' },
    { original: '/assets/images/headers/home-grass.jpg' },
    { original: '/assets/images/headers/home-water.jpg' },
    { original: '/assets/images/headers/home-normal.jpg' },
    { original: '/assets/images/headers/home-rain.jpg' },
    { original: '/assets/images/headers/home-special.jpg' }
  ];

  return (
    <div>
      {(() => {
        switch (props.activePage) {
          case '/':
            return (
              <div className="main-header-home">
                <div className="my-container">
                  <ImageGallery
                    items={images}
                    autoPlay={true}
                    slideInterval={6000}
                    showThumbnails={false}
                    showBullets={true}
                    showPlayButton={false}
                    showFullscreenButton={false}
                  />
                  <div className="overlay">
                    <div className="header-info">
                      <img src="/assets/images/logos/praetorians-remaster.png" />
                      <div className="description-container">
                        <span>A remastered RTS videogame.</span>
                        <span>A crusade to become Emperor.</span>
                      </div>
                      <div className="buttons-watch-buy">
                        <button onClick={() => setModalVideo(true)} className="button-watch">
                          WATCH TRAILER
                        </button>
                        <a
                          href="https://store.steampowered.com/app/1100420/Praetorians__HD_Remaster"
                          className="button-buy"
                        >
                          BUY GAME
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <img src="/assets/images/misc/spqr.png" className="spqr" />
                <Modal
                  open={modalVideo}
                  onClose={() => setModalVideo(false)}
                  center
                  styles={{
                    modal: { padding: '36px' },
                    closeButton: {
                      top: '6px',
                      right: '6px'
                    }
                  }}
                >
                  <video autoPlay controls width="100%">
                    <source src="/assets/videos/trailer-original.mp4" type="video/mp4" />
                  </video>
                </Modal>
              </div>
            );
          case '/about':
            return (
              <div className="main-header">
                <div className="my-container">
                  <video autoPlay loop className="video">
                    <source src="/assets/videos/trailer-edited.mp4" type="video/mp4" />
                  </video>
                </div>
                <img src="/assets/images/misc/spqr.png" className="spqr" />
              </div>
            );
          default:
            return (
              <div className="main-header">
                <div className={`my-container ${props.activePage}`}>
                  <h1 className="heading1">{props.activePageTitle}</h1>
                </div>
                <img src="/assets/images/misc/spqr.png" className="spqr" />
              </div>
            );
        }
      })()}
      <style jsx>{styles}</style>
      <style jsx global>
        {stylesGlobal}
      </style>
    </div>
  );
}
