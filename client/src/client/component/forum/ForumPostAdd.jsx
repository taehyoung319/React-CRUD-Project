import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import Axios from "axios";

const ForumPostAdd = (props) => {
    const navigate = useNavigate();
    const [check, setCheck] = props.checks;
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");
    const forum_id = useParams();

    useEffect(() => {
        if(!check) {
            alert("로그인 후 이용가능합니다.");
            return navigate("/login");
        }
    });

    const ForumPostAddAction = async (e) => {
        e.preventDefault();

        if(!title || !contents) return alert("글 제목과 글 내용은 필수값입니다.");

        const data = { title, contents, forum_id : forum_id.forumId, user_id : check.id };
        await Axios.post("/forum/post/add", data).then((res, err) => {
            console.log(res);
        })
    }

    return (
        <section id="ForumPostAdd">
            <div className="container contents d-flex justify-content-center align-items-center vw-100 vh-100">
                <form onSubmit={ForumPostAddAction} className="w-50">
                    <h3 className="font-weight-bold mb-2">Forum Post Add Page / 포럼 글추가 페이지</h3>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="title / 글 제목입니다."
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            className="form-control"
                            placeholder="contents / 글 텍스트입니다." rows="5"
                            value={contents}
                            onChange={e => setContents(e.target.value)}
                        ></textarea>
                    </div>
                    <button className="btn btn-outline-dark form-control" type="submit">글 작성</button>
                </form>
            </div>
        </section>
    );
}

export default ForumPostAdd;