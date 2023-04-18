import React from 'react';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';

const MoveToHashButton = () => {
  const hash = 'about';
  return (
    <StMoveToHashButton>
      <HashLink smooth to={`/#${hash}`}>
        {'DOWN'}
      </HashLink>
    </StMoveToHashButton>
  );
};

const StMoveToHashButton = styled.button`
  width: 20rem;
  height: 20rem;
  color: ${({ theme }) => theme.white};
`;

export default MoveToHashButton;
