import { Hero } from "./hero";

export interface Quest {
    id: number;
    name: string;
    description: string;
    prize: number;
    xp: number;
    time: number;
    assignedHero?: Hero
}
