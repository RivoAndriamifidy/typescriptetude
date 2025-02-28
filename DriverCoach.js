"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const KarateCoach_1 = require("./KarateCoach");
const SwimingCoach_1 = require("./SwimingCoach");
let mSwimingCoach = new SwimingCoach_1.SwimingCoach;
let mKarateCoach = new KarateCoach_1.KarateCoach;
console.log(mSwimingCoach.getDailyWorkout());
console.log(mKarateCoach.getDailyWorkout());
