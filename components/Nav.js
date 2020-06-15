import Link from 'next/link'

const Nav = () => (
  <nav style={{ display: 'flex', flexDirection: 'column' }}>
    <Link a href="/">
      <a style={{ color: 'red' }}>Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
  </nav>
)

export default Nav
