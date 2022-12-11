import { createBrowserRouter } from "react-router-dom";
import Contact from "../Contact/Contact";
import HomePage from "../Homepage/HomePage";
import TopBanner from "../Homepage/TopBanner";
import Main from "../Layout/Main";
import AllProjects from "../MyProjects/AllProjects";
import MyProjects from "../MyProjects/MyProjects";
import Blog from "../SharePage.jsx/Blog";

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
            element: <AllProjects></AllProjects>
        },
        {
            path: '/about',
            element: <TopBanner></TopBanner>
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        }
        ]
    }
])