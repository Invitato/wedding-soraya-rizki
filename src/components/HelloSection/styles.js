import { css } from '@emotion/core';
import Wave from '../QuranSection/assets/quran.png';

export const styWrapper = (withBackground) => css`
  width: 100%;
  padding: var(--size-content-padding);
  padding-top: 0 !important;
  background-color: #fefdfd;
  background: var(--secondary-bg);
  background-image: url(${Wave});
  background-position: bottom center;
  background-repeat: no-repeat;

  .text__salam {
    text-align: center;
    color: var(--font-primary);
    font-size: 2rem;

    h4 {
      color: var(--font-primary);
    }
  }

  .parent-name {
    color: var(--font-black-ui);
  }

  .desc-groom,
  .desc-bride {
    h3 {
      font-size: 2.5rem;
      font-weight: bold;
      color: var(--font-primary);
    }
  }

  .sub-title {
    color: #828282;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 20px;
    color: var(--font-black-ui);
  }

  .parent {
    margin: -16px 16px 16px 16px;
    color: var(--font-primary);
    font-weight: bold;
  }

  .and-love {
    font-size: 5rem !important;
    color: var(--font-primary);
  }

  .parent-name {
    font-weight: normal;
  }

  p {
    font-size: 16px;
    margin-top: 16px;
    color: var(--font-primary);
  }

  .text__bride,
  .text__groom {
    font-size: 3rem;
  }

  .img__symbol {
    display: block;
    margin: 0 auto;
    margin-bottom: 16px;
  }

  .img__bride,
  .img__grom {
    border-radius: 50%;
    max-width: 160px;
    margin-bottom: 16px;
  }

  @media screen and (max-width: 500px) {
    .sub-title {
      font-size: 18px;
      margin: 0 0 8px 0;
    }

    p {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 400px) {
    p {
      font-size: 14px;
    }
  }
`;
