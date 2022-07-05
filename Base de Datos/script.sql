-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema porfolio
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema porfolio
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `porfolio` DEFAULT CHARACTER SET utf8 ;
USE `porfolio` ;

-- -----------------------------------------------------
-- Table `porfolio`.`Provincia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `porfolio`.`Provincia` (
  `idProvincia` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idProvincia`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `porfolio`.`Localidad`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `porfolio`.`Localidad` (
  `idLocalidad` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `idProvincia` INT NOT NULL,
  PRIMARY KEY (`idLocalidad`),
  INDEX `fk_Localidad_Provincia_idx` (`idProvincia` ASC),
  CONSTRAINT `fk_Localidad_Provincia`
    FOREIGN KEY (`idProvincia`)
    REFERENCES `porfolio`.`Provincia` (`idProvincia`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `porfolio`.`Direccion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `porfolio`.`Direccion` (
  `idDireccion` INT NOT NULL AUTO_INCREMENT,
  `calle` VARCHAR(45) NULL,
  `numero` INT NULL,
  `piso` INT NULL,
  `depto` VARCHAR(45) NULL,
  `idLocalidad` INT NOT NULL,
  PRIMARY KEY (`idDireccion`),
  INDEX `fk_Direccion_Localidad1_idx` (`idLocalidad` ASC),
  CONSTRAINT `fk_Direccion_Localidad1`
    FOREIGN KEY (`idLocalidad`)
    REFERENCES `porfolio`.`Localidad` (`idLocalidad`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `porfolio`.`App`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `porfolio`.`App` (
  `idApp` INT NOT NULL,
  `nombre` VARCHAR(45) NULL,
  `apellido` VARCHAR(45) NULL,
  `dni` VARCHAR(45) NULL,
  `telefono` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `idDireccion` INT NOT NULL,
  PRIMARY KEY (`idApp`, `idDireccion`),
  INDEX `fk_App_Direccion1_idx` (`idDireccion` ASC),
  CONSTRAINT `fk_App_Direccion1`
    FOREIGN KEY (`idDireccion`)
    REFERENCES `porfolio`.`Direccion` (`idDireccion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `porfolio`.`Experiencia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `porfolio`.`Experiencia` (
  `idExperiencia` INT NOT NULL AUTO_INCREMENT,
  `imagen` VARCHAR(45) NULL,
  `titulo` VARCHAR(45) NULL,
  `cargo` VARCHAR(45) NULL,
  `jornada` VARCHAR(45) NULL,
  `tiempo` VARCHAR(45) NULL,
  `descripcion` VARCHAR(45) NULL,
  `idApp` INT NOT NULL,
  `Direccion_idDireccion` INT NOT NULL,
  PRIMARY KEY (`idExperiencia`, `Direccion_idDireccion`),
  INDEX `fk_Experiencia_App1_idx` (`idApp` ASC),
  INDEX `fk_Experiencia_Direccion1_idx` (`Direccion_idDireccion` ASC),
  CONSTRAINT `fk_Experiencia_App1`
    FOREIGN KEY (`idApp`)
    REFERENCES `porfolio`.`App` (`idApp`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Experiencia_Direccion1`
    FOREIGN KEY (`Direccion_idDireccion`)
    REFERENCES `porfolio`.`Direccion` (`idDireccion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `porfolio`.`Certificacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `porfolio`.`Certificacion` (
  `idCertificacion` INT NOT NULL AUTO_INCREMENT,
  `logo` VARCHAR(45) NULL,
  `titulo` VARCHAR(45) NULL,
  `entidad` VARCHAR(45) NULL,
  `fecha` DATE NULL,
  `idApp` INT NOT NULL,
  PRIMARY KEY (`idCertificacion`),
  INDEX `fk_Certificacion_App1_idx` (`idApp` ASC),
  CONSTRAINT `fk_Certificacion_App1`
    FOREIGN KEY (`idApp`)
    REFERENCES `porfolio`.`App` (`idApp`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `porfolio`.`Proyecto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `porfolio`.`Proyecto` (
  `idProyecto` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(45) NULL,
  `fecha` VARCHAR(45) NULL,
  `descripcion` VARCHAR(45) NULL,
  `link` VARCHAR(45) NULL,
  `logo` VARCHAR(45) NULL,
  `idApp` INT NOT NULL,
  PRIMARY KEY (`idProyecto`),
  INDEX `fk_Proyecto_App1_idx` (`idApp` ASC),
  CONSTRAINT `fk_Proyecto_App1`
    FOREIGN KEY (`idApp`)
    REFERENCES `porfolio`.`App` (`idApp`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `porfolio`.`Skill`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `porfolio`.`Skill` (
  `idSkill` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(45) NULL,
  `valor` INT NULL,
  `idApp` INT NOT NULL,
  PRIMARY KEY (`idSkill`),
  INDEX `fk_Skill_App1_idx` (`idApp` ASC),
  CONSTRAINT `fk_Skill_App1`
    FOREIGN KEY (`idApp`)
    REFERENCES `porfolio`.`App` (`idApp`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
