import styled from 'styled-components';
export const StartContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const StartContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32px;
  justify-content: center;
  margin: 0 auto;
  padding-top: 229px;
  padding-bottom: 229px;
  height: auto;
  align-items: center;
  background-image: linear-gradient(
    to bottom right,
    ${p => p.theme.colors.white} 50%,
    ${p => p.theme.colors.orangeInvisible} 50%
  );
`;
export const StartMainText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
`;
export const StartTitle = styled.h1`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 56px;
  line-height: 116%;
  text-align: left;
`;
