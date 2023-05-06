import Archetype, { Mage, Ranger, Necromancer, Warrior } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Dwarf, Elf, Halfling, Orc } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _defense: number;
  private _lifePoints: number;
  private _strength: number;
  private _energy: Energy | undefined;

  private _dexterity: number;
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;

  constructor(
    name: string,
    race?: string,
    archetype?: string,
  ) {
    this._dexterity = getRandomInt(1, 10);
    this._race = this.newRace(name, race);
    this._archetype = this.newArchetype(name, archetype);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get defense(): number {
    return this._defense;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get energy(): Energy | undefined {
    if (this._energy) {
      const type = this._energy.type_;
      const { amount } = this._energy;
      return { type_: type, amount };
    }
    return undefined;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) {
      this._lifePoints -= damage;
    }
    if (damage <= 0) {
      this._lifePoints -= 1;
    }
    if (this._lifePoints < 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter) {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    if (this._energy) {
      this._energy.amount = 10;
    }
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    this._lifePoints = this._maxLifePoints;
  }

  private newRace(
    name: string,
    race: string | undefined,
  ): Race {
    switch (race?.toLowerCase()) {
      case 'dwarf':
        return new Dwarf(name, this._dexterity);
      case 'halfling':
        return new Halfling(name, this._dexterity);
      case 'orc':
        return new Orc(name, this._dexterity);
      default:
        return new Elf(name, this._dexterity);
    }
  }

  private newArchetype = (
    name: string,
    archeType: string | undefined,
  ): Archetype => {
    const archetype = archeType?.toLocaleLowerCase() || 'Elf';

    switch (archetype) {
      case 'necromancer':
        return new Necromancer(name);
      case 'ranger':
        return new Ranger(name);
      case 'warrior':
        return new Warrior(name);
      default:
        return new Mage(name);
    }
  };
}

// const teste = new Character('Jão');

// console.log(teste.race);
