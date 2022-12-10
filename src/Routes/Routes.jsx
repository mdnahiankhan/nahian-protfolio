import { createBrowserRouter } from "react-router-dom";
import Contact from "../Contact/Contact";
import HomePage from "../Homepage/HomePage";
import Main from "../Layout/Main";
import MyProjects from "../MyProjects/MyProjects";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [{
            path: '/',
            element: <HomePage></HomePage>
        },
        {
            path: '/',
            element: <HomePage></HomePage>
        },
        {
            path: '/contact',
            element: <Contact></Contact>
        },
        {
            path: '/projects',
            element: <MyProjects></MyProjects>
        }
        ]
    }
])