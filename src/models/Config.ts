export interface Ship {
  name: string;
  nation: string;
  tier: Tier;
  type: ShipType;
  kind: Kind;
  torpedos: string;
  caliber: string;
  id: number;
  selected: boolean;
}

export const Fields = ["Id", "", "Name", "Nation", "Tier", "Kind", "Type"];

export const NationValues = [
  "U.K.",
  "Japan",
  "France",
  "U.S.A.",
  "U.S.S.R.",
  "Italy",
  "Germany",
  "Netherlands",
  "Europe",
  "Pan-America",
  "Pan-Asia",
  "Spain",
];
export type Nations = (typeof NationValues)[number];

export const Tiers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] as const;
export type Tier = (typeof Tiers)[number];

export type Kind = "N" | "P";

export const ShipTypes = ["A", "B", "C", "D", "S"] as const;
export type ShipType = (typeof ShipTypes)[number];

export interface Config {
  version: number;
  lastChange?: Date;
  configVisible: boolean;
  descriptionVisible: boolean;
  sound: Sound;
  sort: Sort;
  ships: Ship[];
  profiles: UserProfile[];
}

export interface Sound {
  volume: number;
  file: string;
}

export interface Sort {
  by: string;
  order: SortOrder;
}

export type SortOrder = "ascending" | "descending";

export interface UserProfile {
  id: number;
  name: string;
  shipIds: number[];
}

export function shipTypeToString(shipType: ShipType) {
  switch (shipType) {
    case "A":
      return "Aircraft Carrier";
    case "B":
      return "Battleship";
    case "C":
      return "Cruiser";
    case "D":
      return "Destroyer";
    case "S":
      return "Submarine";
    default:
      return "---";
  }
}
