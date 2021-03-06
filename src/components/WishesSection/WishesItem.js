import React from 'react';
import { string, bool } from 'prop-types';
import { styWrapperItem, styWithAnimation } from './styles';

function WishesItem({ image, name, infoName, description, isActive }) {
  if (!isActive) return null;

  const renderItem = () => {
    return (
      <div className="item" css={styWrapperItem}>
        <div className={`testimony-slide text-center ${isActive ? 'active' : 'hide'}`}>
          <p className="text-center" style={{ fontSize: '1.8rem'}}>
            <i>{`"${description}"`}</i>
          </p>
          <p style={{ textAlign: 'center', marginTop: '-8px' }}>
            dari <b>{name}</b>
          </p>
        </div>
      </div>
    );
  };

  return <div css={styWithAnimation(isActive)}>{renderItem()}</div>;
}

WishesItem.propTypes = {
  image: string.isRequired,
  name: string.isRequired,
  infoName: string.isRequired,
  description: string.isRequired,
  isActive: bool.isRequired,
};

export default React.memo(WishesItem);
