import React, { useEffect } from 'react';
import { useNavigate, useRoutes } from 'react-router-dom';

import UserInfo from './components/User/UserInfo';
import User from './components/Home/Home';
import Home from './components/User/User';
import UserList from './components/userCrud/UserList';
import Userform from './components/userCrud/UserForm';
import Weather from './components/Weather';
import SearchBox from './components/SearchBox';
import Parent from './components/Parent';
import FormA from './components/FormA';
import Blog from './components/Blog';
import Count from './components/Count';

import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Profile from './components/User/Profile';
import { useAuth } from './AuthContext';
import App from './App';

const ProjectRoutes = () => {
    const { currentUser, setCurrentUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const userIdFromStorage = localStorage.getItem('userId');

        if (userIdFromStorage && !currentUser) {
            setCurrentUser(userIdFromStorage);
        }
        if (!userIdFromStorage && !['/login', '/signup'].includes(window.location.pathname)) {
            navigate('/login');
        }
        if (userIdFromStorage && ['/login', '/signup'].includes(window.location.pathname)) {
            navigate('/dashboard'); // Redirect logged-in users away from login and signup pages
        }
    }, [currentUser, navigate, setCurrentUser]);

    let element = useRoutes([
        {
            path: '/',
            element: <App isLoggedIn={!!currentUser} />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: '/dashboard',
                    element: <Home />
                },
                {
                    path: '/profile',
                    element: <Profile />
                },
                {
                    path: '/weather',
                    element: <Weather />
                },
                {
                    path: '/userform',
                    element: <Userform />
                },
                {
                    path: '/userlist',
                    element: <UserList />
                },
                {
                    path: '/userinfo',
                    element: <UserInfo />
                },
                {
                    path: '/search',
                    element: <SearchBox />
                },
                {
                    path: '/user',
                    element: <User />
                },
                {
                    path: '/forma',
                    element: <FormA />
                },
                {
                    path: '/blog',
                    element: <Blog />
                },
                {
                    path: '/parent',
                    element: <Parent />
                },
                {
                    path: '/count',
                    element: <Count />
                }
            ]
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/signup',
            element: <Signup />
        }
    ]);

    return element;
};

export default ProjectRoutes;
