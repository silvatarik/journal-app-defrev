import IRoute from "../interfaces/route";
import { LoginPage } from "../pages/authPages/LoginPage";
import { RegisterPage } from "../pages/authPages/RegisterPage";
import { NotePage } from "../pages/NotePage";

const routes:IRoute[] = [
    {
        path:'/',
        name: 'Note Page',
        component: NotePage,
        exact:true
    },
]
export const routePublic:IRoute[] = [
    {
        path:'/auth/login',
        name: 'Login Page',
        component: LoginPage,
        exact:true
    },
    {
        path:'/auth/register',
        name: 'Register Page',
        component: RegisterPage,
        exact:true
    }
]

export default routes;