import styled from 'styled-components';

export const MultiStepWrapper = styled.div`
  width: 300px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: ${props => props.theme.colors.white};
  z-index: 5;
  border-radius: 8px;
  padding: 0 10px;
  position: absolute;

  transform: ${props =>
    `translate(calc(28px + 1em), calc(-${props.totalHeight}px + ${
      props.progress * (props.totalHeight / 100)
    }px - 50%))`};
`;

export const MustachWrapper = styled.div`
  position: absolute;
  left: 212px;
  bottom: 140px;
  transform: rotate(-34deg);

  @media (max-width: 768px) {
    transform: scale(0.5);
    left: 38px;
    bottom: 170px;
  }
`;
