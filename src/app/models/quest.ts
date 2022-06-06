import { Hero } from "../heroes/hero";

export interface Quest {
    id: number;
    name: string;
    description: string;
    prize: number;
    xp: number;
    time: number;
    assignedHero?: Hero
}
