import {Link} from "react-router-dom";

const Visual = () => {
    return (
        <section id="visual" className="vw-100 vh-100">
            <div className="main-container contents vw-100 vh-100 d-flex flex-column justify-content-center position-relative">
                <div className="d-flex justify-content-start align-items-center visual-text visual-text1">
                    <span className="m-0 text text1 font-weight-bold">자유롭고 대담하게</span>
                    <span className="ml-5">사람들의 인터넷 문화의 중심지 <b>ImForum.</b><br/>사람들과 자유로운 <b>의사소통.</b><br/>사람들과의 <b>표현.</b></span>
                </div>
                <div className="d-flex justify-content-end align-items-center visual-text visual-text2">
                    <span className="m-0 text text2">우아하고 섬세하게</span>
                </div>
                <div className="visual-text visual-text3">
                    <span className="text text3 font-weight-bold">세계를 보다</span>
                </div>
                <div className="d-flex justify-content-center align-items-center button-box mt-5">
                    <Link to="/forum/list"><button><span></span>Click to Forum list</button></Link>
                </div>
            </div>
        </section>
    );
}

export default Visual;