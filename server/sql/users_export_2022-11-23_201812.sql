CREATE TABLE `users` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pw` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;insert into `users` (`id`, `name`, `pw`) values ('admin', '총관리자', '1234');
insert into `users` (`id`, `name`, `pw`) values ('react@gmail.com', '배태형', '1234');
insert into `users` (`id`, `name`, `pw`) values ('react1@gmail.com', '배태형', '1234');
insert into `users` (`id`, `name`, `pw`) values ('react11@gmail.com', '배태형', '1234');
insert into `users` (`id`, `name`, `pw`) values ('react2@gmail.com', '배태형', '1234');
insert into `users` (`id`, `name`, `pw`) values ('react3@gmail.com', '배태형', '1234');
