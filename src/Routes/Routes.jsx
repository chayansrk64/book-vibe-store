import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import About from "../pages/About/About";
import BookDetails from "../pages/BookDetails/BookDetails";
import ReadList from "../pages/ReadList/ReadList";


export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                loader: () => fetch('booksData.json'),
                Component: Home
            },
            {
                path: '/about',
                Component: About
            },
            {
                path: '/readlist',
                loader: () => fetch('booksData.json'),
                Component: ReadList
            },
            {
                path: '/BookDetails/:id',
                loader: () => fetch('booksData.json'),
                Component: BookDetails
            }
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
])