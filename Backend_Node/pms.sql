-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 26, 2019 at 10:19 AM
-- Server version: 8.0.15
-- PHP Version: 7.1.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pms`
--

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `userid` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `usertype` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`userid`, `password`, `usertype`) VALUES
('admin1', 'password', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `studentid` int(11) NOT NULL,
  `fullName` varchar(20) NOT NULL,
  `address` varchar(30) NOT NULL,
  `batch` varchar(20) NOT NULL,
  `course` varchar(20) NOT NULL,
  `highschool` float NOT NULL,
  `diploma` float DEFAULT NULL,
  `graduation` float NOT NULL,
  `pg` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`studentid`, `fullName`, `address`, `batch`, `course`, `highschool`, `diploma`, `graduation`, `pg`) VALUES
(1, 'Aviral', 'PaiLayout', 'Feb-2019', 'DAC', 80, 67, 75, 80),
(2, 'Saurabh', 'PaiLayout', 'Feb-2019', 'DAC', 60, 67, 85, 80),
(3, 'Ankit', 'PaiLayout', 'Feb-2019', 'DAC', 70, 67, 65, 80),
(4, 'Abhinesh', 'PaiLayout', 'Feb-2019', 'DAC', 50, 67, 67, 88),
(5, 'Shakti', 'PaiLayout', 'Feb-2019', 'DAC', 96, 89, 80, 78),
(6, 'Nitish', 'PaiLayout', 'Feb-2019', 'DAC', 60, 78, 56, 89),
(7, 'Rohit', 'PaiLayout', 'Feb-2019', 'DAC', 70, 87, 78, 89),
(8, 'Alok', 'PaiLayout', 'Feb-2019', 'DAC', 75, 78, 74, 67),
(9, 'Aditya', 'PaiLayout', 'Feb-2019', 'DAC', 86, 78, 65, 69),
(10, 'Kailash', 'PaiLayout', 'Feb-2019', 'DAC', 84, 79, 68, 76),
(11, 'rohan', 'Sadadanand Nagar', 'Feb-2019', 'DESD', 58, 61, 60, 58),
(12, 'rohan', 'Sadadanand Nagar', 'Feb-2019', 'DESD', 58, 61, 60, 58),
(13, 'rohan', 'Sadadanand Nagar', 'Feb-2019', 'DESD', 58, 61, 60, 58),
(14, 'rohan', 'Sadadanand Nagar', 'Feb-2019', 'DESD', 58, 61, 60, 58);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`studentid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
