require("dotenv").config();
const mysql = require("../mysql");

class UserController {
    async joinAction(req, res) {
        const sql = "INSERT INTO users (id, pw, name) VALUES (?,?,?)";
        const val = [req.body.id, req.body.pw, req.body.name];

        const uniqueSql = "SELECT * from users WHERE id = ?";
        const uniqueId = await mysql.query(uniqueSql, [req.body.id]);

        if (uniqueId[0].length > 0) return res.send("0");

        await mysql.query(sql, val);
        res.send("1");
    }

    async loginAction(req, res) {
        const sql = "SELECT * from users WHERE id = ? AND pw = ?";
        const val = [req.body.id, req.body.pw];

        const [check] = await mysql.query(sql, val);
        if (check.length === 0) return res.send({ state : "0", data : "" });
        else {
            const users = {
                id : check[0].id,
                name : check[0].name,
            }
            res.cookie("users", users);
            res.send({ state : "1", data : users });
        }
    }

    async loginCheck(req, res) {
        const cookie = req.cookies["users"];
        if (!cookie) return res.send("0");
        else {
            res.send(cookie);
        }
    }

    async logout(req, res) {
        res.clearCookie("users");
        res.send("success");
    }

}

module.exports = new UserController();