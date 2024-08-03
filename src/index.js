import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Home from './component/Home/Home';
import Weather from './component/Weather';
import Count from './component/Count';
import SearchBox from './component/SearchBox';
import User from './component/User/User';
import UserForm from './component/userCrud/UserForm';
import UserList from './component/userCrud/UserList';
import UserInfo from './component/User/UserInfo';
import Register from './Register';
import Login from './Login';
import FormA from './component/FormA';
import Parent from './component/Parent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Header />
<Routes>
    <Route path="/" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/home" element={<Home />} />
    <Route path="/weather" element={<Weather />} />
    <Route path="/count" element={<Count />} />
    <Route path="/search" element={<SearchBox />} />
    <Route path="/user" element={<User />} />
    <Route path="/count" element={<Count />} />  
    <Route path="/forma" element={<FormA />} />
    <Route path="/parent" element={<Parent />} />
    <Route path="/userform" element={<UserForm />} />
    <Route path="/userlist" element={<UserList />} />
    <Route path="/userinfo" element={<UserInfo />} />
</Routes>
<Footer />
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
