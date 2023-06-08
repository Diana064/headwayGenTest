import styled from 'styled-components';
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 20px;
  margin: 0 auto;
`;
export const Button = styled.button`
  background: ${p => p.theme.colors.orange};
  border-radius: ${p => p.theme.radii.lg};
  width: 248px;
  color: ${p => p.theme.colors.white};
  padding: 21px 24px;
  text-align: center;
  border: none;
  font-size: 20px;
`;
