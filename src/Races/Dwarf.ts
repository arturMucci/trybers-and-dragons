import Race from './Race';

export default class Dwarf extends Race {
  _maxLifePoints: number;
  protected static _instancesCreated = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._instancesCreated += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    return Dwarf._instancesCreated;
  }
}