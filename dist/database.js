"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("firebase/app");
var database_1 = require("firebase/database");
var firebaseConfig = {
    apiKey: "AIzaSyCS1MHcfEuaLKB70aRUoFyrTRXoVpdM7Yc",
    authDomain: "apollo-30dbb.firebaseapp.com",
    databaseURL: "https://apollo-30dbb-default-rtdb.firebaseio.com",
    projectId: "apollo-30dbb",
    storageBucket: "apollo-30dbb.appspot.com",
    messagingSenderId: "576732495631",
    appId: "1:576732495631:web:e933642612d96010ac887a",
};
var firebaseClient = (0, app_1.initializeApp)(firebaseConfig);
var db = (0, database_1.getDatabase)();
exports.default = db;
