import styled from 'styled-components';

export const EndTitle = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 116%;
  color: grey;
`;

export const EndPrize = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 56px;
  line-height: 116%;
  margin-top: 8px;
  margin-bottom: 64px;
`;
export const EndWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32px;
  justify-content: flex-start;
  margin: 0 auto;
  padding-top: 229px;
  padding-bottom: 229px;
  height: auto;
  width: 100%;
  background: ${p => p.theme.colors.invisibleGrey};
`;
export const EndContent = styled.div`
  display: flex;
  flex-direction: column;
`;
