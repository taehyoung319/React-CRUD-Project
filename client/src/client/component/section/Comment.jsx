import {Link, useNavigate} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import Axios from "axios";

import {IoMdClose} from "react-icons/io";

const Comment = (props) => {
    const navigate = useNavigate();

    const textarea = useRef(null);

    const [comments, setComments] = useState([]);
    const [contents, setContents] = useState("");
    const id = props.postId.postId;

    const getComments = async () => {
        await Axios.post("/forum/comment", {id}).then((res, err) => {
            if (!res.data) return;
            else {
                setComments(res.data);
            }
        });
    }

    const commentAdd = async (e) => {
        e.preventDefault();

        if (!contents) return alert("내용을 입력하세요.");

        const data = {id, contents};
        await Axios.post("/forum/comment/add", data).then((res, err) => {
            if(res.data === 0) {
                alert("로그인 후 작성할 수 있습니다.");
                return navigate("/login");
            }
            getComments();
        })
        textarea.current.value = "";
    }

    const commentDel = async (e) => {
        e.preventDefault();

        const id = e.target.dataset.id;
        if(id === undefined) return alert("잠시 후에 다시 시도하여 주십시오.");
        await Axios.post("/forum/comment/del", {id}).then((res, err) => {
            if(res.data === 0) {
                alert("로그인 후 삭제 가능합니다.");
                return navigate("/login");
            }else if(res.data === 1) return alert("성공적으로 삭제되었습니다.");
            else getComments();
        });
    }

    useEffect(() => {
        getComments();
    }, [])

    useEffect(() => {
        props.cmtCount(comments.length);
    }, [comments]);

    return (
        <div className="comment">
            <div className="d-flex justify-content-between align-items-center totalCmt">
                <p className="m-0">전체 댓글 <span className="font-weight-bold" style={{"color" : "#ffd40b"}}>{comments.length}</span>개</p>
                <div>
                    <Link to={"/"}><p className="m-0">글 목록</p></Link>
                </div>
            </div>
            <div className="commentBox mt-2">
                <div className="commentList">
                    {comments.map(data =>
                        <div className="d-flex align-items-center justify-content-between commentContents" key={data?.id}>
                            <div className="d-flex align-items-center">
                                <p className="mb-0 user_name">{data?.user_name}</p>
                                <p className="mb-0 user_contents">{data?.contents}</p>
                            </div>
                            <div className="d-flex align-items-center create_dt">
                                <p className="m-0 mr-2">{data?.create_dt.split("T")[0] +"\u00a0"+ data?.create_dt.split("T")[1].split(".000Z")[0]}</p>
                                <IoMdClose size={"18"} style={{"cursor" : "pointer"}} data-id={data?.id} onClick={commentDel}/>
                            </div>
                        </div>
                    )}
                </div>
                <form onSubmit={commentAdd} className="commentAdd d-flex justify-content-between align-items-center mb-5">
                    <textarea placeholder="댓글을 입력하세요." onChange={(e) => setContents(e.target.value)} ref={textarea}></textarea>
                    <button className="ml-3 font-weight-bold" type="submit">등록</button>
                </form>
            </div>
        </div>
    );
}

export default Comment;