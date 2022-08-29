import { Outlet,Link } from "react-router-dom";
const Layout =()=>{
    return <>
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/carros">Carros</Link></li>
            <li><Link to="/users">Usuários</Link></li>
        </ul>
    </nav>
        <Outlet/>
    
    </>
}

export default Layout;