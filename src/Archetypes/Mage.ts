import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType;
  private static _instancesCreated = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage._instancesCreated += 1;
  }

  get energyType() {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Mage._instancesCreated;
  }
}