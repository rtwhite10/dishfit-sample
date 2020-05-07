
import React from 'react'
import styled from 'styled-components'


const LinkStyle = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;

  

  h1 {
    font-size: 3rem;
    color: #B25B4D;
  }
`

const Header = () => (
  <LinkStyle>
    <h1>dish.fit</h1>
  </LinkStyle>
);

export default Header;