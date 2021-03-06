import { css } from '@emotion/core';
import Background from '../ConfirmationSection/assets/wave.svg';

export const styWrapper = css`
  background-image: url(${Background});
  background-size: cover;
  background-position: bottom;
  min-height: 50vh;

  .text-wish {
    font-size: 16px;
  }

  .img {
    text-align: center;
    margin-bottom: 2em;
    padding: 0 32px;

    img {
      border-radius: 24px;
      width: 100%;
      max-width: 500px;
    }
  }
`;
