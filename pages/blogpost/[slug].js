import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Blogpost.module.css"
import * as fs from 'fs'

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

export async function getStaticPaths() {
    return {
        paths : [
            {params : {slug : 'data-1'}} , 
            {params : {slug : 'data-2'}} , 
            {params : {slug : 'data-3'}} , 
        ] , 

        fallback : true ,
    }
}

export async function getStaticProps(context) {

    const { slug } = context.params
    let myBlog = await fs.promises.readFile(`blogdata/${slug}.json` , 'utf-8')
    

    return {
        props : {myBlog : JSON.parse(myBlog)}
    }

}

export default Slug