const express = require("express");
const Router = express.Router();

const UserController = require("./controller/UserController");
const ForumController = require("./controller/ForumController");

Router.post("/joinAction", UserController.joinAction);
Router.post("/loginAction", UserController.loginAction);
Router.post("/loginCheck", UserController.loginCheck);
Router.post("/logout", UserController.logout);

Router.post("/forumAdd", ForumController.forumAdd);
Router.post("/forum/view", ForumController.forumView);
Router.post("/forum/post/add/", ForumController.forumPostAdd);
Router.post("/forum/list", ForumController.forumList)
Router.post("/forum/admin", ForumController.forumAdmin)
Router.post("/forum/admin/state", ForumController.forumAdminState)
Router.post("/forum/main", ForumController.forumMain);

Router.post("/forum/count", ForumController.forumViewCount);
Router.post("/forum/comment", ForumController.forumComment);
Router.post("/forum/comment/add", ForumController.forumCommentAdd);
Router.post("/forum/comment/del", ForumController.forumCommentDel);

module.exports = Router;