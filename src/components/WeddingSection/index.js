import React from 'react';
import { bool } from 'prop-types';

import {
  WEDDING_AKAD,
  WEDDING_AKAD_TIME,
  WEDDING_RESEPSI,
  WEDDING_RESEPSI_TIME,
  WEDDING_LOCATION,
  WEDDING_LOCATION_AKAD,
} from '@/constants';

import WithAnimation from '../WithAnimation/UseIntersect';
import WeddingInfoBox from './WeddingInfoBox';
// import ButtonLive from './ButtonLive';

import { styWrapper } from './styles';

function WeddingSection({ isInvitation }) {
  return (
    <div id="fh5co-started" css={styWrapper}>
      <div className="overlay" />
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <WithAnimation>
              <h3 className="main-font color__primary text__title">
                Akad Nikah & <br />
                Syukuran Pernikahan
              </h3>
              <p className="text__sub" style={{ marginTop: '16px' }}>
                Insya Allah akan diselenggarakan pada:
              </p>
            </WithAnimation>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <WithAnimation delay={500} className="col-md-6 col-sm-6">
              <WeddingInfoBox
                title="Akad Nikah"
                time={WEDDING_AKAD_TIME}
                date={WEDDING_AKAD}
                description={WEDDING_LOCATION_AKAD}
              />
            </WithAnimation>
            <WithAnimation delay={800} className="col-md-6 col-sm-6">
              <WeddingInfoBox
                title="Syukuran Pernikahan"
                time={WEDDING_RESEPSI_TIME}
                date={WEDDING_RESEPSI}
                description={WEDDING_LOCATION}
              />
            </WithAnimation>
          </div>
        </div>
      </div>
      {/* <ButtonLive /> */}
    </div>
  );
}

WeddingSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(WeddingSection);
