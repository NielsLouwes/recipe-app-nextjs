import React from "react";
import Link from "next/link";

import styled from "styled-components";

const Styled = styled.div`
  height: 7vh;
  border: 1px solid black;
  display: flex;
  justify-content: space-around;
`;

const CompanyName = styled.h1``;

const Wrapper = styled.div`
  justify-content: space-between;
`;

const Text = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

function Navbar() {
  return (
    <Styled>
      <CompanyName>Recipe App</CompanyName>
      <Wrapper>
      <Link href="/about">
        <Text>Textbout us</Text>
      </Link>
      <Link href="/recipes">
        <Text>Top Recipes</Text>
      </Link>
      </Wrapper>
    </Styled>
  );
}

export default Navbar;
