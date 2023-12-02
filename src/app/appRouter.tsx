import {createBrowserRouter} from "react-router-dom";
import {Home} from "@/pages/home";
import {IrregularVerbs} from "@/pages/irregular-verbs";


export const appRouter = () =>
    createBrowserRouter([
        {
            path: '/',
            element: <Home/>,
        },
        {
            path: '/irregular-verbs',
            element: <IrregularVerbs />
        }
    ])
