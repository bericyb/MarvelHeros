"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbServices = void 0;
var heroDAO_1 = require("./heroDAO");
var dbServices = /** @class */ (function () {
    function dbServices() {
    }
    dbServices.getAllHeros = function () {
        return heroDAO_1.HeroDAO.getAllHeros();
    };
    dbServices.getHeroByID = function (id) {
        return heroDAO_1.HeroDAO.getHeroByID(id);
    };
    dbServices.getHeroByName = function (name) {
        return heroDAO_1.HeroDAO.getHeroByName(name);
    };
    dbServices.getHerosByPower = function (power) {
        return heroDAO_1.HeroDAO.getHerosByPower(power);
    };
    dbServices.getFamilyByID = function (id) {
        return heroDAO_1.HeroDAO.getFamilyByID(id);
    };
    dbServices.getGroups = function () {
        return heroDAO_1.HeroDAO.getGroups();
    };
    dbServices.incrementMovieCount = function (id) {
        return heroDAO_1.HeroDAO.incrementMovieCount(id);
    };
    dbServices.insertNewHero = function (hero) {
        return heroDAO_1.HeroDAO.insertNewHero(hero);
    };
    dbServices.deleteHeroByID = function (id) {
        return heroDAO_1.HeroDAO.deleteHeroByID(id);
    };
    dbServices.setFamilyByID = function (id, family) {
        return heroDAO_1.HeroDAO.setFamilyByID(id, family);
    };
    return dbServices;
}());
exports.dbServices = dbServices;
