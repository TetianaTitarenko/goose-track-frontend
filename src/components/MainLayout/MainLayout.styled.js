import styled from "styled-components";

export const Container = styled.div`
  margin-top: 24px;

  margin-bottom: 24px;
  margin-left: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-height: 100vh;

  @media (min-width: 768px) {
    margin-left: 32px;
  }
`;

export const DivLayout = styled.div`
  display: flex;
  background: ${({ theme }) => theme.variableColors.primaryBackground};
  width: 100vw;
  min-height: 100vh;
`;

export const DivHeader = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.variableColors.primaryBackground};
  padding: 24px 20px;
  @media (min-width: 768px) {
    padding: 24px 32px;
  }
`;
