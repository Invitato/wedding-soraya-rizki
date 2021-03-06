import { css } from '@emotion/core';
import Background from './assets/quran.png';

export const styWrapper = css`
  padding: var(--size-content-padding);
  background: var(--secondary-bg);
  background-image: url(${Background});
  background-position: bottom center;
  background-repeat: no-repeat;
  background-repeat-y: no-repeat;
  background-size: auto;

  .title {
    font-size: 4em;
  }

  .text__title {
    font-size: 2.5rem;
    text-align: center;
    color: var(--font-black-ui);
  }

  .sub-title {
    color: var(--font-black-ui);
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 20px;
    font-family: var(--font-family-content);
  }

  .quran {
    margin: 32px 0;
    font-size: 1.3em;
  }

  p {
    font-size: 16px;
    margin-top: 16px;
  }

  .text__arabic {
    font-size: 20px;
    line-height: 2;
    color: var(--font-primary);
  }

  .text__latin {
    color: var(--font-primary);
    font-size: 14px;
  }

  @media screen and (max-width: 500px) {
    .sub-title {
      font-size: 18px;
      margin: 0 0 8px 0;
    }

    p {
      font-size: 18px;
    }
  }

  @media screen and (max-width: 400px) {
    p {
      font-size: 14px;
    }
  }
`;

export const styDivider = css`
  margin-top: 0;

  img {
    display: block;
    max-width: 200px;
    height: auto;
    margin: 0 auto;
  }
`;
