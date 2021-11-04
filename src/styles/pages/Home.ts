import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
`;
export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 95vh;
`;
export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  min-width: 300px;
`;
export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
