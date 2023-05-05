import Race from './Race';

export default class Halfling extends Race {
  _maxLifePoints: number;
  static _instancesCreated = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling._instancesCreated += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    return Halfling._instancesCreated;
  }
}