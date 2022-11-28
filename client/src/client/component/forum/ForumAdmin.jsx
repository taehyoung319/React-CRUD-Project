import Axios from "axios";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Loading from "../Loading";

const ForumAdmin = (props) => {
    const [loading, setLoading] = useState(true);
    const [forumData, setForumData] = useState([]);

    const getForumAdmin = async () => {
        await Axios.post("/forum/admin", "").then((res, err) => {
            setForumData(res.data);
        });
    }

    const ForumAdminState = async (e) => {
        const id = e.target.dataset.id;
        const state = e.target.dataset.state;

        const data = { id, state };
        await Axios.post("/forum/admin/state", data).then((res, err) => {
            if(res.data === 1) alert(state === "reject" ? "성공적으로 거절되었습니다." : "성공적으로 수락되었습니다.");
        });
    }

    useEffect(()  => {
        getForumAdmin();
        setLoading(false);
    }, []);

    return (
        <section id="ForumAdmin" className="layout">
            {
                loading
                    ?
                    <Loading />
                    :
                    <>
                        <div className="container contents">
                            <h3 className="font-weight-bold">포럼 설정</h3>
                            <table className="table stateTable">
                                <thead>
                                <tr>
                                    <td>번호</td>
                                    <td>포럼이름</td>
                                    <td>포럼소개글</td>
                                    <td>포럼 생성 요청 유저</td>
                                    <td>생성일</td>
                                    <td>상태</td>
                                </tr>
                                </thead>
                                <tbody>
                                {forumData.map(data =>
                                    <tr key={data.id}>
                                        <td>{data.id}</td>
                                        <td>{data.name}</td>
                                        <td>{data.introduce}</td>
                                        <td>{data.user_id}</td>
                                        <td>{data.create_dt.split("T")[0]}</td>
                                        <td>
                                            {
                                                data.state === "wait"
                                                    ?
                                                    <>
                                                        <span className="badge badge-success mr-1" onClick={ForumAdminState} data-state="accept" data-id={data.id}>수락</span>
                                                        <span className="badge badge-danger" onClick={ForumAdminState} data-state="reject" data-id={data.id}>거절</span>
                                                    </>
                                                    : data.state === "reject"
                                                        ?
                                                        <span>거절</span>
                                                        :
                                                        <span>수락</span>
                                            }
                                        </td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                        <div className="container contents layout">
                            <div className="d-flex align-items-end">
                                <h3 className="font-weight-bold m-0">포럼 공지사항 설정</h3>
                                <Link to={"/forum/notice/add"}><button className="badge badge-dark ml-3">포럼공지 추가</button></Link>
                            </div>
                        </div>
                    </>
            }
        </section>
    );
}

export default ForumAdmin