-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : ven. 12 mai 2023 à 07:53
-- Version du serveur : 8.0.31
-- Version de PHP : 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `bfo`
--

-- --------------------------------------------------------

--
-- Structure de la table `favoriplace`
--

DROP TABLE IF EXISTS `favoriplace`;
CREATE TABLE IF NOT EXISTS `favoriplace` (
  `idfavp` int NOT NULL AUTO_INCREMENT,
  `id_user` int NOT NULL,
  `id_place` int NOT NULL,
  PRIMARY KEY (`idfavp`),
  KEY `favoriplace_user_fk` (`id_user`),
  KEY `favoriplace_place_fk` (`id_place`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

-- --------------------------------------------------------

--
-- Structure de la table `favoriuser`
--

DROP TABLE IF EXISTS `favoriuser`;
CREATE TABLE IF NOT EXISTS `favoriuser` (
  `idfavuser` int NOT NULL AUTO_INCREMENT,
  `id_user` int NOT NULL,
  `id_favori` int NOT NULL,
  PRIMARY KEY (`idfavuser`),
  KEY `favoriuser_user_fk` (`id_user`),
  KEY `favoriuser_favori_fk` (`id_favori`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

-- --------------------------------------------------------

--
-- Structure de la table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) CHARACTER SET utf8mb4 ,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

-- --------------------------------------------------------

--
-- Structure de la table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(255) CHARACTER SET utf8mb4 ,
  `token` varchar(255) CHARACTER SET utf8mb4 ,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

-- --------------------------------------------------------

--
-- Structure de la table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
CREATE TABLE IF NOT EXISTS `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(191) CHARACTER SET utf8mb4 ,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(191) CHARACTER SET utf8mb4 ,
  `token` varchar(64) CHARACTER SET utf8mb4 ,
  `abilities` text CHARACTER SET utf8mb4 ,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

-- --------------------------------------------------------

--
-- Structure de la table `place`
--

DROP TABLE IF EXISTS `place`;
CREATE TABLE IF NOT EXISTS `place` (
  `idplace` int NOT NULL AUTO_INCREMENT,
  `numplace` int NOT NULL,
  `date_place` date NOT NULL,
  `horaire_matin` tinyint NOT NULL,
  `horaire_apresmidi` tinyint NOT NULL,
  `numetage` int DEFAULT NULL,
  `isReserved` tinyint DEFAULT '0',
  PRIMARY KEY (`idplace`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

-- --------------------------------------------------------

--
-- Structure de la table `reservation`
--

DROP TABLE IF EXISTS `reservation`;
CREATE TABLE IF NOT EXISTS `reservation` (
  `idreservation` int NOT NULL AUTO_INCREMENT,
  `matin` tinyint(1) NOT NULL,
  `apresmidi` tinyint(1) NOT NULL,
  `date` date NOT NULL,
  `id_user` int NOT NULL,
  `id_place` int NOT NULL,
  PRIMARY KEY (`idreservation`),
  KEY `reservation_user_fk` (`id_user`),
  KEY `reservation_place_fk` (`id_place`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `iduser` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 ,
  `username` varchar(50) CHARACTER SET utf8mb4 ,
  `fonction` varchar(50) CHARACTER SET utf8mb4 ,
  `roles` varchar(255) CHARACTER SET utf8mb4 ,
  `email` varchar(50) CHARACTER SET utf8mb4 ,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(150) CHARACTER SET utf8mb4 ,
  `remember_token` varchar(100) CHARACTER SET utf8mb4 ,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`iduser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `favoriplace`
--
ALTER TABLE `favoriplace`
  ADD CONSTRAINT `favoriplace_place_fk` FOREIGN KEY (`id_place`) REFERENCES `place` (`idplace`) ON DELETE CASCADE,
  ADD CONSTRAINT `favoriplace_user_fk` FOREIGN KEY (`id_user`) REFERENCES `users` (`iduser`) ON DELETE CASCADE;

--
-- Contraintes pour la table `favoriuser`
--
ALTER TABLE `favoriuser`
  ADD CONSTRAINT `favoriuser_favori_fk` FOREIGN KEY (`id_favori`) REFERENCES `users` (`iduser`) ON DELETE CASCADE,
  ADD CONSTRAINT `favoriuser_user_fk` FOREIGN KEY (`id_user`) REFERENCES `users` (`iduser`) ON DELETE CASCADE;

--
-- Contraintes pour la table `reservation`
--
ALTER TABLE `reservation`
  ADD CONSTRAINT `reservation_place_fk` FOREIGN KEY (`id_place`) REFERENCES `place` (`idplace`),
  ADD CONSTRAINT `reservation_user_fk` FOREIGN KEY (`id_user`) REFERENCES `users` (`iduser`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
