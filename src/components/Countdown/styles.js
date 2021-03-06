import { css } from '@emotion/core';

export const styWrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const styWrapperCount = css`
  display: inline-block;
  width: 80px;
  height: 80px;
  border: 1px solid white;
  background-color: #886b48;
  margin: 8px 8px 16px 8px;
  border-radius: 50%;
  position: relative;
  color: var(--secondary-bg);
  animation: pulse 2s infinite alternate;
  
  span {
    text-transform: none;
    font-weight: bold;
  }

  h3 {
    font-size: 24px;
    color: var(--font-primary);
    font-weight: bold;
    margin: 20px 0 0 0;
  }

  @media screen and (max-width: 500px) {
    width: 75px;
    height: 75px;
    margin: 4px;
    font-size: 12px;

    h3 {
      font-size: 20px;
    }

    span {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 380px) {
    width: 55px;
    height: 55px;

    h3 {
      margin-top: 12px;
      margin-bottom: -4px;
      font-size: 16px;
    }

    span {
      font-size: 10px;
    }
  }
`;

export const styMargin = (px) => css`
  margin: ${px};
`;
