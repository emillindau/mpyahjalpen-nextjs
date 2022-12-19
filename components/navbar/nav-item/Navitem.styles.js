import styled from 'styled-components';

export const ActiveLink = styled.li`
  transition: all 0.4s;
  height: 41px;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.colors.pink};
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: black;
  }
`;
export const PassiveLink = styled.li`
  font-size: 1.5rem;
  font-weight: bold;
  height: 41px;
  color: ${props => props.theme.colors.black};
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: black;
  }
`;

export const ActiveMarker = styled.i`
  position: absolute;
  display: inline-flex;
  width: 5px;
  align-item: center;
  background-image: linear-gradient(
    90deg,
    ${props => props.theme.colors.pink},
    #f54985
  );
  background-size: 100%;
  height: 30px;
  margin-left: 7px;
  transform: translateY(0px);
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ActiveLinkContainer = styled.div`
  display: flex;
  text-align: right;
  width: 100%;
`;
