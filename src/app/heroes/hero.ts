import { Quest } from "../quests/quest";

export interface Hero {
    id: number;
    name: string;
    xp: number;
    asssignment?: Quest;
    coinsWon: number;
}