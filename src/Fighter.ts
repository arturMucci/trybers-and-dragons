import Energy from './Energy';

export type TFighter = {

};

export default interface Fighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy;

  attack(enemy: TFighter): void;
  special?(enemy: TFighter): void;
  levelUp(): void;
  receiveDamage(attackPoints: number): number;
}