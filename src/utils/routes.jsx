import { Registration } from "../Pages";
import { Login } from "../Pages";
import { ChangePassword } from "../Pages";
import { Home } from "../Pages";
// import { Dashboard } from "../Pages/Dashboard/Dashboard.jsx";
import Dashboard from "../Pages/Dashboard/Dashboard.jsx";
import  Problems  from "../Pages/Problems/index.jsx";
import  Settings  from "../Pages/Settings/index.jsx";
export const routes = [
    {
        path: '/',
        exact: true,
        component: <Home/>
    },
    {
        path: '/register',
        exact: true,
        component: <Registration/>
    },
    
    {
        path: '/login',
        exact: true,
        component: <Login/>
    },
    {
        path: '/newpassword',
        exact: true,
        component: <ChangePassword/>
    },
        {
        path: '/dashboard',
        exact: true,
        component: <Dashboard/>
    },
        {
        path: '/problems',
        exact: true,
        component: <Problems/>
    },
        {
        path: '/setting',
        exact: true,
        component: <Settings/>
    },
]