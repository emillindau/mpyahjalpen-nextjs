import React from 'react';
import { StyledCard } from './Card.styles';

export function Card(props) {
  const { children, onClick = () => {}, itemIndex, url } = props;
  return (
    <StyledCard onClick={onClick} itemIndex={itemIndex} url={url}>
      {children}
    </StyledCard>
  );
}
