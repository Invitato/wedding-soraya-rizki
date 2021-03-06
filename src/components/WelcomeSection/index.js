import React, { useState, useEffect } from 'react';
import { object, string, bool, func } from 'prop-types';
import { animateScroll } from 'react-scroll';

import { THE_BRIDE } from '@/constants';
import WithAnimation from '../WithAnimation/UseIntersect';
import ScrollToDown from './ScrollToDown';
import Countdown from '../Countdown';

import { styWrapper, styHero, styBackground, styMarginFinal } from './styles';

const DELAY_TIME = 1500;

function WelcomeSection({ location, guestName, isInvitation, isAnonymGuest, codeLink, onClickDetail }) {
  const [loading, setLoading] = useState(false);
  const [alreadyDownloadData, setAlreadyDownloadData] = useState(false);
  const [isHasName, setIsHasName] = useState(false);

  const handleScrollTo = () => {
    /** scroll into detail view */
    const element = document.getElementById('id-hello-section').offsetTop;
    animateScroll.scrollTo(element);
  };

  const handleShowDetail = () => {
    if (loading) return undefined;

    try {
      const myAudio = document.getElementById('myAudio');
      myAudio.play();
    } catch {
      console.error('FAILED_TO_PLAY_MUSIC');
    }

    onClickDetail();

    if (!alreadyDownloadData) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        setAlreadyDownloadData(true);
        handleScrollTo();
      }, DELAY_TIME);
    } else {
      handleScrollTo();
    }
  };

  useEffect(() => {
    if (guestName) {
      setIsHasName(true);
    }
  }, [guestName]);

  const renderDearest = () => {
    return (
      <div style={{ marginTop: '4rem' }}>
        <h3 className="to-dearest">To our Dearest</h3>
        <h2 className="to-dearest-name">{guestName}</h2>
      </div>
    );
  };

  return (
    <div className="fh5co-cover" css={styHero}>
      <header css={styBackground}>
        <div className="overlay" />
        <div className="container">
          <div className="row" css={styWrapper}>
            <div className="col-md-8 col-md-offset-2 text-center">
              <WithAnimation>
                <h2 className="text__date">The wedding of</h2>
                <h1 className="text__title">{THE_BRIDE}</h1>
              </WithAnimation>
              <WithAnimation>
                <div css={isHasName ? styMarginFinal(20) : styMarginFinal(28)}>
                  <Countdown />
                </div>
              </WithAnimation>
              {isHasName && renderDearest()}
            </div>
          </div>
        </div>
      </header>
      <div className="row">
        <ScrollToDown loading={loading} onClick={handleShowDetail} />
      </div>
    </div>
  );
}

WelcomeSection.propTypes = {
  guestName: string.isRequired,
  isInvitation: bool.isRequired,
  isAnonymGuest: bool.isRequired,
  location: object.isRequired,
  codeLink: string,
  onClickDetail: func.isRequired,
};

WelcomeSection.defaultProps = {
  codeLink: '',
};

export default WelcomeSection;
