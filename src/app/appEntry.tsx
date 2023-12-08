import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";


import '@/shared/styles/entry.css'
import {appStore} from "./appStore.ts";
import {appRouter} from "./appRouter.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={appStore}>
            <RouterProvider router={appRouter()} />
        </Provider>
    </React.StrictMode>,
)
