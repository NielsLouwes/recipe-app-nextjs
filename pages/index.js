import Navbar from "../components/navbar";
import { gql } from "@apollo/client";
import { client } from "../apollo.client";
import Search from "../components/Search"

export default function IndexPage() {
  return (
    <div>
      <Navbar />
      <Search />
      Hello World.
    </div>
  );
}
