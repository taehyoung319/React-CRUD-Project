CREATE TABLE `forum_posts` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `user_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `forum_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `contents` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `up` int NOT NULL DEFAULT '0',
  `down` int NOT NULL DEFAULT '0',
  `view` int NOT NULL DEFAULT '0',
  `create_dt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;insert into `forum_posts` (`contents`, `create_dt`, `down`, `forum_id`, `id`, `title`, `up`, `user_id`, `view`) values ('서울 포럼 글1', '2022-10-27 20:08:04', 1, '1', 1, '서울 포럼 글1', 2, 'admin', 20);
insert into `forum_posts` (`contents`, `create_dt`, `down`, `forum_id`, `id`, `title`, `up`, `user_id`, `view`) values ('서울 포럼 글2', '2022-11-03 17:24:21', 0, '1', 2, '서울 포럼 글2', 0, 'admin', 0);
insert into `forum_posts` (`contents`, `create_dt`, `down`, `forum_id`, `id`, `title`, `up`, `user_id`, `view`) values ('1234123412341234', '2022-11-22 10:34:18', 0, '1', 3, '서울 포럼 글3', 0, 'admin', 0);
insert into `forum_posts` (`contents`, `create_dt`, `down`, `forum_id`, `id`, `title`, `up`, `user_id`, `view`) values ('서울 포럼 글4', '2022-11-22 14:57:39', 0, '1', 4, '서울 포럼 글4', 0, 'admin', 0);
insert into `forum_posts` (`contents`, `create_dt`, `down`, `forum_id`, `id`, `title`, `up`, `user_id`, `view`) values ('서울 포럼 글5', '2022-11-22 14:57:39', 0, '1', 5, '서울 포럼 글5', 0, 'admin', 0);
insert into `forum_posts` (`contents`, `create_dt`, `down`, `forum_id`, `id`, `title`, `up`, `user_id`, `view`) values ('서울 포럼 글6', '2022-11-22 14:57:39', 0, '1', 6, '서울 포럼 글6', 0, 'admin', 0);
insert into `forum_posts` (`contents`, `create_dt`, `down`, `forum_id`, `id`, `title`, `up`, `user_id`, `view`) values ('서울 포럼 글7', '2022-11-22 14:57:39', 0, '1', 7, '서울 포럼 글7', 0, 'admin', 0);
insert into `forum_posts` (`contents`, `create_dt`, `down`, `forum_id`, `id`, `title`, `up`, `user_id`, `view`) values ('서울 포럼 글8', '2022-11-22 14:57:39', 0, '1', 8, '서울 포럼 글8', 0, 'admin', 0);
insert into `forum_posts` (`contents`, `create_dt`, `down`, `forum_id`, `id`, `title`, `up`, `user_id`, `view`) values ('서울 포럼 글9', '2022-11-22 14:57:39', 0, '1', 9, '서울 포럼 글9', 0, 'admin', 0);
insert into `forum_posts` (`contents`, `create_dt`, `down`, `forum_id`, `id`, `title`, `up`, `user_id`, `view`) values ('서울 포럼 글10', '2022-11-22 14:57:39', 0, '1', 10, '서울 포럼 글10', 3, 'admin', 43);
insert into `forum_posts` (`contents`, `create_dt`, `down`, `forum_id`, `id`, `title`, `up`, `user_id`, `view`) values ('경기 포럼 글1', '2022-11-22 14:59:43', 0, '2', 11, '경기 포럼 글1', 0, 'admin', 0);
insert into `forum_posts` (`contents`, `create_dt`, `down`, `forum_id`, `id`, `title`, `up`, `user_id`, `view`) values ('경기 포럼 글2', '2022-11-22 14:59:43', 0, '2', 12, '경기 포럼 글2', 0, 'admin', 0);
insert into `forum_posts` (`contents`, `create_dt`, `down`, `forum_id`, `id`, `title`, `up`, `user_id`, `view`) values ('경기 포럼 글3', '2022-11-22 14:59:43', 0, '2', 13, '경기 포럼 글3', 0, 'admin', 0);
insert into `forum_posts` (`contents`, `create_dt`, `down`, `forum_id`, `id`, `title`, `up`, `user_id`, `view`) values ('경기 포럼 글4', '2022-11-22 14:59:43', 0, '2', 14, '경기 포럼 글4', 0, 'admin', 0);
insert into `forum_posts` (`contents`, `create_dt`, `down`, `forum_id`, `id`, `title`, `up`, `user_id`, `view`) values ('경기 포럼 글5', '2022-11-22 14:59:43', 0, '2', 15, '경기 포럼 글5', 0, 'admin', 0);
insert into `forum_posts` (`contents`, `create_dt`, `down`, `forum_id`, `id`, `title`, `up`, `user_id`, `view`) values ('경기 포럼 글6', '2022-11-22 14:59:43', 0, '2', 16, '경기 포럼 글6', 0, 'admin', 0);
insert into `forum_posts` (`contents`, `create_dt`, `down`, `forum_id`, `id`, `title`, `up`, `user_id`, `view`) values ('경기 포럼 글7', '2022-11-22 14:59:43', 0, '2', 17, '경기 포럼 글7', 0, 'admin', 0);
insert into `forum_posts` (`contents`, `create_dt`, `down`, `forum_id`, `id`, `title`, `up`, `user_id`, `view`) values ('경기 포럼 글8', '2022-11-22 14:59:43', 0, '2', 18, '경기 포럼 글8', 0, 'admin', 0);
insert into `forum_posts` (`contents`, `create_dt`, `down`, `forum_id`, `id`, `title`, `up`, `user_id`, `view`) values ('경기 포럼 글9', '2022-11-22 14:59:43', 0, '2', 19, '경기 포럼 글9', 0, 'admin', 0);
insert into `forum_posts` (`contents`, `create_dt`, `down`, `forum_id`, `id`, `title`, `up`, `user_id`, `view`) values ('경기 포럼 글10', '2022-11-22 14:59:43', 0, '2', 20, '경기 포럼 글10', 1, 'admin', 3);
insert into `forum_posts` (`contents`, `create_dt`, `down`, `forum_id`, `id`, `title`, `up`, `user_id`, `view`) values ('인천 포럼 글1', '2022-11-22 15:07:13', 0, '3', 21, '인천 포럼 글1', 0, 'admin', 0);
insert into `forum_posts` (`contents`, `create_dt`, `down`, `forum_id`, `id`, `title`, `up`, `user_id`, `view`) values ('인천 포럼 글2', '2022-11-22 15:07:13', 0, '3', 22, '인천 포럼 글2', 0, 'admin', 0);
insert into `forum_posts` (`contents`, `create_dt`, `down`, `forum_id`, `id`, `title`, `up`, `user_id`, `view`) values ('인천 포럼 글3', '2022-11-22 15:07:13', 0, '3', 23, '인천 포럼 글3', 0, 'admin', 0);
insert into `forum_posts` (`contents`, `create_dt`, `down`, `forum_id`, `id`, `title`, `up`, `user_id`, `view`) values ('인천 포럼 글4', '2022-11-22 15:07:13', 0, '3', 24, '인천 포럼 글4', 0, 'admin', 0);
insert into `forum_posts` (`contents`, `create_dt`, `down`, `forum_id`, `id`, `title`, `up`, `user_id`, `view`) values ('인천 포럼 글5', '2022-11-22 15:07:13', 0, '3', 25, '인천 포럼 글5', 0, 'admin', 0);
insert into `forum_posts` (`contents`, `create_dt`, `down`, `forum_id`, `id`, `title`, `up`, `user_id`, `view`) values ('인천 포럼 글6', '2022-11-22 15:07:13', 0, '3', 26, '인천 포럼 글6', 0, 'admin', 0);
insert into `forum_posts` (`contents`, `create_dt`, `down`, `forum_id`, `id`, `title`, `up`, `user_id`, `view`) values ('인천 포럼 글7', '2022-11-22 15:07:13', 0, '3', 27, '인천 포럼 글7', 0, 'admin', 0);
insert into `forum_posts` (`contents`, `create_dt`, `down`, `forum_id`, `id`, `title`, `up`, `user_id`, `view`) values ('인천 포럼 글8', '2022-11-22 15:07:13', 0, '3', 28, '인천 포럼 글8', 0, 'admin', 0);
insert into `forum_posts` (`contents`, `create_dt`, `down`, `forum_id`, `id`, `title`, `up`, `user_id`, `view`) values ('인천 포럼 글9', '2022-11-22 15:07:13', 0, '3', 29, '인천 포럼 글9', 0, 'admin', 0);
insert into `forum_posts` (`contents`, `create_dt`, `down`, `forum_id`, `id`, `title`, `up`, `user_id`, `view`) values ('인천 포럼 글10', '2022-11-22 15:07:13', 0, '3', 30, '인천 포럼 글10', 0, 'admin', 0);
insert into `forum_posts` (`contents`, `create_dt`, `down`, `forum_id`, `id`, `title`, `up`, `user_id`, `view`) values ('부산 포럼 글1', '2022-11-22 15:08:44', 0, '4', 31, '부산 포럼 글1', 0, 'admin', 0);
insert into `forum_posts` (`contents`, `create_dt`, `down`, `forum_id`, `id`, `title`, `up`, `user_id`, `view`) values ('부산 포럼 글2', '2022-11-22 15:08:44', 0, '4', 32, '부산 포럼 글2', 0, 'admin', 0);
insert into `forum_posts` (`contents`, `create_dt`, `down`, `forum_id`, `id`, `title`, `up`, `user_id`, `view`) values ('부산 포럼 글3', '2022-11-22 15:08:44', 0, '4', 33, '부산 포럼 글3', 0, 'admin', 0);
insert into `forum_posts` (`contents`, `create_dt`, `down`, `forum_id`, `id`, `title`, `up`, `user_id`, `view`) values ('부산 포럼 글4', '2022-11-22 15:08:44', 0, '4', 34, '부산 포럼 글4', 0, 'admin', 0);
insert into `forum_posts` (`contents`, `create_dt`, `down`, `forum_id`, `id`, `title`, `up`, `user_id`, `view`) values ('부산 포럼 글5', '2022-11-22 15:08:44', 0, '4', 35, '부산 포럼 글5', 0, 'admin', 0);
insert into `forum_posts` (`contents`, `create_dt`, `down`, `forum_id`, `id`, `title`, `up`, `user_id`, `view`) values ('부산 포럼 글6', '2022-11-22 15:08:44', 0, '4', 36, '부산 포럼 글6', 0, 'admin', 0);
insert into `forum_posts` (`contents`, `create_dt`, `down`, `forum_id`, `id`, `title`, `up`, `user_id`, `view`) values ('부산 포럼 글7', '2022-11-22 15:08:44', 0, '4', 37, '부산 포럼 글7', 0, 'admin', 0);
insert into `forum_posts` (`contents`, `create_dt`, `down`, `forum_id`, `id`, `title`, `up`, `user_id`, `view`) values ('부산 포럼 글8', '2022-11-22 15:08:44', 0, '4', 38, '부산 포럼 글8', 0, 'admin', 0);
insert into `forum_posts` (`contents`, `create_dt`, `down`, `forum_id`, `id`, `title`, `up`, `user_id`, `view`) values ('부산 포럼 글9', '2022-11-22 15:08:44', 0, '4', 39, '부산 포럼 글9', 0, 'admin', 0);
insert into `forum_posts` (`contents`, `create_dt`, `down`, `forum_id`, `id`, `title`, `up`, `user_id`, `view`) values ('부산 포럼 글10', '2022-11-22 15:08:44', 0, '4', 40, '부산 포럼 글10', 0, 'admin', 1);
