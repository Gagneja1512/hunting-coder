import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css"
import Link from "next/link";
import * as fs from 'fs'

const Blog = (props) => {
    // console.log(props)
    const [blogs , setBlogs] = useState(props.allBlogs) ;

    // useEffect(() => {
        
    // } , [])

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                {blogs.map((blogitem) => {
                    return (
                        <div key={blogitem.title} className={styles.blogItem}>
                            <Link href={`/blogpost/${blogitem.slug}`}><h3>{blogitem.title}</h3></Link>
                            <p>{blogitem.content}</p>
                        </div>
                    )
                })}
            </main>
      </div>
    )
}

export async function getStaticProps(context) {
    let data = await fs.promises.readdir("blogdata")
    // console.log(data)
    let myfile 
    let allBlogs = []
    for(let index = 0 ; index<data.length ; index++){
        let item = data[index]
        myfile = await fs.promises.readFile(('blogdata/' + item) , 'utf-8')
        allBlogs.push(JSON.parse(myfile))
        // console.log(allBlogs)
    }

    return {
        props : {allBlogs}
    }
}

export default Blog