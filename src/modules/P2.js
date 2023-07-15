import React from "react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FiFacebook } from "react-icons/fi";




function P2() {
    let [details, setdetails] = useState({ name: "", email: "", password: "", conpassword: "" })
    let [name, setname] = useState("")
    let [email, setemail] = useState("")
    let [password, setpassword] = useState("")
    let [conpassword, setconpassword] = useState("")
    let [message, setmessage] = useState("")

    function validatefun(event) {
        event.preventDefault()
        if (name.length != 0) {
            if (/@./.test(email)) {
                if (password.length != 0) {
                    
                        // let x=password
                        // let y=conpassword
                        // console.log(password)
                        // console.log(conpassword)

                        if ( password=== conpassword) {
                            console.log("Success")
                            setdetails({ name: name, email: email, password: password })
                            setmessage("Successful")
                        }
                        else {
                            console.log("Error")
                            setmessage("Password not matching")
                        }
                    }
                    
                
                else {
                    console.log("error")
                    setmessage("Please enter password")
                }
            }
            else {
                console.log("error")
                setmessage("Error in emailid")
            }
        }
        else {
            console.log("error")
            setmessage("Error give proper name")
        }
    }



    return (<div id="p2">
        <br />
        <div id="header">
            <h1>Create Account</h1>
            <div id="gobuttons">
                <button className="gobuttons"><FcGoogle /> Signup with Google</button>
                <button className="gobuttons"><span><img id="img2" src="images/facebook.png" alt="abstarct image" /></span>Signup with Facebook</button>
            </div>
        </div>
        <br />
        -OR-
        <br />
        <br />
        <form id="form" onSubmit={validatefun}>
            <input type="text" placeholder="Enter Name" onChange={(event) => { setname(event.target.value) }}></input>
            <input type="email" placeholder="Enter Email" onChange={(event) => { setemail(event.target.value) }}></input>
            <input type="password" placeholder="Enter Password" onChange={(event) => { setpassword(event.target.value) }}></input>
            <input type="password" placeholder="Enter Confirm Password" onChange={(event) => { setconpassword(event.target.value) }} ></input>
            <button type="submit" id="subbutton" >Submit</button>
        </form>
        
        <div id="message">
            {message}
        </div>
    </div>)

}

export default P2