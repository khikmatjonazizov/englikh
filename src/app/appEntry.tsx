import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";
import { LoadingOutlined } from '@ant-design/icons'


import '@/shared/styles/entry.css'
import {appStore} from "./appStore.ts";
import {appRouter} from "./appRouter.tsx";

const PageLoader = () => {
    return (
        <div
            style={{
                height: '100dvh',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <LoadingOutlined style={{fontSize: '40px'}} />
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={appStore}>
            <Suspense fallback={<PageLoader />}>
                <RouterProvider router={appRouter()}/>
            </Suspense>
        </Provider>
    </React.StrictMode>,
)
