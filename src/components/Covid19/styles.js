import { css } from '@emotion/core';

export const styWrapper = css`
  background: var(--secondary-bg);

  .info {
    font-size: 16px;
  }

  .order__styles {
    li {
      color: var(--font-black-ui);
      line-height: 2;
      font-size: 16px;
    }
  }

  .main-font {
    font-size: 3rem;
    color: var(--primary-font);
  }
`;

export const styBoxWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px 0;

  .img-section {
  }

  img {
    max-width: 70px;
    margin-right: 8px;
  }

  .text__section {
    width: 100%;
  }

  .text__info {
    font-weight: 500;
    font-size: 1.2em;
    color: var(--font-black-ui);
  }

  @media screen and (max-width: 480px) {
    img {
      max-width: 50px;
      margin-right: 8px;
    }

    .text__info {
      font-size: 1em;
    }
  }
`;
