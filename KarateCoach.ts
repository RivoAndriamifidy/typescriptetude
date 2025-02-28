import { Coach } from "./Coach";

export class KarateCoach implements Coach{
    getDailyWorkout(): string{
        return "Pratiquer la karaté"
    }
}