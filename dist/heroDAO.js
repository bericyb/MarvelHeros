"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroDAO = void 0;
var database_1 = require("firebase/database");
var heroProfile_1 = __importDefault(require("./heroProfile"));
var database_2 = __importDefault(require("./database"));
var HeroDAO = /** @class */ (function () {
    function HeroDAO() {
    }
    HeroDAO.insertNewHero = function (hero) {
        return __awaiter(this, void 0, void 0, function () {
            var newHeroID, newHeroGroup, inserted;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        newHeroID = (0, database_1.push)((0, database_1.ref)(database_2.default, "Heros"), hero).key;
                        newHeroGroup = hero.group;
                        return [4 /*yield*/, (0, database_1.set)((0, database_1.ref)(database_2.default, "Groups/" + newHeroGroup + "/" + newHeroID), hero)];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, (0, database_1.get)((0, database_1.ref)(database_2.default, "Heros/" + newHeroID))];
                    case 2:
                        inserted = _b.sent();
                        return [4 /*yield*/, inserted.val()];
                    case 3: 
                    // console.log(inserted);
                    return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    HeroDAO.deleteHeroByID = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var hero, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = heroProfile_1.default;
                        return [4 /*yield*/, (0, database_1.get)((0, database_1.ref)(database_2.default, "Heros/" + id))];
                    case 1:
                        hero = _b.apply(void 0, [(_c.sent()).val()]);
                        return [4 /*yield*/, (0, database_1.remove)((0, database_1.ref)(database_2.default, "Heros/" + id))];
                    case 2:
                        _c.sent();
                        return [4 /*yield*/, (0, database_1.remove)((0, database_1.ref)(database_2.default, "Groups/" + hero.group + "/" + id))];
                    case 3:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HeroDAO.getAllHeros = function () {
        return __awaiter(this, void 0, void 0, function () {
            var heros, heroList, _i, _b, _c, key, hero;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, (0, database_1.get)((0, database_1.ref)(database_2.default, "Heros"))];
                    case 1:
                        heros = _d.sent();
                        heroList = [];
                        for (_i = 0, _b = Object.entries(heros.val()); _i < _b.length; _i++) {
                            _c = _b[_i], key = _c[0], hero = _c[1];
                            heroList.push((0, heroProfile_1.default)(hero));
                        }
                        return [2 /*return*/, heroList];
                }
            });
        });
    };
    HeroDAO.getFamilyByID = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var family;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, (0, database_1.get)((0, database_1.ref)(database_2.default, "Heros/" + id + "/family"))];
                    case 1:
                        family = _b.sent();
                        // console.log(family.val());
                        return [2 /*return*/, family.val()];
                }
            });
        });
    };
    HeroDAO.getHeroByID = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var hero;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, (0, database_1.get)((0, database_1.ref)(database_2.default, "Heros/" + id))];
                    case 1:
                        hero = _b.sent();
                        return [2 /*return*/, hero.val()];
                }
            });
        });
    };
    HeroDAO.setFamilyByID = function (id, family) {
        return __awaiter(this, void 0, void 0, function () {
            var batman;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, (0, database_1.get)((0, database_1.ref)(database_2.default, "Heros/" + id + "/family"))];
                    case 1:
                        batman = _b.sent();
                        // console.log((batman).val());
                        return [4 /*yield*/, (0, database_1.update)((0, database_1.ref)(database_2.default, "Heros/" + id + "/family"), family)];
                    case 2:
                        // console.log((batman).val());
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HeroDAO.getGroups = function () {
        return __awaiter(this, void 0, void 0, function () {
            var groups, groupList, _i, _b, _c, key, group, heros, grouper, _d, _e, _f, key_1, hero;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0: return [4 /*yield*/, (0, database_1.get)((0, database_1.ref)(database_2.default, "Groups"))];
                    case 1:
                        groups = (_g.sent()).val();
                        groupList = [];
                        // TODO: How to check if the object entries are heros...
                        for (_i = 0, _b = Object.entries(groups); _i < _b.length; _i++) {
                            _c = _b[_i], key = _c[0], group = _c[1];
                            heros = [];
                            grouper = group;
                            for (_d = 0, _e = Object.entries(grouper); _d < _e.length; _d++) {
                                _f = _e[_d], key_1 = _f[0], hero = _f[1];
                                heros.push(hero);
                            }
                            groupList.push({
                                name: key,
                                heros: heros,
                            });
                        }
                        console.log(groupList);
                        return [2 /*return*/, groupList];
                }
            });
        });
    };
    HeroDAO.getHeroByName = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var heros, key;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, (0, database_1.get)((0, database_1.ref)(database_2.default, "Heros"))];
                    case 1: return [4 /*yield*/, (_b.sent()).val()];
                    case 2:
                        heros = _b.sent();
                        for (key in heros) {
                            if (heros[key].name == name) {
                                return [2 /*return*/, heros[key]];
                            }
                        }
                        return [2 /*return*/, {
                                name: "Hero not found",
                                power: "",
                                group: "",
                                family: undefined,
                                movieCount: 0,
                            }];
                }
            });
        });
    };
    HeroDAO.getHerosByPower = function (power) {
        return __awaiter(this, void 0, void 0, function () {
            var heros, heroList, key;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, (0, database_1.get)((0, database_1.ref)(database_2.default, "Heros"))];
                    case 1: return [4 /*yield*/, (_b.sent()).val()];
                    case 2:
                        heros = _b.sent();
                        heroList = [];
                        for (key in heros) {
                            if (heros[key].power == power) {
                                heroList.push(heros[key]);
                            }
                        }
                        return [2 /*return*/, heroList];
                }
            });
        });
    };
    var _a;
    _a = HeroDAO;
    HeroDAO.incrementMovieCount = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var hero, count;
        return __generator(_a, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, database_1.get)((0, database_1.ref)(database_2.default, "Heros/" + id))];
                case 1:
                    hero = _b.sent();
                    count = hero.val().movieCount;
                    console.log(count);
                    count++;
                    (0, database_1.update)((0, database_1.ref)(database_2.default, "Heros/" + id), {
                        movieCount: count,
                    });
                    return [2 /*return*/, count];
            }
        });
    }); };
    return HeroDAO;
}());
exports.HeroDAO = HeroDAO;
