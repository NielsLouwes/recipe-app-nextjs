import Link from "next/link";

import styled from "styled-components";

const Styled = styled.div``;

export default function AboutPage() {
  return (
    <Styled>
      About us
      <Link href="/">
        <a>Home</a>
      </Link>
    </Styled>
  );
}
