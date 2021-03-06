import React, { Fragment } from 'react';
import { GIRL_NAME, GIRL_PARENT_NAME, BOY_NAME, BOY_PARENT_NAME } from '@/constants';

import WithAnimationLazy from '../WithAnimation';
import WithAnimation from '../WithAnimation/UseIntersect';
import { styWrapper } from './styles';
import Bride from './img/bride.jpg';
import Grom from './img/groom.jpg';

function HelloSection() {
  return (
    <Fragment>
      <div id="fh5co-couple" css={styWrapper}>
        <div className="container" style={{ backgroundColor: 'rgba(255, 255, 255, 0.76)', paddingBottom: '32px' }}>
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <WithAnimation>
                <h2 className="text__salam" style={{ marginTop: '24px' }}>
                  BISMILLAHIRAHMANIRRAHIIM
                </h2>
                <h2 className="text__salam">Assalamualaikum Wr. Wb</h2>
                <p style={{ color: 'var(--font-black-ui)' }}>
                  Dengan memohon Rahmat dan Ridho Illahi, teriring niat menjalankan Sunnah Rasulullah ﷺ untuk membentuk
                  rumah tangga yang Sakinah, Mawaddah wa Rahmah, kami mohon do'a agar senantiasa diberikan kelancaran
                  dan keberkahan.
                </p>
              </WithAnimation>
            </div>
          </div>
          <div className="couple-wrap">
            <div className="couple-half">
              <div className="groom">
                <WithAnimationLazy>
                  <img src={Bride} alt="groom" className="img-responsive" loading="lazy" />
                </WithAnimationLazy>
              </div>
              <div className="desc-groom">
                <WithAnimation>
                  <h3 style={{ fontWeight: 'normal', fontSize: '2rem' }}>{GIRL_NAME}</h3>
                  <p className="parent-name parent-name__top" dangerouslySetInnerHTML={{ __html: GIRL_PARENT_NAME }} />
                </WithAnimation>
              </div>
            </div>
            <p className="heart text-center">
              <i className="icon-heart2"></i>
            </p>
            <div className="and-love">
              <WithAnimation>
                <i style={{ fontWeight: 'normal' }}>&</i>
              </WithAnimation>
            </div>
            <div className="couple-half">
              <div className="bride">
                <WithAnimationLazy>
                  <img src={Grom} alt="groom" className="img-responsive" loading="lazy" />
                </WithAnimationLazy>
              </div>
              <div className="desc-bride">
                <WithAnimation>
                  <h3 style={{ fontWeight: 'normal', fontSize: '2rem' }}>{BOY_NAME}</h3>
                  <p className="parent-name" dangerouslySetInnerHTML={{ __html: BOY_PARENT_NAME }} />
                </WithAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default HelloSection;
