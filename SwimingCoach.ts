import { Coach } from "./Coach";

export class SwimingCoach implements Coach{
    getDailyWorkout(): string {
        return "Dans un cours de natation, vous devez faire 100 mètres en 3 minutes"
    }
}