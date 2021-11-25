export interface Hero {
  name: string;
  power: string;
  group: string;
  family?: Family | undefined;
  movieCount: number;
}

export interface Family {
  dad: boolean;
  mom: boolean;
}

export interface HeroGroup {
  [groupName: string]: Group;
}

export interface Group {
  [key: string]: Hero;
}

export interface GroupResponse {
  name: string;
  heros: Hero[];
}

export interface IDinput {
  id: string;
}

export interface NameInput {
  name: string;
}

export interface PowerInput {
  power: string;
}

export interface HeroInput {
  hero: Hero;
}

export interface SetFamilyInput {
  id: string;
  family: Family;
}
