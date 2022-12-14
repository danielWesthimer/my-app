import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";


function Login(props) {

    console.log(props.data);

    let navigate = useNavigate();
    let name
    let pass

    function getName(e) {
        name = e.target.value
    }


    function getPass(e) {
        pass = e.target.value
    }

    function checking() {
        const dataUserArr = props.data.filter((user) => user.username === name)
        
        if (dataUserArr.length==0){
            alert("The user does not exist ");
            return}
          let [dataUser] = dataUserArr
        ;
        if (dataUser.address.geo.lat.slice(-4) !== pass) {alert("The password is incorrect"); return}
            props.userSpcific(dataUser)
            localStorage.setItem('user', JSON.stringify(dataUser));
            navigate("/home")
       
}


    useEffect(() => { props.getUsers("https://jsonplaceholder.typicode.com/users") }, [])

    return (
        <div id="input">
            Name: <input class='input' onChange={getName} type="text" />
            Password <input class='input' onChange={getPass} type="text" />
            {<button onClick={checking}>submit</button>}
        </div>
    )
}

export default Login;