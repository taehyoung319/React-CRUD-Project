CREATE TABLE `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `post_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `contents` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `create_dt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;insert into `comments` (`contents`, `create_dt`, `id`, `post_id`, `user_id`) values ('ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ', '2022-11-19 01:38:21', 62, '1', 'admin');
insert into `comments` (`contents`, `create_dt`, `id`, `post_id`, `user_id`) values ('ㅋㅋㅋ', '2022-11-19 01:40:49', 63, '1', 'admin');
insert into `comments` (`contents`, `create_dt`, `id`, `post_id`, `user_id`) values ('ㅋㅋ', '2022-11-19 01:41:33', 65, '1', 'admin');
insert into `comments` (`contents`, `create_dt`, `id`, `post_id`, `user_id`) values ('ㅋㅋㅋㅋㅋ', '2022-11-19 01:42:25', 67, '1', 'admin');
insert into `comments` (`contents`, `create_dt`, `id`, `post_id`, `user_id`) values ('1', '2022-11-22 15:37:07', 70, '10', 'admin');
insert into `comments` (`contents`, `create_dt`, `id`, `post_id`, `user_id`) values ('zzzz', '2022-11-23 19:24:27', 71, '10', 'admin');
insert into `comments` (`contents`, `create_dt`, `id`, `post_id`, `user_id`) values ('zzzz', '2022-11-23 19:24:29', 72, '10', 'admin');
insert into `comments` (`contents`, `create_dt`, `id`, `post_id`, `user_id`) values ('zzzz', '2022-11-23 19:24:32', 73, '10', 'admin');
insert into `comments` (`contents`, `create_dt`, `id`, `post_id`, `user_id`) values ('zzz', '2022-11-23 19:24:33', 74, '10', 'admin');
