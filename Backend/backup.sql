-- MySQL dump 10.13  Distrib 8.0.41, for Linux (x86_64)
--
-- Host: database.c78uk0meaviv.us-east-1.rds.amazonaws.com    Database: Guts
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '';

--
-- Table structure for table `animals`
--

DROP TABLE IF EXISTS `animals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `animals` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `etxekoAnimalia` tinyint(1) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `animalType` varchar(255) DEFAULT NULL,
  `img` blob,
  `bakuna` int unsigned DEFAULT NULL,
  `gender` tinyint(1) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `year` datetime DEFAULT NULL,
  `losted` int unsigned DEFAULT NULL,
  `noiztik` datetime DEFAULT NULL,
  `userID` int unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `losted` (`losted`),
  KEY `bakuna` (`bakuna`),
  KEY `userID` (`userID`),
  KEY `type` (`type`),
  KEY `animalType` (`animalType`),
  KEY `descripcion` (`descripcion`),
  CONSTRAINT `animals_ibfk_1` FOREIGN KEY (`losted`) REFERENCES `losted` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `animals_ibfk_3` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `animals`
--

LOCK TABLES `animals` WRITE;
/*!40000 ALTER TABLE `animals` DISABLE KEYS */;
INSERT INTO `animals` VALUES (9,'Fido',1,'txakurra','Pastor Alemán',_binary 'http://url_del_imagen.com/fido.jpg',NULL,1,'Perro amigable y enérgico','2020-01-01 00:00:00',5,NULL,7),(28,'manuel',0,'besteak','Airedale Terrier',_binary 'http://bastbackend.ddns.net:8000/storage/images/q4ddBCZY6uN4xzozWtIlKMOscQgTGKqqP0UqZCuM.jpg',1,2,'123','2025-01-02 00:00:00',NULL,NULL,2),(29,'manuel',1,'besteak','Affenpinscher',_binary 'http://bastbackend.ddns.net:8000/storage/images/cfUSvaPj7nUGXzHAdyGdl9PrFH83ciZm7gypBJAx.jpg',2,1,'21','2025-01-01 00:00:00',NULL,NULL,1),(30,'manuel',1,'besteak','Afghan Hound',_binary 'http://bastbackend.ddns.net:8000/storage/images/33jF62ujRIfY6XYxweYmsKfXe5HlopD4kAH8dQy8.jpg',2,1,'ee','2025-01-08 00:00:00',NULL,NULL,1),(31,'manuel',1,'besteak','Afghan Hound',_binary 'http://bastbackend.ddns.net:8000/storage/images/nK1luVio3S9aM8ypPdDNfdv7pJ21WPW18s7sAOei.jpg',2,1,'ee','2025-01-08 00:00:00',NULL,NULL,1),(32,'Calcetines',1,'katua','Balinese',_binary 'http://bastbackend.ddns.net:8000/storage/images/jK2vb8nnjDqyGLRmis9j3aBXb6KMkXUBztZC1KN4.jpg',2,2,'Este dulce y cariñoso gatito de raza Balines es joven, lleno de energía.','2025-01-07 00:00:00',NULL,NULL,1),(33,'Calcetines',1,'katua','Balinese',_binary 'http://bastbackend.ddns.net:8000/storage/images/WFLLq39Eg41EF6CnTLTeuvd2GZMuK5LH5z6zJqEc.jpg',1,2,'Este dulce y cariñoso gatito de raza Balines es joven, lleno de energía.','2025-01-02 00:00:00',NULL,NULL,2),(34,'Dio',1,'txakurra','English Setter',_binary 'http://bastbackend.ddns.net:8000/storage/images/KIxQYGVe4Mw2gHRCmrW8WQml2IgLU4mKkyAktthC.jpg',1,1,'Perro preciososo','2024-03-15 00:00:00',NULL,NULL,1),(35,'Dio',1,'txakurra','English Setter',_binary 'http://bastbackend.ddns.net:8000/storage/images/ZjY9IINA59F53ODc4d9zextxsEqlHUISjL0RxQ6U.jpg',1,1,'Perro precioso','2024-03-16 00:00:00',NULL,NULL,2),(36,'Lemmy',1,'txakurra ppp','Akita',_binary 'http://bastbackend.ddns.net:8000/storage/images/ehjDPXv85OmsUINb9mDKOR89ZbTpsXAOUAtCQQsl.jpg',1,1,'Perro precioso pero peligroso','2023-04-06 00:00:00',NULL,NULL,2),(37,'Pelos',1,'besteak','Otro',_binary 'http://bastbackend.ddns.net:8000/storage/images/9sarWadxWdAKVOQgZZrgz3m70LcZtjHU4pPu0sXA.jpg',1,2,'gerdagreayhgrea','2024-01-03 00:00:00',NULL,NULL,2),(38,'Anya',1,'katua','American Wirehair',_binary 'http://bastbackend.ddns.net:8000/storage/images/g2s8HuEua9M4S58jEwgPIQDFRKrLUOYbIIgYGNI7.jpg',2,1,'greagrehtrehwtrwshtrhtrhtw','2023-04-28 00:00:00',NULL,NULL,2),(39,'Bast',1,'katua','American Wirehair',_binary 'http://bastbackend.ddns.net:8000/storage/images/1hgj7F93mDzUX5XkqVSptfAmVywZp6DI9MecWL7s.jpg',1,2,'fdsafdsafdsagergreas','2022-07-28 00:00:00',NULL,NULL,2),(40,'Eki',1,'besteak','Otro',_binary 'http://bastbackend.ddns.net:8000/storage/images/MCjqcpdVCdQWIxd9xATMydHYKuPNv2eCdDY7qcIn.jpg',1,1,'Un animal muy bonito ufhdsapojfid afnhdsujoiafndos anfjodsnafodsnafoi','2025-01-31 00:00:00',NULL,NULL,2),(41,'Penelope',1,'besteak','Otro',_binary 'http://bastbackend.ddns.net:8000/storage/images/ppbaNkqFG8zkagHJldIxjdathTqYr0jO4MwaBvkb.jpg',1,2,'fdswafsdafwa fa dfra gr gtrhtr htrejyte jy  yt jytj  uyrkuyrkukru rjy uejeheg reaqf ew','2024-10-27 00:00:00',NULL,NULL,2),(42,'Lur',1,'besteak','Otro',_binary 'http://bastbackend.ddns.net:8000/storage/images/rSggyEGfguk0OUNsmoj4M2QM6qkQyuEWjLZfj2sx.jpg',1,1,'bfhbhifvbdisabvkirbakjlnvkjnjkaignrkjengkjnrkje  rgnijunbaqig rig jribn gjnrjki girj njin jiaqgn jkrg','2024-05-10 00:00:00',NULL,NULL,2),(43,'Rayo',1,'besteak','Otro',_binary 'http://bastbackend.ddns.net:8000/storage/images/YBud2mHzOLH8gW3myKRQByhxvqopwHymnQ0p30q4.jpg',1,1,'fgdsagr greagr a','2024-10-11 00:00:00',NULL,NULL,2),(44,'Jaime',1,'besteak','Otro',_binary 'http://bastbackend.ddns.net:8000/storage/images/OTLCdWZses6s9TDaD0iYzQCp797nm5adWa60ssW6.jpg',2,2,'fdfd ga ragrg reg rea','2021-03-31 00:00:00',NULL,NULL,2),(45,'Penny',1,'besteak','Otro',_binary 'http://bastbackend.ddns.net:8000/storage/images/q0fjjmJkUYU2MSSwUQ7eHuiBmKJvrPPpUosH7Quh.jpg',2,2,'uiibhf uwesabufi auipfbdisab fi bnanfopuejoifjoiewjqaofieronre','2024-02-13 00:00:00',NULL,NULL,2),(47,'Guts',1,'txakurra ppp','American Foxhound',_binary 'https://bastbackend.ddns.net/storage/images/IkkHGnCXDJNtzUdN0OyvkYSK6wXI9xbnue6Tp60A.jpg',2,2,'loreimpusn','2025-01-28 00:00:00',NULL,NULL,1),(48,'berse',1,'txakurra ppp','Akita',_binary 'https://bastbackend.ddns.net/storage/images/COaeSPpckmO341YrLlCXOsmVWgnZwaMGJ88EzrXe.jpg',2,2,'lorem','2025-01-29 00:00:00',NULL,NULL,1),(49,'Miku',1,'katua','Tonkinese',_binary 'https://bastbackend.ddns.net/storage/images/Me8fV1ykDKSvTy0j334MQCmQ4wYVntx18aA8lhmq.png',1,2,'lorem','2021-12-15 00:00:00',NULL,NULL,1),(50,'miku2',1,'katua','Tonkinese',_binary 'https://bastbackend.ddns.net/storage/images/0HGCTgm4u74tdH0FTj9a2y1LqDGttwgaYl7DbQ7G.png',1,1,'proba','2025-02-01 00:00:00',NULL,NULL,1),(51,'miku3',1,'katua','Tonkinese',_binary 'https://bastbackend.ddns.net/storage/images/AGbpIMNm8j2DmjOCKnnVSt1DPMl1t8nl3f1kGw3T.png',1,2,'rrr','2025-01-31 00:00:00',NULL,NULL,1),(52,'miku4',1,'katua','Abyssinian',_binary 'https://bastbackend.ddns.net/storage/images/oi0WM0xptQTClHV3M8l8ZAmnqvokaicDnFJA3gwG.png',2,1,'123','2025-01-30 00:00:00',NULL,NULL,1),(53,'Miku6',0,'katua','American Curl',_binary 'https://bastbackend.ddns.net/storage/images/NU0OIlS5HXbtaboTtvjkg6moiYXiOzt3SG5PjcF1.png',1,1,'123','2025-01-29 00:00:00',NULL,NULL,1);
/*!40000 ALTER TABLE `animals` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bakuna`
--

DROP TABLE IF EXISTS `bakuna`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bakuna` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `idBakuna` int unsigned DEFAULT NULL,
  `data` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `idBakuna` (`idBakuna`),
  CONSTRAINT `bakuna_ibfk_1` FOREIGN KEY (`idBakuna`) REFERENCES `bakunaDat` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bakuna`
--

