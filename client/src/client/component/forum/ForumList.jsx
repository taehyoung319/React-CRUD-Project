import Axios from "axios";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Loading from "../Loading";

const ForumList = () => {
    const [loading, setLoading] = useState(true);
    const [listData, setListData] = useState([]);

    const getForumList = async () => {
        await Axios.post("/forum/list", "").then((res, err) => {
            setListData(res.data);
        })
    }

    useEffect(() => {
        getForumList();
    }, [])

    useEffect(() => {
        if(listData) setLoading(false);
    }, [listData])

    return (
        <section id="formList">
            {loading
                ?
                <Loading />
                :
                <div className="container contents">
                    <div className="d-flex justify-content-between align-items-center mb-5">
                        <h3 className="font-weight-bold mb-0">포럼리스트</h3>
                        <Link to={"/forum/add"}><button className="btn-sm btn-dark">포럼추가</button></Link>
                    </div>
                    <div className="d-flex justify-content-between list mb-5 flex-wrap">
                        <div className="list-main">
                            <div className="w-100 h-100 list-box-text">
                                <p className="mb-4">Imforum_Main</p>
                                <h3 className="mb-3">아임포럼은<br/>세상의 여러 끈을 하나로 모을 수 있습니다.</h3>
                                <p className="m-0 footer-text">#Imforum_Start&nbsp;&nbsp;#World&nbsp;&nbsp;#gather
                                </p>
                            </div>
                        </div>
                        <div className="list-slide">
                            <div className=" d-flex justify-content-between flex-wrap">
                                {listData.map(data =>
                                    <Link to={`/forum/main/${data.id}`} key={data.id}>
                                        <div className="list-box-text mb-4">
                                            <p className="mb-2">IFN_{data.name}</p>
                                            <p className="mb-3 forum-title">'{data.name}' 포럼</p>
                                            <p className="mb-3 forum-introduce">{data.introduce}</p>
                                            <p className="m-0 footer-text">#{data.name}</p>
                                        </div>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </section>
    );
}


export default ForumList;