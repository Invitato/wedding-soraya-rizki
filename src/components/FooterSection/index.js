import React from 'react';
import { bool } from 'prop-types';

import WithAnimation from '../WithAnimation/UseIntersect';
import CopyRight from './CopyRight';
import GiftCard from '../GiftCard';
// import EmbedLive from './EmbedLive';
import { styWrapper } from './styles';

function FooterSection({ isInvitation }) {
  return (
    <>
      {/* <EmbedLive /> */}
      <GiftCard />
      <div css={styWrapper(true)}>
        <div style={{ padding: '0 16px' }}>
          <div className="row padding__content">
            <div className="col-md-8 col-md-offset-2 text-center">
              <WithAnimation>
                <p>
                  Sehubungan dengan kondisi saat ini mengenai pembatasan jumlah tamu undangan, <br />
                  tanpa mengurangi rasa hormat, kami mohon segala doa dan restu dari Bapak/Ibu/Saudara/i, <br />
                  dan kami berharap tetap dapat menjalin tali silaturahmi melalui media online.
                </p>
              </WithAnimation>
              <WithAnimation delay={100}>
                <h2 className="main-font pr-co text__title" style={{ fontSize: '4rem' }}>
                  Terima Kasih
                </h2>
              </WithAnimation>
            </div>
          </div>
        </div>
        <WithAnimation>
          <CopyRight />
        </WithAnimation>
      </div>
    </>
  );
}

FooterSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(FooterSection);
