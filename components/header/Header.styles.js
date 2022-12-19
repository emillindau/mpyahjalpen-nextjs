import styled from 'styled-components';

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileHeaderStyle = styled.header`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const BannerWrapper = styled.div`
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;
