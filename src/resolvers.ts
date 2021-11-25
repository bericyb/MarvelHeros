import { DBServices } from "./heroService";
import {
  SetFamilyInput,
  Hero,
  HeroInput,
  IDinput,
  NameInput,
  PowerInput,
} from "./types";

const resolvers = {
  Query: {
    heros: () => {
      return DBServices.getAllHeros();
    },
    heroByID: (_: any, input: IDinput) => {
      return DBServices.getHeroByID(input.id);
    },
    heroByName: (_: any, input: NameInput) => {
      return DBServices.getHeroByName(input.name);
    },
    herosByPower: (_: any, input: PowerInput) => {
      return DBServices.getHerosByPower(input.power);
    },
    familyByID: (_: any, input: IDinput) => {
      return DBServices.getFamilyByID(input.id);
    },
    groups: () => {
      return DBServices.getGroups();
    },
  },

  Mutation: {
    incrementMovieCount: (_: any, input: IDinput) => {
      const count = DBServices.incrementMovieCount(input.id);
      return {
        code: 200,
        success: true,
        message: `Successfully incremented movieCount for superhero ID: ${input}`,
        movieCount: count,
      };
    },
    insertNewHero: async (_: any, input: HeroInput) => {
      const inserted = (await DBServices.insertNewHero(input.hero)) as Hero;
      console.log(inserted);
      return {
        code: 200,
        success: true,
        message: `Successfully inserted new hero: ${inserted.name}`,
        hero: inserted,
      };
    },
    removeHero: (_: any, input: IDinput) => {
      DBServices.deleteHeroByID(input.id);
    },
    // TODO: object from type def composed of two objects. Allowed to be any, create special type, or redefine typeDefs input object?
    setFamily: (_: any, input: SetFamilyInput) => {
      console.log(input);
      DBServices.setFamilyByID(input);
      return {
        code: 200,
      };
    },
  },
};

export default resolvers;
