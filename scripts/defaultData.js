"use strict";

// Type
// A: Aircraft Carrier
// B: Battleship
// C: Cruiser
// D: Destroyer
// S: Submarine

// Kind
// N: normal or early-access ship
// P: premium or special ship (except early-access)

const defaultConfig = {
  version: 3,
  configVisible: true,
  sound: {
    volume: 0.3,
    file: "explosion1"
  },
  sort: {
    by: "id",
    order: "descending",
  },
  ships: [
    {
      "name": "Black Swan",
      "nation": "U.K.",
      "tier": 1,
      "type": "C",
      "kind": "N",
      "torpedos": "n",
      "caliber": "102",
      "id": 0, "selected": true
    },
    {
      "name": "Bougainville",
      "nation": "France",
      "tier": 1,
      "type": "C",
      "kind": "N",
      "torpedos": "n",
      "caliber": "139",
      "id": 1, "selected": true
    },
    {
      "name": "Chengan",
      "nation": "Pan-Asia",
      "tier": 1,
      "type": "C",
      "kind": "N",
      "torpedos": "n",
      "caliber": "127",
      "id": 2, "selected": true
    },
    {
      "name": "Erie",
      "nation": "U.S.A.",
      "tier": 1,
      "type": "C",
      "kind": "N",
      "torpedos": "n",
      "caliber": "152",
      "id": 3, "selected": true
    },
    {
      "name": "Eritrea",
      "nation": "Italy",
      "tier": 1,
      "type": "C",
      "kind": "N",
      "torpedos": "n",
      "caliber": "120",
      "id": 4, "selected": true
    },
    {
      "name": "Gryf",
      "nation": "Europe",
      "tier": 1,
      "type": "C",
      "kind": "N",
      "torpedos": "n",
      "caliber": "120",
      "id": 5, "selected": true
    },
    {
      "name": "Hashidate",
      "nation": "Japan",
      "tier": 1,
      "type": "C",
      "kind": "N",
      "torpedos": "n",
      "caliber": "120",
      "id": 6, "selected": true
    },
    {
      "name": "Hermelin",
      "nation": "Germany",
      "tier": 1,
      "type": "C",
      "kind": "N",
      "torpedos": "n",
      "caliber": "128",
      "id": 7, "selected": true
    },
    {
      "name": "Orlan",
      "nation": "U.S.S.R.",
      "tier": 1,
      "type": "C",
      "kind": "N",
      "torpedos": "n",
      "caliber": "130",
      "id": 8, "selected": true
    },
    {
      "name": "Van Kinsbergen",
      "nation": "Netherlands",
      "tier": 1,
      "type": "C",
      "kind": "N",
      "torpedos": "n",
      "caliber": "120",
      "id": 9, "selected": true
    },
    {
      "name": "Mikasa",
      "nation": "Japan",
      "tier": 2,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "305",
      "id": 10, "selected": true
    },
    {
      "name": "Albany",
      "nation": "U.S.A.",
      "tier": 2,
      "type": "C",
      "kind": "P",
      "torpedos": "n",
      "caliber": "152",
      "id": 11, "selected": true
    },
    {
      "name": "Almirante Abreu",
      "nation": "Pan-America",
      "tier": 2,
      "type": "C",
      "kind": "P",
      "torpedos": "n",
      "caliber": "152",
      "id": 12, "selected": true
    },
    {
      "name": "Chester",
      "nation": "U.S.A.",
      "tier": 2,
      "type": "C",
      "kind": "N",
      "torpedos": "n",
      "caliber": "152",
      "id": 13, "selected": true
    },
    {
      "name": "Chikuma",
      "nation": "Japan",
      "tier": 2,
      "type": "C",
      "kind": "N",
      "torpedos": "n",
      "caliber": "152",
      "id": 14, "selected": true
    },
    {
      "name": "Diana",
      "nation": "U.S.S.R.",
      "tier": 2,
      "type": "C",
      "kind": "P",
      "torpedos": "n",
      "caliber": "152",
      "id": 15, "selected": true
    },
    {
      "name": "Diana Lima",
      "nation": "U.S.S.R.",
      "tier": 2,
      "type": "C",
      "kind": "P",
      "torpedos": "n",
      "caliber": "152",
      "id": 16, "selected": true
    },
    {
      "name": "Dresden",
      "nation": "Germany",
      "tier": 2,
      "type": "C",
      "kind": "N",
      "torpedos": "n",
      "caliber": "105",
      "id": 17, "selected": true
    },
    {
      "name": "Emden",
      "nation": "Germany",
      "tier": 2,
      "type": "C",
      "kind": "P",
      "torpedos": "n",
      "caliber": "105",
      "id": 18, "selected": true
    },
    {
      "name": "Gelderland",
      "nation": "Netherlands",
      "tier": 2,
      "type": "C",
      "kind": "N",
      "torpedos": "n",
      "caliber": "120",
      "id": 19, "selected": true
    },
    {
      "name": "Jurien de la Gravière",
      "nation": "France",
      "tier": 2,
      "type": "C",
      "kind": "N",
      "torpedos": "n",
      "caliber": "165",
      "id": 20, "selected": true
    },
    {
      "name": "Nino Bixio",
      "nation": "Italy",
      "tier": 2,
      "type": "C",
      "kind": "N",
      "torpedos": "n",
      "caliber": "120",
      "id": 21, "selected": true
    },
    {
      "name": "Novik",
      "nation": "U.S.S.R.",
      "tier": 2,
      "type": "C",
      "kind": "N",
      "torpedos": "n",
      "caliber": "120",
      "id": 22, "selected": true
    },
    {
      "name": "Weymouth",
      "nation": "U.K.",
      "tier": 2,
      "type": "C",
      "kind": "N",
      "torpedos": "n",
      "caliber": "152",
      "id": 23, "selected": true
    },
    {
      "name": "Curtatone",
      "nation": "Italy",
      "tier": 2,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "102",
      "id": 24, "selected": true
    },
    {
      "name": "Enseigne Gabolde",
      "nation": "France",
      "tier": 2,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "100",
      "id": 25, "selected": true
    },
    {
      "name": "Longjiang",
      "nation": "Pan-Asia",
      "tier": 2,
      "type": "D",
      "kind": "N",
      "torpedos": "d",
      "caliber": "105",
      "id": 26, "selected": true
    },
    {
      "name": "Medea",
      "nation": "U.K.",
      "tier": 2,
      "type": "D",
      "kind": "N",
      "torpedos": "s",
      "caliber": "102",
      "id": 27, "selected": true
    },
    {
      "name": "Sampson",
      "nation": "U.S.A.",
      "tier": 2,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "102",
      "id": 28, "selected": true
    },
    {
      "name": "Smith",
      "nation": "U.S.A.",
      "tier": 2,
      "type": "D",
      "kind": "P",
      "torpedos": "y",
      "caliber": "76.2",
      "id": 29, "selected": true
    },
    {
      "name": "Storozhevoi",
      "nation": "U.S.S.R.",
      "tier": 2,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "102",
      "id": 30, "selected": true
    },
    {
      "name": "Tachibana",
      "nation": "Japan",
      "tier": 2,
      "type": "D",
      "kind": "P",
      "torpedos": "y",
      "caliber": "76",
      "id": 31, "selected": true
    },
    {
      "name": "Tachibana Lima",
      "nation": "Japan",
      "tier": 2,
      "type": "D",
      "kind": "P",
      "torpedos": "y",
      "caliber": "76",
      "id": 32, "selected": true
    },
    {
      "name": "Tátra",
      "nation": "Europe",
      "tier": 2,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "100",
      "id": 33, "selected": true
    },
    {
      "name": "Umikaze",
      "nation": "Japan",
      "tier": 2,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "120",
      "id": 34, "selected": true
    },
    {
      "name": "V-25",
      "nation": "Germany",
      "tier": 2,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "105",
      "id": 35, "selected": true
    },
    {
      "name": "Bellerophon",
      "nation": "U.K.",
      "tier": 3,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "305",
      "id": 36, "selected": true
    },
    {
      "name": "Indefatigable",
      "nation": "U.K.",
      "tier": 3,
      "type": "B",
      "kind": "N",
      "torpedos": "s",
      "caliber": "305",
      "id": 37, "selected": true
    },
    {
      "name": "Dreadnought",
      "nation": "U.K.",
      "tier": 3,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "305",
      "id": 38, "selected": true
    },
    {
      "name": "Kawachi",
      "nation": "Japan",
      "tier": 3,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "305",
      "id": 39, "selected": true
    },
    {
      "name": "Knyaz Suvorov",
      "nation": "U.S.S.R.",
      "tier": 3,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "305",
      "id": 40, "selected": true
    },
    {
      "name": "König Albert",
      "nation": "Germany",
      "tier": 3,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "305",
      "id": 41, "selected": true
    },
    {
      "name": "Nassau",
      "nation": "Germany",
      "tier": 3,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "283",
      "id": 42, "selected": true
    },
    {
      "name": "South Carolina",
      "nation": "U.S.A.",
      "tier": 3,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "305",
      "id": 43, "selected": true
    },
    {
      "name": "Turenne",
      "nation": "France",
      "tier": 3,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "305",
      "id": 44, "selected": true
    },
    {
      "name": "Von der Tann",
      "nation": "Germany",
      "tier": 3,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "283",
      "id": 45, "selected": true
    },
    {
      "name": "AL Avrora",
      "nation": "U.S.S.R.",
      "tier": 3,
      "type": "C",
      "kind": "P",
      "torpedos": "n",
      "caliber": "152",
      "id": 46, "selected": true
    },
    {
      "name": "Aurora",
      "nation": "U.S.S.R.",
      "tier": 3,
      "type": "C",
      "kind": "P",
      "torpedos": "n",
      "caliber": "152",
      "id": 47, "selected": true
    },
    {
      "name": "Bogatyr",
      "nation": "U.S.S.R.",
      "tier": 3,
      "type": "C",
      "kind": "N",
      "torpedos": "n",
      "caliber": "130",
      "id": 48, "selected": true
    },
    {
      "name": "Caledon",
      "nation": "U.K.",
      "tier": 3,
      "type": "C",
      "kind": "N",
      "torpedos": "s",
      "caliber": "152",
      "id": 49, "selected": true
    },
    {
      "name": "Charleston",
      "nation": "U.S.A.",
      "tier": 3,
      "type": "C",
      "kind": "P",
      "torpedos": "n",
      "caliber": "152",
      "id": 50, "selected": true
    },
    {
      "name": "Friant",
      "nation": "France",
      "tier": 3,
      "type": "C",
      "kind": "N",
      "torpedos": "y",
      "caliber": "139",
      "id": 51, "selected": true
    },
    {
      "name": "Java",
      "nation": "Netherlands",
      "tier": 3,
      "type": "C",
      "kind": "N",
      "torpedos": "n",
      "caliber": "150",
      "id": 52, "selected": true
    },
    {
      "name": "Katori",
      "nation": "Japan",
      "tier": 3,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "140",
      "id": 53, "selected": true
    },
    {
      "name": "Kolberg",
      "nation": "Germany",
      "tier": 3,
      "type": "C",
      "kind": "N",
      "torpedos": "n",
      "caliber": "105",
      "id": 54, "selected": true
    },
    {
      "name": "Oleg",
      "nation": "U.S.S.R.",
      "tier": 3,
      "type": "C",
      "kind": "P",
      "torpedos": "n",
      "caliber": "152",
      "id": 55, "selected": true
    },
    {
      "name": "St. Louis",
      "nation": "U.S.A.",
      "tier": 3,
      "type": "C",
      "kind": "N",
      "torpedos": "n",
      "caliber": "152",
      "id": 56, "selected": true
    },
    {
      "name": "Taranto",
      "nation": "Italy",
      "tier": 3,
      "type": "C",
      "kind": "N",
      "torpedos": "y",
      "caliber": "150",
      "id": 57, "selected": true
    },
    {
      "name": "Tenryū",
      "nation": "Japan",
      "tier": 3,
      "type": "C",
      "kind": "N",
      "torpedos": "y",
      "caliber": "140",
      "id": 58, "selected": true
    },
    {
      "name": "Varyag",
      "nation": "U.S.S.R.",
      "tier": 3,
      "type": "C",
      "kind": "P",
      "torpedos": "n",
      "caliber": "152",
      "id": 59, "selected": true
    },
    {
      "name": "Campbeltown",
      "nation": "U.K.",
      "tier": 3,
      "type": "D",
      "kind": "P",
      "torpedos": "y",
      "caliber": "102",
      "id": 60, "selected": true
    },
    {
      "name": "Derzki",
      "nation": "U.S.S.R.",
      "tier": 3,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "102",
      "id": 61, "selected": true
    },
    {
      "name": "Fusilier",
      "nation": "France",
      "tier": 3,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "100",
      "id": 62, "selected": true
    },
    {
      "name": "G-101",
      "nation": "Germany",
      "tier": 3,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "105",
      "id": 63, "selected": true
    },
    {
      "name": "Nazario Sauro",
      "nation": "Italy",
      "tier": 3,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "120",
      "id": 64, "selected": true
    },
    {
      "name": "Phra Ruang",
      "nation": "Pan-Asia",
      "tier": 3,
      "type": "D",
      "kind": "N",
      "torpedos": "d",
      "caliber": "102",
      "id": 65, "selected": true
    },
    {
      "name": "Romulus",
      "nation": "Europe",
      "tier": 3,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "120",
      "id": 66, "selected": true
    },
    {
      "name": "Valkyrie",
      "nation": "U.K.",
      "tier": 3,
      "type": "D",
      "kind": "N",
      "torpedos": "s",
      "caliber": "102",
      "id": 67, "selected": true
    },
    {
      "name": "Vampire",
      "nation": "Commonwealth",
      "tier": 3,
      "type": "D",
      "kind": "P",
      "torpedos": "s",
      "caliber": "102",
      "id": 68, "selected": true
    },
    {
      "name": "Wakatake",
      "nation": "Japan",
      "tier": 3,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "120",
      "id": 69, "selected": true
    },
    {
      "name": "Wickes",
      "nation": "U.S.A.",
      "tier": 3,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "102",
      "id": 70, "selected": true
    },
    {
      "name": "Hermes",
      "nation": "U.K.",
      "tier": 4,
      "type": "A",
      "kind": "N",
      "torpedos": "n",
      "caliber": "-",
      "id": 71, "selected": true
    },
    {
      "name": "Hōshō",
      "nation": "Japan",
      "tier": 4,
      "type": "A",
      "kind": "N",
      "torpedos": "n",
      "caliber": "-",
      "id": 72, "selected": true
    },
    {
      "name": "Komsomolets",
      "nation": "U.S.S.R.",
      "tier": 4,
      "type": "A",
      "kind": "N",
      "torpedos": "n",
      "caliber": "-",
      "id": 73, "selected": true
    },
    {
      "name": "Langley",
      "nation": "U.S.A.",
      "tier": 4,
      "type": "A",
      "kind": "N",
      "torpedos": "n",
      "caliber": "-",
      "id": 74, "selected": true
    },
    {
      "name": "Rhein",
      "nation": "Germany",
      "tier": 4,
      "type": "A",
      "kind": "N",
      "torpedos": "n",
      "caliber": "-",
      "id": 75, "selected": true
    },
    {
      "name": "Arkansas Beta",
      "nation": "U.S.A.",
      "tier": 4,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "305",
      "id": 76, "selected": true
    },
    {
      "name": "Courbet",
      "nation": "France",
      "tier": 4,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "305",
      "id": 77, "selected": true
    },
    {
      "name": "Dante Alighieri",
      "nation": "Italy",
      "tier": 4,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "305",
      "id": 78, "selected": true
    },
    {
      "name": "Gangut",
      "nation": "U.S.S.R.",
      "tier": 4,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "305",
      "id": 79, "selected": true
    },
    {
      "name": "Imperator Nikolai I",
      "nation": "U.S.S.R.",
      "tier": 4,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "305",
      "id": 80, "selected": true
    },
    {
      "name": "Ishizuchi",
      "nation": "Japan",
      "tier": 4,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "305",
      "id": 81, "selected": true
    },
    {
      "name": "Kaiser",
      "nation": "Germany",
      "tier": 4,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "305",
      "id": 82, "selected": true
    },
    {
      "name": "Moltke",
      "nation": "Germany",
      "tier": 4,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "283",
      "id": 83, "selected": true
    },
    {
      "name": "Myōgi",
      "nation": "Japan",
      "tier": 4,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "356",
      "id": 84, "selected": true
    },
    {
      "name": "Orion",
      "nation": "U.K.",
      "tier": 4,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "343",
      "id": 85, "selected": true
    },
    {
      "name": "Queen Mary",
      "nation": "U.K.",
      "tier": 4,
      "type": "B",
      "kind": "N",
      "torpedos": "s",
      "caliber": "343",
      "id": 86, "selected": true
    },
    {
      "name": "Wyoming",
      "nation": "U.S.A.",
      "tier": 4,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "305",
      "id": 87, "selected": true
    },
    {
      "name": "Alberto di Giussano",
      "nation": "Italy",
      "tier": 4,
      "type": "C",
      "kind": "N",
      "torpedos": "y",
      "caliber": "152",
      "id": 88, "selected": true
    },
    {
      "name": "Danae",
      "nation": "U.K.",
      "tier": 4,
      "type": "C",
      "kind": "N",
      "torpedos": "s",
      "caliber": "152",
      "id": 89, "selected": true
    },
    {
      "name": "De Ruyter",
      "nation": "Netherlands",
      "tier": 4,
      "type": "C",
      "kind": "N",
      "torpedos": "n",
      "caliber": "150",
      "id": 90, "selected": true
    },
    {
      "name": "Duguay-Trouin",
      "nation": "France",
      "tier": 4,
      "type": "C",
      "kind": "N",
      "torpedos": "y",
      "caliber": "155",
      "id": 91, "selected": true
    },
    {
      "name": "Iwaki Alpha",
      "nation": "Japan",
      "tier": 4,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "140",
      "id": 92, "selected": true
    },
    {
      "name": "Karlsruhe",
      "nation": "Germany",
      "tier": 4,
      "type": "C",
      "kind": "N",
      "torpedos": "y",
      "caliber": "150",
      "id": 93, "selected": true
    },
    {
      "name": "Kuma",
      "nation": "Japan",
      "tier": 4,
      "type": "C",
      "kind": "N",
      "torpedos": "y",
      "caliber": "140",
      "id": 94, "selected": true
    },
    {
      "name": "Phoenix",
      "nation": "U.S.A.",
      "tier": 4,
      "type": "C",
      "kind": "N",
      "torpedos": "y",
      "caliber": "152",
      "id": 95, "selected": true
    },
    {
      "name": "Svietlana",
      "nation": "U.S.S.R.",
      "tier": 4,
      "type": "C",
      "kind": "N",
      "torpedos": "y",
      "caliber": "130",
      "id": 96, "selected": true
    },
    {
      "name": "Yūbari",
      "nation": "Japan",
      "tier": 4,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "140",
      "id": 97, "selected": true
    },
    {
      "name": "Bourrasque",
      "nation": "France",
      "tier": 4,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "130",
      "id": 98, "selected": true
    },
    {
      "name": "Clemson",
      "nation": "U.S.A.",
      "tier": 4,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "102",
      "id": 99, "selected": true
    },
    {
      "name": "Isokaze",
      "nation": "Japan",
      "tier": 4,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "120",
      "id": 100, "selected": true
    },
    {
      "name": "Izyaslav",
      "nation": "U.S.S.R.",
      "tier": 4,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "102",
      "id": 101, "selected": true
    },
    {
      "name": "Klas Horn",
      "nation": "Europe",
      "tier": 4,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "120",
      "id": 102, "selected": true
    },
    {
      "name": "Shenyang",
      "nation": "Pan-Asia",
      "tier": 4,
      "type": "D",
      "kind": "N",
      "torpedos": "d",
      "caliber": "127",
      "id": 103, "selected": true
    },
    {
      "name": "Turbine",
      "nation": "Italy",
      "tier": 4,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "120",
      "id": 104, "selected": true
    },
    {
      "name": "V-170",
      "nation": "Germany",
      "tier": 4,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "105",
      "id": 105, "selected": true
    },
    {
      "name": "Wakeful",
      "nation": "U.K.",
      "tier": 4,
      "type": "D",
      "kind": "N",
      "torpedos": "s",
      "caliber": "120",
      "id": 106, "selected": true
    },
    {
      "name": "Agincourt",
      "nation": "U.K.",
      "tier": 5,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "305",
      "id": 107, "selected": true
    },
    {
      "name": "ARP Haruna",
      "nation": "Japan",
      "tier": 5,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "356",
      "id": 108, "selected": true
    },
    {
      "name": "ARP Hiei",
      "nation": "Japan",
      "tier": 5,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "356",
      "id": 109, "selected": true
    },
    {
      "name": "ARP Kirishima",
      "nation": "Japan",
      "tier": 5,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "356",
      "id": 110, "selected": true
    },
    {
      "name": "ARP Kongō",
      "nation": "Japan",
      "tier": 5,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "356",
      "id": 111, "selected": true
    },
    {
      "name": "Bretagne",
      "nation": "France",
      "tier": 5,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "340",
      "id": 112, "selected": true
    },
    {
      "name": "Conte di Cavour",
      "nation": "Italy",
      "tier": 5,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "305",
      "id": 113, "selected": true
    },
    {
      "name": "Derfflinger",
      "nation": "Germany",
      "tier": 5,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "305",
      "id": 114, "selected": true
    },
    {
      "name": "Giulio Cesare",
      "nation": "Italy",
      "tier": 5,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "320",
      "id": 115, "selected": true
    },
    {
      "name": "HSF Hiei",
      "nation": "Japan",
      "tier": 5,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "356",
      "id": 116, "selected": true
    },
    {
      "name": "Iron Duke",
      "nation": "U.K.",
      "tier": 5,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "343",
      "id": 117, "selected": true
    },
    {
      "name": "Tiger",
      "nation": "U.K.",
      "tier": 5,
      "type": "B",
      "kind": "N",
      "torpedos": "s",
      "caliber": "343",
      "id": 118, "selected": true
    },
    {
      "name": "Kongō",
      "nation": "Japan",
      "tier": 5,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "356",
      "id": 119, "selected": true
    },
    {
      "name": "König",
      "nation": "Germany",
      "tier": 5,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "305",
      "id": 120, "selected": true
    },
    {
      "name": "New York",
      "nation": "U.S.A.",
      "tier": 5,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "356",
      "id": 121, "selected": true
    },
    {
      "name": "Oklahoma",
      "nation": "U.S.A.",
      "tier": 5,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "356",
      "id": 122, "selected": true
    },
    {
      "name": "Oktyabrskaya Revolutsiya",
      "nation": "U.S.S.R.",
      "tier": 5,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "305",
      "id": 123, "selected": true
    },
    {
      "name": "Pyotr Velikiy",
      "nation": "U.S.S.R.",
      "tier": 5,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "356",
      "id": 124, "selected": true
    },
    {
      "name": "Texas",
      "nation": "U.S.A.",
      "tier": 5,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "356",
      "id": 125, "selected": true
    },
    {
      "name": "Viribus Unitis",
      "nation": "Europe",
      "tier": 5,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "305",
      "id": 126, "selected": true
    },
    {
      "name": "Celebes",
      "nation": "Netherlands",
      "tier": 5,
      "type": "C",
      "kind": "N",
      "torpedos": "n",
      "caliber": "150",
      "id": 127, "selected": true
    },
    {
      "name": "Chungking",
      "nation": "Pan-Asia",
      "tier": 5,
      "type": "C",
      "kind": "N",
      "torpedos": "d",
      "caliber": "152",
      "id": 128, "selected": true
    },
    {
      "name": "Emerald",
      "nation": "U.K.",
      "tier": 5,
      "type": "C",
      "kind": "N",
      "torpedos": "s",
      "caliber": "152",
      "id": 129, "selected": true
    },
    {
      "name": "Émile Bertin",
      "nation": "France",
      "tier": 5,
      "type": "C",
      "kind": "N",
      "torpedos": "y",
      "caliber": "152",
      "id": 130, "selected": true
    },
    {
      "name": "Exeter",
      "nation": "U.K.",
      "tier": 5,
      "type": "C",
      "kind": "P",
      "torpedos": "s",
      "caliber": "203",
      "id": 131, "selected": true
    },
    {
      "name": "Furutaka",
      "nation": "Japan",
      "tier": 5,
      "type": "C",
      "kind": "N",
      "torpedos": "y",
      "caliber": "203",
      "id": 132, "selected": true
    },
    {
      "name": "Agano",
      "nation": "Japan",
      "tier": 5,
      "type": "C",
      "kind": "N",
      "torpedos": "y",
      "caliber": "150",
      "id": 133, "selected": true
    },
    {
      "name": "Genova",
      "nation": "Italy",
      "tier": 5,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "203",
      "id": 134, "selected": true
    },
    {
      "name": "Hawkins",
      "nation": "U.K.",
      "tier": 5,
      "type": "C",
      "kind": "N",
      "torpedos": "s",
      "caliber": "190",
      "id": 135, "selected": true
    },
    {
      "name": "Kirov",
      "nation": "U.S.S.R.",
      "tier": 5,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "180",
      "id": 136, "selected": true
    },
    {
      "name": "Königsberg",
      "nation": "Germany",
      "tier": 5,
      "type": "C",
      "kind": "N",
      "torpedos": "y",
      "caliber": "150",
      "id": 137, "selected": true
    },
    {
      "name": "Kotovsky",
      "nation": "U.S.S.R.",
      "tier": 5,
      "type": "C",
      "kind": "N",
      "torpedos": "y",
      "caliber": "152",
      "id": 138, "selected": true
    },
    {
      "name": "Krasny Krym",
      "nation": "U.S.S.R.",
      "tier": 5,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "130",
      "id": 139, "selected": true
    },
    {
      "name": "Marblehead",
      "nation": "U.S.A.",
      "tier": 5,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "152",
      "id": 140, "selected": true
    },
    {
      "name": "Marblehead Lima",
      "nation": "U.S.A.",
      "tier": 5,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "152",
      "id": 141, "selected": true
    },
    {
      "name": "Mikoyan",
      "nation": "U.S.S.R.",
      "tier": 5,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "180",
      "id": 142, "selected": true
    },
    {
      "name": "Murmansk",
      "nation": "U.S.S.R.",
      "tier": 5,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "152",
      "id": 143, "selected": true
    },
    {
      "name": "Omaha",
      "nation": "U.S.A.",
      "tier": 5,
      "type": "C",
      "kind": "N",
      "torpedos": "y",
      "caliber": "152",
      "id": 144, "selected": true
    },
    {
      "name": "Raimondo Montecuccoli",
      "nation": "Italy",
      "tier": 5,
      "type": "C",
      "kind": "N",
      "torpedos": "y",
      "caliber": "152",
      "id": 145, "selected": true
    },
    {
      "name": "Yahagi",
      "nation": "Japan",
      "tier": 5,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "152",
      "id": 146, "selected": true
    },
    {
      "name": "Acasta",
      "nation": "U.K.",
      "tier": 5,
      "type": "D",
      "kind": "N",
      "torpedos": "s",
      "caliber": "120",
      "id": 147, "selected": true
    },
    {
      "name": "Fūjin",
      "nation": "Japan",
      "tier": 5,
      "type": "D",
      "kind": "P",
      "torpedos": "y",
      "caliber": "120",
      "id": 148, "selected": true
    },
    {
      "name": "Gremyashchy",
      "nation": "U.S.S.R.",
      "tier": 5,
      "type": "D",
      "kind": "P",
      "torpedos": "y",
      "caliber": "130",
      "id": 149, "selected": true
    },
    {
      "name": "Hill",
      "nation": "U.S.A.",
      "tier": 5,
      "type": "D",
      "kind": "P",
      "torpedos": "y",
      "caliber": "127",
      "id": 150, "selected": true
    },
    {
      "name": "Jaguar",
      "nation": "France",
      "tier": 5,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "130",
      "id": 151, "selected": true
    },
    {
      "name": "Jianwei",
      "nation": "Pan-Asia",
      "tier": 5,
      "type": "D",
      "kind": "N",
      "torpedos": "d",
      "caliber": "120",
      "id": 152, "selected": true
    },
    {
      "name": "Kamikaze",
      "nation": "Japan",
      "tier": 5,
      "type": "D",
      "kind": "P",
      "torpedos": "y",
      "caliber": "120",
      "id": 153, "selected": true
    },
    {
      "name": "Kamikaze R",
      "nation": "Japan",
      "tier": 5,
      "type": "D",
      "kind": "P",
      "torpedos": "y",
      "caliber": "120",
      "id": 154, "selected": true
    },
    {
      "name": "Maestrale",
      "nation": "Italy",
      "tier": 5,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "120",
      "id": 155, "selected": true
    },
    {
      "name": "Minekaze",
      "nation": "Japan",
      "tier": 5,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "120",
      "id": 156, "selected": true
    },
    {
      "name": "Mutsuki",
      "nation": "Japan",
      "tier": 5,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "120",
      "id": 157, "selected": true
    },
    {
      "name": "Nicholas",
      "nation": "U.S.A.",
      "tier": 5,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "127",
      "id": 158, "selected": true
    },
    {
      "name": "Okhotnik",
      "nation": "U.S.S.R.",
      "tier": 5,
      "type": "D",
      "kind": "P",
      "torpedos": "y",
      "caliber": "130",
      "id": 159, "selected": true
    },
    {
      "name": "Podvoisky",
      "nation": "U.S.S.R.",
      "tier": 5,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "130",
      "id": 160, "selected": true
    },
    {
      "name": "Siroco",
      "nation": "France",
      "tier": 5,
      "type": "D",
      "kind": "P",
      "torpedos": "y",
      "caliber": "130",
      "id": 161, "selected": true
    },
    {
      "name": "T-22",
      "nation": "Germany",
      "tier": 5,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "105",
      "id": 162, "selected": true
    },
    {
      "name": "Visby",
      "nation": "Europe",
      "tier": 5,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "120",
      "id": 163, "selected": true
    },
    {
      "name": "Ark Royal",
      "nation": "U.K.",
      "tier": 6,
      "type": "A",
      "kind": "P",
      "torpedos": "n",
      "caliber": "-",
      "id": 164, "selected": true
    },
    {
      "name": "Béarn",
      "nation": "France",
      "tier": 6,
      "type": "A",
      "kind": "P",
      "torpedos": "n",
      "caliber": "-",
      "id": 165, "selected": true
    },
    {
      "name": "Erich Loewenhardt",
      "nation": "Germany",
      "tier": 6,
      "type": "A",
      "kind": "P",
      "torpedos": "n",
      "caliber": "-",
      "id": 166, "selected": true
    },
    {
      "name": "Furious",
      "nation": "U.K.",
      "tier": 6,
      "type": "A",
      "kind": "N",
      "torpedos": "n",
      "caliber": "-",
      "id": 167, "selected": true
    },
    {
      "name": "Ranger",
      "nation": "U.S.A.",
      "tier": 6,
      "type": "A",
      "kind": "N",
      "torpedos": "n",
      "caliber": "-",
      "id": 168, "selected": true
    },
    {
      "name": "Ryūjō",
      "nation": "Japan",
      "tier": 6,
      "type": "A",
      "kind": "N",
      "torpedos": "n",
      "caliber": "-",
      "id": 169, "selected": true
    },
    {
      "name": "Serov",
      "nation": "U.S.S.R.",
      "tier": 6,
      "type": "A",
      "kind": "N",
      "torpedos": "n",
      "caliber": "-",
      "id": 170, "selected": true
    },
    {
      "name": "Weser",
      "nation": "Germany",
      "tier": 6,
      "type": "A",
      "kind": "N",
      "torpedos": "n",
      "caliber": "-",
      "id": 171, "selected": true
    },
    {
      "name": "Andrea Doria",
      "nation": "Italy",
      "tier": 6,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "320",
      "id": 172, "selected": true
    },
    {
      "name": "Arizona",
      "nation": "U.S.A.",
      "tier": 6,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "356",
      "id": 173, "selected": true
    },
    {
      "name": "Bayern",
      "nation": "Germany",
      "tier": 6,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "380",
      "id": 174, "selected": true
    },
    {
      "name": "Dunkerque",
      "nation": "France",
      "tier": 6,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "330",
      "id": 175, "selected": true
    },
    {
      "name": "Dunkerque B",
      "nation": "France",
      "tier": 6,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "330",
      "id": 176, "selected": true
    },
    {
      "name": "Fusō",
      "nation": "Japan",
      "tier": 6,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "356",
      "id": 177, "selected": true
    },
    {
      "name": "Ise",
      "nation": "Japan",
      "tier": 6,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "356",
      "id": 178, "selected": true
    },
    {
      "name": "Izmail",
      "nation": "U.S.S.R.",
      "tier": 6,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "356",
      "id": 179, "selected": true
    },
    {
      "name": "Mackensen",
      "nation": "Germany",
      "tier": 6,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "350",
      "id": 180, "selected": true
    },
    {
      "name": "Mutsu",
      "nation": "Japan",
      "tier": 6,
      "type": "B",
      "kind": "P",
      "torpedos": "y",
      "caliber": "410",
      "id": 181, "selected": true
    },
    {
      "name": "New Mexico",
      "nation": "U.S.A.",
      "tier": 6,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "356",
      "id": 182, "selected": true
    },
    {
      "name": "Normandie",
      "nation": "France",
      "tier": 6,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "340",
      "id": 183, "selected": true
    },
    {
      "name": "Novorossiysk",
      "nation": "U.S.S.R.",
      "tier": 6,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "320",
      "id": 184, "selected": true
    },
    {
      "name": "Prinz Eitel Friedrich",
      "nation": "Germany",
      "tier": 6,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "350",
      "id": 185, "selected": true
    },
    {
      "name": "Queen Elizabeth",
      "nation": "U.K.",
      "tier": 6,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "381",
      "id": 186, "selected": true
    },
    {
      "name": "Renown",
      "nation": "U.K.",
      "tier": 6,
      "type": "B",
      "kind": "N",
      "torpedos": "s",
      "caliber": "381",
      "id": 187, "selected": true
    },
    {
      "name": "Repulse",
      "nation": "U.K.",
      "tier": 6,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "381",
      "id": 188, "selected": true
    },
    {
      "name": "W. Virginia 1941",
      "nation": "U.S.A.",
      "tier": 6,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "406",
      "id": 189, "selected": true
    },
    {
      "name": "Warspite",
      "nation": "U.K.",
      "tier": 6,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "381",
      "id": 190, "selected": true
    },
    {
      "name": "Admiral Graf Spee",
      "nation": "Germany",
      "tier": 6,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "283",
      "id": 191, "selected": true
    },
    {
      "name": "Admiral Makarov",
      "nation": "U.S.S.R.",
      "tier": 6,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "150",
      "id": 192, "selected": true
    },
    {
      "name": "Aoba",
      "nation": "Japan",
      "tier": 6,
      "type": "C",
      "kind": "N",
      "torpedos": "y",
      "caliber": "203",
      "id": 193, "selected": true
    },
    {
      "name": "Gokase",
      "nation": "Japan",
      "tier": 6,
      "type": "C",
      "kind": "N",
      "torpedos": "y",
      "caliber": "150",
      "id": 194, "selected": true
    },
    {
      "name": "Budyonny",
      "nation": "U.S.S.R.",
      "tier": 6,
      "type": "C",
      "kind": "N",
      "torpedos": "y",
      "caliber": "152",
      "id": 195, "selected": true
    },
    {
      "name": "Canarias",
      "nation": "Spain",
      "tier": 6,
      "type": "C",
      "kind": "P",
      "torpedos": "n",
      "caliber": "203",
      "id": 196, "selected": true
    },
    {
      "name": "Dallas",
      "nation": "U.S.A.",
      "tier": 6,
      "type": "C",
      "kind": "N",
      "torpedos": "n",
      "caliber": "152",
      "id": 197, "selected": true
    },
    {
      "name": "De Grasse",
      "nation": "France",
      "tier": 6,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "152",
      "id": 198, "selected": true
    },
    {
      "name": "Devonshire",
      "nation": "U.K.",
      "tier": 6,
      "type": "C",
      "kind": "N",
      "torpedos": "s",
      "caliber": "203",
      "id": 199, "selected": true
    },
    {
      "name": "Dido",
      "nation": "U.K.",
      "tier": 6,
      "type": "C",
      "kind": "P",
      "torpedos": "s",
      "caliber": "133",
      "id": 200, "selected": true
    },
    {
      "name": "Duca d'Aosta",
      "nation": "Italy",
      "tier": 6,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "152",
      "id": 201, "selected": true
    },
    {
      "name": "HSF Admiral Graf Spee",
      "nation": "Germany",
      "tier": 6,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "283",
      "id": 202, "selected": true
    },
    {
      "name": "Huanghe",
      "nation": "Pan-Asia",
      "tier": 6,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "152",
      "id": 203, "selected": true
    },
    {
      "name": "Kijkduin",
      "nation": "Netherlands",
      "tier": 6,
      "type": "C",
      "kind": "N",
      "torpedos": "n",
      "caliber": "152",
      "id": 204, "selected": true
    },
    {
      "name": "La Galissonnière",
      "nation": "France",
      "tier": 6,
      "type": "C",
      "kind": "N",
      "torpedos": "y",
      "caliber": "152",
      "id": 205, "selected": true
    },
    {
      "name": "Leander",
      "nation": "U.K.",
      "tier": 6,
      "type": "C",
      "kind": "N",
      "torpedos": "s",
      "caliber": "152",
      "id": 206, "selected": true
    },
    {
      "name": "London",
      "nation": "U.K.",
      "tier": 6,
      "type": "C",
      "kind": "P",
      "torpedos": "s",
      "caliber": "203",
      "id": 207, "selected": true
    },
    {
      "name": "Molotov",
      "nation": "U.S.S.R.",
      "tier": 6,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "180",
      "id": 208, "selected": true
    },
    {
      "name": "Mysore",
      "nation": "Commonwealth",
      "tier": 6,
      "type": "C",
      "kind": "P",
      "torpedos": "n",
      "caliber": "152",
      "id": 209, "selected": true
    },
    {
      "name": "Nürnberg",
      "nation": "Germany",
      "tier": 6,
      "type": "C",
      "kind": "N",
      "torpedos": "y",
      "caliber": "150",
      "id": 210, "selected": true
    },
    {
      "name": "Pensacola",
      "nation": "U.S.A.",
      "tier": 6,
      "type": "C",
      "kind": "N",
      "torpedos": "n",
      "caliber": "203",
      "id": 211, "selected": true
    },
    {
      "name": "Perth",
      "nation": "Commonwealth",
      "tier": 6,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "152",
      "id": 212, "selected": true
    },
    {
      "name": "Rahmat",
      "nation": "Pan-Asia",
      "tier": 6,
      "type": "C",
      "kind": "N",
      "torpedos": "d",
      "caliber": "133",
      "id": 213, "selected": true
    },
    {
      "name": "Trento",
      "nation": "Italy",
      "tier": 6,
      "type": "C",
      "kind": "N",
      "torpedos": "y",
      "caliber": "203",
      "id": 214, "selected": true
    },
    {
      "name": "Aigle",
      "nation": "France",
      "tier": 6,
      "type": "D",
      "kind": "P",
      "torpedos": "y",
      "caliber": "127",
      "id": 215, "selected": true
    },
    {
      "name": "Anshan",
      "nation": "Pan-Asia",
      "tier": 6,
      "type": "D",
      "kind": "P",
      "torpedos": "y",
      "caliber": "130",
      "id": 216, "selected": true
    },
    {
      "name": "Aviere",
      "nation": "Italy",
      "tier": 6,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "120",
      "id": 217, "selected": true
    },
    {
      "name": "Ernst Gaede",
      "nation": "Germany",
      "tier": 6,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "150",
      "id": 218, "selected": true
    },
    {
      "name": "Farragut",
      "nation": "U.S.A.",
      "tier": 6,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "127",
      "id": 219, "selected": true
    },
    {
      "name": "Fubuki",
      "nation": "Japan",
      "tier": 6,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "127",
      "id": 220, "selected": true
    },
    {
      "name": "Fushun",
      "nation": "Pan-Asia",
      "tier": 6,
      "type": "D",
      "kind": "N",
      "torpedos": "d",
      "caliber": "130",
      "id": 221, "selected": true
    },
    {
      "name": "Gallant",
      "nation": "U.K.",
      "tier": 6,
      "type": "D",
      "kind": "P",
      "torpedos": "s",
      "caliber": "120",
      "id": 222, "selected": true
    },
    {
      "name": "Gnevny",
      "nation": "U.S.S.R.",
      "tier": 6,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "130",
      "id": 223, "selected": true
    },
    {
      "name": "Guépard",
      "nation": "France",
      "tier": 6,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "139",
      "id": 224, "selected": true
    },
    {
      "name": "Hatsuharu",
      "nation": "Japan",
      "tier": 6,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "127",
      "id": 225, "selected": true
    },
    {
      "name": "Icarus",
      "nation": "U.K.",
      "tier": 6,
      "type": "D",
      "kind": "N",
      "torpedos": "s",
      "caliber": "120",
      "id": 226, "selected": true
    },
    {
      "name": "Juruá",
      "nation": "Pan-America",
      "tier": 6,
      "type": "D",
      "kind": "P",
      "torpedos": "s",
      "caliber": "120",
      "id": 227, "selected": true
    },
    {
      "name": "Karl von Schönberg",
      "nation": "Germany",
      "tier": 6,
      "type": "D",
      "kind": "P",
      "torpedos": "y",
      "caliber": "150",
      "id": 228, "selected": true
    },
    {
      "name": "Leone",
      "nation": "Italy",
      "tier": 6,
      "type": "D",
      "kind": "P",
      "torpedos": "y",
      "caliber": "120",
      "id": 229, "selected": true
    },
    {
      "name": "Monaghan",
      "nation": "U.S.A.",
      "tier": 6,
      "type": "D",
      "kind": "P",
      "torpedos": "y",
      "caliber": "127",
      "id": 230, "selected": true
    },
    {
      "name": "Shinonome",
      "nation": "Japan",
      "tier": 6,
      "type": "D",
      "kind": "P",
      "torpedos": "y",
      "caliber": "127",
      "id": 231, "selected": true
    },
    {
      "name": "T-61",
      "nation": "Germany",
      "tier": 6,
      "type": "D",
      "kind": "P",
      "torpedos": "y",
      "caliber": "128",
      "id": 232, "selected": true
    },
    {
      "name": "Västerås",
      "nation": "Europe",
      "tier": 6,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "120",
      "id": 233, "selected": true
    },
    {
      "name": "Cachalot",
      "nation": "U.S.A.",
      "tier": 6,
      "type": "S",
      "kind": "N",
      "torpedos": "s",
      "caliber": "-",
      "id": 234, "selected": true
    },
    {
      "name": "U-69",
      "nation": "Germany",
      "tier": 6,
      "type": "S",
      "kind": "N",
      "torpedos": "s",
      "caliber": "-",
      "id": 235, "selected": true
    },
    {
      "name": "Ashitaka",
      "nation": "Japan",
      "tier": 7,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "410",
      "id": 236, "selected": true
    },
    {
      "name": "California",
      "nation": "U.S.A.",
      "tier": 7,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "356",
      "id": 237, "selected": true
    },
    {
      "name": "Colorado",
      "nation": "U.S.A.",
      "tier": 7,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "406",
      "id": 238, "selected": true
    },
    {
      "name": "Duke of York",
      "nation": "U.K.",
      "tier": 7,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "356",
      "id": 239, "selected": true
    },
    {
      "name": "Florida",
      "nation": "U.S.A.",
      "tier": 7,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "356",
      "id": 240, "selected": true
    },
    {
      "name": "Francesco Caracciolo",
      "nation": "Italy",
      "tier": 7,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "381",
      "id": 241, "selected": true
    },
    {
      "name": "Gneisenau",
      "nation": "Germany",
      "tier": 7,
      "type": "B",
      "kind": "N",
      "torpedos": "y",
      "caliber": "380",
      "id": 242, "selected": true
    },
    {
      "name": "Hood",
      "nation": "U.K.",
      "tier": 7,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "381",
      "id": 243, "selected": true
    },
    {
      "name": "Hyūga",
      "nation": "Japan",
      "tier": 7,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "356",
      "id": 244, "selected": true
    },
    {
      "name": "King George V",
      "nation": "U.K.",
      "tier": 7,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "356",
      "id": 245, "selected": true
    },
    {
      "name": "Rooke",
      "nation": "U.K.",
      "tier": 7,
      "type": "B",
      "kind": "N",
      "torpedos": "s",
      "caliber": "381",
      "id": 246, "selected": true
    },
    {
      "name": "Collingwood",
      "nation": "U.K.",
      "tier": 7,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "419",
      "id": 247, "selected": true
    },
    {
      "name": "Lyon",
      "nation": "France",
      "tier": 7,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "340",
      "id": 248, "selected": true
    },
    {
      "name": "Nagato",
      "nation": "Japan",
      "tier": 7,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "410",
      "id": 249, "selected": true
    },
    {
      "name": "Nelson",
      "nation": "U.K.",
      "tier": 7,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "406",
      "id": 250, "selected": true
    },
    {
      "name": "Poltava",
      "nation": "U.S.S.R.",
      "tier": 7,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "356",
      "id": 251, "selected": true
    },
    {
      "name": "Prinz Heinrich",
      "nation": "Germany",
      "tier": 7,
      "type": "B",
      "kind": "N",
      "torpedos": "y",
      "caliber": "380",
      "id": 252, "selected": true
    },
    {
      "name": "Scharnhorst",
      "nation": "Germany",
      "tier": 7,
      "type": "B",
      "kind": "P",
      "torpedos": "y",
      "caliber": "283",
      "id": 253, "selected": true
    },
    {
      "name": "Scharnhorst B",
      "nation": "Germany",
      "tier": 7,
      "type": "B",
      "kind": "P",
      "torpedos": "y",
      "caliber": "283",
      "id": 254, "selected": true
    },
    {
      "name": "Sinop",
      "nation": "U.S.S.R.",
      "tier": 7,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "406",
      "id": 255, "selected": true
    },
    {
      "name": "Strasbourg",
      "nation": "France",
      "tier": 7,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "330",
      "id": 256, "selected": true
    },
    {
      "name": "Yukon",
      "nation": "Commonwealth",
      "tier": 7,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "381",
      "id": 257, "selected": true
    },
    {
      "name": "Algérie",
      "nation": "France",
      "tier": 7,
      "type": "C",
      "kind": "N",
      "torpedos": "y",
      "caliber": "203",
      "id": 258, "selected": true
    },
    {
      "name": "ARP Ashigara",
      "nation": "Japan",
      "tier": 7,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "203",
      "id": 259, "selected": true
    },
    {
      "name": "ARP Haguro",
      "nation": "Japan",
      "tier": 7,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "203",
      "id": 260, "selected": true
    },
    {
      "name": "ARP Myōkō",
      "nation": "Japan",
      "tier": 7,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "203",
      "id": 261, "selected": true
    },
    {
      "name": "ARP Nachi",
      "nation": "Japan",
      "tier": 7,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "203",
      "id": 262, "selected": true
    },
    {
      "name": "Atlanta",
      "nation": "U.S.A.",
      "tier": 7,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "127",
      "id": 263, "selected": true
    },
    {
      "name": "Atlanta B",
      "nation": "U.S.A.",
      "tier": 7,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "127",
      "id": 264, "selected": true
    },
    {
      "name": "Belfast",
      "nation": "U.K.",
      "tier": 7,
      "type": "C",
      "kind": "P",
      "torpedos": "n",
      "caliber": "152",
      "id": 265, "selected": true
    },
    {
      "name": "Boise",
      "nation": "U.S.A.",
      "tier": 7,
      "type": "C",
      "kind": "P",
      "torpedos": "n",
      "caliber": "152",
      "id": 266, "selected": true
    },
    {
      "name": "Chumphon",
      "nation": "Pan-Asia",
      "tier": 7,
      "type": "C",
      "kind": "N",
      "torpedos": "d",
      "caliber": "127",
      "id": 267, "selected": true
    },
    {
      "name": "Duca degli Abruzzi",
      "nation": "Italy",
      "tier": 7,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "152",
      "id": 268, "selected": true
    },
    {
      "name": "Eastern Dragon",
      "nation": "Japan",
      "tier": 7,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "203",
      "id": 269, "selected": true
    },
    {
      "name": "Eendracht",
      "nation": "Netherlands",
      "tier": 7,
      "type": "C",
      "kind": "N",
      "torpedos": "n",
      "caliber": "152",
      "id": 270, "selected": true
    },
    {
      "name": "Fiji",
      "nation": "U.K.",
      "tier": 7,
      "type": "C",
      "kind": "N",
      "torpedos": "s",
      "caliber": "152",
      "id": 271, "selected": true
    },
    {
      "name": "Flint",
      "nation": "U.S.A.",
      "tier": 7,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "127",
      "id": 272, "selected": true
    },
    {
      "name": "Gorizia",
      "nation": "Italy",
      "tier": 7,
      "type": "C",
      "kind": "P",
      "torpedos": "n",
      "caliber": "203",
      "id": 273, "selected": true
    },
    {
      "name": "Helena",
      "nation": "U.S.A.",
      "tier": 7,
      "type": "C",
      "kind": "N",
      "torpedos": "n",
      "caliber": "152",
      "id": 274, "selected": true
    },
    {
      "name": "Indianapolis",
      "nation": "U.S.A.",
      "tier": 7,
      "type": "C",
      "kind": "P",
      "torpedos": "n",
      "caliber": "203",
      "id": 275, "selected": true
    },
    {
      "name": "Lazo",
      "nation": "U.S.S.R.",
      "tier": 7,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "152",
      "id": 276, "selected": true
    },
    {
      "name": "München",
      "nation": "Germany",
      "tier": 7,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "150",
      "id": 277, "selected": true
    },
    {
      "name": "Myōkō",
      "nation": "Japan",
      "tier": 7,
      "type": "C",
      "kind": "N",
      "torpedos": "y",
      "caliber": "203",
      "id": 278, "selected": true
    },
    {
      "name": "Omono",
      "nation": "Japan",
      "tier": 7,
      "type": "C",
      "kind": "N",
      "torpedos": "y",
      "caliber": "150",
      "id": 279, "selected": true
    },
    {
      "name": "Tokachi",
      "nation": "Japan",
      "tier": 7,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "127",
      "id": 280, "selected": true
    },
    {
      "name": "New Orleans",
      "nation": "U.S.A.",
      "tier": 7,
      "type": "C",
      "kind": "N",
      "torpedos": "n",
      "caliber": "203",
      "id": 281, "selected": true
    },
    {
      "name": "Nueve de Julio",
      "nation": "Pan-America",
      "tier": 7,
      "type": "C",
      "kind": "P",
      "torpedos": "n",
      "caliber": "152",
      "id": 282, "selected": true
    },
    {
      "name": "Shchors",
      "nation": "U.S.S.R.",
      "tier": 7,
      "type": "C",
      "kind": "N",
      "torpedos": "y",
      "caliber": "152",
      "id": 283, "selected": true
    },
    {
      "name": "Southern Dragon",
      "nation": "Japan",
      "tier": 7,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "203",
      "id": 284, "selected": true
    },
    {
      "name": "Surrey",
      "nation": "U.K.",
      "tier": 7,
      "type": "C",
      "kind": "N",
      "torpedos": "s",
      "caliber": "203",
      "id": 285, "selected": true
    },
    {
      "name": "Toulon",
      "nation": "France",
      "tier": 7,
      "type": "C",
      "kind": "P",
      "torpedos": "n",
      "caliber": "305",
      "id": 286, "selected": true
    },
    {
      "name": "Weimar",
      "nation": "Germany",
      "tier": 7,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "150",
      "id": 287, "selected": true
    },
    {
      "name": "Yorck",
      "nation": "Germany",
      "tier": 7,
      "type": "C",
      "kind": "N",
      "torpedos": "y",
      "caliber": "210",
      "id": 288, "selected": true
    },
    {
      "name": "Zara",
      "nation": "Italy",
      "tier": 7,
      "type": "C",
      "kind": "N",
      "torpedos": "y",
      "caliber": "203",
      "id": 289, "selected": true
    },
    {
      "name": "Akatsuki",
      "nation": "Japan",
      "tier": 7,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "127",
      "id": 290, "selected": true
    },
    {
      "name": "Błyskawica",
      "nation": "Europe",
      "tier": 7,
      "type": "D",
      "kind": "P",
      "torpedos": "y",
      "caliber": "120",
      "id": 291, "selected": true
    },
    {
      "name": "FR25",
      "nation": "Italy",
      "tier": 7,
      "type": "D",
      "kind": "P",
      "torpedos": "y",
      "caliber": "139",
      "id": 292, "selected": true
    },
    {
      "name": "Gadjah Mada",
      "nation": "Pan-Asia",
      "tier": 7,
      "type": "D",
      "kind": "N",
      "torpedos": "d",
      "caliber": "120",
      "id": 293, "selected": true
    },
    {
      "name": "Haida",
      "nation": "Commonwealth",
      "tier": 7,
      "type": "D",
      "kind": "P",
      "torpedos": "s",
      "caliber": "120",
      "id": 294, "selected": true
    },
    {
      "name": "Huron",
      "nation": "Commonwealth",
      "tier": 7,
      "type": "D",
      "kind": "P",
      "torpedos": "s",
      "caliber": "120",
      "id": 295, "selected": true
    },
    {
      "name": "Jervis",
      "nation": "U.K.",
      "tier": 7,
      "type": "D",
      "kind": "N",
      "torpedos": "s",
      "caliber": "120",
      "id": 296, "selected": true
    },
    {
      "name": "Leberecht Maass",
      "nation": "Germany",
      "tier": 7,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "128",
      "id": 297, "selected": true
    },
    {
      "name": "Leningrad",
      "nation": "U.S.S.R.",
      "tier": 7,
      "type": "D",
      "kind": "P",
      "torpedos": "y",
      "caliber": "130",
      "id": 298, "selected": true
    },
    {
      "name": "Luca Tarigo",
      "nation": "Italy",
      "tier": 7,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "120",
      "id": 299, "selected": true
    },
    {
      "name": "Mahan",
      "nation": "U.S.A.",
      "tier": 7,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "127",
      "id": 300, "selected": true
    },
    {
      "name": "Minsk",
      "nation": "U.S.S.R.",
      "tier": 7,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "130",
      "id": 301, "selected": true
    },
    {
      "name": "Shiratsuyu",
      "nation": "Japan",
      "tier": 7,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "127",
      "id": 302, "selected": true
    },
    {
      "name": "Sims",
      "nation": "U.S.A.",
      "tier": 7,
      "type": "D",
      "kind": "P",
      "torpedos": "y",
      "caliber": "127",
      "id": 303, "selected": true
    },
    {
      "name": "Sims B",
      "nation": "U.S.A.",
      "tier": 7,
      "type": "D",
      "kind": "P",
      "torpedos": "y",
      "caliber": "127",
      "id": 304, "selected": true
    },
    {
      "name": "Skåne",
      "nation": "Europe",
      "tier": 7,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "120",
      "id": 305, "selected": true
    },
    {
      "name": "Vauquelin",
      "nation": "France",
      "tier": 7,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "139",
      "id": 306, "selected": true
    },
    {
      "name": "Yūdachi",
      "nation": "Japan",
      "tier": 7,
      "type": "D",
      "kind": "P",
      "torpedos": "y",
      "caliber": "127",
      "id": 307, "selected": true
    },
    {
      "name": "Z-31",
      "nation": "Germany",
      "tier": 7,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "150",
      "id": 308, "selected": true
    },
    {
      "name": "Z-39",
      "nation": "Germany",
      "tier": 7,
      "type": "D",
      "kind": "P",
      "torpedos": "y",
      "caliber": "150",
      "id": 309, "selected": true
    },
    {
      "name": "August von Parseval",
      "nation": "Germany",
      "tier": 8,
      "type": "A",
      "kind": "N",
      "torpedos": "n",
      "caliber": "-",
      "id": 310, "selected": true
    },
    {
      "name": "Chkalov",
      "nation": "U.S.S.R.",
      "tier": 8,
      "type": "A",
      "kind": "P",
      "torpedos": "n",
      "caliber": "-",
      "id": 311, "selected": true
    },
    {
      "name": "Enterprise",
      "nation": "U.S.A.",
      "tier": 8,
      "type": "A",
      "kind": "P",
      "torpedos": "n",
      "caliber": "-",
      "id": 312, "selected": true
    },
    {
      "name": "Graf Zeppelin",
      "nation": "Germany",
      "tier": 8,
      "type": "A",
      "kind": "P",
      "torpedos": "n",
      "caliber": "-",
      "id": 313, "selected": true
    },
    {
      "name": "Graf Zeppelin B",
      "nation": "Germany",
      "tier": 8,
      "type": "A",
      "kind": "P",
      "torpedos": "n",
      "caliber": "-",
      "id": 314, "selected": true
    },
    {
      "name": "Hornet",
      "nation": "U.S.A.",
      "tier": 8,
      "type": "A",
      "kind": "P",
      "torpedos": "n",
      "caliber": "-",
      "id": 315, "selected": true
    },
    {
      "name": "Implacable",
      "nation": "U.K.",
      "tier": 8,
      "type": "A",
      "kind": "N",
      "torpedos": "n",
      "caliber": "-",
      "id": 316, "selected": true
    },
    {
      "name": "Indomitable",
      "nation": "U.K.",
      "tier": 8,
      "type": "A",
      "kind": "P",
      "torpedos": "n",
      "caliber": "-",
      "id": 317, "selected": true
    },
    {
      "name": "Aquila",
      "nation": "Italy",
      "tier": 8,
      "type": "A",
      "kind": "P",
      "torpedos": "n",
      "caliber": "-",
      "id": 318, "selected": true
    },
    {
      "name": "Kaga",
      "nation": "Japan",
      "tier": 8,
      "type": "A",
      "kind": "P",
      "torpedos": "n",
      "caliber": "-",
      "id": 319, "selected": true
    },
    {
      "name": "Kaga B",
      "nation": "Japan",
      "tier": 8,
      "type": "A",
      "kind": "P",
      "torpedos": "n",
      "caliber": "-",
      "id": 320, "selected": true
    },
    {
      "name": "Lexington",
      "nation": "U.S.A.",
      "tier": 8,
      "type": "A",
      "kind": "N",
      "torpedos": "n",
      "caliber": "-",
      "id": 321, "selected": true
    },
    {
      "name": "Pobeda",
      "nation": "U.S.S.R.",
      "tier": 8,
      "type": "A",
      "kind": "N",
      "torpedos": "n",
      "caliber": "-",
      "id": 322, "selected": true
    },
    {
      "name": "Saipan",
      "nation": "U.S.A.",
      "tier": 8,
      "type": "A",
      "kind": "P",
      "torpedos": "n",
      "caliber": "-",
      "id": 323, "selected": true
    },
    {
      "name": "Saipan B",
      "nation": "U.S.A.",
      "tier": 8,
      "type": "A",
      "kind": "P",
      "torpedos": "n",
      "caliber": "-",
      "id": 324, "selected": true
    },
    {
      "name": "Sanzang",
      "nation": "Pan-Asia",
      "tier": 8,
      "type": "A",
      "kind": "P",
      "torpedos": "n",
      "caliber": "-",
      "id": 325, "selected": true
    },
    {
      "name": "Shōkaku",
      "nation": "Japan",
      "tier": 8,
      "type": "A",
      "kind": "N",
      "torpedos": "n",
      "caliber": "-",
      "id": 326, "selected": true
    },
    {
      "name": "AL Littorio",
      "nation": "Italy",
      "tier": 8,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "381",
      "id": 327, "selected": true
    },
    {
      "name": "Alabama",
      "nation": "U.S.A.",
      "tier": 8,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "406",
      "id": 328, "selected": true
    },
    {
      "name": "Alabama ST",
      "nation": "U.S.A.",
      "tier": 8,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "406",
      "id": 329, "selected": true
    },
    {
      "name": "Alabama VL",
      "nation": "U.S.A.",
      "tier": 8,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "406",
      "id": 330, "selected": true
    },
    {
      "name": "Amagi",
      "nation": "Japan",
      "tier": 8,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "410",
      "id": 331, "selected": true
    },
    {
      "name": "Anhalt",
      "nation": "Germany",
      "tier": 8,
      "type": "B",
      "kind": "P",
      "torpedos": "y",
      "caliber": "350",
      "id": 332, "selected": true
    },
    {
      "name": "Atlântico",
      "nation": "Pan-America",
      "tier": 8,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "381",
      "id": 333, "selected": true
    },
    {
      "name": "Bismarck",
      "nation": "Germany",
      "tier": 8,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "380",
      "id": 334, "selected": true
    },
    {
      "name": "Borodino",
      "nation": "U.S.S.R.",
      "tier": 8,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "406",
      "id": 335, "selected": true
    },
    {
      "name": "Brandenburg",
      "nation": "Germany",
      "tier": 8,
      "type": "B",
      "kind": "P",
      "torpedos": "y",
      "caliber": "305",
      "id": 336, "selected": true
    },
    {
      "name": "Champagne",
      "nation": "France",
      "tier": 8,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "406",
      "id": 337, "selected": true
    },
    {
      "name": "Constellation",
      "nation": "U.S.A.",
      "tier": 8,
      "type": "B",
      "kind": "P",
      "torpedos": "y",
      "caliber": "406",
      "id": 338, "selected": true
    },
    {
      "name": "Flandre",
      "nation": "France",
      "tier": 8,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "380",
      "id": 339, "selected": true
    },
    {
      "name": "Gascogne",
      "nation": "France",
      "tier": 8,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "380",
      "id": 340, "selected": true
    },
    {
      "name": "Ignis Purgatio",
      "nation": "Japan",
      "tier": 8,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "410",
      "id": 341, "selected": true
    },
    {
      "name": "Kansas",
      "nation": "U.S.A.",
      "tier": 8,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "406",
      "id": 342, "selected": true
    },
    {
      "name": "Kii",
      "nation": "Japan",
      "tier": 8,
      "type": "B",
      "kind": "P",
      "torpedos": "y",
      "caliber": "410",
      "id": 343, "selected": true
    },
    {
      "name": "Lenin",
      "nation": "U.S.S.R.",
      "tier": 8,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "406",
      "id": 344, "selected": true
    },
    {
      "name": "Massachusetts",
      "nation": "U.S.A.",
      "tier": 8,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "406",
      "id": 345, "selected": true
    },
    {
      "name": "Massachusetts B",
      "nation": "U.S.A.",
      "tier": 8,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "406",
      "id": 346, "selected": true
    },
    {
      "name": "Monarch",
      "nation": "U.K.",
      "tier": 8,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "381",
      "id": 347, "selected": true
    },
    {
      "name": "Hawke",
      "nation": "U.K.",
      "tier": 8,
      "type": "B",
      "kind": "N",
      "torpedos": "s",
      "caliber": "406",
      "id": 348, "selected": true
    },
    {
      "name": "North Carolina",
      "nation": "U.S.A.",
      "tier": 8,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "406",
      "id": 349, "selected": true
    },
    {
      "name": "Odin",
      "nation": "Germany",
      "tier": 8,
      "type": "B",
      "kind": "P",
      "torpedos": "y",
      "caliber": "305",
      "id": 350, "selected": true
    },
    {
      "name": "Ragnarok",
      "nation": "Japan",
      "tier": 8,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "410",
      "id": 351, "selected": true
    },
    {
      "name": "Richelieu",
      "nation": "France",
      "tier": 8,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "380",
      "id": 352, "selected": true
    },
    {
      "name": "Roma",
      "nation": "Italy",
      "tier": 8,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "381",
      "id": 353, "selected": true
    },
    {
      "name": "Tirpitz",
      "nation": "Germany",
      "tier": 8,
      "type": "B",
      "kind": "P",
      "torpedos": "y",
      "caliber": "380",
      "id": 354, "selected": true
    },
    {
      "name": "Tirpitz B",
      "nation": "Germany",
      "tier": 8,
      "type": "B",
      "kind": "P",
      "torpedos": "y",
      "caliber": "380",
      "id": 355, "selected": true
    },
    {
      "name": "Vanguard",
      "nation": "U.K.",
      "tier": 8,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "381",
      "id": 356, "selected": true
    },
    {
      "name": "Vittorio Veneto",
      "nation": "Italy",
      "tier": 8,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "381",
      "id": 357, "selected": true
    },
    {
      "name": "Vladivostok",
      "nation": "U.S.S.R.",
      "tier": 8,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "406",
      "id": 358, "selected": true
    },
    {
      "name": "Zieten",
      "nation": "Germany",
      "tier": 8,
      "type": "B",
      "kind": "N",
      "torpedos": "y",
      "caliber": "406",
      "id": 359, "selected": true
    },
    {
      "name": "Admiral Hipper",
      "nation": "Germany",
      "tier": 8,
      "type": "C",
      "kind": "N",
      "torpedos": "y",
      "caliber": "203",
      "id": 360, "selected": true
    },
    {
      "name": "AL Montpelier",
      "nation": "U.S.A.",
      "tier": 8,
      "type": "C",
      "kind": "P",
      "torpedos": "n",
      "caliber": "152",
      "id": 361, "selected": true
    },
    {
      "name": "Albemarle",
      "nation": "U.K.",
      "tier": 8,
      "type": "C",
      "kind": "N",
      "torpedos": "s",
      "caliber": "203",
      "id": 362, "selected": true
    },
    {
      "name": "Amalfi",
      "nation": "Italy",
      "tier": 8,
      "type": "C",
      "kind": "N",
      "torpedos": "y",
      "caliber": "203",
      "id": 363, "selected": true
    },
    {
      "name": "Anchorage",
      "nation": "U.S.A.",
      "tier": 8,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "203",
      "id": 364, "selected": true
    },
    {
      "name": "ARP Maya",
      "nation": "Japan",
      "tier": 8,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "203",
      "id": 365, "selected": true
    },
    {
      "name": "ARP Takao",
      "nation": "Japan",
      "tier": 8,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "203",
      "id": 366, "selected": true
    },
    {
      "name": "Atago",
      "nation": "Japan",
      "tier": 8,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "203",
      "id": 367, "selected": true
    },
    {
      "name": "Atago B",
      "nation": "Japan",
      "tier": 8,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "203",
      "id": 368, "selected": true
    },
    {
      "name": "Baltimore",
      "nation": "U.S.A.",
      "tier": 8,
      "type": "C",
      "kind": "N",
      "torpedos": "n",
      "caliber": "203",
      "id": 369, "selected": true
    },
    {
      "name": "Bayard",
      "nation": "France",
      "tier": 8,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "152",
      "id": 370, "selected": true
    },
    {
      "name": "Belfast '43",
      "nation": "U.K.",
      "tier": 8,
      "type": "C",
      "kind": "P",
      "torpedos": "s",
      "caliber": "152",
      "id": 371, "selected": true
    },
    {
      "name": "Chapayev",
      "nation": "U.S.S.R.",
      "tier": 8,
      "type": "C",
      "kind": "N",
      "torpedos": "y",
      "caliber": "152",
      "id": 372, "selected": true
    },
    {
      "name": "Charles Martel",
      "nation": "France",
      "tier": 8,
      "type": "C",
      "kind": "N",
      "torpedos": "y",
      "caliber": "203",
      "id": 373, "selected": true
    },
    {
      "name": "Cherbourg",
      "nation": "France",
      "tier": 8,
      "type": "C",
      "kind": "N",
      "torpedos": "n",
      "caliber": "305",
      "id": 374, "selected": true
    },
    {
      "name": "Cheshire",
      "nation": "U.K.",
      "tier": 8,
      "type": "C",
      "kind": "P",
      "torpedos": "s",
      "caliber": "234",
      "id": 375, "selected": true
    },
    {
      "name": "Cleveland",
      "nation": "U.S.A.",
      "tier": 8,
      "type": "C",
      "kind": "N",
      "torpedos": "n",
      "caliber": "152",
      "id": 376, "selected": true
    },
    {
      "name": "Congress",
      "nation": "U.S.A.",
      "tier": 8,
      "type": "C",
      "kind": "P",
      "torpedos": "n",
      "caliber": "305",
      "id": 377, "selected": true
    },
    {
      "name": "Cross of Dorn",
      "nation": "Germany",
      "tier": 8,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "150",
      "id": 378, "selected": true
    },
    {
      "name": "De Zeven Provinciën",
      "nation": "Netherlands",
      "tier": 8,
      "type": "C",
      "kind": "P",
      "torpedos": "n",
      "caliber": "152",
      "id": 379, "selected": true
    },
    {
      "name": "Edinburgh",
      "nation": "U.K.",
      "tier": 8,
      "type": "C",
      "kind": "N",
      "torpedos": "s",
      "caliber": "152",
      "id": 380, "selected": true
    },
    {
      "name": "Haarlem",
      "nation": "Netherlands",
      "tier": 8,
      "type": "C",
      "kind": "N",
      "torpedos": "n",
      "caliber": "203",
      "id": 381, "selected": true
    },
    {
      "name": "Harbin",
      "nation": "Pan-Asia",
      "tier": 8,
      "type": "C",
      "kind": "N",
      "torpedos": "d",
      "caliber": "130",
      "id": 382, "selected": true
    },
    {
      "name": "Irian",
      "nation": "Pan-Asia",
      "tier": 8,
      "type": "C",
      "kind": "P",
      "torpedos": "d",
      "caliber": "152",
      "id": 383, "selected": true
    },
    {
      "name": "Mainz",
      "nation": "Germany",
      "tier": 8,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "150",
      "id": 384, "selected": true
    },
    {
      "name": "Mikhail Kutuzov",
      "nation": "U.S.S.R.",
      "tier": 8,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "152",
      "id": 385, "selected": true
    },
    {
      "name": "Mogami",
      "nation": "Japan",
      "tier": 8,
      "type": "C",
      "kind": "N",
      "torpedos": "y",
      "caliber": "203",
      "id": 386, "selected": true
    },
    {
      "name": "Shimanto",
      "nation": "Japan",
      "tier": 8,
      "type": "C",
      "kind": "N",
      "torpedos": "y",
      "caliber": "150",
      "id": 387, "selected": true
    },
    {
      "name": "Ochakov",
      "nation": "U.S.S.R.",
      "tier": 8,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "152",
      "id": 388, "selected": true
    },
    {
      "name": "Prinz Eugen",
      "nation": "Germany",
      "tier": 8,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "203",
      "id": 389, "selected": true
    },
    {
      "name": "Pyotr Bagration",
      "nation": "U.S.S.R.",
      "tier": 8,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "180",
      "id": 390, "selected": true
    },
    {
      "name": "Rochester",
      "nation": "U.S.A.",
      "tier": 8,
      "type": "C",
      "kind": "P",
      "torpedos": "n",
      "caliber": "203",
      "id": 391, "selected": true
    },
    {
      "name": "San Diego",
      "nation": "U.S.A.",
      "tier": 8,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "127",
      "id": 392, "selected": true
    },
    {
      "name": "Tallinn",
      "nation": "U.S.S.R.",
      "tier": 8,
      "type": "C",
      "kind": "N",
      "torpedos": "y",
      "caliber": "180",
      "id": 393, "selected": true
    },
    {
      "name": "Tiger '59",
      "nation": "U.K.",
      "tier": 8,
      "type": "C",
      "kind": "P",
      "torpedos": "n",
      "caliber": "152",
      "id": 394, "selected": true
    },
    {
      "name": "Tone",
      "nation": "Japan",
      "tier": 8,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "203",
      "id": 395, "selected": true
    },
    {
      "name": "Wichita",
      "nation": "U.S.A.",
      "tier": 8,
      "type": "C",
      "kind": "P",
      "torpedos": "n",
      "caliber": "203",
      "id": 396, "selected": true
    },
    {
      "name": "Wukong",
      "nation": "Pan-Asia",
      "tier": 8,
      "type": "C",
      "kind": "P",
      "torpedos": "d",
      "caliber": "203",
      "id": 397, "selected": true
    },
    {
      "name": "Akizuki",
      "nation": "Japan",
      "tier": 8,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "100",
      "id": 398, "selected": true
    },
    {
      "name": "AL Yukikaze",
      "nation": "Japan",
      "tier": 8,
      "type": "D",
      "kind": "P",
      "torpedos": "y",
      "caliber": "127",
      "id": 399, "selected": true
    },
    {
      "name": "Asashio",
      "nation": "Japan",
      "tier": 8,
      "type": "D",
      "kind": "P",
      "torpedos": "b",
      "caliber": "127",
      "id": 400, "selected": true
    },
    {
      "name": "Asashio B",
      "nation": "Japan",
      "tier": 8,
      "type": "D",
      "kind": "P",
      "torpedos": "b",
      "caliber": "127",
      "id": 401, "selected": true
    },
    {
      "name": "Benson",
      "nation": "U.S.A.",
      "tier": 8,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "127",
      "id": 402, "selected": true
    },
    {
      "name": "Cossack",
      "nation": "U.K.",
      "tier": 8,
      "type": "D",
      "kind": "P",
      "torpedos": "s",
      "caliber": "120",
      "id": 403, "selected": true
    },
    {
      "name": "Cossack B",
      "nation": "U.K.",
      "tier": 8,
      "type": "D",
      "kind": "P",
      "torpedos": "s",
      "caliber": "120",
      "id": 404, "selected": true
    },
    {
      "name": "Fenyang",
      "nation": "Pan-Asia",
      "tier": 8,
      "type": "D",
      "kind": "P",
      "torpedos": "b",
      "caliber": "100",
      "id": 405, "selected": true
    },
    {
      "name": "G. J. Maerker",
      "nation": "Germany",
      "tier": 8,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "150",
      "id": 406, "selected": true
    },
    {
      "name": "HSF Harekaze",
      "nation": "Japan",
      "tier": 8,
      "type": "D",
      "kind": "P",
      "torpedos": "y",
      "caliber": "127",
      "id": 407, "selected": true
    },
    {
      "name": "HSF Harekaze II",
      "nation": "Japan",
      "tier": 8,
      "type": "D",
      "kind": "P",
      "torpedos": "y",
      "caliber": "150",
      "id": 408, "selected": true
    },
    {
      "name": "Hsienyang",
      "nation": "Pan-Asia",
      "tier": 8,
      "type": "D",
      "kind": "N",
      "torpedos": "d",
      "caliber": "127",
      "id": 409, "selected": true
    },
    {
      "name": "Kagerō",
      "nation": "Japan",
      "tier": 8,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "127",
      "id": 410, "selected": true
    },
    {
      "name": "Kidd",
      "nation": "U.S.A.",
      "tier": 8,
      "type": "D",
      "kind": "P",
      "torpedos": "y",
      "caliber": "127",
      "id": 411, "selected": true
    },
    {
      "name": "Kiev",
      "nation": "U.S.S.R.",
      "tier": 8,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "130",
      "id": 412, "selected": true
    },
    {
      "name": "Le Fantasque",
      "nation": "France",
      "tier": 8,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "139",
      "id": 413, "selected": true
    },
    {
      "name": "Le Terrible",
      "nation": "France",
      "tier": 8,
      "type": "D",
      "kind": "P",
      "torpedos": "y",
      "caliber": "139",
      "id": 414, "selected": true
    },
    {
      "name": "Lightning",
      "nation": "U.K.",
      "tier": 8,
      "type": "D",
      "kind": "N",
      "torpedos": "s",
      "caliber": "120",
      "id": 415, "selected": true
    },
    {
      "name": "Loyang",
      "nation": "Pan-Asia",
      "tier": 8,
      "type": "D",
      "kind": "P",
      "torpedos": "y",
      "caliber": "127",
      "id": 416, "selected": true
    },
    {
      "name": "Loyang B",
      "nation": "Pan-Asia",
      "tier": 8,
      "type": "D",
      "kind": "P",
      "torpedos": "y",
      "caliber": "127",
      "id": 417, "selected": true
    },
    {
      "name": "Ognevoi",
      "nation": "U.S.S.R.",
      "tier": 8,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "130",
      "id": 418, "selected": true
    },
    {
      "name": "Öland",
      "nation": "Europe",
      "tier": 8,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "120",
      "id": 419, "selected": true
    },
    {
      "name": "Orkan",
      "nation": "Europe",
      "tier": 8,
      "type": "D",
      "kind": "P",
      "torpedos": "y",
      "caliber": "120",
      "id": 420, "selected": true
    },
    {
      "name": "Ship Smasha",
      "nation": "Pan-Asia",
      "tier": 8,
      "type": "D",
      "kind": "P",
      "torpedos": "b",
      "caliber": "100",
      "id": 421, "selected": true
    },
    {
      "name": "Siliwangi",
      "nation": "Pan-Asia",
      "tier": 8,
      "type": "D",
      "kind": "P",
      "torpedos": "d",
      "caliber": "130",
      "id": 422, "selected": true
    },
    {
      "name": "Vittorio Cuniberti",
      "nation": "Italy",
      "tier": 8,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "120",
      "id": 423, "selected": true
    },
    {
      "name": "Z-23",
      "nation": "Germany",
      "tier": 8,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "128",
      "id": 424, "selected": true
    },
    {
      "name": "Z-35",
      "nation": "Germany",
      "tier": 8,
      "type": "D",
      "kind": "P",
      "torpedos": "y",
      "caliber": "128",
      "id": 425, "selected": true
    },
    {
      "name": "I-56",
      "nation": "Japan",
      "tier": 8,
      "type": "S",
      "kind": "P",
      "torpedos": "s",
      "caliber": "140",
      "id": 426, "selected": true
    },
    {
      "name": "S-189",
      "nation": "U.S.S.R.",
      "tier": 8,
      "type": "S",
      "kind": "P",
      "torpedos": "s",
      "caliber": "-",
      "id": 427, "selected": true
    },
    {
      "name": "Salmon",
      "nation": "U.S.A.",
      "tier": 8,
      "type": "S",
      "kind": "N",
      "torpedos": "s",
      "caliber": "-",
      "id": 428, "selected": true
    },
    {
      "name": "U-190",
      "nation": "Germany",
      "tier": 8,
      "type": "S",
      "kind": "N",
      "torpedos": "s",
      "caliber": "-",
      "id": 429, "selected": true
    },
    {
      "name": "AL Sov. Rossiya",
      "nation": "U.S.S.R.",
      "tier": 9,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "406",
      "id": 430, "selected": true
    },
    {
      "name": "Alsace",
      "nation": "France",
      "tier": 9,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "380",
      "id": 431, "selected": true
    },
    {
      "name": "Bajie",
      "nation": "Pan-Asia",
      "tier": 9,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "410",
      "id": 432, "selected": true
    },
    {
      "name": "Friedrich der Grosse",
      "nation": "Germany",
      "tier": 9,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "406",
      "id": 433, "selected": true
    },
    {
      "name": "Georgia",
      "nation": "U.S.A.",
      "tier": 9,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "457",
      "id": 434, "selected": true
    },
    {
      "name": "Giuseppe Verdi",
      "nation": "Italy",
      "tier": 9,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "406",
      "id": 435, "selected": true
    },
    {
      "name": "Hizen",
      "nation": "Japan",
      "tier": 9,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "410",
      "id": 436, "selected": true
    },
    {
      "name": "Iowa",
      "nation": "U.S.A.",
      "tier": 9,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "406",
      "id": 437, "selected": true
    },
    {
      "name": "Iwami",
      "nation": "Japan",
      "tier": 9,
      "type": "B",
      "kind": "P",
      "torpedos": "y",
      "caliber": "410",
      "id": 438, "selected": true
    },
    {
      "name": "Izumo",
      "nation": "Japan",
      "tier": 9,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "410",
      "id": 439, "selected": true
    },
    {
      "name": "Jean Bart",
      "nation": "France",
      "tier": 9,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "380",
      "id": 440, "selected": true
    },
    {
      "name": "Jean Bart B",
      "nation": "France",
      "tier": 9,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "380",
      "id": 441, "selected": true
    },
    {
      "name": "Kearsarge",
      "nation": "U.S.A.",
      "tier": 9,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "406",
      "id": 442, "selected": true
    },
    {
      "name": "Lepanto",
      "nation": "Italy",
      "tier": 9,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "381",
      "id": 443, "selected": true
    },
    {
      "name": "Lion",
      "nation": "U.K.",
      "tier": 9,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "406",
      "id": 444, "selected": true
    },
    {
      "name": "Duncan",
      "nation": "U.K.",
      "tier": 9,
      "type": "B",
      "kind": "N",
      "torpedos": "s",
      "caliber": "419",
      "id": 445, "selected": true
    },
    {
      "name": "Marco Polo",
      "nation": "Italy",
      "tier": 9,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "406",
      "id": 446, "selected": true
    },
    {
      "name": "Marlborough",
      "nation": "U.K.",
      "tier": 9,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "356",
      "id": 447, "selected": true
    },
    {
      "name": "Minnesota",
      "nation": "U.S.A.",
      "tier": 9,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "406",
      "id": 448, "selected": true
    },
    {
      "name": "Missouri",
      "nation": "U.S.A.",
      "tier": 9,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "406",
      "id": 449, "selected": true
    },
    {
      "name": "Musashi",
      "nation": "Japan",
      "tier": 9,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "460",
      "id": 450, "selected": true
    },
    {
      "name": "Pommern",
      "nation": "Germany",
      "tier": 9,
      "type": "B",
      "kind": "P",
      "torpedos": "y",
      "caliber": "380",
      "id": 451, "selected": true
    },
    {
      "name": "Pommern B",
      "nation": "Germany",
      "tier": 9,
      "type": "B",
      "kind": "P",
      "torpedos": "y",
      "caliber": "380",
      "id": 452, "selected": true
    },
    {
      "name": "Prinz Rupprecht",
      "nation": "Germany",
      "tier": 9,
      "type": "B",
      "kind": "N",
      "torpedos": "y",
      "caliber": "406",
      "id": 453, "selected": true
    },
    {
      "name": "Sovetsky Soyuz",
      "nation": "U.S.S.R.",
      "tier": 9,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "406",
      "id": 454, "selected": true
    },
    {
      "name": "Wujing",
      "nation": "Pan-Asia",
      "tier": 9,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "380",
      "id": 455, "selected": true
    },
    {
      "name": "Ägir",
      "nation": "Germany",
      "tier": 9,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "305",
      "id": 456, "selected": true
    },
    {
      "name": "AL Azuma",
      "nation": "Japan",
      "tier": 9,
      "type": "C",
      "kind": "P",
      "torpedos": "n",
      "caliber": "310",
      "id": 457, "selected": true
    },
    {
      "name": "Alaska",
      "nation": "U.S.A.",
      "tier": 9,
      "type": "C",
      "kind": "P",
      "torpedos": "n",
      "caliber": "305",
      "id": 458, "selected": true
    },
    {
      "name": "Alaska B",
      "nation": "U.S.A.",
      "tier": 9,
      "type": "C",
      "kind": "P",
      "torpedos": "n",
      "caliber": "305",
      "id": 459, "selected": true
    },
    {
      "name": "Vallejo",
      "nation": "U.S.A.",
      "tier": 9,
      "type": "C",
      "kind": "P",
      "torpedos": "n",
      "caliber": "152",
      "id": 460, "selected": true
    },
    {
      "name": "Azuma",
      "nation": "Japan",
      "tier": 9,
      "type": "C",
      "kind": "P",
      "torpedos": "n",
      "caliber": "310",
      "id": 461, "selected": true
    },
    {
      "name": "Brest",
      "nation": "France",
      "tier": 9,
      "type": "C",
      "kind": "N",
      "torpedos": "n",
      "caliber": "330",
      "id": 462, "selected": true
    },
    {
      "name": "Brindisi",
      "nation": "Italy",
      "tier": 9,
      "type": "C",
      "kind": "N",
      "torpedos": "y",
      "caliber": "203",
      "id": 463, "selected": true
    },
    {
      "name": "Buffalo",
      "nation": "U.S.A.",
      "tier": 9,
      "type": "C",
      "kind": "N",
      "torpedos": "n",
      "caliber": "203",
      "id": 464, "selected": true
    },
    {
      "name": "Carnot",
      "nation": "France",
      "tier": 9,
      "type": "C",
      "kind": "P",
      "torpedos": "n",
      "caliber": "305",
      "id": 465, "selected": true
    },
    {
      "name": "Dalian",
      "nation": "Pan-Asia",
      "tier": 9,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "130",
      "id": 466, "selected": true
    },
    {
      "name": "Dmitri Donskoi",
      "nation": "U.S.S.R.",
      "tier": 9,
      "type": "C",
      "kind": "N",
      "torpedos": "y",
      "caliber": "180",
      "id": 467, "selected": true
    },
    {
      "name": "Drake",
      "nation": "U.K.",
      "tier": 9,
      "type": "C",
      "kind": "N",
      "torpedos": "s",
      "caliber": "234",
      "id": 468, "selected": true
    },
    {
      "name": "Ibuki",
      "nation": "Japan",
      "tier": 9,
      "type": "C",
      "kind": "N",
      "torpedos": "y",
      "caliber": "203",
      "id": 469, "selected": true
    },
    {
      "name": "Takahashi",
      "nation": "Japan",
      "tier": 9,
      "type": "C",
      "kind": "N",
      "torpedos": "y",
      "caliber": "150",
      "id": 470, "selected": true
    },
    {
      "name": "Johan de Witt",
      "nation": "Netherlands",
      "tier": 9,
      "type": "C",
      "kind": "N",
      "torpedos": "n",
      "caliber": "240",
      "id": 471, "selected": true
    },
    {
      "name": "Kronshtadt",
      "nation": "U.S.S.R.",
      "tier": 9,
      "type": "C",
      "kind": "P",
      "torpedos": "n",
      "caliber": "305",
      "id": 472, "selected": true
    },
    {
      "name": "Neptune",
      "nation": "U.K.",
      "tier": 9,
      "type": "C",
      "kind": "N",
      "torpedos": "s",
      "caliber": "152",
      "id": 473, "selected": true
    },
    {
      "name": "Riga",
      "nation": "U.S.S.R.",
      "tier": 9,
      "type": "C",
      "kind": "N",
      "torpedos": "n",
      "caliber": "220",
      "id": 474, "selected": true
    },
    {
      "name": "Roon",
      "nation": "Germany",
      "tier": 9,
      "type": "C",
      "kind": "N",
      "torpedos": "y",
      "caliber": "203",
      "id": 475, "selected": true
    },
    {
      "name": "Saint-Louis",
      "nation": "France",
      "tier": 9,
      "type": "C",
      "kind": "N",
      "torpedos": "y",
      "caliber": "203",
      "id": 476, "selected": true
    },
    {
      "name": "Seattle",
      "nation": "U.S.A.",
      "tier": 9,
      "type": "C",
      "kind": "N",
      "torpedos": "n",
      "caliber": "152",
      "id": 477, "selected": true
    },
    {
      "name": "Sejong",
      "nation": "Pan-Asia",
      "tier": 9,
      "type": "C",
      "kind": "N",
      "torpedos": "d",
      "caliber": "127",
      "id": 478, "selected": true
    },
    {
      "name": "Siegfried",
      "nation": "Germany",
      "tier": 9,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "380",
      "id": 479, "selected": true
    },
    {
      "name": "Tulsa",
      "nation": "U.S.A.",
      "tier": 9,
      "type": "C",
      "kind": "P",
      "torpedos": "n",
      "caliber": "203",
      "id": 480, "selected": true
    },
    {
      "name": "Adriatico",
      "nation": "Italy",
      "tier": 9,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "135",
      "id": 481, "selected": true
    },
    {
      "name": "Benham",
      "nation": "U.S.A.",
      "tier": 9,
      "type": "D",
      "kind": "P",
      "torpedos": "y",
      "caliber": "127",
      "id": 482, "selected": true
    },
    {
      "name": "Black",
      "nation": "U.S.A.",
      "tier": 9,
      "type": "D",
      "kind": "P",
      "torpedos": "y",
      "caliber": "127",
      "id": 483, "selected": true
    },
    {
      "name": "Chung Mu",
      "nation": "Pan-Asia",
      "tier": 9,
      "type": "D",
      "kind": "N",
      "torpedos": "d",
      "caliber": "127",
      "id": 484, "selected": true
    },
    {
      "name": "Felix Schultz",
      "nation": "Germany",
      "tier": 9,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "150",
      "id": 485, "selected": true
    },
    {
      "name": "Fletcher",
      "nation": "U.S.A.",
      "tier": 9,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "127",
      "id": 486, "selected": true
    },
    {
      "name": "Friesland",
      "nation": "Europe",
      "tier": 9,
      "type": "D",
      "kind": "P",
      "torpedos": "n",
      "caliber": "120",
      "id": 487, "selected": true
    },
    {
      "name": "Groningen",
      "nation": "Netherlands",
      "tier": 9,
      "type": "D",
      "kind": "P",
      "torpedos": "n",
      "caliber": "120",
      "id": 488, "selected": true
    },
    {
      "name": "Jutland",
      "nation": "U.K.",
      "tier": 9,
      "type": "D",
      "kind": "N",
      "torpedos": "s",
      "caliber": "113",
      "id": 489, "selected": true
    },
    {
      "name": "Kitakaze",
      "nation": "Japan",
      "tier": 9,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "100",
      "id": 490, "selected": true
    },
    {
      "name": "Mogador",
      "nation": "France",
      "tier": 9,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "139",
      "id": 491, "selected": true
    },
    {
      "name": "Neustrashimy",
      "nation": "U.S.S.R.",
      "tier": 9,
      "type": "D",
      "kind": "P",
      "torpedos": "y",
      "caliber": "130",
      "id": 492, "selected": true
    },
    {
      "name": "Östergötland",
      "nation": "Europe",
      "tier": 9,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "120",
      "id": 493, "selected": true
    },
    {
      "name": "Paolo Emilio",
      "nation": "Italy",
      "tier": 9,
      "type": "D",
      "kind": "P",
      "torpedos": "y",
      "caliber": "135",
      "id": 494, "selected": true
    },
    {
      "name": "Tashkent",
      "nation": "U.S.S.R.",
      "tier": 9,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "130",
      "id": 495, "selected": true
    },
    {
      "name": "Udaloi",
      "nation": "U.S.S.R.",
      "tier": 9,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "130",
      "id": 496, "selected": true
    },
    {
      "name": "Velos",
      "nation": "Europe",
      "tier": 9,
      "type": "D",
      "kind": "P",
      "torpedos": "y",
      "caliber": "127",
      "id": 497, "selected": true
    },
    {
      "name": "Yūgumo",
      "nation": "Japan",
      "tier": 9,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "127",
      "id": 498, "selected": true
    },
    {
      "name": "Z-44",
      "nation": "Germany",
      "tier": 9,
      "type": "D",
      "kind": "P",
      "torpedos": "y",
      "caliber": "128",
      "id": 499, "selected": true
    },
    {
      "name": "Z-46",
      "nation": "Germany",
      "tier": 9,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "128",
      "id": 500, "selected": true
    },
    {
      "name": "ZF-6",
      "nation": "Germany",
      "tier": 9,
      "type": "D",
      "kind": "P",
      "torpedos": "y",
      "caliber": "128",
      "id": 501, "selected": true
    },
    {
      "name": "Admiral Nakhimov",
      "nation": "U.S.S.R.",
      "tier": 10,
      "type": "A",
      "kind": "N",
      "torpedos": "n",
      "caliber": "-",
      "id": 502, "selected": true
    },
    {
      "name": "Audacious",
      "nation": "U.K.",
      "tier": 10,
      "type": "A",
      "kind": "N",
      "torpedos": "n",
      "caliber": "-",
      "id": 503, "selected": true
    },
    {
      "name": "Franklin D. Roosevelt",
      "nation": "U.S.A.",
      "tier": 10,
      "type": "A",
      "kind": "P",
      "torpedos": "n",
      "caliber": "-",
      "id": 504, "selected": true
    },
    {
      "name": "Hakuryū",
      "nation": "Japan",
      "tier": 10,
      "type": "A",
      "kind": "N",
      "torpedos": "n",
      "caliber": "-",
      "id": 505, "selected": true
    },
    {
      "name": "Malta",
      "nation": "U.K.",
      "tier": 10,
      "type": "A",
      "kind": "P",
      "torpedos": "n",
      "caliber": "-",
      "id": 506, "selected": true
    },
    {
      "name": "Manfred von Richthofen",
      "nation": "Germany",
      "tier": 10,
      "type": "A",
      "kind": "N",
      "torpedos": "n",
      "caliber": "-",
      "id": 507, "selected": true
    },
    {
      "name": "Max Immelmann",
      "nation": "Germany",
      "tier": 10,
      "type": "A",
      "kind": "P",
      "torpedos": "n",
      "caliber": "-",
      "id": 508, "selected": true
    },
    {
      "name": "Midway",
      "nation": "U.S.A.",
      "tier": 10,
      "type": "A",
      "kind": "N",
      "torpedos": "n",
      "caliber": "-",
      "id": 509, "selected": true
    },
    {
      "name": "ARP Yamato",
      "nation": "Japan",
      "tier": 10,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "460",
      "id": 510, "selected": true
    },
    {
      "name": "Bourgogne",
      "nation": "France",
      "tier": 10,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "380",
      "id": 511, "selected": true
    },
    {
      "name": "Conqueror",
      "nation": "U.K.",
      "tier": 10,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "419",
      "id": 512, "selected": true
    },
    {
      "name": "St. Vincent",
      "nation": "U.K.",
      "tier": 10,
      "type": "B",
      "kind": "N",
      "torpedos": "s",
      "caliber": "419",
      "id": 513, "selected": true
    },
    {
      "name": "Cristoforo Colombo",
      "nation": "Italy",
      "tier": 10,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "381",
      "id": 514, "selected": true
    },
    {
      "name": "Grosser Kurfürst",
      "nation": "Germany",
      "tier": 10,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "420",
      "id": 515, "selected": true
    },
    {
      "name": "Incomparable",
      "nation": "U.K.",
      "tier": 10,
      "type": "B",
      "kind": "P",
      "torpedos": "s",
      "caliber": "508",
      "id": 516, "selected": true
    },
    {
      "name": "Kremlin",
      "nation": "U.S.S.R.",
      "tier": 10,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "457",
      "id": 517, "selected": true
    },
    {
      "name": "Mecklenburg",
      "nation": "Germany",
      "tier": 10,
      "type": "B",
      "kind": "P",
      "torpedos": "y",
      "caliber": "305",
      "id": 518, "selected": true
    },
    {
      "name": "Montana",
      "nation": "U.S.A.",
      "tier": 10,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "406",
      "id": 519, "selected": true
    },
    {
      "name": "Ohio",
      "nation": "U.S.A.",
      "tier": 10,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "457",
      "id": 520, "selected": true
    },
    {
      "name": "Preussen",
      "nation": "Germany",
      "tier": 10,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "457",
      "id": 521, "selected": true
    },
    {
      "name": "République",
      "nation": "France",
      "tier": 10,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "431",
      "id": 522, "selected": true
    },
    {
      "name": "Schlieffen",
      "nation": "Germany",
      "tier": 10,
      "type": "B",
      "kind": "N",
      "torpedos": "y",
      "caliber": "420",
      "id": 523, "selected": true
    },
    {
      "name": "Shikishima",
      "nation": "Japan",
      "tier": 10,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "510",
      "id": 524, "selected": true
    },
    {
      "name": "Slava",
      "nation": "U.S.S.R.",
      "tier": 10,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "406",
      "id": 525, "selected": true
    },
    {
      "name": "Thunderer",
      "nation": "U.K.",
      "tier": 10,
      "type": "B",
      "kind": "P",
      "torpedos": "n",
      "caliber": "457",
      "id": 526, "selected": true
    },
    {
      "name": "Vermont",
      "nation": "U.S.A.",
      "tier": 10,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "457",
      "id": 527, "selected": true
    },
    {
      "name": "Yamato",
      "nation": "Japan",
      "tier": 10,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "460",
      "id": 528, "selected": true
    },
    {
      "name": "Alexander Nevsky",
      "nation": "U.S.S.R.",
      "tier": 10,
      "type": "C",
      "kind": "N",
      "torpedos": "y",
      "caliber": "180",
      "id": 529, "selected": true
    },
    {
      "name": "Austin",
      "nation": "U.S.A.",
      "tier": 10,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "127",
      "id": 530, "selected": true
    },
    {
      "name": "Colbert",
      "nation": "France",
      "tier": 10,
      "type": "C",
      "kind": "P",
      "torpedos": "n",
      "caliber": "127",
      "id": 531, "selected": true
    },
    {
      "name": "Des Moines",
      "nation": "U.S.A.",
      "tier": 10,
      "type": "C",
      "kind": "N",
      "torpedos": "n",
      "caliber": "203",
      "id": 532, "selected": true
    },
    {
      "name": "Gibraltar",
      "nation": "U.K.",
      "tier": 10,
      "type": "C",
      "kind": "P",
      "torpedos": "n",
      "caliber": "234",
      "id": 533, "selected": true
    },
    {
      "name": "Goliath",
      "nation": "U.K.",
      "tier": 10,
      "type": "C",
      "kind": "N",
      "torpedos": "s",
      "caliber": "234",
      "id": 534, "selected": true
    },
    {
      "name": "Gouden Leeuw",
      "nation": "Netherlands",
      "tier": 10,
      "type": "C",
      "kind": "N",
      "torpedos": "n",
      "caliber": "283",
      "id": 535, "selected": true
    },
    {
      "name": "Henri IV",
      "nation": "France",
      "tier": 10,
      "type": "C",
      "kind": "N",
      "torpedos": "y",
      "caliber": "240",
      "id": 536, "selected": true
    },
    {
      "name": "Hindenburg",
      "nation": "Germany",
      "tier": 10,
      "type": "C",
      "kind": "N",
      "torpedos": "y",
      "caliber": "203",
      "id": 537, "selected": true
    },
    {
      "name": "Jinan",
      "nation": "Pan-Asia",
      "tier": 10,
      "type": "C",
      "kind": "N",
      "torpedos": "d",
      "caliber": "127",
      "id": 538, "selected": true
    },
    {
      "name": "Marseille",
      "nation": "France",
      "tier": 10,
      "type": "C",
      "kind": "N",
      "torpedos": "n",
      "caliber": "330",
      "id": 539, "selected": true
    },
    {
      "name": "Minotaur",
      "nation": "U.K.",
      "tier": 10,
      "type": "C",
      "kind": "N",
      "torpedos": "s",
      "caliber": "152",
      "id": 540, "selected": true
    },
    {
      "name": "Moskva",
      "nation": "U.S.S.R.",
      "tier": 10,
      "type": "C",
      "kind": "P",
      "torpedos": "n",
      "caliber": "220",
      "id": 541, "selected": true
    },
    {
      "name": "Napoli",
      "nation": "Italy",
      "tier": 10,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "254",
      "id": 542, "selected": true
    },
    {
      "name": "Petropavlovsk",
      "nation": "U.S.S.R.",
      "tier": 10,
      "type": "C",
      "kind": "N",
      "torpedos": "n",
      "caliber": "220",
      "id": 543, "selected": true
    },
    {
      "name": "Plymouth",
      "nation": "U.K.",
      "tier": 10,
      "type": "C",
      "kind": "P",
      "torpedos": "s",
      "caliber": "152",
      "id": 544, "selected": true
    },
    {
      "name": "Puerto Rico",
      "nation": "U.S.A.",
      "tier": 10,
      "type": "C",
      "kind": "P",
      "torpedos": "n",
      "caliber": "305",
      "id": 545, "selected": true
    },
    {
      "name": "Salem",
      "nation": "U.S.A.",
      "tier": 10,
      "type": "C",
      "kind": "P",
      "torpedos": "n",
      "caliber": "203",
      "id": 546, "selected": true
    },
    {
      "name": "Sevastopol",
      "nation": "U.S.S.R.",
      "tier": 10,
      "type": "C",
      "kind": "P",
      "torpedos": "n",
      "caliber": "380",
      "id": 547, "selected": true
    },
    {
      "name": "Smolensk",
      "nation": "U.S.S.R.",
      "tier": 10,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "130",
      "id": 548, "selected": true
    },
    {
      "name": "Stalingrad",
      "nation": "U.S.S.R.",
      "tier": 10,
      "type": "C",
      "kind": "P",
      "torpedos": "n",
      "caliber": "305",
      "id": 549, "selected": true
    },
    {
      "name": "Venezia",
      "nation": "Italy",
      "tier": 10,
      "type": "C",
      "kind": "N",
      "torpedos": "y",
      "caliber": "203",
      "id": 550, "selected": true
    },
    {
      "name": "Worcester",
      "nation": "U.S.A.",
      "tier": 10,
      "type": "C",
      "kind": "N",
      "torpedos": "n",
      "caliber": "152",
      "id": 551, "selected": true
    },
    {
      "name": "Yoshino",
      "nation": "Japan",
      "tier": 10,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "310",
      "id": 552, "selected": true
    },
    {
      "name": "Yoshino B",
      "nation": "Japan",
      "tier": 10,
      "type": "C",
      "kind": "P",
      "torpedos": "y",
      "caliber": "310",
      "id": 553, "selected": true
    },
    {
      "name": "Zaō",
      "nation": "Japan",
      "tier": 10,
      "type": "C",
      "kind": "N",
      "torpedos": "y",
      "caliber": "203",
      "id": 554, "selected": true
    },
    {
      "name": "Yodo",
      "nation": "Japan",
      "tier": 10,
      "type": "C",
      "kind": "N",
      "torpedos": "y",
      "caliber": "150",
      "id": 555, "selected": true
    },
    {
      "name": "Attilio Regolo",
      "nation": "Italy",
      "tier": 10,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "135",
      "id": 556, "selected": true
    },
    {
      "name": "Daring",
      "nation": "U.K.",
      "tier": 10,
      "type": "D",
      "kind": "N",
      "torpedos": "s",
      "caliber": "113",
      "id": 557, "selected": true
    },
    {
      "name": "Delny",
      "nation": "U.S.S.R.",
      "tier": 10,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "130",
      "id": 558, "selected": true
    },
    {
      "name": "Druid",
      "nation": "U.K.",
      "tier": 10,
      "type": "D",
      "kind": "P",
      "torpedos": "n",
      "caliber": "127",
      "id": 559, "selected": true
    },
    {
      "name": "Tromp",
      "nation": "Netherlands",
      "tier": 10,
      "type": "D",
      "kind": "P",
      "torpedos": "y",
      "caliber": "150",
      "id": 560, "selected": true
    },
    {
      "name": "Elbing",
      "nation": "Germany",
      "tier": 10,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "150",
      "id": 561, "selected": true
    },
    {
      "name": "Forrest Sherman",
      "nation": "U.S.A.",
      "tier": 10,
      "type": "D",
      "kind": "P",
      "torpedos": "y",
      "caliber": "127",
      "id": 562, "selected": true
    },
    {
      "name": "Gearing",
      "nation": "U.S.A.",
      "tier": 10,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "127",
      "id": 563, "selected": true
    },
    {
      "name": "Grozovoi",
      "nation": "U.S.S.R.",
      "tier": 10,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "130",
      "id": 564, "selected": true
    },
    {
      "name": "Halland",
      "nation": "Europe",
      "tier": 10,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "120",
      "id": 565, "selected": true
    },
    {
      "name": "Harugumo",
      "nation": "Japan",
      "tier": 10,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "100",
      "id": 566, "selected": true
    },
    {
      "name": "Hayate",
      "nation": "Japan",
      "tier": 10,
      "type": "D",
      "kind": "P",
      "torpedos": "y",
      "caliber": "127",
      "id": 567, "selected": true
    },
    {
      "name": "Khabarovsk",
      "nation": "U.S.S.R.",
      "tier": 10,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "130",
      "id": 568, "selected": true
    },
    {
      "name": "Kléber",
      "nation": "France",
      "tier": 10,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "139",
      "id": 569, "selected": true
    },
    {
      "name": "Marceau",
      "nation": "France",
      "tier": 10,
      "type": "D",
      "kind": "P",
      "torpedos": "y",
      "caliber": "127",
      "id": 570, "selected": true
    },
    {
      "name": "Ragnar",
      "nation": "Europe",
      "tier": 10,
      "type": "D",
      "kind": "P",
      "torpedos": "n",
      "caliber": "152",
      "id": 571, "selected": true
    },
    {
      "name": "Shimakaze",
      "nation": "Japan",
      "tier": 10,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "127",
      "id": 572, "selected": true
    },
    {
      "name": "Småland",
      "nation": "Europe",
      "tier": 10,
      "type": "D",
      "kind": "P",
      "torpedos": "y",
      "caliber": "120",
      "id": 573, "selected": true
    },
    {
      "name": "Somers",
      "nation": "U.S.A.",
      "tier": 10,
      "type": "D",
      "kind": "P",
      "torpedos": "y",
      "caliber": "127",
      "id": 574, "selected": true
    },
    {
      "name": "Vampire II",
      "nation": "Commonwealth",
      "tier": 10,
      "type": "D",
      "kind": "P",
      "torpedos": "s",
      "caliber": "113",
      "id": 575, "selected": true
    },
    {
      "name": "Yueyang",
      "nation": "Pan-Asia",
      "tier": 10,
      "type": "D",
      "kind": "N",
      "torpedos": "d",
      "caliber": "127",
      "id": 576, "selected": true
    },
    {
      "name": "Álvaro de Bazán",
      "nation": "Spain",
      "tier": 10,
      "type": "D",
      "kind": "P",
      "torpedos": "y",
      "caliber": "135",
      "id": 577, "selected": true
    },
    {
      "name": "Z-52",
      "nation": "Germany",
      "tier": 10,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "128",
      "id": 578, "selected": true
    },
    {
      "name": "Balao",
      "nation": "U.S.A.",
      "tier": 10,
      "type": "S",
      "kind": "N",
      "torpedos": "s",
      "caliber": "-",
      "id": 579, "selected": true
    },
    {
      "name": "U-2501",
      "nation": "Germany",
      "tier": 10,
      "type": "S",
      "kind": "N",
      "torpedos": "s",
      "caliber": "-",
      "id": 580, "selected": true
    },
    {
      "name": "Eagle",
      "nation": "U.K.",
      "tier": 11,
      "type": "A",
      "kind": "N",
      "torpedos": "n",
      "caliber": "-",
      "id": 581, "selected": true
    },
    {
      "name": "United States",
      "nation": "U.S.A.",
      "tier": 11,
      "type": "A",
      "kind": "N",
      "torpedos": "n",
      "caliber": "-",
      "id": 582, "selected": true
    },
    {
      "name": "Sekiryu",
      "nation": "Japan",
      "tier": 11,
      "type": "A",
      "kind": "N",
      "torpedos": "n",
      "caliber": "-",
      "id": 583, "selected": true
    },
    {
      "name": "Hannover",
      "nation": "Germany",
      "tier": 11,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "483",
      "id": 584, "selected": true
    },
    {
      "name": "Admiral Ushakov",
      "nation": "U.S.S.R.",
      "tier": 11,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "457",
      "id": 585, "selected": true
    },
    {
      "name": "Patrie",
      "nation": "France",
      "tier": 11,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "431",
      "id": 586, "selected": true
    },
    {
      "name": "Satsuma",
      "nation": "Japan",
      "tier": 11,
      "type": "B",
      "kind": "N",
      "torpedos": "n",
      "caliber": "510",
      "id": 587, "selected": true
    },
    {
      "name": "Annapolis",
      "nation": "U.S.A.",
      "tier": 11,
      "type": "C",
      "kind": "N",
      "torpedos": "n",
      "caliber": "203",
      "id": 588, "selected": true
    },
    {
      "name": "Condé",
      "nation": "France",
      "tier": 11,
      "type": "C",
      "kind": "N",
      "torpedos": "y",
      "caliber": "240",
      "id": 589, "selected": true
    },
    {
      "name": "Edgar",
      "nation": "U.K.",
      "tier": 11,
      "type": "C",
      "kind": "N",
      "torpedos": "s",
      "caliber": "152",
      "id": 590, "selected": true
    },
    {
      "name": "Dalarna",
      "nation": "Europe",
      "tier": 11,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "120",
      "id": 591, "selected": true
    },
    {
      "name": "Yamagiri",
      "nation": "Japan",
      "tier": 11,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "127",
      "id": 592, "selected": true
    },
    {
      "name": "Zorkiy",
      "nation": "U.S.S.R.",
      "tier": 11,
      "type": "D",
      "kind": "N",
      "torpedos": "y",
      "caliber": "130",
      "id": 593, "selected": true
    }
  ]
}