import React, { useState } from "react";
import styles from "../styles/Contact.module.css"

const Contact = () => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [phone, setphone] = useState('')
    const [desc, setdesc] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        console.log(name , email , phone , desc)

        const data = {name , email , phone , desc}
        fetch('http://localhost:3000/api/postcontact' , {
            method : 'POST' ,
            headers : {
                'Content-Type' : 'application/json' ,
            } ,

            body : JSON.stringify(data)
        }).then(response => response.text()).then(data => {
            console.log("Successs")
            setname('')
            setphone('')
            setemail('')
            setdesc('')
        }).catch(error => {
            console.log("Error" , error)
        })
    }

    const handleChange = (event) => {
        // console.log(event , 'chnage')

        if (event.target.name === 'phone')
            setphone(event.target.value)

        else if (event.target.name === 'email')
            setemail(event.target.value)

        else if (event.target.name === 'name')
            setname(event.target.value)

        else if (event.target.name === 'desc')
            setdesc(event.target.value)
    }

    return (
        <div className={styles.container}>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles.mb3}>
                    <label htmlFor="name" className={styles.formLabel}>Enter Your Name</label>
                    <input type="text" onChange={handleChange} value={name} className="form-control" id="name" name="name" aria-describedby="emailHelp" />
                </div>
                <div className={styles.mb3}> 
                    <label htmlFor="email" className={styles.formLabel}>Email address</label>
                    <input type="email" onChange={handleChange} value={email} className="form-control" id="email" name="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className={styles.mb3}>
                    <label htmlFor="phone" className={styles.formLabel}>Phone</label>
                    <input type="phone" onChange={handleChange} value={phone} className="form-control" id="phone" name="phone" />
                </div>
                <div className={styles.mb3}>
                    <label htmlFor="desc">Elaborate Your Concern</label>
                    <textarea value={desc} onChange={handleChange} className="form-control" placeholder="Write Your Concern Here" id="desc" name="desc"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Contact