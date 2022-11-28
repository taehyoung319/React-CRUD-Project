CREATE TABLE `forums` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `introduce` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `state` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'wait',
  `create_dt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;insert into `forums` (`create_dt`, `id`, `introduce`, `name`, `state`, `user_id`) values ('2022-10-27 20:01:38', 1, '서울의 이야기들', '서울', 'accept', 'react@gmail.com');
insert into `forums` (`create_dt`, `id`, `introduce`, `name`, `state`, `user_id`) values ('2022-10-27 20:08:04', 2, '경기의 이야기들', '경기', 'accept', 'react@gmail.com');
insert into `forums` (`create_dt`, `id`, `introduce`, `name`, `state`, `user_id`) values ('2022-10-27 20:29:27', 3, '인천의 이야기들', '인천', 'accept', 'react@gmail.com');
insert into `forums` (`create_dt`, `id`, `introduce`, `name`, `state`, `user_id`) values ('2022-10-29 11:22:35', 4, '부산의 이야기를 나누는 곳입니다.', '부산', 'accept', 'react@gmail.com');
insert into `forums` (`create_dt`, `id`, `introduce`, `name`, `state`, `user_id`) values ('2022-11-11 19:05:23', 5, '여수의 이야기를 나누는 곳입니다.', '여수', 'accept', 'admin');
