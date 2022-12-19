import styled, { css } from 'styled-components';

function getBackgroundColor(props) {
  if (props.completed) {
    return props.theme.colors.pink + 80;
  }

  return props.theme.colors.white;
  // return props.odd
  //   ? props.invert
  //     ? props.theme.colors.white
  //     : props.theme.colors.green
  //   : props.invert
  //   ? props.theme.colors.white
  //   : props.theme.colors.yellow;
}

function getColor(props) {
  if (props.completed) return props.theme.colors.white;
  // if (props.invert) {
  //   return props.odd ? props.theme.colors.green : props.theme.colors.yellow;
  // }
  return props.theme.colors.black;
}

export const CurrentAmount = styled.span`
  position: absolute;
  transform: ${props =>
    `translate(-24px, calc(${
      props.progress * (props.totalHeight / 100)
    }px - 50%)) rotate(90deg);`}
  color: ${props => props.theme.colors.pink};
  display: block;
  width: 100px;
  z-index: 5;

  @media (max-width: 768px) {
  transform: ${props =>
    `translate(-32px, calc(${
      props.progress * (props.totalHeight / 100)
    }px - 50%)) rotate(90deg);`}
  }
`;

export const HistoryEntry = styled.span`
  position: absolute;
  transform: ${props =>
    `translate(-60px, calc(${
      props.progress * (props.totalHeight / 100)
    }px - 50%));`}
  color: ${props => props.theme.colors.black};
  z-index: 5;

  ::after {
    content: "";
    border-bottom: 10px dashed ${props => props.theme.colors.pink};
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    z-index: 10;
    position: absolute;
    transform: rotate(90deg);
    top: calc(50% - 5px);
  }
`;

export const CompletedCheckStyled = styled.span`
  font-size: 36px;
  color: ${props => props.theme.colors.green};
  position: absolute;
  top: 5px;
  right: 5px;

  @media (max-width: 768px) {
    top: -36px;
    right: calc(50% - 18px);
  }
`;

export const ProgressWrapperStyle = styled.div`
  height: ${props => props.totalHeight}px;
  position: relative;
`;

export const StepTooltip = styled.div`
  min-width: 300px;
  min-height: 180px;

  ${props =>
    props.small &&
    css`
      min-width: 250px;
      min-height: 130px;
    `}

  border-radius: 8px;
  padding: 0 10px;
  position: absolute;
  background-color: ${props => getBackgroundColor(props)};
  color: ${props => getColor(props)};
  transform: ${props =>
    `translate(${
      props.odd ? 'calc(-100% - 20px - 1em)' : 'calc(28px + 1em)'
    }, calc(-${props.totalHeight}px + ${
      props.progress * (props.totalHeight / 100)
    }px - 50%))`};
  z-index: 3;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

  @media (max-width: 768px) {
    min-width: 200px;
  }

  @media (max-width: 495px) {
    min-width: 150px;

    transform: ${props =>
      `translate(${props.odd ? 'calc(-100% - 20px)' : 'calc(28px)'}, calc(-${
        props.totalHeight
      }px + ${props.progress * (props.totalHeight / 100)}px - 50%))`};
  }

  h2 {
    ${props =>
      props.completed &&
      css`
        text-decoration: line-through;
      `}
  }

  h3 {
    font-family: 'Merriweather', serif;
  }

  ::before {
    ${props =>
      props.completed &&
      css`
        display: none;
      `}

    content: '';
    position: absolute;
    border-bottom: 10px solid ${props => props.theme.colors.white};
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    z-index: 10;

    top: calc(50% - 7px);
    transform: rotate(-90deg);
    ${props =>
      !props.odd &&
      css`
        left: -13px;
      `}
    ${props =>
      props.odd &&
      css`
        right: -13px;
        transform: rotate(90deg);
      `}
  }
`;

export const StepStyle = styled.span`
  position: absolute;
  border-bottom: 2px solid ${props => props.theme.colors.brown};
  transform: ${props => `translateY(calc(-100% + ${props.progress}% - 1px))`};
  height: 100%;
  width: 100%;
  left: 0;
  z-index: 4;
`;

export const ProgressStyle = styled.div`
  position: relative;
  background: ${props => props.theme.colors.white};
  border-radius: 6px;
  width: ${props => (props.thickness ? props.thickness : '8px')};
  height: 100%;
  overflow: hidden;

  &::after {
    content: '';
    background: ${props => props.theme.colors.pink};
    position: absolute;
    border-radius: 6px;
    width: 100%;
    height: 100%;
    transform: ${props => `translateY(calc(-100% + ${props.progress}% - 1px))`};
    left: 0;
  }
`;

export const ProgressContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RegisterLink = styled.a`
  font-weight: bold;
  color: ${props => props.theme.colors.pink};
  font-size: 1.2em;

  &:hover {
    color: ${props => props.theme.colors.pink + '30'};
  }
`;
