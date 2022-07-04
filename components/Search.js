import React from "react";

import styled from "styled-components";

function Search() {
  return (
    <Styled>
      <Header>Find a recipe</Header>
      <Input type="text" placeholder="Start typing here..." />
    </Styled>
  );
}

export default Search;

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

const Wrapper = styled.div`
 
  /* width: 50% */
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
`;
