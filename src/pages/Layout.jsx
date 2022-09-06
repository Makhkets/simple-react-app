import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <header>
                <Link to="/home" style={{ color: "white", fontSize: "50px"}}>Лента</Link>
                <Link to="/" style={{ color: "white", fontSize: "50px", marginLeft: "80px" }}>Счетчик</Link>
            </header>
           
            <Outlet /> {/* Тут шаблон */}

            <footer>
                <p>Подвал сайта 2022</p>
            </footer>
        </>
    );
}

export default Layout;