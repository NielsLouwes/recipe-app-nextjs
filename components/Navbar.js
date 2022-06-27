import React from 'react'
import Link from 'next/link'

import styled from "styled-components";

const Styled = styled.div`
  height: 7vh;
  border: 1px solid black;
`;

function Navbar() {
  return (
    <Styled>
        <Link href="/about">
        <a>About us</a>
      </Link>

    </Styled>
  )
}

export default Navbar
