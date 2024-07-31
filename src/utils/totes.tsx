import LEMON_TOTE from "@/assets/tote/tote5.jpg";
import QUEEN_TOTE from "@/assets/tote/tote1.jpg";
import QUEEN_TOTE_2 from "@/assets/tote/tote2.jpg";
import FOU_TOTE from "@/assets/tote/tote4.jpg";
import FOUT_TOTE from "@/assets/tote/tote3.jpg";
import CHOUFLI_TOTE from "@/assets/tote/tote6.jpg";

export interface Tote {
  id: number;
  name: string;
  slug: string;
  picture: any;
  price: number;
  currency: string;
}

export const TOTES = [
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
  {
    id: 6,
    name: "Choufli Hal Tote-bag",
    slug: "choufli_hal_tote_bag",
    picture: CHOUFLI_TOTE,
    price: 25,
    currency: "TND",
  },
];
