import { EnergyType } from '../Energy';

export default abstract class Archetype {
  private _name: string;
  private _special = 0;
  private _cost = 0;
  private static _createdArchetypes = 0;

  constructor(name: string) {
    this._name = name;
    Archetype._createdArchetypes += 1;
  }

  get name(): string {
    return this._name;
  }

  get special(): number {
    return this._special;
  }

  get cost(): number {
    return this._cost;
  }

  static createdArchetypeInstances(): number {
    return Archetype._createdArchetypes;
  }

  abstract get energyType(): EnergyType;
}