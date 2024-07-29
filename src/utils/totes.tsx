const LEMON_TOTE = require("@/assets/tote/tote5.JPG");

const QUEEN_TOTE = require("@/assets/tote/tote1.JPG");

const QUEEN_TOTE_2 = require("@/assets/tote/tote2.JPG");

const FOU_TOTE = require("@/assets/tote/tote4.JPG");

const FOUT_TOTE = require("@/assets/tote/tote3.JPG");

export interface Tote {
  id: number;
  name: string;
  slug: string;
  picture: any;
  price: number;
  currency: string;
}

export const Totes = [
  {
    id: 1,
    name: "Lemon Tote-bag",
    slug: "lemon_tote_bag",
    picture: LEMON_TOTE,
    price: 25,
    currency: "TND",
  },
  {
    id: 2,
    name: "Queen Tote-bag",
    slug: "queen_tote_bag",
    picture: QUEEN_TOTE,
    price: 25,
    currency: "TND",
  },
  {
    id: 3,
    name: "Queen 2 Tote-bag",
    slug: "queen_2_tote_bag",
    picture: QUEEN_TOTE_2,
    price: 25,
    currency: "TND",
  },
  {
    id: 4,
    name: "Amour Fou Tote-bag",
    slug: "amour_fou_tote_bag",
    picture: FOU_TOTE,
    price: 25,
    currency: "TND",
  },
  {
    id: 5,
    name: "Amour Fout Tote-bag",
    slug: "amour_fout_tote_bag",
    picture: FOUT_TOTE,
    price: 25,
    currency: "TND",
  },
];
