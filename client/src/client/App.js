import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Main from "./component/Main.jsx";
import Login from "./component/user/Login.jsx";
import Join from "./component/user/Join.jsx";

import Header from "./component/layout/Header.jsx";
import Footer from "./component/layout/Footer.jsx";

import Forum from "./component/forum/Forum";
import ForumView from "./component/forum/ForumView";
import ForumPostAdd from "./component/forum/ForumPostAdd";
import ForumList from "./component/forum/ForumList";
import ForumAdd from "./component/forum/ForumAdd";
import ForumAdmin from "./component/forum/ForumAdmin";

import {useState} from "react";

const App = () => {
    const [check, setCheck] = useState("");

    return (
        <Router>
            <Header checks={[check, setCheck]} />
                <Routes>
                    <Route path="/" element={<Main checks={[check, setCheck]}/>}/>
                    <Route path="/login" element={<Login checks={[check, setCheck]} />}/>
                    <Route path="/join" element={<Join/>}/>
                    <Route path="/forum/view/:postId" element={<ForumView />}/>
                    <Route path="/forum/main/:forumId" element={<Forum />}/>
                    <Route path="/forum/post/add/:forumId" element={<ForumPostAdd checks={[check, setCheck]}/>}/>
                    <Route path="/forum/list" element={<ForumList />}/>
                    <Route path="/forum/add" element={<ForumAdd checks={[check, setCheck]}/>}/>
                    <Route path="/forum/admin" element={<ForumAdmin checks={[check, setCheck]}/>} />
                </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
