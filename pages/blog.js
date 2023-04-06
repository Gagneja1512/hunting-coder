import React from "react";
import styles from "../styles/Blog.module.css"
import Link from "next/link";

const Blog = () => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h2>Latest Blogs</h2>
                <div className={styles.blogItem}>
                    <Link href={'/blogpost/learn-javascript'}><h3>Lorem Ipsum</h3></Link>
                    <p>The things in the blogs are beautiful. Learning NextJs is beautiful.</p>
                </div>

                <div className={styles.blogItem}>
                    <Link href={'/blogpost/learn-javascript'}><h3>Lorem Ipsum</h3></Link>
                    <p>The things in the blogs are beautiful. Learning NextJs is beautiful.</p>
                </div>

                <div className={styles.blogItem}>
                    <Link href={'/blogpost/learn-javascript'}><h3>Lorem Ipsum</h3></Link>
                    <p>The things in the blogs are beautiful. Learning NextJs is beautiful.</p>
                </div>
            </main>
      </div>
    )
}

export default Blog