
import { createBrowserRouter } from "react-router-dom";
import {
    LandingPage,
    LoginPage,
    ErrorPage,
    RegisterPage,
    LoadoutPage
} from "./pages/index"
import Layout from "./layout";

import {action as registerAction} from "./pages/RegisterPage";
import {action as loginAction} from "./pages/LoginPage"
import { store } from "./store/store";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <ErrorPage />,
        children:[
            {
                index:true,
                element:<LandingPage />,
            },
            {
                path:"/loadout",
                element:<LoadoutPage />,
            },
            {
                path:"/login",
                element:<LoginPage />,
                action: loginAction(store)
            },
            {
                path:"/register",
                element:<RegisterPage />,
                action: registerAction
            }
        ]
    }
])