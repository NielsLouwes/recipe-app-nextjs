import Link from 'next/link'
import Navbar from "../components/navbar"

export default function IndexPage() {
  return (
    <div>
      <Navbar />
      Hello World.{' '}
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  )
}
