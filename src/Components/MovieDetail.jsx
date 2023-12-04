import React from "react";
import "../index.css";
import styled from "styled-components";

function MovieDetail({ data }) {
  return (
    <DetailMovieBox>
      <DetailTitle>{data.title}</DetailTitle>
      <DetailContent>{data.overview}</DetailContent>
    </DetailMovieBox>
  );
}

export default MovieDetail;

const DetailMovieBox = styled.div`
  position: absolute;
  opacity: 0.8;
  background-color: black;
  top: 0;
  left: 0;
  justify-content: center;
  height: 93%;
  width: 81%;
  position: absolute;
  z-index: 100;
  padding: 20px;
`;

const DetailTitle = styled.div`
  width: 100%;
  color: white;
  font-size: 15px;
  margin-bottom: 10px;
  font-weight: 700;
`;

const DetailContent = styled.div`
  width: 100%;

  color: white;
  font-size: 15px;
`;
