import {useEffect, useState} from "react";
import Axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import {FaArrowAltCircleDown, FaArrowAltCircleUp} from "react-icons/fa"

import Loading from "../Loading";
import Comment from "../section/Comment";

const ForumView = () => {
    const navigate = useNavigate();
    const postId = useParams();

    const cmtCount = (count) => setCount(count);

    const [view, setView] = useState();
    const [count, setCount] = useState("");
    const [loading, setLoading] = useState(true);

    const getForumView = async () => {
        await Axios.post("/forum/view", {postId: postId.postId}).then((res, err) => {
            if(res.data === 0) {
                alert("삭제되거나 없는 페이지입니다.");
                return navigate("/forum/list");
            }else
                setView(res.data);
        })
    }

    const postCount = async (type) => {
        await Axios.post("/forum/count", {type, postId: postId.postId}).then((res, err) => {
            if(res.data.type === "up") alert("up");
            else alert("down");
            setView(res.data.data);
        })
    }

    useEffect(() => {
        getForumView();
    }, []);

    useEffect(() => {
        if(view) setLoading(false);
    },[view])

    return (
        <section id="forumView" className="layout">
            {loading
                ?
                <Loading />
                :
                <div className="container contents text">
                    <h2 className="font-weight-bold m-0 mb-2">{view.title}</h2>
                    <div className="d-flex align-items-center user pb-2 mb-2">
                        <p>{view.user_id}</p>
                        <p>&nbsp; | &nbsp;</p>
                        <p>{view.create_dt.split("T")[0] +"\u00a0"+ view.create_dt.split("T")[1].split(".000Z")[0]}</p>
                        <p>&nbsp; | &nbsp;</p>
                        <p className="profile">프로필 보기</p>
                    </div>
                    <div className="d-flex align-items-center infor">
                        <p>조회수 {view.view}</p>
                        <p>&nbsp; | &nbsp;</p>
                        <p>추천 {view.up}</p>
                        <p>&nbsp; | &nbsp;</p>
                        <p>댓글 {count}</p>
                    </div>
                    <p className="content mb-5 mt-5">{view.contents}</p>
                    <div className="d-flex justify-content-center align-items-center count pb-5" style={{"userSelect" : "none"}}>
                        <div className="d-flex" onClick={() => postCount("up")}>
                            <div className="flex-column align-items-center justify-content-center d-flex mr-2">
                                <h6 className="font-weight-bold m-0" style={{"color" : "#ffd40b"}}>추천</h6>
                                <p className="m-0" style={{"color" : "#ffd40b", "fontSize" : "13px"}}>{view.up}</p>
                            </div>
                            <FaArrowAltCircleUp color={"#ffd40b"} size={"45"} />
                        </div>
                        <div className="d-flex ml-2" onClick={() => postCount("down")}>
                            <FaArrowAltCircleDown color={"#b7b7b7"} size={"45"} />
                            <div className="d-flex flex-column align-items-center justify-content-center ml-2">
                                <h6 className="font-weight-bold m-0" style={{"color" : "#b7b7b7"}}>싫어요</h6>
                                <p className="m-0" style={{"color" : "#b7b7b7", "fontSize" : "13px"}}>{view.down}</p>
                            </div>
                        </div>
                    </div>
                    <Comment postId={postId} cmtCount={cmtCount}/>
                </div>
            }
        </section>
    );
}

export default ForumView;