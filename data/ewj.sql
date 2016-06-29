-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2016 年 05 月 04 日 06:42
-- 服务器版本: 5.6.12-log
-- PHP 版本: 5.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `ewj`
--
CREATE DATABASE IF NOT EXISTS `ewj` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `ewj`;

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` char(32) NOT NULL,
  `sex` enum('男','女','保密') NOT NULL DEFAULT '保密',
  `email` varchar(50) NOT NULL,
  `face` varchar(50) NOT NULL,
  `regTime` int(10) unsigned NOT NULL,
  `activeFlag` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `sex`, `email`, `face`, `regTime`, `activeFlag`) VALUES
(2, 'king', 'b2086154f101464aab3328ba7e060deb', '男', 'king@qq.com', 'af423aeab90796e3c1cd994b6c464e09.jpg', 1402583678, 0),
(3, 'queen', '72545f3f86fad045a26ed54abd2bbb9f', '保密', 'queen@sina.com', '45306f3e9e4674362731545a86b2261e.jpg', 1402584566, 0),
(4, 'test123', 'cc03e747a6afbbcbf8be7668acfebee5', '保密', 'test123@qq.com', 'c794aed26d04790517233c1d2c99c4d5.jpg', 1402585325, 0),
(5, 'test', 'c20ad4d76fe97759aa27a0c99bff6710', '男', 'test@qq.com', 'ce92c236763184aa42abf575df39b9d1.jpg', 1403009244, 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
