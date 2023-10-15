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
  justify-content: center;
  margin: 15px;
  height: 360px;
  position: absolute;
`;

const DetailTitle = styled.div`
  width: 200px;
  color: white;
  font-size: 15px;
  margin-bottom: 10px;
`;

const DetailContent = styled.div`
  width: 200px;
  color: white;
  font-size: 15px;
`;
