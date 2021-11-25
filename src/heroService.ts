import { HeroDAO } from "./heroDAO";
import { Hero, Family, Group, SetFamilyInput, GroupResponse } from "./types";

export class DBServices {
  static getAllHeros(): Promise<Hero[]> {
    return HeroDAO.getAllHeros();
  }
  static getHeroByID(id: string): Promise<Hero> {
    return HeroDAO.getHeroByID(id);
  }
  static getHeroByName(name: string): Promise<Hero> {
    return HeroDAO.getHeroByName(name);
  }
  static getHerosByPower(power: string): Promise<Hero[]> {
    return HeroDAO.getHerosByPower(power);
  }
  static getFamilyByID(id: string): Promise<Family> {
    return HeroDAO.getFamilyByID(id);
  }
  static getGroups(): Promise<GroupResponse[]> {
    return HeroDAO.getGroups();
  }
  static incrementMovieCount(id: string): Promise<number> {
    return HeroDAO.incrementMovieCount(id);
  }
  static insertNewHero(hero: Hero): Promise<Hero> {
    return HeroDAO.insertNewHero(hero);
  }
  static deleteHeroByID(id: string): Promise<void> {
    return HeroDAO.deleteHeroByID(id);
  }
  static setFamilyByID(family: SetFamilyInput): Promise<void> {
    return HeroDAO.setFamilyByID(family);
  }
}
