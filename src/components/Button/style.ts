import { Dislike, Like } from "icons";
import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 130px;
`;

export const StyledDislike = styled(Dislike)`
  cursor: pointer;
`;
export const StyledLike = styled(Like)`
  cursor: pointer;
`;
