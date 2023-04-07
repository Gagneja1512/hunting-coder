import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Blogpost.module.css"

const Slug = (props) => {
    const [blog, setBlog] = useState(props.myBlog);

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>{blog && blog.title}</h1>
                <hr></hr>
                <div>
                    {blog && blog.content}
                </div>
            </main>
        </div>
    )
}

export async function getServerSideProps(context) {

    const { slug } = context.query
    let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
    const myBlog = await data.json() ;

    return {
        props : {myBlog}
    }

}

export default Slug