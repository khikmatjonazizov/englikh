import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";

import '@/shared/styles/entry.css'
import {appRouter} from "./appRouter.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={appRouter()} />
    </React.StrictMode>,
)
