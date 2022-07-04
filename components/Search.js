import React from "react";

import styled from "styled-components";

export default function Search() {
  return (
    <Styled>
      <Header>Find a recipe</Header>
      <Input type="text" placeholder="Start typing here..." />
    </Styled>
  );
}

// STYLING
const Styled = styled.div`
  height: 15vh;
  width: 100vw;
   display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px red solid;
`;

const Header = styled.h2`
  justify-content: space-between;
  font-size: 3rem;
  font-weight: bolder;
  margin-bottom: 10px;
`;

const Input = styled.input`
  justify-content: space-between;
  height: 2vh;
  width: 50%;
  padding: 20px 0 20px 10px;
  border-radius: 15px;
`;
