import React from 'react';
import ad from "../Img/AdImage.svg"
import styled from 'styled-components';
const Ad = ({ showAd }) => {
  if (!showAd) {
    return null;
  }

  return (
    <div>
      <AdImage src={ad} alt="광고 이미지" />
    </div>
  );
};

export default Ad;

const AdImage = styled.img`
width: 100%;
`;
