import { useRouter } from "next/router";
import Link from "next/link";
import Navbar from "../../../components/Navbar"

const Recipe = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
    <Navbar />
      <h1>Recipe: {id}</h1>
    </>
  );
};

export default Recipe;
