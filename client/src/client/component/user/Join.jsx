import Axios from 'axios';
import {Link, useNavigate} from "react-router-dom";
import { useState } from "react";


const Join = () => {
    const navigate = useNavigate();

    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [name, setName] = useState("");

    const JoinAction = async (e) => {
        e.preventDefault();

        const data = { id, pw, name };
        await Axios.post("/joinAction", data).then((res,err) => {
            switch (res.data) {
                case 0 :
                    alert('아이디가 중복됩니다.');
                    break;
                case 1 :
                    alert('회원가입에 성공하셨습니다.');
                    navigate("/");
                    break;
                default :
                    break;
            }
        });
    }

    return (
        <section id="join">
            <div className="container d-flex justify-content-center align-items-center vw-100 vh-100">
                <form onSubmit={JoinAction}>
                    <h2 className="font-weight-bold mb-2">Sign in / 회원가입</h2>
                    <div className="form-group">
                        <span>아이디</span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="id"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <span>비밀번호</span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="password"
                            value={pw}
                            onChange={(e) => setPw(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <span>이름</span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-outline-warning form-control" type="submit">회원가입</button>
                </form>
            </div>
        </section>
    )
}

export default Join;