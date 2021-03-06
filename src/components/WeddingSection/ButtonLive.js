import React from 'react';

import { YOUTUBE_LINK } from '@/constants';
import IconIg from './assets/youtube.png';
import { styButtonWrapper } from './styles';

function ButtonLive() {
  return (
    <div className="row">
      <div className="col-md-12">
        <p className="text__live">Hadir secara virtual melalui siaran langsung Youtube: </p>
        <a href={YOUTUBE_LINK} target="_blank" rel="noreferrer">
          <div css={styButtonWrapper}>
            <div className="img__wrapper">
              <img src={IconIg} alt="Live youtube" />
              <span>Pelangi Langit Biru</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default React.memo(ButtonLive);
