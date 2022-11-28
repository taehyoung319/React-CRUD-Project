const mysql = require("../mysql");

class ForumController {
    async forumMain(req, res) {
        const forumSql = "SELECT * from forums WHERE id = ?";
        // 조건문이 없음 -> 수정.
        const postSql =
            "SELECT forum_posts.title, forum_posts.up,"+
            "forum_posts.view, forum_posts.create_dt, users.name, " +
            "forum_posts.id as post_idx, " +
            "users.id as users_idx, " +
            "forums.id as forum_idx " +
            "from forum_posts " +
            "JOIN users ON forum_posts.user_id = users.id " +
            "JOIN forums ON forums.id = forum_posts.forum_id WHERE forum_posts.forum_id = ?";

        const id = req.body.id;
        const [forumData] = await mysql.query(forumSql, id);
        const [postData] = await mysql.query(postSql, id);

        await res.send({forumData, postData});
    }

    // + 조회수, 보여주기
    async forumView(req, res) {
        const id = req.body.postId;
        const chkSql = "SELECT * from forum_posts WHERE id = ?";
        const [chkData] = await mysql.query(chkSql, id);

        if(chkData.length < 1) return res.send("0");

        const countSql = "UPDATE forum_posts SET view = ? WHERE id = ?";
        const countVal = [chkData[0].view + 1, id];
        await mysql.query(countSql, countVal);

        const viewSql = "SELECT * from forum_posts WHERE id = ?"
        const [viewData] = await mysql.query(viewSql, id);

        await res.send(viewData[0]);
    }

    async forumAdd(req, res) {
        if(req.body.name === "" || req.body.introduce === "") return res.send("0");

        const sql = "INSERT INTO forums (name, introduce, user_id) VALUES (?,?,?)";
        const val = [req.body.name, req.body.introduce, req.body.user_id];

        await mysql.query(sql, val);
        return res.send("1");
    }

    async forumPostAdd(req, res) {
        const sql = "INSERT INTO forum_posts (user_id, forum_id, title, contents) VALUES (?,?,?,?)";
        const val = [req.body.user_id, req.body.forum_id, req.body.title, req.body.contents];

        await mysql.query(sql, val);
        return res.send("1");
    }

    async forumList(req, res) {
        const sql = "SELECT * from forums WHERE state = 'accept'";
        const [data] = await mysql.query(sql);
        await res.send(data);
    }

    async forumAdmin(req, res) {
        const sql = "SELECT * from forums";
        const [data] = await mysql.query(sql);

        res.send(data);
    }

    async forumAdminState(req, res) {
        const sql = "UPDATE forums SET state = ? WHERE id = ? ";
        const val = [req.body.state, req.body.id];
        await mysql.query(sql, val);

        res.send("1");
    }

    // up or down
    async forumViewCount(req, res) {
        const chkSql = "SELECT * from forum_posts WHERE id = ?";
        const [chkData] = await mysql.query(chkSql, [req.body.postId]);

        const updateSql = `UPDATE forum_posts SET ${req.body.type} = ? WHERE id = ?`;
        const updateVal = [chkData[0][req.body.type] + 1, req.body.postId];
        await mysql.query(updateSql, updateVal);

        const sql = "SELECT * from forum_posts WHERE id = ?";
        const [data] = await mysql.query(sql, [req.body.postId]);

        res.send({data : data[0], type : req.body.type});
    }

    async forumComment(req, res) {
        const sql = "SELECT comments.id, contents, create_dt, user_id, users.name as user_name " +
            "from comments JOIN users ON comments.user_id = users.id WHERE comments.post_id = ?";
        const [data] = await mysql.query(sql, req.body.id);

        return res.send(data);
    }

    async forumCommentAdd(req, res) {
        const user_id = req.cookies["users"];
        if(!user_id) return res.send("0");

        const sql = "INSERT INTO comments (user_id, post_id, contents) VALUES (?,?,?)";
        const val = [user_id["id"], req.body.id, req.body.contents];
        const [data] = await mysql.query(sql, val);

        return res.send(data);
    }

    async forumCommentDel(req, res) {
        const user_id = req.cookies["users"];
        if(!user_id) return res.send("0");

        const chkSql = "select * from comments WHERE id = ?";
        const [chkData] = await mysql.query(chkSql, req.body.id);

        if(chkData[0].user_id !== user_id["id"]) return res.send("1");

        const deleteSql = "delete from comments WHERE id = ?";
        const deleteVal = await mysql.query(deleteSql, req.body.id);

        return res.send(deleteVal);
    }
}

module.exports = new ForumController();
