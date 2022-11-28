import {Link, useLocation} from "react-router-dom";
import Axios from "axios";
import {useEffect, useState} from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi"

const Header = (props) => {
    const [check , setCheck] = props.checks;
    const [state, setState] = useState(false);

    const { pathname } = useLocation();
    const design = () => {
        (pathname === "/") ? setState(true) : setState(false);
    }

    const headerNav = () => {
        const [nav] = document.getElementsByClassName("navs");
        const [bar] = document.getElementsByClassName("bar");
        let navAttr = nav.getAttribute("data-view");
        let barAttr = nav.getAttribute("data-view");
        nav.setAttribute("data-view", `${navAttr === "none" ? "view" : "none"}`);
        bar.setAttribute("data-view", `${barAttr === "none" ? "view" : "none"}`);
    }

    const Style = {
        header : {
            color: `${(state === true) ? "#fff" : "#000"}`
        },
    };

    const loginCheck = async () => {
        await Axios.post("/loginCheck", "").then((res, err) => {
            if(res.data) setCheck(res.data);
        });
    }

    const Logout = async () => {
        await Axios.post("/logout", "").then((res, err) => {
            setCheck("");
            alert(`"${check.name}" 로그아웃 하셨습니다.`);
        });
    }

    useEffect(() => {
        design();
        document.getElementsByClassName("navs")[0].setAttribute("data-view", "none");
        document.getElementsByClassName("bar")[0].setAttribute("data-view", "none");

    }, [pathname])

    useEffect(() => {
        loginCheck();
    }, []);

    return (
        <header className="w-100" style={Style.header}>
            <div className="header-container header w-100 position-absolute">
                <div className="d-flex justify-content-between align-items-center h-100">
                    <h3 className="font-weight-bold m-0"><Link to={"/"}>ImForum</Link></h3>
                    <div className="bar-box">
                        <HiOutlineMenuAlt3 className={"bar"} size={"39"} onClick={headerNav} />
                    </div>
                </div>
            </div>
            <div className="navs vw-50 vh-100 p-4" data-view="none">
                <ul className="d-flex flex-column align-items-end">
                    <li className="mb-4"><Link to={"/"}>Main</Link><span className="hover-span"></span></li>
                    <li className="mb-4"><Link to={"/forum/list"}>Forum</Link><span className="hover-span"></span></li>
                    {
                        check && check.id === "admin" ?
                            <li className="mb-4"><Link to={"/forum/admin"}>Management</Link><span className="hover-span"></span></li>
                            : check && check.id !== "admin" ?
                                <li className="mb-4"><Link to={"/"}>My</Link><span className="hover-span"></span></li>
                                :
                                ""
                    }
                    {!check ?
                        <>
                            <li className="mb-4"><Link to={"/login"}>Login</Link><span className="hover-span"></span></li>
                            <li className="mb-4"><Link to={"/join"}>Signup</Link><span className="hover-span"></span></li>
                        </>
                        :
                        <li className="mb-4" onClick={Logout}><Link>Logout</Link><span className="hover-span"></span></li>
                    }
                </ul>
            </div>
        </header>
    );
}

export default Header;