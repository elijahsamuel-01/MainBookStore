import {createBrowserRouter} from "react-router-dom"
import Layout from "../Component/static/Layout"
import HomeScreen from "../Pages/HomeScreen"
import Upload from "../Pages/screen/Upload"


export const mainRouter = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                index:true,
                element :<HomeScreen/>
            }
        ]
    },
    {
        path:"/Upload-book",
        element:<Upload/>,
    },
])