-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Aug 04, 2017 at 12:49 PM
-- Server version: 5.5.57-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `altimetrik-db`
--
CREATE DATABASE IF NOT EXISTS `altimetrik-db` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `altimetrik-db`;

-- --------------------------------------------------------

--
-- Table structure for table `auth_tokens`
--

CREATE TABLE IF NOT EXISTS `auth_tokens` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `token` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `expiry_at` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=4 ;

--
-- Dumping data for table `auth_tokens`
--

INSERT INTO `auth_tokens` (`id`, `token`, `expiry_at`, `created_at`) VALUES
(1, '706f3fbab04506900673c692edb47e967a8e4ff261203baf40cd9727d195001d', '2017-08-04 07:31:42', '2017-08-04 07:11:42'),
(2, '1e949b25d9130a46db199686f9bb7a7b4068b02e58fce12f4f89e58cd5f8f7e7', '2017-08-04 07:32:53', '2017-08-04 07:12:53'),
(3, '28d71a6cd05fd56b98d2249a04f331a80270e07bc8aa97e42312b83dfe1ebcfb', '2017-08-04 07:38:42', '2017-08-04 07:18:42');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(250) COLLATE utf8_unicode_ci DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=5 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `is_active`, `created_at`) VALUES
(1, 'Vel', 'velmurugaaan@gmail.com', '418da2166d27f475038065987da2d3480d93d161548cb36ea708dc7476a9f0fd', 1, '2017-08-04 06:45:37'),
(2, 'Vel', 'velmurugaaan@gmail.com', '418da2166d27f475038065987da2d3480d93d161548cb36ea708dc7476a9f0fd', 1, '2017-08-04 06:55:37'),
(3, 'Vel', 'velmurugaaan@gmail.com', '418da2166d27f475038065987da2d3480d93d161548cb36ea708dc7476a9f0fd', 1, '2017-08-04 07:18:37');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
