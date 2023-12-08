import {createBrowserRouter} from "react-router-dom";
import {Home} from "@/pages/home";
import {IVerb} from "@/pages/iVerb";


export const appRouter = () =>
    createBrowserRouter([
        {
            path: '/',
            element: <Home/>,
        },
        {
            path: '/irregular-verb',
            element: <IVerb />
        }
    ])
