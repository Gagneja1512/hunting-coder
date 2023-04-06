import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Blogpost.module.css"

const Slug = () => {
    const router = useRouter()
    const {slug} = router.query

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>Title of the Blog : {slug}</h1>
                <hr></hr>
                <div>
                    Hello there myself Aaditya Gagneja pursuing computer Science And engineering from National Institute of technology , hamirpur. Basically living in Hanumangarh , Rajasthan. My hobies are playing outdoor games and Computer games. 
                </div>
            </main>
        </div>
    )
}

export default Slug