LOCK TABLES `bakuna` WRITE;
/*!40000 ALTER TABLE `bakuna` DISABLE KEYS */;
/*!40000 ALTER TABLE `bakuna` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bakunaDat`
--

DROP TABLE IF EXISTS `bakunaDat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bakunaDat` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `deskribapena` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `deskribapena` (`deskribapena`),
  CONSTRAINT `bakunaDat_ibfk_1` FOREIGN KEY (`deskribapena`) REFERENCES `translations` (`keyValue`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bakunaDat`
--

LOCK TABLES `bakunaDat` WRITE;
/*!40000 ALTER TABLE `bakunaDat` DISABLE KEYS */;
/*!40000 ALTER TABLE `bakunaDat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chats`
--

DROP TABLE IF EXISTS `chats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chats` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `chatID` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chats`
--

LOCK TABLES `chats` WRITE;
/*!40000 ALTER TABLE `chats` DISABLE KEYS */;
/*!40000 ALTER TABLE `chats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `denda`
--

DROP TABLE IF EXISTS `denda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `denda` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `idUser` int unsigned DEFAULT NULL,
  `izena` text,
  `text` varchar(255) DEFAULT NULL,
  `prezioa` float DEFAULT NULL,
  `img` blob,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `idUser` (`idUser`),
  KEY `text` (`text`),
  CONSTRAINT `denda_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `denda_ibfk_2` FOREIGN KEY (`text`) REFERENCES `translations` (`keyValue`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `denda`
--

LOCK TABLES `denda` WRITE;
/*!40000 ALTER TABLE `denda` DISABLE KEYS */;
/*!40000 ALTER TABLE `denda` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `losted`
--

DROP TABLE IF EXISTS `losted`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `losted` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `fecha` datetime DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `probintzia` varchar(255) DEFAULT NULL,
  `hiria` varchar(255) DEFAULT NULL,
  `moreInformation` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `descripcion` (`descripcion`),
  KEY `moreInformation` (`moreInformation`),
  CONSTRAINT `losted_ibfk_1` FOREIGN KEY (`descripcion`) REFERENCES `translations` (`keyValue`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `losted`
--

LOCK TABLES `losted` WRITE;
/*!40000 ALTER TABLE `losted` DISABLE KEYS */;
INSERT INTO `losted` VALUES (1,'2025-01-30 00:00:00',NULL,'Guipuzkoa','Donostia',NULL),(3,'2025-01-30 00:00:00',NULL,'Guipuzkoa','Donostia','oso animali polita'),(4,'2025-01-30 00:00:00',NULL,'Guipuzkoa','Donostia','oso animali polita'),(5,'2025-01-30 00:00:00',NULL,'Guipuzkoa','Donostia','oso animali polita');
/*!40000 ALTER TABLE `losted` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `news` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `text` varchar(255) DEFAULT NULL,
  `protektora` int unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `img` blob,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `protektora` (`protektora`),
  CONSTRAINT `news_ibfk_1` FOREIGN KEY (`protektora`) REFERENCES `protektora` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` VALUES (33,'news33',1,'2024-12-18 07:36:50','2024-12-18 07:36:50','title33',_binary 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw_Mxk9Rqv4RjD6nLp-Zb8Qi62-_mpIL4z7A&s'),(34,'news34',1,'2024-12-18 07:36:50','2024-12-18 07:36:50','title34',_binary 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw_Mxk9Rqv4RjD6nLp-Zb8Qi62-_mpIL4z7A&s'),(35,'news35',1,'2024-12-18 07:37:55','2024-12-18 07:37:55','title35',_binary 'https://static.abc.es/media/sociedad/2021/11/04/gatos-comer-ky1H--1200x630@abc.jpg'),(36,'news36',1,'2024-12-18 07:39:08','2024-12-18 07:39:08','title36',_binary 'https://www.superpet.club/blog/wp-content/uploads/2024/09/gato-jugando-o-peleando.webp'),(37,'news37',1,'2024-12-18 07:39:09','2024-12-18 07:39:09','title37',_binary 'https://www.superpet.club/blog/wp-content/uploads/2024/09/gato-jugando-o-peleando.webp'),(38,'news38',1,'2024-12-18 07:39:09','2024-12-18 07:39:09','title38',_binary 'https://www.superpet.club/blog/wp-content/uploads/2024/09/gato-jugando-o-peleando.webp'),(39,'news39',1,'2024-12-18 07:40:19','2024-12-18 07:40:19','title39',_binary 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQmqA-1yEZ2QciYRk6weALwvpyCWBJcihEHQ&s'),(40,'news40',1,'2024-12-18 07:41:51','2024-12-18 07:41:51','title40',_binary 'https://i.pinimg.com/736x/1b/1a/60/1b1a6078313efc448b3e5ced034afac3.jpg'),(41,'news41',1,'2024-12-18 07:41:53','2024-12-18 07:41:53','title41',_binary 'https://i.pinimg.com/736x/1b/1a/60/1b1a6078313efc448b3e5ced034afac3.jpg'),(42,'news42',1,'2024-12-18 07:43:47','2024-12-18 07:43:47','title42',_binary 'https://www.hola.com/horizon/square/2f6d31421d05-galgo-afgano-t.jpg?im=Resize=(640),type=downsize'),(44,'news44',1,'2024-12-18 07:54:13','2024-12-18 07:54:13','title44',_binary 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO7bOfBsmhU_djVmxnh_aWU0oUSOYLY4RASg&s'),(45,'news45',1,'2024-12-18 07:54:13','2024-12-18 07:54:13','title45',_binary 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO7bOfBsmhU_djVmxnh_aWU0oUSOYLY4RASg&s'),(46,'news46',1,'2024-12-18 07:54:56','2024-12-18 07:54:56','title46',_binary 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWH8wieScSwy9vk9f_nCiLGaRiZSWLahSVcg&s'),(47,'news47',1,'2024-12-18 07:54:56','2024-12-18 07:54:56','title47',_binary 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWH8wieScSwy9vk9f_nCiLGaRiZSWLahSVcg&s'),(48,'news48',1,'2024-12-18 07:55:47','2024-12-18 07:55:47','title48',_binary 'https://cdn.shopify.com/s/files/1/0268/6861/files/What-birds-can-you-keep-as-pets_grande.jpg?v=1538160612'),(72,'news72',1,'2025-01-16 07:54:58','2025-01-16 07:54:58','title72',_binary 'http://bastbackend.ddns.net:8000/storage/images/GUt4rgF1mhVabcJqWztm0px1DQd1QqSBnPtiZ96O.jpg');
/*!40000 ALTER TABLE `news` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_id` int unsigned NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` text NOT NULL,
  `abilities` json DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `personal_access_tokens_token_index` (`token`(255)),
  KEY `personal_access_tokens_tokenable_id_foreign` (`tokenable_id`),
  CONSTRAINT `personal_access_tokens_tokenable_id_foreign` FOREIGN KEY (`tokenable_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=120 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
INSERT INTO `personal_access_tokens` VALUES (1,1,'App\\Models\\User','Bast','e9ae2f2d24d85c70c9291abb69bb7939857b7ace4917459432c33c304746025a','[\"view_content\"]','2024-12-17 08:06:31','2024-12-12 08:06:31','2024-12-12 08:06:31',NULL),(2,1,'App\\Models\\User','Bast','b7236dcf8fa0dda76bd82f214711ee486a92ec62859f3b8b68dccad617790266','[\"view_content\"]','2024-12-17 08:37:09','2024-12-12 08:37:09','2024-12-16 12:56:52','2024-12-16 12:56:52'),(3,2,'App\\Models\\User','Bast','5043b081650866ff290f28d6da0844e09f53ab7adccc85ebebb3274bcda2e322','[\"view_content\"]','2024-12-18 09:53:19','2024-12-13 09:53:19','2024-12-13 09:53:19',NULL),(4,2,'App\\Models\\User','Bast','34064a03268a3adcaec8c5a13b8e0ad015a00791642416cd1cd0d715436342be','[\"view_content\"]','2024-12-18 09:54:28','2024-12-13 09:54:28','2024-12-13 09:54:28',NULL),(5,2,'App\\Models\\User','Bast','f2bf537bda494181d4847c4835e09fe0506d37197b426bbff86c279e5d655c81','[\"view_content\"]','2024-12-18 09:55:21','2024-12-13 09:55:21','2024-12-13 09:55:21',NULL),(6,2,'App\\Models\\User','Bast','a9ffd7976ae462ddd7a5f6cfb6f16a0948674b345b389e68223e50d132dee541','[\"view_content\"]','2024-12-18 09:55:33','2024-12-13 09:55:33','2024-12-13 09:55:33',NULL),(7,2,'App\\Models\\User','Bast','8f95bfb20a1517d21ec02c8f17f496e049070d1192545af496042b333009ac3e','[\"view_content\"]','2024-12-18 09:55:40','2024-12-13 09:55:40','2024-12-13 09:55:40',NULL),(8,2,'App\\Models\\User','Bast','b7725cf562e70532f87feb0e4c241fc28afc9f8469a26086af9764a9575c2519','[\"view_content\"]','2024-12-18 09:56:22','2024-12-13 09:56:22','2024-12-13 09:56:22',NULL),(9,2,'App\\Models\\User','Bast','93a1222ebca108780d2a15e090e34cc9881dc820404690a07f859ad11cda4237','[\"view_content\"]','2024-12-18 09:56:30','2024-12-13 09:56:30','2024-12-13 09:56:30',NULL),(10,2,'App\\Models\\User','Bast','9412e8c5353a3c5d34a08f841d4e0aac097d28d65bc1cb8d496f4eaee758a0f4','[\"view_content\"]','2024-12-18 09:57:04','2024-12-13 09:57:04','2024-12-13 09:57:04',NULL),(11,2,'App\\Models\\User','Bast','4b457c7f6543805679751540da7ce1be59c3865c9d7ba7e56533951be5c057f5','[\"view_content\"]','2024-12-18 09:57:44','2024-12-13 09:57:44','2024-12-13 09:57:44',NULL),(12,2,'App\\Models\\User','Bast','14a1b84ff5d2d10515bf4528c209661876ee928c5b632961085c8fdcbc53a0f0','[\"view_content\"]','2024-12-18 09:58:46','2024-12-13 09:58:46','2024-12-13 09:58:46',NULL),(13,2,'App\\Models\\User','Bast','869cd6ea06a4d06c0833901ce23d80075c4ed221e1a7839eb5253048304a966a','[\"view_content\"]','2024-12-18 10:01:10','2024-12-13 10:01:10','2024-12-13 10:01:10',NULL),(14,2,'App\\Models\\User','Bast','752820dd6b440a33365103b5a20828e27096839599aaf0ee0c668b72d04919e6','[\"view_content\"]','2024-12-18 10:02:40','2024-12-13 10:02:40','2024-12-13 10:02:40',NULL),(15,2,'App\\Models\\User','Bast','93f79297610d8ff03d852aa5c82b3fe1ae3fcdf3012c8e6204ccdd25980338a3','[\"view_content\"]','2024-12-18 10:25:50','2024-12-13 10:25:50','2024-12-13 10:25:50',NULL),(16,2,'App\\Models\\User','Bast','dba03bbd4df3f62dcc924f9f9986133b639b396b96b87be88285d419943dff7c','[\"view_content\"]','2024-12-18 10:27:04','2024-12-13 10:27:04','2024-12-13 10:27:04',NULL),(17,1,'App\\Models\\User','Bast','1c57a82e87fbc0e5444e63a0cc2c4c2d49f9eb51c7559e928791f2235c28335b','[\"view_content\"]','2024-12-18 10:37:05','2024-12-13 10:37:05','2024-12-13 10:37:05',NULL),(18,2,'App\\Models\\User','Bast','035967ebc55a9073d591c66ed1437a3e5f1b768468df3cdbc19ed00f77fa9485','[\"view_content\"]','2024-12-18 10:40:35','2024-12-13 10:40:35','2024-12-13 10:40:35',NULL),(19,2,'App\\Models\\User','Bast','d0459c2200837b7625034053d10fd14eacde4c9268e939b2d3412a093f12010d','[\"view_content\"]','2024-12-18 12:11:11','2024-12-13 12:11:11','2024-12-13 12:11:11',NULL),(20,2,'App\\Models\\User','Bast','bad5e75e5993f65f14a0939ec87c835aea91852a1179308820008807345c65cd','[\"view_content\"]','2024-12-18 12:25:49','2024-12-13 12:25:49','2024-12-13 12:25:49',NULL),(21,1,'App\\Models\\User','Bast','4450d63dbc30d3a04df5239a23fca5a227faa752abefaae72dc32df18ab220be','[\"view_content\"]','2024-12-18 12:26:14','2024-12-13 12:26:14','2024-12-13 12:26:14',NULL),(22,1,'App\\Models\\User','Bast','f636352a570fb7b6082a902ee8789e513e4565d4c1ca94837b020e8d80a457dc','[\"view_content\"]','2024-12-19 10:58:29','2024-12-14 10:58:29','2024-12-14 11:56:02','2024-12-14 11:56:02'),(23,2,'App\\Models\\User','Bast','cc48f93574e1708c072b2d7ebc2a06dab502cf96d291d9243057d390ebcb5a5e','[\"view_content\"]','2024-12-19 12:00:39','2024-12-14 12:00:39','2024-12-14 12:00:57','2024-12-14 12:00:57'),(24,1,'App\\Models\\User','Bast','942acbdd1c6ec2f639e1a9dbe6d958183443dbb0cff2e2b9fe309ccdc1e5b4a5','[\"view_content\"]','2024-12-20 12:14:11','2024-12-15 12:14:11','2024-12-15 12:15:23','2024-12-15 12:15:23'),(25,1,'App\\Models\\User','Bast','d1f56a8eedd1fd78c3bdc636461a08596d003a02b4227093050fa97fd130215b','[\"view_content\"]','2024-12-21 07:21:57','2024-12-16 07:21:57','2024-12-16 12:45:48','2024-12-16 12:45:48'),(26,1,'App\\Models\\User','Bast','901111b8e322f94f7d121bac1551e055ebff08fd6fd81c01ad9eb916f9a77ce9','[\"view_content\"]','2024-12-21 07:39:36','2024-12-16 07:39:36','2024-12-16 07:39:36',NULL),(27,1,'App\\Models\\User','Bast','d607f80e806576357301057da1395e0b1c9f0b6a56686bed74edbbe8aa6e2470','[\"view_content\"]','2024-12-21 07:39:37','2024-12-16 07:39:37','2024-12-16 07:39:37',NULL),(28,1,'App\\Models\\User','Bast','cab4c707a1dc2eadc39caaf1c526934726d790a56af895c9aa7012e8515eb5e8','[\"view_content\"]','2024-12-22 07:37:51','2024-12-17 07:37:51','2024-12-17 07:37:51',NULL),(29,1,'App\\Models\\User','Bast','2835960ebd003fe77bf6f63f98e510ad88d5067d0d65ccad9bb797b47cd83188','[\"view_content\"]','2024-12-22 07:37:53','2024-12-17 07:37:53','2024-12-17 07:37:53',NULL),(30,1,'App\\Models\\User','Bast','4e038f94a3b6870f667894ef94ff04acd89ae0096c5032873e5b87674e44c08e','[\"view_content\"]','2024-12-22 08:33:42','2024-12-17 08:33:42','2024-12-17 08:33:42',NULL),(31,1,'App\\Models\\User','Bast','ab4f2961cd27d9eb5c10bc5a1351f3dfa6b887900a982b5bbb9f82baad4d7b0a','[\"view_content\"]','2024-12-22 12:34:27','2024-12-17 12:34:27','2024-12-17 12:34:27',NULL),(32,1,'App\\Models\\User','Bast','0cd1487afaee077c393f4b95c356234bd3ca709d470bcfc08250c7487461af8d','[\"view_content\"]','2024-12-22 12:35:37','2024-12-17 12:35:37','2024-12-17 12:35:37',NULL),(33,1,'App\\Models\\User','Bast','c01a64b2f37dca195a8a094fc2d2bd783fa4023996c7de5bc93876bbad445f3c','[\"view_content\"]','2024-12-22 12:42:56','2024-12-17 12:42:56','2024-12-17 12:42:56',NULL),(34,1,'App\\Models\\User','Bast','437c478d31c7edef4ba8dd49d4d801f17ef4b6211cae447de73d0e76ef454645','[\"view_content\"]','2024-12-23 07:32:52','2024-12-18 07:32:52','2024-12-18 07:55:47','2024-12-18 07:55:47'),(35,1,'App\\Models\\User','Bast','e5b19336413513ca6bfb2a527982cc3af80dfc4b50848bfc4b22b583ed0d4fdb','[\"view_content\"]','2024-12-23 11:56:22','2024-12-18 11:56:22','2024-12-18 11:56:22',NULL),(36,1,'App\\Models\\User','Bast','5a0b169c60277f2e3672c3a9460ccaf86186c85f8b9b898a392ad5b63b373b63','[\"view_content\"]','2024-12-23 11:57:23','2024-12-18 11:57:23','2024-12-18 11:58:56','2024-12-18 11:58:56'),(37,1,'App\\Models\\User','Bast','796e2be7d9f1a9717844ee3aa652f3b08e332a75af7c304732b1216d0a2809d7','[\"view_content\"]','2024-12-23 12:16:46','2024-12-18 12:16:46','2024-12-18 12:16:46',NULL),(38,2,'App\\Models\\User','Bast','ef30ad38cc9ac04c16a1a44283e3193490f4c5d0943eb9c003a6fb648ec8be62','[\"view_content\"]','2025-01-12 12:04:09','2025-01-07 12:04:09','2025-01-07 12:44:17','2025-01-07 12:44:17'),(39,1,'App\\Models\\User','Bast','7206b31116b5e0d896c02f79d1920580b86b56b6430d73aa9ba429ceea7b6808','[\"view_content\"]','2025-01-12 12:05:23','2025-01-07 12:05:23','2025-01-07 12:05:45','2025-01-07 12:05:45'),(40,1,'App\\Models\\User','Bast','1b96661a289e000f2f41c96ed0b2af5aea9ccf7574a07a659b227ae962ad3358','[\"view_content\"]','2025-01-12 12:23:06','2025-01-07 12:23:06','2025-01-07 12:23:06',NULL),(41,1,'App\\Models\\User','Bast','0ee36c65ffd86a217cd7bac072ee124bb3df0d8a2431e36110d63d1a121fb1e6','[\"view_content\"]','2025-01-12 12:44:52','2025-01-07 12:44:52','2025-01-07 12:45:58','2025-01-07 12:45:58'),(42,1,'App\\Models\\User','Bast','8d1e3c9412435e7224ea220c9d12e8389e4615e3533185c76235c7832725aa90','[\"view_content\"]','2025-01-13 07:49:22','2025-01-08 07:49:22','2025-01-08 08:38:35','2025-01-08 08:38:35'),(43,1,'App\\Models\\User','Bast','44fe13770afd8704b853bee4b0f475c13817b11a5c0a3b1440364fcf12c0a529','[\"view_content\"]','2025-01-13 08:08:50','2025-01-08 08:08:50','2025-01-08 08:08:50',NULL),(44,1,'App\\Models\\User','Bast','f72a09c8f47a32965e3c25cf74c7f2e104c77af05b927b163fbc7631c491cbec','[\"view_content\"]','2025-01-13 08:12:54','2025-01-08 08:12:54','2025-01-08 08:12:54',NULL),(48,7,'App\\Models\\User','Bast','43c76c41affb4481bf2312dec87154d71630fe16ac9dc042eba10be6ddd8fd2d','[\"view_content\"]','2025-01-14 19:48:12','2025-01-09 19:48:12','2025-01-09 19:48:12',NULL),(49,7,'App\\Models\\User','Bast','2d2b70e1fccf473255add1a4688e9d52330b3394a97c9930627c4e4ebc43cdce','[\"view_content\"]','2025-01-14 19:49:17','2025-01-09 19:49:17','2025-01-09 19:49:17',NULL),(50,1,'App\\Models\\User','Bast','1c894d1f23bdd20851f4460a2c4be2d384ecb23c5c62af45b4ae80c3a8d64160','[\"view_content\"]','2025-01-18 09:54:35','2025-01-13 09:54:35','2025-01-13 09:54:35',NULL),(51,1,'App\\Models\\User','Bast','85a19a515bb65ab61a22af464ce55a7b25dde6657b5ea1fa49f4750ad8700b72','[\"view_content\"]','2025-01-18 09:54:36','2025-01-13 09:54:36','2025-01-13 09:54:36',NULL),(52,1,'App\\Models\\User','Bast','65fee1b135cc460582a24e35bd93b44714e7d7c2f54e95e4fa79edfecfbac0e1','[\"view_content\"]','2025-01-18 11:19:23','2025-01-13 11:19:23','2025-01-13 11:23:00','2025-01-13 11:23:00'),(53,1,'App\\Models\\User','Bast','c1b123df57ace063bab05e474f682cb3de12c51ae28f109c790dd5c0d273be9f','[\"view_content\"]','2025-01-18 11:23:09','2025-01-13 11:23:09','2025-01-13 11:45:45','2025-01-13 11:45:45'),(54,1,'App\\Models\\User','Bast','601e9a993fa58c24e8bc22e54cde2c0f78eb2f7ce7fe3f8a78d258b3a30dcfca','[\"view_content\"]','2025-01-18 11:41:04','2025-01-13 11:41:04','2025-01-13 11:41:04',NULL),(55,1,'App\\Models\\User','Bast','bce2f77c421f8973976e3fbb0304849967b1226351206e1dc6532f6a14a04a1b','[\"view_content\"]','2025-01-18 12:22:01','2025-01-13 12:22:01','2025-01-16 10:05:21','2025-01-16 10:05:21'),(56,1,'App\\Models\\User','Bast','b2fd21bf286f21c446b39268b516615b48eba6a8a21fdc6502d973bfa0792c7d','[\"view_content\"]','2025-04-13 12:56:16','2025-01-13 12:56:16','2025-01-14 12:28:14','2025-01-14 12:28:14'),(57,7,'App\\Models\\User','Bast','19a0e337b4dbcba753ea3710de549605452652e51c349acd4d4c21c8b0927030','[\"view_content\"]','2025-04-13 14:50:29','2025-01-13 14:50:29','2025-01-13 18:41:45','2025-01-13 18:41:45'),(58,1,'App\\Models\\User','Bast','2eb42736e8368f7a69bd6508ebccc5aa7247e6ec505959936dbcd52a80f59c9c','[\"view_content\"]','2025-04-14 07:55:38','2025-01-14 07:55:38','2025-01-14 10:10:06','2025-01-14 10:10:06'),(59,1,'App\\Models\\User','Bast','bd86abaa7babeb0c0b15c4c2c754eee20c769a7f9e9c6540d1cf299eb93ce1c8','[\"view_content\"]','2025-04-14 08:43:13','2025-01-14 08:43:13','2025-01-15 11:07:23','2025-01-15 11:07:23'),(60,1,'App\\Models\\User','Bast','dd5a314b3d7a96e1eaf3364c3afa2c8e2b766b8a7af9e4361c624943f4c5ea07','[\"view_content\"]','2025-04-14 10:17:01','2025-01-14 10:17:01','2025-01-14 10:17:01',NULL),(61,1,'App\\Models\\User','Bast','b067304afefd0d1472f110401c334ae310ca3978ccbd3c0d87f4e69c0d021ba8','[\"view_content\"]','2025-04-14 11:45:56','2025-01-14 11:45:56','2025-01-14 12:29:27','2025-01-14 12:29:27'),(62,1,'App\\Models\\User','Bast','6524e252b8478c2f6e31638bbbc15209eb04029885da3d538cab090a703668f8','[\"view_content\"]','2025-04-14 12:30:58','2025-01-14 12:30:58','2025-01-14 12:57:42','2025-01-14 12:57:42'),(63,7,'App\\Models\\User','Bast','d7a2a02dfcd702dbf111fa76bd38910e73cee6a5421b628c0859a05a6a06f146','[\"view_content\"]','2025-04-14 17:47:50','2025-01-14 17:47:50','2025-01-14 18:00:58','2025-01-14 18:00:58'),(64,7,'App\\Models\\User','Bast','16cf34a8d890af8f2e09252d432a745c13503b200ffecc2fcc34e5521939d792','[\"view_content\"]','2025-04-14 18:02:10','2025-01-14 18:02:11','2025-02-04 16:29:35','2025-02-04 16:29:35'),(65,7,'App\\Models\\User','Bast','9976f8943614628e6f1f58b974e3627ab7078a10e8f36f60d9f6662f08551730','[\"view_content\"]','2025-04-14 18:08:53','2025-01-14 18:08:53','2025-01-14 19:59:48','2025-01-14 19:59:48'),(66,7,'App\\Models\\User','Bast','905077950485a573ea6948f33ee388829a81fb6b768e35e0106e749161a69010','[\"view_content\"]','2025-04-15 07:21:29','2025-01-15 07:21:29','2025-01-15 07:21:32','2025-01-15 07:21:32'),(67,1,'App\\Models\\User','Bast','e43418f0c051d02a7bd6d22c6af5fd4471d1ef59856b556e6b9fef60ec029717','[\"view_content\"]','2025-04-15 07:21:53','2025-01-15 07:21:53','2025-01-15 07:21:56','2025-01-15 07:21:56'),(68,7,'App\\Models\\User','Bast','83a4df9671852e7a4e51afcb2277d249d7ab1bcd841e6707317022219f628fc1','[\"view_content\"]','2025-04-15 07:22:13','2025-01-15 07:22:13','2025-01-15 08:02:30','2025-01-15 08:02:30'),(69,7,'App\\Models\\User','Bast','fe478fe906456eec2ab7ee258cf2bdde4d27ac1eba251926b41e8adc9bc6a50f','[\"view_content\"]','2025-04-15 08:02:50','2025-01-15 08:02:50','2025-01-15 08:07:08','2025-01-15 08:07:08'),(70,7,'App\\Models\\User','Bast','db13b655f0833f910200325ca9c387783703748926b8f4d1e256cfc4909bca60','[\"view_content\"]','2025-04-15 08:10:21','2025-01-15 08:10:21','2025-01-15 08:22:55','2025-01-15 08:22:55'),(71,7,'App\\Models\\User','Bast','2a8595cd2767419e82be42a0509ba7ae187a99dd24b76e634fff417d891356a7','[\"view_content\"]','2025-04-15 08:23:16','2025-01-15 08:23:16','2025-01-15 08:31:15','2025-01-15 08:31:15'),(72,7,'App\\Models\\User','Bast','8e74ac4b78b5928631fd2a1dfc888652eb261be2ce72f5a319b2e1b15497c1ca','[\"view_content\"]','2025-04-15 08:30:47','2025-01-15 08:30:47','2025-01-15 08:31:01','2025-01-15 08:31:01'),(73,1,'App\\Models\\User','Bast','7bf58bc085ab26c7e5bf02be688bce1755cc99b02f87a26528837d8714f38fcf','[\"view_content\"]','2025-04-15 11:08:46','2025-01-15 11:08:46','2025-01-15 11:08:46',NULL),(74,2,'App\\Models\\User','Bast','5588967110ca98b06f269e49ffc493996b6cbbda052a63f480badb88ee66789f','[\"view_content\"]','2025-04-15 11:12:29','2025-01-15 11:12:29','2025-01-15 12:20:49','2025-01-15 12:20:49'),(75,2,'App\\Models\\User','Bast','312c77f8733ce73157195aea7585f05f64451b2d07098dedb4cd1a2843195b41','[\"view_content\"]','2025-04-15 12:32:41','2025-01-15 12:32:41','2025-02-04 10:32:08','2025-02-04 10:32:08'),(76,2,'App\\Models\\User','Bast','64f6c23a00c42adaf89b0de2d2173057923468f87d445423b22b5646f3092f8e','[\"view_content\"]','2025-04-15 12:33:33','2025-01-15 12:33:33','2025-01-15 13:13:40','2025-01-15 13:13:40'),(77,2,'App\\Models\\User','Bast','998dcc7e5fc3e6e8aabdc34961a00d36cf63c8d93bdae732fbb2cd559f3a0a71','[\"view_content\"]','2025-04-15 16:40:47','2025-01-15 16:40:47','2025-01-15 16:41:39','2025-01-15 16:41:39'),(78,1,'App\\Models\\User','Bast','8c1d4017c908b7ac3fd088434d4001e043a3d8ca1e5e545269278fdd3b143f4b','[\"view_content\"]','2025-04-15 19:43:45','2025-01-15 19:43:45','2025-01-15 19:43:45',NULL),(79,1,'App\\Models\\User','Bast','81b2575709eb7ac7968b2d35c01892ff53d0899fbfab9b7d9e72da987d896c70','[\"view_content\"]','2025-04-15 19:46:33','2025-01-15 19:46:33','2025-01-15 19:46:33',NULL),(80,1,'App\\Models\\User','Bast','72e985269cd454cc67ddb39288af61b1217778a701bb92098153531807e3b481','[\"view_content\"]','2025-04-15 19:48:12','2025-01-15 19:48:12','2025-01-16 16:11:33','2025-01-16 16:11:33'),(81,1,'App\\Models\\User','Bast','a8aceb0678c2e95fee07a8e9a653f7fde99f86d226e67eaf2ad1bff77cd25990','[\"view_content\"]','2025-04-15 19:48:45','2025-01-15 19:48:45','2025-01-15 19:48:45',NULL),(82,1,'App\\Models\\User','Bast','a9075619f24d1ae32121c77d031ae8ef16507eeb8b7b317cde74e6fc68999518','[\"view_content\"]','2025-04-15 19:49:59','2025-01-15 19:49:59','2025-01-15 19:49:59',NULL),(83,1,'App\\Models\\User','Bast','bef0e3b12503d557850b133b2701cdf3f816d44a2cb0060cde86c347991ce286','[\"view_content\"]','2025-04-15 19:50:35','2025-01-15 19:50:35','2025-01-15 19:50:45','2025-01-15 19:50:45'),(84,1,'App\\Models\\User','Bast','338d6b14e73af32b0abd3f5b408f4032c705b6a093eec62ff32f0f5e2f47b44a','[\"view_content\"]','2025-04-15 19:51:02','2025-01-15 19:51:02','2025-01-16 18:08:31','2025-01-16 18:08:31'),(85,1,'App\\Models\\User','Bast','80daaae367f52baedc9df95484641dcfc22f78986949cfa1b7dac42f34a485d6','[\"view_content\"]','2025-04-16 07:20:02','2025-01-16 07:20:02','2025-01-16 07:20:02',NULL),(86,2,'App\\Models\\User','Bast','1c9e3270bcfa390b09ce972649b298f41039ff5ecb5bb03929f23e2eec3a1523','[\"view_content\"]','2025-04-16 07:51:32','2025-01-16 07:51:32','2025-01-16 07:51:32',NULL),(87,1,'App\\Models\\User','Bast','773e77289674e9274d836c7078ec134f21741f924a690933eb8a8b0487734b23','[\"view_content\"]','2025-04-16 07:51:56','2025-01-16 07:51:56','2025-01-16 09:21:00','2025-01-16 09:21:00'),(88,1,'App\\Models\\User','Bast','2d6fe34c09d412c520805979ddcaaca6d9cccffe40bc75794663f06670650539','[\"view_content\"]','2025-04-16 09:08:42','2025-01-16 09:08:42','2025-01-16 09:08:42',NULL),(89,2,'App\\Models\\User','Bast','0f58dea3ef52bdb6b069ab0fcc6b7405aa22d92a938c39b7770e9345b9f4a01d','[\"view_content\"]','2025-04-16 09:23:53','2025-01-16 09:23:53','2025-01-16 09:24:28','2025-01-16 09:24:28'),(90,1,'App\\Models\\User','Bast','dac7f465a47a3f64add5279c8240c5a363bef60c4f0027a01d0f8f46934a0afb','[\"view_content\"]','2025-04-16 10:05:50','2025-01-16 10:05:50','2025-01-16 10:36:12','2025-01-16 10:36:12'),(91,1,'App\\Models\\User','Bast','891e7d36df39696399208b183cfc44a75adfbeb4b9251ae392f12aa6efb8344f','[\"view_content\"]','2025-04-16 15:54:53','2025-01-16 15:54:53','2025-01-16 15:56:18','2025-01-16 15:56:18'),(92,1,'App\\Models\\User','Bast','9da604ecb8e10a1fb5cee525f71613e1ae9b58cc147830523cace5030fa725e0','[\"view_content\"]','2025-04-16 19:42:04','2025-01-16 19:42:04','2025-01-16 19:42:04',NULL),(93,1,'App\\Models\\User','Bast','ece12cb22459aa558b23bad967c5f057070928190e996b780427acb7b451fbf1','[\"view_content\"]','2025-04-16 20:20:00','2025-01-16 20:20:00','2025-01-16 20:21:14','2025-01-16 20:21:14'),(94,2,'App\\Models\\User','Bast','df7d49913288f244cd6fc04a65e5399560700fcd5fc9d63cae9b71d43e7052d9','[\"view_content\"]','2025-04-17 12:02:28','2025-01-17 12:02:28','2025-01-17 12:05:16','2025-01-17 12:05:16'),(95,2,'App\\Models\\User','Bast','45a32bd28ad8322b35c5a01eb7b8b69739eb76ba0ad5c4c794eb55542d599a6e','[\"view_content\"]','2025-04-17 12:05:59','2025-01-17 12:05:59','2025-01-17 12:06:06','2025-01-17 12:06:06'),(96,1,'App\\Models\\User','Bast','3069b2a96112de27cc8c456a95c941d0c6ff82881126ef1cb3ceb9ed8e7f3796','[\"view_content\"]','2025-04-17 12:06:32','2025-01-17 12:06:32','2025-01-17 12:08:58','2025-01-17 12:08:58'),(97,2,'App\\Models\\User','Bast','68b1f00c9381e36e8d386822b34c8df0f34be76b51d44222ed8c04fd10231dc2','[\"view_content\"]','2025-04-18 17:57:12','2025-01-18 17:57:12','2025-01-18 17:57:36','2025-01-18 17:57:36'),(98,1,'App\\Models\\User','Bast','6348dc8b3ee8f1f9eeaed5b1f0d51e0a161cd0a514fee3d9bff7f9c3549361a4','[\"view_content\"]','2025-04-18 17:59:20','2025-01-18 17:59:20','2025-02-04 16:26:01','2025-02-04 16:26:01'),(99,1,'App\\Models\\User','Bast','262b99e52ce324c7269df7a6dc9fd4ea3c80047ea96ae94efdf1ae6e8179df28','[\"view_content\"]','2025-04-27 07:34:30','2025-01-27 07:34:30','2025-01-27 07:42:46','2025-01-27 07:42:46'),(100,1,'App\\Models\\User','Bast','a5295b128cb536673caf4fe2a5a295320f6672c51200a665e54d381a7e0e7690','[\"view_content\"]','2025-04-27 09:47:40','2025-01-27 09:47:40','2025-01-27 09:47:40',NULL),(101,1,'App\\Models\\User','Bast','b16f531a9d25b7aa3b02a8e33472190cca99942fa2d807757557d4d33bed7f63','[\"view_content\"]','2025-04-27 12:36:07','2025-01-27 12:36:07','2025-01-27 12:40:24','2025-01-27 12:40:24'),(102,2,'App\\Models\\User','Bast','a65d13555401f937f83a41fab2a3cefe5d23819e32905bfdcdc3c53c7422935e','[\"view_content\"]','2025-04-27 12:41:11','2025-01-27 12:41:11','2025-02-05 07:26:11','2025-02-05 07:26:11'),(103,1,'App\\Models\\User','Bast','6b030ea5736a5479eb3ecf6ba8131d9fa5b0a1274c4533aeb546ce14a6d4273b','[\"view_content\"]','2025-04-29 08:46:19','2025-01-29 08:46:19','2025-01-29 08:46:22','2025-01-29 08:46:22'),(104,2,'App\\Models\\User','Bast','32631248c9da06ea7deaaf04c7abfc14a8033e12277fd61222042cd99fe3b633','[\"view_content\"]','2025-05-01 09:15:44','2025-01-31 09:15:44','2025-01-31 10:10:16','2025-01-31 10:10:16'),(105,1,'App\\Models\\User','Bast','88374f74a18f7029312e5635ab0cfe7f2dfd3bcbf263ef602ac6dde7c027029d','[\"view_content\"]','2025-05-01 10:11:10','2025-01-31 10:11:10','2025-01-31 12:06:14','2025-01-31 12:06:14'),(106,1,'App\\Models\\User','Bast','dcab28f12b86b1fb1173ef162e9d071813903e01a882f2efb91b8e0b79a3ef53','[\"view_content\"]','2025-05-03 16:08:34','2025-02-02 16:08:34','2025-02-02 16:28:43','2025-02-02 16:28:43'),(107,1,'App\\Models\\User','Bast','4217a8bc5ddcfeed0001c91fb6b5c1d00a960a945d36d56994ad47589303f6f1','[\"view_content\"]','2025-05-04 07:27:58','2025-02-03 07:27:58','2025-02-03 07:28:05','2025-02-03 07:28:05'),(108,1,'App\\Models\\User','Bast','5bfc251aef5789e9de8d18afba215b30bd7c764728f5fd77b7eb7b4945a14c40','[\"view_content\"]','2025-05-04 10:01:19','2025-02-03 10:01:19','2025-02-03 10:01:19',NULL),(109,2,'App\\Models\\User','Bast','aaafa2bf86e41a1fedd1fd5ed9ca53c8f302a6d04767522d26b3e16399fddb16','[\"view_content\"]','2025-05-04 10:02:28','2025-02-03 10:02:28','2025-02-04 12:55:47','2025-02-04 12:55:47'),(110,2,'App\\Models\\User','Bast','c6163c25993764127de5c055ee0fc495ebac0995c8d94d8838d99501f4d058c7','[\"view_content\"]','2025-05-05 10:28:53','2025-02-04 10:28:53','2025-02-04 10:33:20','2025-02-04 10:33:20'),(111,17,'App\\Models\\User','Bast','56967ae36ff22629de9239b7b97059f7ae01f497072f5afdd7cb9df93bebb9b0','[\"view_content\"]','2025-05-05 11:45:38','2025-02-04 11:45:38','2025-02-04 11:45:38',NULL),(112,1,'App\\Models\\User','Bast','c81d28c00e3ebc9d91b5de85b7e1e80e083da8480776adcc93f64409460ff4cb','[\"view_content\"]','2025-05-05 11:56:09','2025-02-04 11:56:09','2025-02-04 11:56:09',NULL),(113,1,'App\\Models\\User','Bast','f13fc9f7380a3c95bd36cfc1636c5e7ec3adad0ab32dadafe9d211dc0994e48e','[\"view_content\"]','2025-05-05 16:28:55','2025-02-04 16:28:55','2025-02-04 16:28:55',NULL),(114,2,'App\\Models\\User','Bast','9848bc81896a038525570c048a5a0d35a471f347d829bd15a4e5e3b1176e2bf4','[\"view_content\"]','2025-05-06 07:26:40','2025-02-05 07:26:40','2025-02-05 07:34:26','2025-02-05 07:34:26'),(115,1,'App\\Models\\User','Bast','e1ef1b7d48dd225590bb5c308d20ac02ed6149d9f40fba49ffea8fd7d73d4af8','[\"view_content\"]','2025-05-06 07:35:36','2025-02-05 07:35:36','2025-02-05 09:19:31','2025-02-05 09:19:31'),(116,1,'App\\Models\\User','Bast','cabeb982ee72a52716eb77d12c7e84bef6cd1d89906a622b3aa4dcaedf73a9eb','[\"view_content\"]','2025-05-06 08:11:08','2025-02-05 08:11:08','2025-02-05 11:58:31','2025-02-05 11:58:31'),(117,1,'App\\Models\\User','Bast','e40177f66e065649e3d0366f660d990445c82705a7a7c79c097923c56a402cd8','[\"view_content\"]','2025-05-06 09:22:30','2025-02-05 09:22:30','2025-02-05 09:22:36','2025-02-05 09:22:36'),(118,1,'App\\Models\\User','Bast','e7d49d23a3e392a9dbbfe838647555109a03ee9bd5b9910fcfef8751dbc97e3c','[\"view_content\"]','2025-05-06 09:34:59','2025-02-05 09:34:59','2025-02-05 09:34:59',NULL),(119,1,'App\\Models\\User','Bast','df8d396b1771c8e58407cdce97bb120b7c36709fab5dbaac725a30d36dc2d9dc','[\"view_content\"]','2025-05-06 11:53:35','2025-02-05 11:53:35','2025-02-05 11:57:39','2025-02-05 11:57:39');
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `protektora`
--

DROP TABLE IF EXISTS `protektora`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `protektora` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `telefono` int DEFAULT NULL,
  `provintzia` varchar(255) DEFAULT NULL,
  `hiria` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `logo` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `protektora`
--

LOCK TABLES `protektora` WRITE;
/*!40000 ALTER TABLE `protektora` DISABLE KEYS */;
INSERT INTO `protektora` VALUES (1,'Protektora A',912345678,NULL,NULL,'contacto@protektoraA.com','https://www.ejemplo.com/logoA'),(2,'Protektora B',987654321,NULL,NULL,'contacto@protektoraB.com','https://www.ejemplo.com/logoB');
/*!40000 ALTER TABLE `protektora` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `translations`
--

DROP TABLE IF EXISTS `translations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `translations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `keyValue` varchar(512) DEFAULT NULL,
  `language` text,
  `value` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `translations_index_0` (`keyValue`)
) ENGINE=InnoDB AUTO_INCREMENT=313 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `translations`
--

LOCK TABLES `translations` WRITE;
/*!40000 ALTER TABLE `translations` DISABLE KEYS */;
INSERT INTO `translations` VALUES (169,'title33','es','Los gatos generan problemas en las huertas'),(170,'title34','es','Los gatos generan problemas en las huertas'),(171,'title33','eu','Katuek kalteak eragiten dituzte landa-eremuetan'),(172,'title34','eu','Katuek kalteak eragiten dituzte landa-eremuetan'),(173,'news33','es','Los gatos, al ser animales de caza, están causando serios problemas en las zonas rurales. Con su habilidad para cazar roedores y pequeños animales, los felinos están afectando el equilibrio ecológico, especialmente al depredar especies autóctonas que ya se encuentran en peligro de extinción. ||| Este problema ha llevado a algunos biólogos a solicitar que se controle la población felina en ciertas áreas para evitar daños mayores al ecosistema local.'),(174,'news34','es','Los gatos, al ser animales de caza, están causando serios problemas en las zonas rurales. Con su habilidad para cazar roedores y pequeños animales, los felinos están afectando el equilibrio ecológico, especialmente al depredar especies autóctonas que ya se encuentran en peligro de extinción. ||| Este problema ha llevado a algunos biólogos a solicitar que se controle la población felina en ciertas áreas para evitar daños mayores al ecosistema local.'),(175,'news33','eu','atuak, ehiztariak izanik, arazo larriak sortzen ari dira landa-eremuetan. Rodenteak eta animalia txikiak ehizatzeko duten gaitasunarekin, felinoek oreka ekologikoa eragiten dute, batez ere desagertzear dauden espezie autoktonoak ehizatuz. ||| Arazo honek zenbait biologok eskatu du katu-populazioa kontrolatzea zenbait eremutan, ingurumenari kalte handiagoak eragozteko.'),(176,'news34','eu','atuak, ehiztariak izanik, arazo larriak sortzen ari dira landa-eremuetan. Rodenteak eta animalia txikiak ehizatzeko duten gaitasunarekin, felinoek oreka ekologikoa eragiten dute, batez ere desagertzear dauden espezie autoktonoak ehizatuz. ||| Arazo honek zenbait biologok eskatu du katu-populazioa kontrolatzea zenbait eremutan, ingurumenari kalte handiagoak eragozteko.'),(177,'title35','es','Alimentacion ekilibrada y la salud de los gatos'),(178,'title35','eu','Katuen osasuna eta elikadura egokia'),(179,'news35','es','Los gatos domésticos necesitan una dieta equilibrada para mantenerse saludables. Especialistas en veterinaria recomiendan alimentos que contengan proteínas de alta calidad, vitaminas y minerales esenciales para su bienestar. Además, una correcta hidratación es clave para prevenir problemas urinarios comunes en estos animales. ||| Los expertos también sugieren controlar el peso de los gatos, ya que la obesidad es una de las principales causas de enfermedades en estos'),(180,'news35','eu','Katu etxekoek dieta orekatua behar dute osasuntsu mantentzeko. Veterinariako espezialistak gomendatzen dute elikagaiak, kalitate handiko proteinak, bitaminak eta mineralez betetakoak, haien ongizatea bermatzeko. Gainera, hidratazio egokia garrantzitsua da katu hauetan ohikoak diren urinaroko arazoak saihesteko. ||| Adituek, halaber, katuen pisua kontrolatzea ere gomendatzen dute, obesitatea haien gaixotasun gehieneko kausa izan baita.'),(181,'title36','es','Los gatos y sus instintos naturales: la caza y el juego'),(182,'title36','eu','Katuak eta haien sen naturalak: ehiza eta jokoa'),(183,'news36','es','El comportamiento de caza es un instinto natural de los gatos, incluso en los hogares donde no tienen acceso a presas reales. Los gatos suelen perseguir objetos en movimiento como si estuvieran cazando. Este comportamiento es fundamental para su bienestar mental y físico, ya que simula la caza en la naturaleza. ||| Los juguetes interactivos y las actividades que estimulan la mente son esenciales para mantener a los gatos activos y felices.'),(184,'news36','eu','Ehiza-jokabidea katuen instintu natural bat da, etxean, ehizatzeko preziak ez dituztenean ere. Katuak mugimenduan dauden objektuak atzetik ibiltzen dira, ehizan ari balira bezala. Joko honek funtsezko paper garrantzitsua du haien ongizate mentala eta fisikoa mantentzeko, naturan ehizatzeko ohitura simulatzen duelako. ||| Juguete interaktiboek eta mentalki estimulatzen duten jarduerak funtsezkoak dira katuak aktibo eta pozik mantentzeko.'),(185,'title37','es','Los gatos y sus instintos naturales: la caza y el juego'),(186,'title37','eu','Katuak eta haien sen naturalak: ehiza eta jokoa'),(187,'news37','es','El comportamiento de caza es un instinto natural de los gatos, incluso en los hogares donde no tienen acceso a presas reales. Los gatos suelen perseguir objetos en movimiento como si estuvieran cazando. Este comportamiento es fundamental para su bienestar mental y físico, ya que simula la caza en la naturaleza. ||| Los juguetes interactivos y las actividades que estimulan la mente son esenciales para mantener a los gatos activos y felices.'),(188,'news37','eu','Ehiza-jokabidea katuen instintu natural bat da, etxean, ehizatzeko preziak ez dituztenean ere. Katuak mugimenduan dauden objektuak atzetik ibiltzen dira, ehizan ari balira bezala. Joko honek funtsezko paper garrantzitsua du haien ongizate mentala eta fisikoa mantentzeko, naturan ehizatzeko ohitura simulatzen duelako. ||| Juguete interaktiboek eta mentalki estimulatzen duten jarduerak funtsezkoak dira katuak aktibo eta pozik mantentzeko.'),(189,'title38','es','Los gatos y sus instintos naturales: la caza y el juego'),(190,'title38','eu','Katuak eta haien sen naturalak: ehiza eta jokoa'),(191,'news38','es','El comportamiento de caza es un instinto natural de los gatos, incluso en los hogares donde no tienen acceso a presas reales. Los gatos suelen perseguir objetos en movimiento como si estuvieran cazando. Este comportamiento es fundamental para su bienestar mental y físico, ya que simula la caza en la naturaleza. ||| Los juguetes interactivos y las actividades que estimulan la mente son esenciales para mantener a los gatos activos y felices.'),(192,'news38','eu','Ehiza-jokabidea katuen instintu natural bat da, etxean, ehizatzeko preziak ez dituztenean ere. Katuak mugimenduan dauden objektuak atzetik ibiltzen dira, ehizan ari balira bezala. Joko honek funtsezko paper garrantzitsua du haien ongizate mentala eta fisikoa mantentzeko, naturan ehizatzeko ohitura simulatzen duelako. ||| Juguete interaktiboek eta mentalki estimulatzen duten jarduerak funtsezkoak dira katuak aktibo eta pozik mantentzeko.'),(193,'title39','es','Los gatos tranquilizan a sus dueños'),(194,'title39','eu','Katuak euren jabeak lasaitzen dituzte'),(195,'news39','es','Numerosos estudios científicos han demostrado que la presencia de un gato puede reducir significativamente los niveles de estrés en los seres humanos. La compañía de un felino, al ofrecer cariño y afecto, tiene un efecto relajante que favorece el bienestar emocional de las personas. ||| Además, acariciar a un gato puede aumentar los niveles de oxitocina, la hormona asociada a la felicidad y la confianza.'),(196,'news39','eu','Zientzia-ikerketa ugari egiaztatu du katuen presentziak modu nabarmen batean murrizten duela estresa gizakiengan. Felino batek, maitasuna eta atxikimendua eskainiz, eragin lasaitzailea du, eta hori pertsonen ongizate emozionala hobetzen du. ||| Gainera, katu bat ukitzearen ondorioz oxitotsina, zoriontasunarekin eta konfiantzaarekin lotutako hormona, handitu daiteke.'),(197,'title40','es','La ropa de los gatos: moda o comodidad?'),(198,'title40','eu','Katuen jantziak: moda edo erosoa?'),(199,'news40','es','Los gatos son conocidos por su independencia, pero en los últimos años ha surgido la moda de vestir a los felinos con pequeñas prendas. Sin embargo, algunos expertos en comportamiento animal advierten que poner ropa a un gato puede generarles estrés y ansiedad. ||| A pesar de esto, algunos propietarios disfrutan viendo a sus gatos con pequeños disfraces, aunque debe hacerse con precaución y asegurando que el animal no esté incómodo.'),(200,'news40','eu','Katuak independenteak izateagatik ezagunak dira, baina azken urteetan katuak jantziekin janzteko moda sortu da. Hala ere, animalien jokabideko adituek ohartarazi dute katu bati jantzia jartzeak estresa eta antsietatea sor dezakeela. ||| Hala ere, jabe batzuek gustura ikusten dituzte katuak jantzi txiki batzuekin, baina kontuz egin behar da, eta animalia ez dela deserosotasunik sentituko ziurtatuz.'),(201,'title41','es','La ropa de los gatos: moda o comodidad?'),(202,'title41','eu','Katuen jantziak: moda edo erosoa?'),(203,'news41','es','Los gatos son conocidos por su independencia, pero en los últimos años ha surgido la moda de vestir a los felinos con pequeñas prendas. Sin embargo, algunos expertos en comportamiento animal advierten que poner ropa a un gato puede generarles estrés y ansiedad. ||| A pesar de esto, algunos propietarios disfrutan viendo a sus gatos con pequeños disfraces, aunque debe hacerse con precaución y asegurando que el animal no esté incómodo.'),(204,'news41','eu','Katuak independenteak izateagatik ezagunak dira, baina azken urteetan katuak jantziekin janzteko moda sortu da. Hala ere, animalien jokabideko adituek ohartarazi dute katu bati jantzia jartzeak estresa eta antsietatea sor dezakeela. ||| Hala ere, jabe batzuek gustura ikusten dituzte katuak jantzi txiki batzuekin, baina kontuz egin behar da, eta animalia ez dela deserosotasunik sentituko ziurtatuz.'),(205,'title42','es','Perro galgo: una raza en peligro de extinción'),(206,'title42','eu','Galgo zakurra: desagertzeko arriskuan dagoen arraza'),(207,'news42','es','El galgo, una de las razas más antiguas y veloces del mundo, enfrenta una grave amenaza debido al abandono y maltrato en algunas regiones. Estos perros, utilizados principalmente para la caza, son a menudo descartados cuando ya no cumplen con su función, lo que ha llevado a un aumento de su población abandonada. ||| Varios grupos protectores de animales están trabajando para mejorar las condiciones de los galgos y promover la adopción responsable de estos perros.'),(208,'news42','eu','Galgoa, munduko arraza zaharrenetako eta azkarrenetako bat, mehatxu larri baten aurrean dago abandonu eta txikizioa dela eta zenbait eremuetan. Ehizarako erabiltzen diren animalia hauek, askotan, euren funtzioa betetzen ez dutenean baztertzen dira, eta horrek, abandonatutako galgoen populazioa handitzea ekarri du. ||| Animalien babeseko talde ugari ari dira galgoen baldintzak hobetzen eta animalia hauek adoptatzeko erantzukizun handiko prozesuak bultzatzen.'),(209,'title43','es','Los perros detectores de enfermedades: una revolución en la salud'),(210,'title43','eu','Zakurrak gaixotasunak detektatzen: osasunaren iraultza'),(211,'news43','es','En los últimos años, los perros han demostrado tener una increíble capacidad para detectar diversas enfermedades en los seres humanos, como el cáncer o la diabetes. Su agudo sentido del olfato les permite identificar cambios en el cuerpo humano que son imperceptibles para los médicos. ||| Este avance ha abierto nuevas puertas en el ámbito de la medicina preventiva, donde los perros pueden ayudar a detectar enfermedades en etapas tempranas.'),(212,'news43','eu','Azken urteetan, zakurrak gaixoen gaixotasun desberdinak, hala nola minbizia edo diabetesa, detektatzeko ahalmen harrigarri bat dutela erakutsi dute.  ||| Haien usaimen zorrotzak gorputzean gertatzen diren aldaketak identifikatzeko aukera ematen die, medikuentzat ikusezinak direnak.\nAurrerapen honek medikuntza prebentiboaren arloan ate berriak ireki ditu, non zakurrak gaixotasunak lehenengo etapan detektatzen lagundu dezaketen.'),(213,'title44','es','Adopción de perros en lugar de compra: un cambio en la mentalidad'),(214,'title44','eu','Zakurren adopzioa erosketaren ordez: mentalitatean aldaketa bat'),(215,'news44','es','La adopción de perros ha ganado popularidad en los últimos años, con un creciente número de personas que eligen adoptar en lugar de comprar mascotas. Este cambio en la mentalidad está contribuyendo a reducir el número de animales abandonados y promoviendo una cultura de responsabilidad hacia los animales. ||| Además, muchos refugios están trabajando para encontrar hogares adecuados para los perros, ofreciendo alternativas viables y responsables a la compra de animales de raza.'),(216,'news44','eu','Zakurren adopzioak ospea irabazi du azken urteetan, gero eta gehiago dira animaliak erostea baino adoptatzea aukeratzen duten pertsonak. Mentalitate honetan egon den aldaketa honek abandonatutako animalien kopurua murrizten lagundu du eta animaliak zaintzeko erantzukizunaren kultura bultzatzen ari da. ||| Horrez gain, aterpe askok etxe egokiak aurkitzeko lan egiten dute, arraza-zakurren erosketari alternatiba arduratsu eta bideragarriak eskainiz.'),(217,'title45','es','Adopción de perros en lugar de compra: un cambio en la mentalidad'),(218,'title45','eu','Zakurren adopzioa erosketaren ordez: mentalitatean aldaketa bat'),(219,'news45','es','La adopción de perros ha ganado popularidad en los últimos años, con un creciente número de personas que eligen adoptar en lugar de comprar mascotas. Este cambio en la mentalidad está contribuyendo a reducir el número de animales abandonados y promoviendo una cultura de responsabilidad hacia los animales. ||| Además, muchos refugios están trabajando para encontrar hogares adecuados para los perros, ofreciendo alternativas viables y responsables a la compra de animales de raza.'),(220,'news45','eu','Zakurren adopzioak ospea irabazi du azken urteetan, gero eta gehiago dira animaliak erostea baino adoptatzea aukeratzen duten pertsonak. Mentalitate honetan egon den aldaketa honek abandonatutako animalien kopurua murrizten lagundu du eta animaliak zaintzeko erantzukizunaren kultura bultzatzen ari da. ||| Horrez gain, aterpe askok etxe egokiak aurkitzeko lan egiten dute, arraza-zakurren erosketari alternatiba arduratsu eta bideragarriak eskainiz.'),(221,'title46','es','Los conejos como mascotas: cuidados esenciales'),(222,'title46','eu','Sakabanak zakurrak maskotak bezala: zaintza funtsezkoak'),(223,'news46','es','Los conejos se están convirtiendo en una opción popular como mascotas debido a su carácter dócil y su tamaño compacto. Sin embargo, necesitan cuidados específicos para mantenerse saludables, incluyendo una dieta rica en fibra y un espacio adecuado para moverse. ||| Los conejos también requieren atención en su higiene, con una limpieza regular de sus jaulas y revisión de su pelaje.'),(224,'news46','eu','Sakabanak maskotak izateko aukera bilakatzen ari dira, haien izaera goxoa eta tamaina txikia direla eta. Hala ere, zaintza espezifikoak behar dituzte osasuntsu mantentzeko, hala nola zuntz aberatsarekin elikadura eta mugitzeko toki egoki bat. ||| Sakabanek ere arreta behar dute garbitasunean, haien kaiolak garbituz eta haien pelusa aztertuz.'),(225,'title47','es','Los conejos como mascotas: cuidados esenciales'),(226,'title47','eu','Sakabanak zakurrak maskotak bezala: zaintza funtsezkoak'),(227,'news47','es','Los conejos se están convirtiendo en una opción popular como mascotas debido a su carácter dócil y su tamaño compacto. Sin embargo, necesitan cuidados específicos para mantenerse saludables, incluyendo una dieta rica en fibra y un espacio adecuado para moverse. ||| Los conejos también requieren atención en su higiene, con una limpieza regular de sus jaulas y revisión de su pelaje.'),(228,'news47','eu','Sakabanak maskotak izateko aukera bilakatzen ari dira, haien izaera goxoa eta tamaina txikia direla eta. Hala ere, zaintza espezifikoak behar dituzte osasuntsu mantentzeko, hala nola zuntz aberatsarekin elikadura eta mugitzeko toki egoki bat. ||| Sakabanek ere arreta behar dute garbitasunean, haien kaiolak garbituz eta haien pelusa aztertuz.'),(229,'title48','es','Los pájaros en casa: beneficios de tener una mascota emplumada'),(230,'title48','eu','Txoriak etxean: hegoekin maskota izatearen onurak'),(231,'news48','es','Los pájaros, como los loros o canarios, son una excelente opción para quienes buscan una mascota activa y divertida. Estos animales son inteligentes y sociales, y pueden ser entrenados para imitar sonidos o incluso palabras. ||| El tener un pájaro como mascota también puede ayudar a reducir la ansiedad y proporcionar compañía, especialmente en entornos urbanos.'),(232,'news48','eu','Txoriak, hala nola loroak edo kanarioak, aukera bikaina dira maskota aktibo eta dibertigarri bat bilatzen dutenentzat. Animali hauek adimentsuak eta sozialak dira, eta soinuen edo hitzen imitazioa egiteko entrenatu daitezke. ||| Txori bat maskota bezala izateak ere lagundu dezake antsietatea murrizten eta konpainiaren onurak eskaintzen, batez ere hiri-inguruneetan.'),(233,'title49','es','titulo en español'),(234,'title49','eu','titulua euskaraz'),(235,'news49','es','primer paragrafo ||| segundo'),(236,'news49','eu','lehenengo ||| bigarren'),(237,'title50','es','Nuevo título en español'),(238,'title50','eu','Berriaren izenburua euskaraz'),(239,'news50','es','Texto de la noticia en español.'),(240,'news50','eu','Albistearen testua euskaraz111.'),(241,'title51','es','Título en Español51'),(242,'title51','eu','Titulua euskaraz51'),(243,'news51','es','Este es el texto de la noticia en EDIT Español51 ||| fdesfadsa'),(244,'news51','eu','Hau da euskarazko albistearen EDIT testua51 ||| fdsafdsaf'),(245,'title52','es','Título en Español51'),(246,'title52','eu','Titulua euskaraz51'),(247,'news52','es','Este es el texto de la noticia en Español51'),(248,'news52','eu','Hau da euskarazko albistearen testua51'),(249,'title53','es','Título en Español53'),(250,'title53','eu','Titulua euskaraz53'),(251,'news53','es','Este es el texto de la noticia en Español51'),(252,'news53','eu','Hau da euskarazko albistearen testua51'),(253,'title59','es','Título en Español53'),(254,'title59','eu','Titulua euskaraz53'),(255,'news59','es','Este es el texto de la noticia en Español51'),(256,'news59','eu','Hau da euskarazko albistearen testua51'),(257,'title60','es','Título en Español53'),(258,'title60','eu','Titulua euskaraz53'),(259,'news60','es','Este es (EDITADO) el texto de la noticia en Español51  ||| fdsfdsaf'),(260,'news60','eu','Hau da (EDITATUTA) euskarazko albistearen testua51 ||| fgdsagdsa'),(261,'title61','es','2 parrafos editado'),(262,'title61','eu','2 Parrafo editatuta'),(263,'news61','es','Editado |||  fhgfdhgfyafsdaf'),(264,'news61','eu','Editatuta |||  dagfdsagfdahfa'),(265,'title62','es','con la imagen'),(266,'title62','eu','irudiarekin'),(267,'news62','es','primer paragrafo ||| segundo'),(268,'news62','eu','lehenengoa ||| bigarrena'),(269,'title63','es','con la imagen 2'),(270,'title63','eu','irudiarekin 2'),(271,'news63','es','priemr ||| ew'),(272,'news63','eu','ew ||| werq'),(273,'title64','es','con la imagen 3'),(274,'title64','eu','irudiarekin 3'),(275,'news64','es','jkdfjk ||| fjkkjdfsl'),(276,'news64','eu','jkjkl ||| jjjñl'),(277,'title65','es','proba'),(278,'title65','eu','proba'),(279,'news65','es','proba ||| proba'),(280,'news65','eu','proba  ||| proab'),(281,'title66','es','123'),(282,'title66','eu','123'),(283,'news66','es','123 ||| 12'),(284,'news66','eu','123 ||| 312'),(285,'title67','es','243'),(286,'title67','eu','432'),(287,'news67','es','432 ||| 234'),(288,'news67','eu','342 ||| 243'),(289,'title68','es','w'),(290,'title68','eu','w'),(291,'news68','es','w ||| w'),(292,'news68','eu','w ||| w'),(293,'title69','es','w'),(294,'title69','eu','w'),(295,'news69','es','w ||| w'),(296,'news69','eu','w ||| w'),(297,'title70','es','Título en Español53'),(298,'title70','eu','Titulua euskaraz53'),(299,'news70','es','Este es el texto de la noticia en Español51'),(300,'news70','eu','Hau da euskarazko albistearen testua51'),(301,'title71','es','Título en Español53'),(302,'title71','eu','Titulua euskaraz53'),(303,'news71','es','Este es el texto de la noticia en Español51'),(304,'news71','eu','Hau da euskarazko albistearen testua51'),(305,'title72','es','Descubrimiento de nuevas especies de animales en la selva amazónica'),(306,'title72','eu','Amazoniako oihanetan animalien espezie berriak aurkitu dituzte'),(307,'news72','es','En un reciente viaje de exploración en la selva amazónica, científicos han descubierto varias especies nuevas de animales que hasta ahora no se conocían. Este hallazgo resalta la importancia de proteger uno de los ecosistemas más biodiversos del planeta. ||| Un equipo internacional de biólogos y ecologistas ha documentado la presencia de nuevas especies de insectos, reptiles y mamíferos en áreas remotas de la Amazonía. Entre los descubrimientos más impresionantes se encuentran una nueva especie de rana venenosa, que se caracteriza por su brillante coloración azul, y un pequeño mamífero nocturno que hasta ahora se creía extinto. Además, se encontraron varias especies de insectos con características únicas que podrían ofrecer importantes avances para la ciencia en áreas como la medicina y la biotecnología.\r\n\r\nLos investigadores destacan que este tipo de descubrimientos subraya la importancia de continuar con las expediciones científicas en áreas poco exploradas, ya que la biodiversidad de la Amazonía sigue siendo en gran parte desconocida. Muchos de estos animales podrían estar en peligro de extinción debido a la deforestación y otros impactos humanos en la región. Por lo tanto, se hace un llamado urgente a las autoridades para que tomen medidas de protección más estrictas para evitar la pérdida de estas especies valiosas.\r\n\r\nEste hallazgo no solo amplía nuestro conocimiento sobre la biodiversidad, sino que también nos recuerda la fragilidad de nuestros ecosistemas y la necesidad de actuar para preservar la vida en la Tierra.'),(308,'news72','eu','Oihan amazoniarrean egindako esplorazio bidaia batean, zientzialariek orain arte ezagutzen ez ziren hainbat animalien espezie aurkitu dituzte. Aurkikuntza honek planetako biodibertsitate handiena duen ekosistemaren garrantzia azpimarratzen du. ||| Biologo eta ekologo talde internazional batek dokumentatu du Amazonian, leku urrunetan, intsektu, narrasti eta ugaztun espezie berri batzuek bizi direla. Aurkikuntzarik ikusgarrienetako batzuk, urdinez tindatutako kolore biziko eta pozoitsu bat duen igel espezie berri bat eta, nahiz eta desagertuta egon zitekeela uste izan, orain egiaztatu den gaueko ugaztun txiki bat dira. Horrez gain, intsektu espezie berriak aurkitu dira, ezaugarri bereziak dituztenak, eta horiek zientzian, batez ere medikuntzan eta bioteknologiaren arloan, aurrerapen handiak ekar ditzaketela adierazi da.\r\n\r\nIkerlariek azpimarratu dute aurkikuntza horiek garrantzi handia dutela, Amazonia bezalako leku esploratu gabeetan zientzia esperientzia gehiago egitea ezinbestekoa delako, biodibertsitateak oraindik ezagutza handia behar duela. Animaliok desagertzear egon daitezke basoaren suntsiketaren eta giza eraginaren ondorioz, eta horregatik, neurri zorrotzagoak hartzeko eskatu diete autoritateei espezie hauek babesteko.\r\n\r\nAurkitze honek ezagutza zientifikoa handitzen du, eta baita gure ekosistemak hain ahulak direla eta Lurreko bizitza babesteko ekintza hartu beharra dagoela gogorarazten digu.'),(309,'title73','es','proba'),(310,'title73','eu','proba'),(311,'news73','es','123 ||| 123'),(312,'news73','eu','123 ||| 123');
/*!40000 ALTER TABLE `translations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_chats`
--

DROP TABLE IF EXISTS `user_chats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_chats` (
  `user` int unsigned NOT NULL,
  `chat` int unsigned NOT NULL,
  PRIMARY KEY (`user`,`chat`),
  KEY `chat` (`chat`),
  CONSTRAINT `user_chats_ibfk_1` FOREIGN KEY (`user`) REFERENCES `users` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `user_chats_ibfk_2` FOREIGN KEY (`chat`) REFERENCES `chats` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_chats`
--

LOCK TABLES `user_chats` WRITE;
/*!40000 ALTER TABLE `user_chats` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_chats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `DNI` varchar(10) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `secondName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` text,
  `year` datetime DEFAULT NULL,
  `img` blob,
  `rola` varchar(255) DEFAULT 'erabiltzaile',
  `idProtektora` int unsigned DEFAULT NULL,
  `email_verification_token` varchar(64) DEFAULT NULL,
  `email_verified` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`DNI`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `DNI` (`DNI`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (10,'12139849','Casca','Alcon','csca3@example.com','$2y$12$XpANhz2B8sbc2r0uGpvcnudxjespeauVOGNrZJaJuFnal2q6QRAai','2010-10-10 00:00:00',_binary 'https://proba.com','erabiltzaile',NULL,'ciYPWF49wCELBLWXaRRqwX2d1XH3dV2y',0),(11,'123452131','Casca','Alcon','csca232342343@example.com','$2y$12$ubc62Le4uTwuZWuvCDch6ecgqChmFXjUcU8giUrOh6CLIWh2hLEHa','2010-10-10 00:00:00',_binary 'https://proba.com','erabiltzaile',NULL,'Yzoe37gL6uFwuKpxIxWEKUDEX74cIS4D',0),(2,'12345678R','Manex','Aranzadi Egaña','manex@zubiri.com','$2y$12$x.Wt67TSO66o6mwDiBNPC.kQFvh8h3iegz7p6QBlH97bwgkwX/ooe','2005-01-10 00:00:00',_binary 'https://bastbackend.ddns.net/storage/images/xmHGW6L0xsKT6toQz4LgPOLjqE7Q9fP5L3owXyxh.png','erabiltzaile',2,NULL,1),(9,'1239849','Casca','Alcon','casca3@example.com','$2y$12$AJPlglmbUcMLecbmKseLcuNcgp01lvdkU5AdMhm3K47xpSoQh5Fz6','2010-10-10 00:00:00',_binary 'https://proba.com','erabiltzaile',NULL,'rlg19POXxY5LvwIsFJPTc397EjsA6B8P',0),(7,'123987111','Manex','Aranzadie','maranzadieg23wg@ikzubirimanteo.com','$2y$12$SQKPFTdy5m/NBUvKGAB0jOPzyXXcxEUZ8a3Ysh9SJlaG4MJ3BnrpS','2005-01-10 00:00:00',_binary 'https://proba.com','erabiltzaile',NULL,NULL,0),(8,'123987114','Manaex','Araanzadi','maranzadieaaaag23wg@ikzubirimanteo.com','$2y$12$hiPUeuJdNRqgK1xqEIlz/OJi2RUwW8F5CL9EuevqGU1x3d9FXTtfm','2005-01-10 00:00:00',_binary 'https://proba.com','erabiltzaile',NULL,'gcz5NZxutCAXNty1KWyMnkIHrDX5iVc5',0),(1,'1239879','Casca','Alcon','casca@example.com','$2y$12$7luYtkpGa29hhRY2Kf.FKuvV2BSi.z22a0zpgbXq0DHTZoQSczEJy','2010-10-10 00:00:00',_binary 'https://bastbackend.ddns.net/storage/images/LCkTnoogJfOelhdlJyqU9MXq1l0zCfPmJKCnKZyd.jpg','erabiltzaile',1,NULL,1),(17,'22314075G','Iker','Rodriguez','vigekoh408@numerobo.com','$2y$12$0cmoZKkFsxIVHL53GdUSxeFnPWc/gX/czfB7Mxzw2Z4LP/K6eO.qu','2025-01-29 00:00:00',_binary 'https://bastbackend.ddns.net/storage/images/nJLpt7A6sO5KNuxYY0r09yyOm0o20P0VqkO773a8.jpg','erabiltzaile',NULL,NULL,1),(12,'33375037J','Casca','Alcon','xapar50925@ahaks.com','$2y$12$pZ2BVK0Zznd9jZuchXy4t.92xYrQpM7y26Tb8TmANsbdT9th/cCyG','2010-10-10 00:00:00',_binary 'http://bastbackend.ddns.net:8000/storage/images/u6o8uZewJbx4RhwZ1YKFAQ4WdwLWUznU5ERSCWr4.jpg','erabiltzaile',NULL,'CQbrvaA9wvwMxNxP4vdF98fuw9oFVq48',0),(18,'38511568T','Bakugo','Deku','bodase1216@ahaks.com','$2y$12$KzxRt7Hhn3vxnja70rDU.OzEc7vtcy1yzZ8xghqOgCqlRngmLe0IW','2025-01-29 00:00:00',_binary 'https://bastbackend.ddns.net/storage/images/GLapkxLFbAH1f3qbF5JQxXoCsQY83PhUAwBVVZrt.jpg','erabiltzaile',NULL,'OytWM4VBOHWsrOWATZrgxmqyG7ivRlgM',0),(13,'40418801G','Casca','Alcon','xawofef268@rykone.com','$2y$12$i8egzqE3xgqtDLHcxaRBwOyRxs33EWTj7bJvK1/cJUnq5raM1XI5i','2010-10-10 00:00:00',_binary 'http://bastbackend.ddns.net:8000/storage/images/JN9SamMdvVi3Lh6gZ72Taiw2uqBIHnwLv9noaaiO.jpg','erabiltzaile',NULL,'G4IhCZEeUxTZvM6iFjnjPmvVW01JJ18y',0),(16,'54834081B','Iker','Rodriguez','rojin54081@numerobo.com','$2y$12$H6MkXVHGMIBbM8SQr0FGfeheMEx1bIXi9se9b3zjsaaeLpUgdTiCe','2025-01-29 00:00:00',_binary 'https://bastbackend.ddns.net/storage/images/IQkwYs2pgh6MRCednTZ58UGpbJDzCwbIHsappVRw.jpg','erabiltzaile',NULL,'jrQwBfFJH8ecQOuJbh2425PO9f7CVDwW',0),(15,'97283951P','ma','nu','kakosav89@rykone.com','$2y$12$5ruvQREBlWMBLx7S0dPoXOS6eSYXK8LzUiZfXRYl8EvzY9Q3e5Seu','2010-10-10 00:00:00',_binary 'http://bastbackend.ddns.net:8000/storage/images/YiC1dJGtasqp8BLN6zxdZjYzQD2bm5iCo2jqeKKD.jpg','erabiltzaile',NULL,'6hAK8NLhnp8qDOisYGULKZb6pm2G7ojm',0),(14,'97283959P','Casca','Alcon','kakosav809@rykone.com','$2y$12$br3Ztsm1c/gKEavwdjZHBezxeOVvWbvXZPu6qNPWAD92.yZMyxqLK','2010-10-10 00:00:00',_binary 'http://bastbackend.ddns.net:8000/storage/images/Ev3lq77zRhF0apzP8CsYmMWdHae6uoavm9JiYgjB.jpg','erabiltzaile',NULL,NULL,1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-05 12:13:20
