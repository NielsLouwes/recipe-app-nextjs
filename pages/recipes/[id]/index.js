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
      <ul>
        <li>
          <Link href="/post/[id]/[comment]" as={`/post/${id}/first-comment`}>
            <a>First comment</a>
          </Link>
        </li>
        <li>
          <Link href="/post/[id]/[comment]" as={`/post/${id}/second-comment`}>
            <a>Second comment</a>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Recipe;
