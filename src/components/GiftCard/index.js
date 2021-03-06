import React from 'react';

import WishesSection from '@components/WishesSection';
import WithAnimation from '../WithAnimation';
import WithAnimationIntersect from '../WithAnimation/UseIntersect';
import BCA from './assets/bca.jpeg';

import { styWrapper } from './styles';

function GiftCard() {
  return (
    <>
      <div css={styWrapper}>
        <div className="row">
          <WithAnimationIntersect>
            <div className="text-wish text-center" style={{ padding: '16px', maxWidth: '900px', margin: '0 auto' }}>
              <h2 className="main-font pr-co text__title" style={{ fontSize: '4rem' }}>
                Amplop Digital
              </h2>
              <p style={{ padding: '0 16px' }}>
                Bagi Bapak/Ibu/Saudara/i yang ingin memberikan tanda kasih kepada mempelai dan keluarga dapat melakukan
                scan QR Code uang elektronik berikut dan juga melalui rekening:
                <br />
                <strong>
                  Bank BCA : 0810831464 <br />
                </strong>
                a.n. Hanggono Raras <br />
              </p>
            </div>
          </WithAnimationIntersect>
          <WithAnimation delay={100}>
            <div className="img">
              <img src={BCA} height="auto" alt="" />
            </div>
          </WithAnimation>
        </div>
      </div>
      <WishesSection />
    </>
  );
}

export default GiftCard;
