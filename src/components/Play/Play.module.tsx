import styled from 'styled-components';
// Play
export const PlayContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  background-color: ${p => p.theme.colors.invisibleGrey};
`;
export const PlayContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;
// Answers
export const AnswerList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 32px;
  column-gap: 34px;
  padding-bottom: 122px;
`;

export const AnswerListItem = styled.li``;

export const AnswerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 365px;
  height: 72px;
  background-color: ${p => p.theme.colors.white};
  padding: 10px;
  border: none;
  border-radius: 4px;
  position: relative;
  text-decoration: none;
  box-sizing: border-box;
  border-radius: 9px;
  box-sizing: border-box;
  border: 1px solid ${p => p.theme.colors.grey};
  cursor: pointer;
  &::after,
  &::before {
    top: 60%;
    content: ' ';
    height: 35px;
    width: 35px;
    position: absolute;
    pointer-events: none;
    background: #fff;
  }
  &::after {
    right: 87%;
    margin-top: -40px;
    transform-origin: 0px 0px;
    box-sizing: border-box;
    border-bottom: 1px solid rgb(208, 208, 216);
    border-left: 1px solid rgb(208, 208, 216);
    transform: rotate(57.5deg) skew(22deg);
    top: 60%;
    content: ' ';
    height: 36px;
    width: 46px;
    color: ${p => p.theme.colors.black};
  }
  &::before {
    left: 100%;
    margin-top: -40px;
    transform-origin: 0 0;
    box-sizing: border-box;
    border-top: 1px solid ${p => p.theme.colors.grey};
    border-right: 1px solid ${p => p.theme.colors.grey};
    transform: rotate(57.5deg) skew(30deg);
  }

  &:focus {
    background-color: ${p => p.theme.colors.invisibleOrange};
    border-color: ${p => p.theme.colors.orange};
    &::before,
    &::after {
      border-color: ${p => p.theme.colors.orange};
      background-color: ${p => p.theme.colors.invisibleOrange};
    }
  }

  &.correct {
    background-color: ${p => p.theme.colors.invisibleGreen};
    border-color: ${p => p.theme.colors.green};
    &::before,
    &::after {
      border-color: ${p => p.theme.colors.green};
      background-color: ${p => p.theme.colors.invisibleGreen};
    }
  }

  &.wrong {
    background-color: ${p => p.theme.colors.invisibleRed};
    border-color: ${p => p.theme.colors.red};
    &::before,
    &::after {
      border-color: ${p => p.theme.colors.red};
      background-color: ${p => p.theme.colors.invisibleRed};
    }
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
export const AnswerItemText = styled.p`
  display: flex;
  flex-direction: row;
  gap: 8px;
  z-index: 10;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 116%;
  color: ${p => p.theme.colors.black};

  &::before,
  &::after {
    content: '';
    height: 1px;
    width: 17px;
    position: absolute;
    border-top: 1px solid ${p => p.theme.colors.grey};
  }

  &::before {
    top: 45%;
    left: 105%;
  }
  &::after {
    top: 45%;
    right: 106%;
  }
  &.correct {
    background-color: ${p => p.theme.colors.invisibleGreen};
    border-color: ${p => p.theme.colors.green};
    &::before,
    &::after {
      border-color: ${p => p.theme.colors.green};
      background-color: ${p => p.theme.colors.invisibleGreen};
    }
  }
  &.wrong {
    background-color: ${p => p.theme.colors.invisibleRed};
    border-color: ${p => p.theme.colors.red};
    &::before,
    &::after {
      border-color: ${p => p.theme.colors.red};
      background-color: ${p => p.theme.colors.invisibleRed};
    }
  }
`;
export const AnswerItemSymbol = styled.span`
  color: ${p => p.theme.colors.orange};
`;

// Money
export const MoneyList = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 8px;
  padding-top: 166px;
  padding-bottom: 166px;
  background-color: ${p => p.theme.colors.white};
  padding-left: 45px;
  padding-right: 25px;
`;
export const MoneyItemNumber = styled.span`
  display: inline-flex;
  &::before,
  &::after {
    content: '';
    height: 1px;
    width: 40px;
    position: absolute;
    border-top: 1px solid ${p => p.theme.colors.grey};
  }

  &::before {
    top: 44%;
    left: 103%;
  }
  &::after {
    top: 51%;
    right: 103%;
  }
  &.current::before,
  &.current::after {
    border-color: ${p => p.theme.colors.orange};
  }
`;
export const MoneyItem = styled.li`
  text-align: center;
  padding: 8px 24px;
  display: block;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 116%;
  width: 240px;
  position: relative;
  height: 40px;
  text-decoration: none;
  text-transform: uppercase;
  box-sizing: border-box;
  border-radius: 9px;
  box-sizing: border-box;
  color: ${p => p.theme.colors.black};
  border: 1px solid ${p => p.theme.colors.grey};

  &.answered {
    color: ${p => p.theme.colors.grey};
  }
  &.current {
    color: ${p => p.theme.colors.orange};
    border: 1px solid ${p => p.theme.colors.orange};
  }

  &::after,
  &::before {
    top: 107%;
    left: 99%;
    content: ' ';
    height: 20px;
    width: 20px;
    position: absolute;
    pointer-events: none;
    background: #fff;
  }
  &::after {
    left: 2px;
    margin-top: -40px;
    transform-origin: 0 0;
    box-sizing: border-box;
    border-bottom: 1px solid ${p => p.theme.colors.grey};
    border-left: 1px solid ${p => p.theme.colors.grey};
    transform: rotate(57.5deg) skew(30deg);
  }
  &::before {
    right: -46px;
    margin-top: -40px;
    transform-origin: 0 0;
    box-sizing: border-box;
    border-top: 1px solid ${p => p.theme.colors.grey};
    border-right: 1px solid ${p => p.theme.colors.grey};
    transform: rotate(57.5deg) skew(30deg);
  }
  &.current::after,
  &.current::before {
    border-color: ${p => p.theme.colors.orange};
  }
  &.current::after {
    border-color: ${p => p.theme.colors.orange};
  }
  &.current::before {
    border-color: ${p => p.theme.colors.orange};
  }
`;
//Question
export const QuestionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${p => p.theme.colors.invisibleGrey};
  margin-left: 80px;
  margin-top: 133px;
`;
export const QuestionsTitle = styled.h2`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 116%;
  margin-bottom: 395px;
  margin-right: 360px;
`;

// margin-bottom: 122px;
