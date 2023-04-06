import React from 'react'
import styles from "../styles/Home.module.css"
import Link  from 'next/link'

const Navbar = () => {
  return (
    <nav className={styles.mainnav}>
        <ul>
        <Link href='/'><li>Home</li></Link>
        <Link href='/about' replace={true}><li>About</li></Link> {/* replace - Replace the current history state instead of adding a new url into the stack. Defaults to false*/ }
        <Link href='/blog'><li>Blogs</li></Link>
        <Link href='/contact'><li>Contact</li></Link>
        </ul>
    </nav>
  )
}

export default Navbar