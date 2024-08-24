import React ,{ useEffect} from 'react';
import { useNavigate, useRoutes } from "react-router-dom";

import Dashboard from './components/dashboard/Dashboard';
import UserInfo from './components/User/UserInfo';
import UserList from './components/userCrud/UserList';
import Userform from './components/userCrud/UserForm';
import Weather from './components/Weather';

import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Profile from './components/User/Profile'
import { useAuth } from './AuthContext';

const ProjectRoutes = () =>{
    const  { currentUser, setCurrentUser } = useAuth();
    const navigate = useNavigate();

    useEffect(()=>{
        const userIdFromStorage = localStorage.getItem("userId");

        if(userIdFromStorage && !currentUser){
            setCurrentUser(userIdFromStorage);
        }
        if(!userIdFromStorage && !["/login","/signup"].includes(window.location.pathname)){
            navigate("/login");
        }
        if(userIdFromStorage && window.location.pathname === '/login'){
            navigate("/");
        }
    }, [ currentUser, navigate, setCurrentUser]);

        let element = useRoutes([
            {
                path:"/",
                element:<Dashboard />
            },
            {
                path:"/login",
                element:<Login />
            },
            {
                path:"/signup",
                element:<Signup />
            },
            {
                path:"/profile",
                element:<Profile />
            },
            {
                path:"/weather",
                element:<Weather />
            },
            {
                path:"/userform",
                element:<Userform />
            },
            {
                path:"/userlist",
                element:<UserList />
            },
            {
                path:"/userinfo",
                element:<UserInfo />
            }
        ])
    return element;
}
export default ProjectRoutes;