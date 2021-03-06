import React, { useState, useEffect, useCallback } from 'react';

import WishesItem from './WishesItem';
import { styButtonWrapper } from './styles';

const INTERVAL_SLIDE = 5000;

function WishesContainer({ wishlist }) {
  const [active, setActive] = useState(0);
  const [pauseSlide, setPauseSlide] = useState(false);
  const totalWishes = wishlist.length || 0;

  const handleSetActive = (isNext = true) => {
    if (isNext) {
      if (active === totalWishes - 1) {
        setActive(0);
      } else {
        setActive(active + 1);
      }
    } else {
      if (active === 0) {
        setActive(totalWishes - 1);
      } else {
        setActive(active - 1);
      }
    }

    setPauseSlide(true);

    setTimeout(() => {
      setPauseSlide(false);
    }, INTERVAL_SLIDE);
  };

  const handleSetNext = useCallback(() => {
    if (active === wishlist.length - 1) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  }, [active, wishlist.length]);

  const renderWishlist = () => {
    return wishlist.map((w, index) => (
      <WishesItem key={index} name={w.nama} description={w.ucapan} isActive={index === active} />
    ));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!pauseSlide) {
        handleSetNext();
      } else {
        clearInterval(interval);
      }
    }, INTERVAL_SLIDE);

    return () => clearInterval(interval);
  }, [handleSetNext, pauseSlide]);

  if (wishlist.length === 0) return null;

  return (
    <div className="wrap-testimony">
      {renderWishlist()}
      {wishlist.length > 1 && (
        <div css={styButtonWrapper}>
          <button className="btn btn-sm button-nav" onClick={() => handleSetActive(false)}>{`< Sebelumnya`}</button>
          <button className="btn btn-sm button-nav" onClick={() => handleSetActive(true)}>{`Selanjutnya >`}</button>
        </div>
      )}
    </div>
  );
}

export default React.memo(WishesContainer);
