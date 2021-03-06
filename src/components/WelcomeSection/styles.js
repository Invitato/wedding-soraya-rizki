import { css, keyframes } from '@emotion/core';
import Background from './assets/cover.jpeg';

export const styHero = css`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-image: url(${Background});
  background-position: top;

  .overlay {
    background: rgba(0, 0, 0, 0.3);
  }
`;

const radarAnimation = keyframes`
  0% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  60% {
    box-shadow: 0 0 0 30px rgba(255,255,255,.1);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

export const upAndDownAnimation = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-5px); }
`;

export const styScrollWrapper = css`
  #scroll {
    display: flex;
    justify-content: center;
    cursor: pointer;

    span {
      position: absolute;
      bottom: 46px;
      text-align: center;
      color: #fff;
    }

    .text {
      font-size: 14px;
      animation: ${upAndDownAnimation} 1s infinite alternate;
    }

    @media screen and (max-width: 414px) {
      .text {
        bottom: 80px;
        font-size: 14px;
      }
    }

    @media screen and (max-width: 360px) {
      .text {
        bottom: 60px;
        font-size: 14px;
      }
    }
  }

  .scroll__icon {
    .button {
      position: absolute;
      bottom: 46px;
      left: 50%;
      z-index: 2;
      display: inline-block;
      transform: translate(0, -50%);
      color: #fff;
      letter-spacing: 0.1em;
      text-decoration: none;
      transition: opacity 0.3s;

      span::before {
        position: absolute;
        top: -30px;
        left: -30px;
        z-index: -1;
        content: '';
        width: 60px;
        height: 60px;
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1);
        border-radius: 100%;
        opacity: 0;
        animation: ${radarAnimation} 3s infinite;
        box-sizing: border-box;
      }

      span::after {
        position: absolute;
        top: 50%;
        left: 50%;
        content: '';
        width: 16px;
        height: 16px;
        margin: -12px 0 0 -8px;
        border-left: 1px solid #fff;
        border-bottom: 1px solid #fff;
        transform: rotate(-45deg);
        box-sizing: border-box;
      }
    }

    &button:hover {
      opacity: 0.5;
    }

    @media screen and (max-width: 414px) {
      .button {
        bottom: 80px;
      }
    }

    @media screen and (max-width: 360px) {
      .button {
        bottom: 65px;
      }
    }
  }
`;

export const styBackground = css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 400px) {
    .title {
      font-size: 40px;
    }

    .sub-title {
      font-size: 28px;
    }
  }

  @media screen and (max-width: 500px) {
    .title {
      font-size: 54px;
    }

    .sub-title {
      font-size: 28px;
    }
  }
`;

export const styWrapper = css`
  color: #fff;
  margin-top: 5rem;

  img {
    max-width: 80px;
  }

  h1 {
    margin: 16px 0 0 0;
    line-height: 1.5;
    font-family: var(--font-family-title);
    color: #fff;
    font-size: 10rem;
  }

  h2 {
    color: #fff;
    font-size: 22px;
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: 30px;
  }

  h4 {
    font-family: var(--font-family-title);
    margin: 0;
    color: #fff;
    font-size: 30px;
  }

  .getting-married {
    margin-top: -12px;
  }

  .text__span {
    background-color: white;
    color: var(--font-black-ui);
    padding: 8px 16px;
  }

  .text__date {
    font-size: 3rem;
    font-weight: normal;
    margin-bottom: -2rem;
    margin-top: 1rem;
    text-transform: uppercase;
  }

  .text__title {
    font-family: var(--font-family-title);
    font-size: 6rem;
  }

  .to-dearest {
    font-size: 16px;
    color: #f1f1f1b3;
    margin-bottom: 8px;
  }

  .to-dearest-name {
    border-bottom: 1px solid;
    padding-bottom: 12px;
    max-width: 350px;
    margin: auto auto 30px auto;
    font-weight: bold;
    font-size: 1.8rem;
  }

  .margin__bottom {
    margin-bottom: 3em !important;
  }

  a {
    color: #f14e95;
  }

  .title {
    font-size: 3.5em;
  }

  @media screen and (max-width: 500px) {
    h1 {
      font-size: 6rem;
    }

    .text__date {
      font-size: 1.5rem;
    }

    .text__title {
      font-size: 4rem;
    }

    img {
      max-width: 40px;
      margin-top: 24px;
      margin-bottom: 8px;
    }

    .to-dearest {
      margin-bottom: 8px;
      font-size: 16px;
    }

    .to-dearest-name {
      margin: auto auto 16px auto;
    }
  }
`;

export const styMargin = (px) => css`
  margin: ${px};
`;

export const styButtonWrapper = css`
  display: flex;
  justify-content: center;

  .btn {
    background: #f14e95;
    color: #fff;
    border: none;
  }
`;

export const styMarginFinal = (px) => css`
  margin-top: ${px}rem;
`;
