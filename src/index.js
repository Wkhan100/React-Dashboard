import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Weather from './components/Weather';
import Count from './components/Count';
import SearchBox from './components/SearchBox';
import User from './components/User/User';
import UserForm from './components/userCrud/UserForm';
import UserList from './components/userCrud/UserList';
import UserInfo from './components/User/UserInfo';
import Register from './components/Register';
import Login from './components/Login';
import FormA from './components/FormA';
import Parent from './components/Parent';
import Blog from './components/Blog';

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
    <Route path="/blog" element={<Blog />} />
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
