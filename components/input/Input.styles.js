import styled from 'styled-components';
import { theme } from '../../theme/theme'

export const StyledInput = styled.input`
width: 100%;
padding: 0.5rem 1rem;
border: 0.1em solid ${theme.colors.yellow};
border-radius:0.12em;
&:hover {
    border-color:${theme.colors.pink};
  }
`;