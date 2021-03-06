import styled from "styled-components";

interface WrapperProps {
  url: string;
}

export const CardWrapper = styled.div<WrapperProps>`
  width: 300px;
  height: 450px;
  border-radius: 24px;
  position: relative;
  background-image: url(${({ url }) => url});
  image-rendering: auto;
  background-size: cover;
  background-position: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  padding: 0 4rem 0 1rem;
  max-width: 100%;
  height: 150px;
  bottom: 0;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 110%);
`;
export const Name = styled.p`
  width: 280px;
  overflow-wrap: break-word;
  padding-bottom: 1em;
  font-family: "Rubik", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 20px;
  color: #ffffff;
`;
export const ImdbRating = styled.p`
  font-family: "Rubik", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
`;
export const Genre = styled.p`
  font-family: "Rubik", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
`;
