"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function heroProfile(data) {
    return {
        name: data.name,
        group: data.group,
        family: data.family,
        power: data.power,
        movieCount: data.movieCount
    };
}
exports.default = heroProfile;
