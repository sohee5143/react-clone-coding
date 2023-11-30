import "../index.css";
import MovieDetail from "./MovieDetail";
import { useState } from "react";
import styled from "styled-components";

function Movie({ data }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    //setIsHovered(true);
  };

  const handleMouseLeave = () => {
    //setIsHovered(false);
  };
  return (
    <MovieBox onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div>
        <ImageBox src={data.poster_path}></ImageBox>
        <InfoBox>
          <Title className="title">{data.title}</Title>
          <Rate className="rate">{data.vote_average}</Rate>
        </InfoBox>
        {isHovered && <MovieDetail data={data} />}
      </div>
    </MovieBox>
  );
}

export default Movie;

const MovieBox = styled.div`
  position: relative;
  justify-content: center;
  margin: 15px;
  height: 360px;
`;

const ImageBox = styled.img`
  width: 200px;
`;
const InfoBox = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  width: 160px;
  height: 30px;
  background-color: #373b69;
  color: white;
  font-size: 12px;
`;

const Title = styled.div`
  width: 130px;
  margin: 0px;
`;
const Rate = styled.div`
  float: right;
  margin-left: auto;
`;
