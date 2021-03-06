import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import { THE_BRIDE } from '@/constants';
import WithAnimation from '../WithAnimation/UseIntersect';
import Transition from './assets/transition.jpeg';
import { styWrapper } from './styles';

function HelloSection({ isInvitation }) {
  return (
    <Fragment>
      <div id="id-hello-section" css={styWrapper}>
        <div>
          <div className="container" style={{ backgroundColor: 'rgb(255,255,255,0.76)' }}>
            <div className="row" style={{ paddingTop: '2em' }}>
              <WithAnimation delay={500}>
                <h3 className="text__title color__primary">The Wedding Of {THE_BRIDE}</h3>
              </WithAnimation>
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                <WithAnimation delay={700}>
                  <p className="text__arabic">
                    وَمِنْ ءَايَٰتِهِۦٓ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَٰجًا لِّتَسْكُنُوٓا۟ إِلَيْهَا
                    وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِى ذَٰلِكَ لَءَايَٰتٍ لِّقَوْمٍ يَتَفَكَّرُونَ
                  </p>
                </WithAnimation>
                <WithAnimation delay={800}>
                  <p className="text__latin">
                    "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu
                    sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa
                    kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum
                    yang berfikir." <br /> <br />
                    (QS. Ar-Rum : 21)
                  </p>
                </WithAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img style={{ width: '100%', marginTop: '-4rem' }} src={Transition} alt="" loading="lazy" />
    </Fragment>
  );
}

HelloSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default HelloSection;
