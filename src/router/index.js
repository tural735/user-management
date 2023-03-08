import {lazy} from "react";
import {createBrowserRouter} from "react-router-dom";

const Users = lazy(() => import("../views/UsersPage"));
const UserDetail = lazy(() => import("../views/UserDetailPage"));
const AddUserPage = lazy(() => import("../views/AddUserPage"))
const ErrorPage = lazy(() => import("../views/ErrorPage"));


const router = createBrowserRouter([
    {
        path: "/",
        element: <Users/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "/user/create",
        element: <AddUserPage/>
    },
    {
        path: "/user/:id",
        element: <UserDetail/>
    },
]);

export default router