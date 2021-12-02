-- MySQL dump 10.13  Distrib 8.0.13, for Win64 (x86_64)
--
-- Host: localhost    Database: sharkstyle
-- ------------------------------------------------------
-- Server version	8.0.13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping routines for database 'sharkstyle'
--
CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sharkstyle` /*!40100 DEFAULT 
CHARACTER SET utf8 */;
USE `sharkstyle`;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `description` text,
  `price` mediumint(8) unsigned NOT NULL,
  `gender` varchar(100) NOT NULL,
  `category` varchar(150) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (5,'Remera adidas Essentials','SENCILLEZ Y ESENCIA DEPORTIVA. Relajate con estilo despues del entrenamiento. Esta Remera para jovenes deportistas presenta un disenio sencillo con el logotipo de adidas en contraste y un corte entallado. Se ha confeccionado en un tejido de punto de algodon muy suave al tacto.',2899,'Mujer','Remeras Manga Corta'),(6,'Remera Fila Sugar de Mujer','Remera femenina, tejido de punto, jersey de algodon 24/1.',2790,'Mujer','Remeras Manga Corta'),(7,'Remera adidas Run It Space Race De Mujer','El tejido AEROREADY absorbe el sudor para mantener tu cuerpo seco y comodo en todo momento.',7499,'Mujer','Remeras Manga Corta'),(8,'Remera adidas Own The Run','Es suave, comoda y se seca rapidamente. Ademas, esta hecha en materiales reciclados y forma parte de nuestra lucha por un futuro mas sostenible.',6499,'Mujer','Remeras Manga Corta'),(9,'Remera Nike Court Dri Fit Victory','Confeccionada con una tela suave y un monton de elasticidad, esta prenda NikeCourt Dri-FIT Victory te mantiene comodo y concentrado en la victoria.',6999,'Hombre','Remeras Manga Corta'),(10,'Remera Topper Brand Gtm Mc','Completa tu look con esta remera TOPPER.',2399,'Hombre','Remeras Manga Corta'),(11,'Remera adidas Run It Space Race','El tejido absorbente AEROREADY te mantiene seco mientras acumulas kilometros a diario.',7499,'Hombre','Remeras Manga Corta'),(14,'Remera adidas Ultraboost Innovation','Prepararte para tu entrenamiento con la playlist que encontras escaneando el codigo QR cerca del dobladillo.',5999,'Hombre','Remeras Manga Corta'),(15,'Musculosa Montagne Adana','Resulta una prenda versatil, tanto para actividades deportivas como outdoor.',4499,'Mujer','Musculosas'),(16,'Musculosa Montagne Verona','Confeccionada con tecnologia tridimensional Seamless. Este concepto trabaja con la densidad del tejido ofreciendo tramas mas abierta en zonas estrategicas a modo de ventilacion, haciendo que la prenda resulte fresca.',4199,'Mujer','Musculosas'),(17,'Musculosa adidas HEAT.RDY','',9499,'Hombre','Musculosas'),(18,'Musculosa adidas River Plate','Ponete esta musculosa de entrenamiento River Plate de adidas. Su tejido absorbente y el disenio sin mangas te haran sentir fresco hasta que el entrenador finalice la sesion.',6499,'Hombre','Musculosas'),(19,'Pantalon adidas W Z.N.E','Entrena siempre con fluidez gracias a su tejido suave y ligeramente elastica con tecnologia de absorcion AEROREADY.',14999,'Mujer','Pantalones Largos'),(20,'Pantalon Fila Jooger Loop','Pantalon rustico de algodon sin felpa, de tiro alto.',5950,'Mujer','Pantalones Largos'),(21,'Pantalon Fila Jooger Loop','Pantalon rustico de algodon sin felpa, de tiro alto.',5950,'Mujer','Pantalones Largos'),(22,'Pantalon Under Armour','Corte completo para una comodidad total',6899,'Mujer','Pantalones Largos'),(23,'Pantalon Fila Camuflado','Esta confeccionado en algodon y poliester para una mayor comodidad y suavidad al usarlo.',5190,'Hombre','Pantalones Largos'),(24,'Pantalon Fila Basic Letter','Disfruta de tus salidas y caminatas diarias con este pantalon FILA clasico.',5290,'Hombre','Pantalones Largos'),(25,'Short adidas Training Heat','Posee un tejido transpirable que ofrece un tacto sedoso.',7999,'Mujer','Shorts'),(26,'Short Nike 10 K 2 En 1','Tecnologia Dri-FIT que mantiene la transpirabilidad, la comodidad y la concentracio.',6999,'Mujer','Shorts'),(27,'Short Nike Flex Stride','Este short estÃ¡ confeccionado en poliester ligero, flexible y resistente que en su tejido Nike Flex lleva la tecnologia Nike Dri-FIT.',10499,'Hombre','Shorts'),(28,'Short adidas Fast Primeblue','Un estampado de leopardo se ve aun mejor cuando se desdibuja al correr a toda velocidad.',8999,'Hombre','Shorts'),(29,'Short Wilson Train CLXXI','Con cintura elastizada, y bolsillos diagonales delanteros.',4199,'Hombre','Shorts'),(30,'Short Nike Challenger','Nike Stay Cool esta confeccionado con tejidos Dri-FIT.',5499,'Hombre','Shorts'),(31,'Calza Reebok Lux Bold','Estos leggings Reebok para mujer estan hechos de tejido que dispersa la humedad para que te mantengas fresca y seca mientras entrenas.',7999,'Mujer','Calzas Termicas'),(32,'Calza Fila Aqua Time','Calza de malla de poliamida con elastano de alta compresion. Tiene una cintura alta para ayudar a sostener el abdomen.',5690,'Mujer','Calzas Termicas'),(33,'Calza Salomon Agile Long','Una generosa cintura ajustable se siente ultra comoda y los paneles tejidos en la parte inferior de cada pierna proporcionan proteccion adicional.',7999,'Hombre','Calzas Termicas'),(34,'Calza adidas Alphaskin 2.0','Confeccionadas en un tejido que mantiene la piel seca cuando la exigencia aumenta, presentan un ajuste de compresion que te ofrece mayor sujecion muscular.',7499,'Hombre','Calzas Termicas'),(35,'Campera Puma Essential Fz','El corte regular logra un equilibrio comodo entre holgado y ajustado.',7699,'Mujer','Camperas'),(36,'Campera Rompeviento Montagne','Prenda confeccionada en Ciree ripstop: Un tejido de fibras muy delgadas que combinan una alta resistencia y bajo peso.',10899,'Mujer','Camperas'),(37,'Campera adidas Own The Risk','Chaqueta impermeable con detalles reflectantes.',9999,'Mujer','Camperas'),(38,'Campera Atlet Full Zip','Campera con cierre y capucha.',3699,'Mujer','Camperas'),(39,'Campera adidas Deportiva','Esta campera adidas controla la humedad para mantenerte seco y seguro en todos tus entrenamientos.',11499,'Hombre','Camperas'),(40,'Campera Puma Evostripe','Campera con capucha Evostripe Core con cremallera completa cuenta con tecnologia dryCELL para una capacidad inteligente de absorcion de la humedad.',11199,'Hombre','Camperas'),(41,'Campera adidas Own The Run','Su disenio con capucha es impermeable para que te puedas enfrentar al viento y la lluvia con tranquilidad. Los detalles reflectantes en los costados te hacen mas visible en condiciones de poca luz.',13499,'Hombre','Camperas'),(42,'Campera adidas Marathon','Esta campera de running adidas te protege con su tejido liviano y transpirable. Esta hecha de materiales reciclados.',18499,'Hombre','Camperas'),(43,'Buzo Under Armour Rival','Este es tu nuevo calentamiento favorito para practicamente todo lo que haces: es ligero, comodo y super suave por dentro.',9999,'Mujer','Buzos'),(44,'Buzo Canguro Fila Full Print','El disenio moderno apuesta por el body mixto, con un estampado running de logos.',7990,'Mujer','Buzos'),(45,'Buzo Reebok Style Pride','Del gym al escenario. A la pista o al desfile. Muevete como quieras pero hazlo con orgullo.',9499,'Hombre','Buzos'),(46,'Buzo Fila Train Letter','Composicion: 91% poliÃ©ster y 9% elastano.',5150,'Hombre','Buzos'),(47,'Conjunto Reebok MYT','Estas calzas ajustadas y la parte superior holgada con cierre de longitud media te acompanian desde tus rutinas matinales al brunch, sin complicaciones.',12499,'Mujer','Conjuntos'),(48,'Conjunto Reebok Linear','Un conjunto de chandal con un estilo clasico.',8899,'Mujer','Conjuntos'),(49,'Conjunto adidas Boca Juniors','Campera de corte ajustado y pantalon de corte clasico',14999,'Hombre','Conjuntos'),(50,'Conjunto adidas Sereno','Este ligero conjunto de adidas te mantiene seco hasta en los partidos de futbol mas intensos.',12499,'Hombre','Conjuntos');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  `lastname` varchar(60) NOT NULL,
  `email` varchar(60) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role` tinyint(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `images` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `img` varchar(200) NOT NULL,
  `product_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `product_images_id_idx` (`product_id`),
  CONSTRAINT `product_id_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (7,'producto-1638412913096.jpg',5),(8,'producto-1638412913099.jpg',5),(9,'producto-1638412913100.jpg',5),(10,'producto-1638413259145.jpg',6),(11,'producto-1638413259176.jpg',6),(12,'producto-1638413259146.jpg',6),(13,'producto-1638413530992.jpg',7),(14,'producto-1638413530993.jpg',7),(15,'producto-1638413530994.jpg',7),(16,'producto-1638413777047.jpg',8),(17,'producto-1638413777048.jpg',8),(18,'producto-1638413777049.jpg',8),(19,'producto-1638415018783.jpg',9),(20,'producto-1638415018784.jpg',9),(21,'producto-1638415018785.jpg',9),(22,'producto-1638417042437.jpg',10),(23,'producto-1638417042439.jpg',10),(24,'producto-1638417042441.jpg',10),(25,'producto-1638417650853.jpg',11),(26,'producto-1638417650854.jpg',11),(27,'producto-1638417650856.jpg',11),(34,'producto-1638418586348.jpg',14),(35,'producto-1638418586349.jpg',14),(36,'producto-1638418586351.jpg',14),(37,'producto-1638419279258.jpg',15),(38,'producto-1638419279260.jpg',15),(39,'producto-1638419279261.jpg',15),(40,'producto-1638419690537.jpg',16),(41,'producto-1638419690540.jpg',16),(42,'producto-1638419690543.jpg',16),(43,'producto-1638420122865.jpg',17),(44,'producto-1638420122866.jpg',17),(45,'producto-1638420122867.jpg',17),(46,'producto-1638420439428.jpg',18),(47,'producto-1638420439429.jpg',18),(48,'producto-1638420439431.jpg',18),(49,'producto-1638421537668.jpg',19),(50,'producto-1638421537672.jpg',19),(51,'producto-1638421537676.jpg',19),(52,'producto-1638422303324.jpg',20),(53,'producto-1638422303327.jpg',20),(54,'producto-1638422303329.jpg',20),(55,'producto-1638422569542.jpg',21),(56,'producto-1638422569545.jpg',21),(57,'producto-1638422569547.jpg',21),(58,'producto-1638422937253.jpg',22),(59,'producto-1638422937257.jpg',22),(60,'producto-1638422937260.jpg',22),(61,'producto-1638423340241.jpg',23),(62,'producto-1638423340243.jpg',23),(63,'producto-1638423340245.jpg',23),(64,'producto-1638424002627.jpg',24),(65,'producto-1638424002630.jpg',24),(66,'producto-1638424002633.jpg',24),(67,'producto-1638424393886.jpg',25),(68,'producto-1638424393891.jpg',25),(69,'producto-1638424393894.jpg',25),(70,'producto-1638424727675.jpg',26),(71,'producto-1638424727680.jpg',26),(72,'producto-1638424727686.jpg',26),(73,'producto-1638425173988.jpg',27),(74,'producto-1638425173989.jpg',27),(75,'producto-1638425173993.jpg',27),(76,'producto-1638425392221.jpg',28),(77,'producto-1638425392228.jpg',28),(78,'producto-1638425392230.jpg',28),(79,'producto-1638425647840.jpg',29),(80,'producto-1638425647849.jpg',29),(81,'producto-1638425647853.jpg',29),(82,'producto-1638425962258.jpg',30),(83,'producto-1638425962260.jpg',30),(84,'producto-1638425962267.jpg',30),(85,'producto-1638426292605.jpg',31),(86,'producto-1638426292614.jpg',31),(87,'producto-1638426292611.jpg',31),(88,'producto-1638426481182.jpg',32),(89,'producto-1638426481189.jpg',32),(90,'producto-1638426481185.jpg',32),(91,'producto-1638427569127.jpg',33),(92,'producto-1638427569133.jpg',33),(93,'producto-1638427569129.jpg',33),(94,'producto-1638427905710.jpg',34),(95,'producto-1638427905712.jpg',34),(96,'producto-1638427905716.jpg',34),(97,'producto-1638428064367.jpg',35),(98,'producto-1638428064370.jpg',35),(99,'producto-1638428064372.jpg',35),(100,'producto-1638428400384.jpg',36),(101,'producto-1638428400388.jpg',36),(102,'producto-1638428400393.jpg',36),(103,'producto-1638428639447.jpg',37),(104,'producto-1638428639451.jpg',37),(105,'producto-1638428639448.jpg',37),(106,'producto-1638428910195.jpg',38),(107,'producto-1638428910200.jpg',38),(108,'producto-1638428910202.jpg',38),(109,'producto-1638429097651.jpg',39),(110,'producto-1638429097653.jpg',39),(111,'producto-1638429097652.jpg',39),(112,'producto-1638429283575.jpg',40),(113,'producto-1638429283577.jpg',40),(114,'producto-1638429283578.jpg',40),(115,'producto-1638429490742.jpg',41),(116,'producto-1638429490756.jpg',41),(117,'producto-1638429490754.jpg',41),(118,'producto-1638429885091.jpg',42),(119,'producto-1638429885088.jpg',42),(120,'producto-1638429885084.jpg',42),(121,'producto-1638465511151.jpg',43),(122,'producto-1638465511157.jpg',43),(123,'producto-1638465511162.jpg',43),(124,'producto-1638465893516.jpg',44),(125,'producto-1638465893519.jpg',44),(126,'producto-1638465893527.jpg',44),(127,'producto-1638467782361.jpg',45),(128,'producto-1638467782370.jpg',45),(129,'producto-1638467782374.jpg',45),(130,'producto-1638468156899.jpg',46),(131,'producto-1638468156904.jpg',46),(132,'producto-1638468156915.jpg',46),(133,'producto-1638469065604.jpg',47),(134,'producto-1638469065610.jpg',47),(135,'producto-1638469065611.jpg',47),(136,'producto-1638470154104.jpg',48),(137,'producto-1638470154109.jpg',48),(138,'producto-1638470154112.jpg',48),(139,'producto-1638470452801.jpg',49),(140,'producto-1638470452808.jpg',49),(141,'producto-1638470452810.jpg',49),(142,'producto-1638470718045.jpg',50),(143,'producto-1638470718049.jpg',50),(144,'producto-1638470718051.jpg',50);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colors`
--

DROP TABLE IF EXISTS `colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `colors` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `color` varchar(100) NOT NULL,
  `product_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id_idx` (`product_id`),
  CONSTRAINT `product_id_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colors`
--

LOCK TABLES `colors` WRITE;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;
INSERT INTO `colors` VALUES (14,'#ed95f3',5),(15,'#ffffff',5),(16,'#999999',6),(17,'#000000',6),(18,'#000000',7),(19,'#ffffff',7),(20,'#bccffb',8),(27,'#000000',9),(28,'#707070',9),(29,'#ffffff',9),(30,'#616161',10),(31,'#357500',10),(32,'#940000',10),(33,'#0091ff',11),(34,'#ff2e58',11),(35,'#ff7b00',11),(36,'#e1ff00',11),(40,'#ff7300',14),(41,'#86abf3',15),(42,'#ffbdd7',16),(43,'#ff5ca3',17),(44,'#febc9f',17),(48,'#000000',18),(49,'#ff0000',18),(50,'#ffffff',18),(51,'#000000',19),(52,'#275700',20),(53,'#610000',20),(54,'#beebfe',21),(55,'#747272',22),(64,'#000000',24),(65,'#b0e4e8',25),(66,'#e85472',26),(67,'#000000',27),(68,'#3d3838',28),(69,'#635f5f',28),(70,'#6b81ae',29),(71,'#00aaff',30),(72,'#e3ed9c',31),(73,'#b17c7c',31),(74,'#c2b7b7',31),(75,'#000000',32),(76,'#000000',33),(77,'#000000',34),(78,'#000000',35),(79,'#ff0000',36),(80,'#ff6600',36),(81,'#ffdd00',36),(82,'#ffffff',37),(83,'#bababa',37),(84,'#000000',38),(85,'#0a5700',38),(86,'#05577f',38),(87,'#ebee44',39),(88,'#000000',39),(89,'#b3b3b3',40),(90,'#000000',40),(91,'#00ccff',41),(92,'#f0fe86',42),(93,'#ffffff',42),(94,'#ffffff',43),(95,'#fba2eb',43),(96,'#bd0094',43),(97,'#ffffff',44),(98,'#9e9e9e',44),(99,'#f1d5f0',45),(100,'#ffea00',46),(101,'#544f4f',46),(102,'#ffe5fd',47),(103,'#000000',47),(104,'#ff0000',48),(105,'#001670',48),(106,'#ffffff',49),(107,'#00257a',49),(108,'#000000',50),(116,'#726e6e',23),(117,'#c6c3c3',23);
/*!40000 ALTER TABLE `colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sizes`
--

DROP TABLE IF EXISTS `sizes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `sizes` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `product_id` int(10) unsigned NOT NULL,
  `xs` tinyint(1) DEFAULT '0',
  `s` tinyint(1) DEFAULT '0',
  `m` tinyint(1) DEFAULT '0',
  `l` tinyint(1) DEFAULT '0',
  `xl` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `product_id_idx` (`product_id`),
  CONSTRAINT `product_id_3` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sizes`
--

LOCK TABLES `sizes` WRITE;
/*!40000 ALTER TABLE `sizes` DISABLE KEYS */;
INSERT INTO `sizes` VALUES (5,5,1,1,1,1,0),(6,6,0,1,1,1,0),(7,7,1,1,1,1,0),(8,8,1,1,1,1,1),(9,9,0,1,1,1,1),(10,10,0,1,1,1,0),(11,11,0,1,1,0,0),(14,14,0,0,1,1,1),(15,15,0,1,0,0,0),(16,16,1,0,1,0,1),(17,17,0,0,0,1,0),(18,18,0,1,0,1,0),(19,19,0,1,1,1,0),(20,20,0,1,1,1,0),(21,21,0,1,1,1,0),(22,22,1,1,0,0,0),(23,23,1,1,1,1,1),(24,24,0,1,1,1,0),(25,25,1,1,1,1,0),(26,26,1,1,1,1,0),(27,27,1,1,0,0,0),(28,28,0,1,1,1,1),(29,29,0,0,0,1,1),(30,30,0,0,0,1,1),(31,31,1,1,1,1,0),(32,32,0,1,1,1,1),(33,33,0,0,0,1,1),(34,34,0,1,1,1,1),(35,35,0,1,1,1,1),(36,36,1,1,0,0,0),(37,37,0,1,1,1,1),(38,38,1,1,0,1,0),(39,39,0,0,0,1,1),(40,40,1,1,1,1,1),(41,41,1,0,0,1,0),(42,42,0,1,1,1,1),(43,43,1,1,1,1,0),(44,44,0,1,1,1,1),(45,45,0,1,1,1,1),(46,46,0,1,1,1,0),(47,47,1,1,1,1,1),(48,48,1,1,1,1,0),(49,49,1,1,1,1,1),(50,50,1,1,0,0,0);
/*!40000 ALTER TABLE `sizes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `orders` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `order_date` date NOT NULL,
  `date_of_delivery` date NOT NULL,
  `user_id` int(10) unsigned NOT NULL COMMENT 'table to record customer orders',
  PRIMARY KEY (`id`),
  KEY `user_id_idx` (`user_id`),
  CONSTRAINT `user_id_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_order`
--

DROP TABLE IF EXISTS `product_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `product_order` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `order_id` int(10) unsigned NOT NULL,
  `product_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `order_id_idx` (`order_id`),
  KEY `product_order_id_idx` (`product_id`),
  CONSTRAINT `order_id` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  CONSTRAINT `product_id_4` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_order`
--

LOCK TABLES `product_order` WRITE;
/*!40000 ALTER TABLE `product_order` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_shop`
--

DROP TABLE IF EXISTS `product_shop`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `product_shop` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `product_id` int(10) unsigned NOT NULL,
  `size` varchar(100) NOT NULL,
  `color` varchar(100) NOT NULL,
  `amount` smallint(5) unsigned NOT NULL,
  `subtotal` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id_idx` (`product_id`),
  CONSTRAINT `product_id_5` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_shop`
--

LOCK TABLES `product_shop` WRITE;
/*!40000 ALTER TABLE `product_shop` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_shop` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shopping`
--

DROP TABLE IF EXISTS `shopping`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `shopping` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `product_shop_id` int(10) unsigned NOT NULL,
  `user_id` int(10) unsigned NOT NULL,
  `total` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `product_shop_id_idx` (`product_shop_id`),
  KEY `user_id_idx` (`user_id`),
  CONSTRAINT `user_id_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `product_shop_id` FOREIGN KEY (`product_shop_id`) REFERENCES `product_shop` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shopping`
--

LOCK TABLES `shopping` WRITE;
/*!40000 ALTER TABLE `shopping` DISABLE KEYS */;
/*!40000 ALTER TABLE `shopping` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_img`
--

DROP TABLE IF EXISTS `user_img`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user_img` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `avatar` varchar(200) DEFAULT 'user_anonimo.jpg',
  `user_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id_idx` (`user_id`),
  CONSTRAINT `user_id_3` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_img`
--

LOCK TABLES `user_img` WRITE;
/*!40000 ALTER TABLE `user_img` DISABLE KEYS */;
INSERT INTO `user_img` VALUES (1,'user_anonimo.jpg',1);
/*!40000 ALTER TABLE `user_img` ENABLE KEYS */;
UNLOCK TABLES;

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-19 18:14:25

