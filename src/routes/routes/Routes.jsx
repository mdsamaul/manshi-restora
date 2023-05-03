import {
    createBrowserRouter
} from "react-router-dom";
import Chefs_Layout from "../../layout/Chefs_Layout.jsx";
import Home from "../../pages/home/Home.jsx";
import ChefsConteiner from "../../pages/home/topChefs/ChefsConteiner/ChefsConteiner.jsx";
import Login from "../../pages/login/Login.jsx";
import Registration from "../../pages/registration/Registration.jsx";
import PrivateRoute from "../privateRoute/PrivateRoute.jsx";
import Main from './../../layout/Main';
import SngleChefs from './../../pages/home/topChefs/SngleChefs/SngleChefs';


const router = createBrowserRouter([

    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }, {
                path: 'login',
                element: <Login></Login>
            }, {
                path: 'register',
                element: <Registration></Registration>
            },
            {
                path: 'chefs',
                element: <ChefsConteiner></ChefsConteiner>
            }
        ]

    }, {
        path: "chefs",
        element: <Chefs_Layout></Chefs_Layout>,
        children: [


            ,
            {
                path: '/chefs/:id',
                element: <PrivateRoute><SngleChefs></SngleChefs></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/chefs/${params.id}`)
            }
        ]

    },

]);

export default router;