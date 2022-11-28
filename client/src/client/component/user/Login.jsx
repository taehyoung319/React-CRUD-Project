import Axios from "axios";
import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";


const Login = (props) => {
    const navigate = useNavigate();
    const [check, setCheck] = props.checks;

    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const loginAction = (e) => {
        e.preventDefault();

        const data = { id, pw };
        Axios.post("/loginAction", data).then((res, err) => {
            switch (res.data.state) {
                case "0" : {
                    alert("아이디 또는 비밀번호를 다시 확인해주십시오.");
                    break;
                }
                case "1" : {
                    alert(`${res.data.data.name}님으로 로그인하셨습니다.`);
                    setCheck(res.data.data);
                    navigate(-1);
                    break;
                }
                default : {
                    break;
                }
            }
        })
    }

    return (
        <section id="login">
            <div className="container d-flex justify-content-center align-items-center vw-100 vh-100">
                <form onSubmit={loginAction}>
                    <h3 className="font-weight-bold mb-2">Log in / 로그인</h3>
                    <span>아이디</span>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="id"
                            value={id}
                            onChange={e => setId(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <span>비밀번호</span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="password"
                            value={pw}
                            onChange={e => setPw(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-outline-warning form-control" type="submit">로그인하기</button>
                </form>
            </div>
        </section>
    )
}

export default Login;