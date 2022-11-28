import {useEffect, useState} from "react";
import Axios from "axios";
import {useNavigate} from "react-router-dom";

const ForumAdd = (props) => {
    const navigate = useNavigate();

    const [check] = props.checks;
    const [name, setName] = useState("");
    const [introduce, setIntroduce] = useState("");

    const ForumAddAction = async (e) => {
        e.preventDefault();

        const data = { name, introduce, user_id : check.id };
        await Axios.post("/forumAdd", data).then((res, err) => {
            if(res.data === 0) return alert("이름과 소개글은 필수값입니다.");
            else {
                alert("성공적으로 포럼 생성을 요청하였습니다!");
                return navigate("/forum/list");
            }
        });
    }

    useEffect(() => {
        if(!check) {
            alert("비정상 경로로 접근하셨습니다. 메인페이지로 돌아갑니다.");
            navigate("/");
        }
    }, [])

    return (
        <section id="ForumAdd">
            <div className="container contents d-flex justify-content-center align-items-center vw-100 vh-100">
                <form onSubmit={ForumAddAction} className="w-50">
                    <h3 className="font-weight-bold mb-2">Add Forum Page / 포럼 추가 페이지</h3>
                    <p className="mb-2" style={{color: "red"}}>총관리자는 거절할 수 있습니다.</p>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="name / 생성하는 포럼의 이름입니다."
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            value={introduce}
                            onChange={e => setIntroduce(e.target.value)}
                            placeholder="introduce / 생성하는 포럼의 소개말입니다."
                        />
                    </div>
                    <button className="btn btn-outline-dark form-control" type="submit">포럼 생성 요청</button>
                </form>
            </div>
        </section>
    );
}

export default ForumAdd;