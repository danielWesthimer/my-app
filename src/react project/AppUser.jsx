import React from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import { useState } from 'react';
import Home from './components/Home';
import Info from './components/Info';
import Todos from './components/Todos';
import Posts from './components/Posts';
import Post from './components/Post';
import Albums from './components/Albums';
import Photos from './components/Photos';



function AppUser() {

    const [data, useData] = useState("")
    const [user, useUser] = useState("")

    async function GetUsers(url) {
        const res = await fetch(url)
        const dataJson = await res.json()
        useData(dataJson)
    }

   function UserSpcific(user){useUser(user)}

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login getUsers={GetUsers} data={data} userSpcific={UserSpcific} />} />

                <Route path='/home' element={<Home user={user}/>} >
                    <Route path='info' element={<Info user={user}/>} />
                    <Route path='todos' element={<Todos user={user}/>} />
                    <Route path='posts' element={<Posts user={user}/>} >
                        <Route path=':postId' element={<Post user={user}/>} />
                    </Route >
                    <Route path='albums' element={<Albums user={user}/>} />
                    <Route path='albums/:photosId' element={<Photos user={user}/>} />

                </Route >
            </Routes>

        </BrowserRouter>);
}

export default AppUser;