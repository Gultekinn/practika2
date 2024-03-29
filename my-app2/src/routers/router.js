import Add from "../pages/Site/Add/Add";
import Detail from "../pages/Site/Detail/Detail";
import Home from "../pages/Site/Home/Home";
import SiteRoot from "../pages/Site/SiteRoot/SiteRoot";
import Wishlist from "../pages/Site/Wishlist/Wishlist";

export const ROUTES=[{
    path:"/",
    element:<SiteRoot/>,
    children:[
{
        path:'',
        element:<Home/>
    },
{
    path:'add',
    element:<Add/>
},
{
    path:'wishlist',
    element:<Wishlist/>
},
{
    path:':id',
    element:<Detail/>
}


]
}]