import Race from './Race';

export default class Elf extends Race {
  _maxLifePoints: number;
  protected static _instancesCreated = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._instancesCreated += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    return Elf._instancesCreated;
  }
}