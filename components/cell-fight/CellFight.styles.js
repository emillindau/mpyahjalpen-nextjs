import styled from 'styled-components';

export const TextWrapper = styled.div`
  display: grid;

  padding: 2em;
  grid-gap: 2em;
  width: 100%;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 1fr 2fr;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  padding: 1rem;
`;

export const InfoTextWrapper = styled.div`
  margin-top: 4rem;

  @media all and (display-mode: fullscreen) {
    display: none;
  }
`;

export const Cell1Info = styled.div`
  font-family: 'Merriweather', serif;
  color: ${props => props.theme.colors.green};
  text-align: left;
  font-size: 1.3rem;
`;

export const Cell2Info = styled.div`
  font-family: 'Merriweather', serif;
  color: ${props => props.theme.colors.pink};
  text-align: right;
  font-size: 1.3rem;
`;

export const Cell1Text = styled.div`
  color: ${props => props.theme.colors.green};
  font-size: ${props => props.size}rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
`;

export const VersusText = styled.div`
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-weight: bold;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const Cell2Text = styled.div`
  color: ${props => props.theme.colors.pink};
  font-size: ${props => props.size}rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: right;
`;

export const ProgressBar = styled.div`
  border-radius: 14px;
  position: relative;
  max-width: 1400px;
  width: 100%;
  margin: 30px auto 0;
  height: 30px;
  background: ${props => props.theme.colors.pink};
  overflow: hidden;
`;

export const Progress = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: ${props => props.progress}%;
  background: ${props => props.theme.colors.green};
  transition: all 0.3s;
`;

export const CanvasContainer = styled.div`
  width: 100%;
  height: 600px;
  @media (max-width: 768px) {
    height: 220px;
  }

  @media (min-width: 1200px) {
    height: 450px;
  }
`;

export const Cell1Container = styled.div`
  background: #00b2aa;
  padding: 2px 6px;
  text-align: center;
`;

export const Cell2Container = styled.div`
  background: #e34486;
  padding: 2px 6px;
  text-align: center;
`;
