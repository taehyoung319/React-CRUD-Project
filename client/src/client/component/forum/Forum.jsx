import Axios from "axios";
import {useEffect, useState} from "react";
import Loading from "../Loading";
import {Link, useNavigate} from "react-router-dom";

const Forum = () => {
    const navigate = useNavigate();

    const [forum, setForum] = useState([]);
    const [forumPost, setForumPost] = useState([]);
    const [loading, setLoading] = useState(true);

    const getForum = async () => {
        const id = decodeURIComponent(window.location.href).split("/")[5];
        await Axios.post("/forum/main", {id}).then(async (res, err) => {
            await setForum(res.data.forumData);
            await setForumPost(res.data.postData);

        });
    }

    useEffect( () => {
        getForum();
    }, []);

    useEffect(() => {
        setLoading(false);
    }, [forum])

    return (
        <section id="forum" className="layout">
            {loading
                ?
                <Loading />
                :
                <div className="container contents">
                    <div className="mb-3 d-flex justify-content-between align-items-center">
                        <h3 className="font-weight-bold m-0">'{forum[0]?.name}' 포럼</h3>
                        <Link to={"/forum/post/add/" + forum[0]?.id }>
                            <button className="btn-sm btn-dark">글작성</button>
                        </Link>
                    </div>
                    <table className="table forumTable">
                        <thead>
                            <tr>
                                <td className="col-1">번호</td>
                                <td className="col-4">글제목</td>
                                <td className="col-2">작성자</td>
                                <td className="col-2">작성시간</td>
                                <td className="col-1">조회</td>
                                <td className="col-1">추천</td>
                            </tr>
                        </thead>
                        <tbody>
                            {forumPost.reverse()?.map((data, idx) =>
                                <tr key={idx + 1} onClick={() => navigate("/forum/view/" + data.post_idx)}>
                                    <td>{idx + 1}</td>
                                    <td>{data?.title}</td>
                                    <td className="col-1">{data?.name}</td>
                                    <td>{data?.create_dt.split("T")[0] + "|" + data?.create_dt.split("T")[1].split(".000Z")[0]}</td>
                                    <td>{data?.view}</td>
                                    <td>{data?.up}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            }
        </section>
    );
}

export default Forum;