import { ref, get, set, update, push, remove } from "firebase/database";
import heroProfile from "./heroProfile";
import db from "./database";
import {
  Family,
  Hero,
  Group,
  SetFamilyInput,
  HeroGroup,
  GroupResponse,
} from "./types";

export class HeroDAO {
  static incrementMovieCount = async (id: string): Promise<number> => {
    const hero: Hero = (await get(ref(db, `Heros/${id}`))).val();
    let count: number = hero.movieCount;
    console.log(count);

    count++;
    update(ref(db, `Heros/${id}`), {
      movieCount: count,
    });
    update(ref(db, `Groups/${hero.group}/${id}`), {
      movieCount: count,
    });

    return count;
  };

  static async insertNewHero(hero: Hero): Promise<Hero> {
    const newHeroID: string | null = push(ref(db, "Heros"), hero).key;
    await set(ref(db, `Groups/${hero.group}/${newHeroID}`), hero);
    const inserted: Hero = (await get(ref(db, `Heros/${newHeroID}`))).val();

    return inserted;
  }

  static async deleteHeroByID(id: string): Promise<void> {
    const hero: Hero = heroProfile((await get(ref(db, `Heros/${id}`))).val());
    await remove(ref(db, `Heros/${id}`));
    await remove(ref(db, `Groups/${hero.group}/${id}`));
  }

  static async getAllHeros(): Promise<Hero[]> {
    const heros: Hero[] = (await get(ref(db, "Heros"))).val();
    const heroList: Hero[] = [];
    for (const [key, hero] of Object.entries(heros)) {
      heroList.push(heroProfile(hero));
    }
    return heroList;
  }

  static async getFamilyByID(id: string): Promise<Family> {
    const family: Family = (await get(ref(db, `Heros/${id}/family`))).val();
    // console.log(family.val());
    return family;
  }

  static async getHeroByID(id: string): Promise<Hero> {
    // console.log(`Heros/${id}`);
    const hero: Hero = (await get(ref(db, `Heros/${id}`))).val();
    return hero;
  }

  static async setFamilyByID(input: SetFamilyInput): Promise<void> {
    const hero: Hero = (await get(ref(db, `Heros/${input.id}`))).val();
    await update(ref(db, `Heros/${input.id}/family`), input.family);
    await update(
      ref(db, `Groups/${hero.group}/${input.id}/family`),
      input.family
    );
  }

  static async getGroups(): Promise<GroupResponse[]> {
    const groups: HeroGroup = (await get(ref(db, `Groups`))).val();

    const groupList: GroupResponse[] = [];
    console.log(groups);
    for (const [groupName, groupHeros] of Object.entries(groups)) {
      console.log(groupName);
      const heros: Hero[] = [];

      for (const [key, hero] of Object.entries(groupHeros)) {
        heros.push(hero);
      }

      groupList.push({
        name: groupName,
        heros: heros,
      });
    }
    return groupList;
  }

  static async getHeroByName(name: string): Promise<Hero> {
    const heros: Hero[] = (await get(ref(db, `Heros`))).val();

    for (const key in heros) {
      if (heros[key].name == name) {
        return heros[key];
      }
    }
    return {
      name: "Hero not found",
      power: "",
      group: "",
      family: undefined,
      movieCount: 0,
    };
  }

  static async getHerosByPower(power: string): Promise<Hero[]> {
    // console.log(power);
    const heros: Hero[] = (await get(ref(db, `Heros`))).val();
    const heroList: Hero[] = [];

    for (const key in heros) {
      if (heros[key].power == power) {
        heroList.push(heros[key]);
      }
    }
    return heroList;
  }
}
