import TENNIS_TSHIRT from "@/assets/mockup_tshirt_beige_tennis_centre.jpg";
import TENNIS_TSHIRT_2 from "@/assets/mockup_tshirt_beige_tennis_gauche.jpg";
import CHOUFLI_HAL from "@/assets/mockup_choufli1.jpg";
import CHOUFLI_HAL_2 from "@/assets/mockup_choufli2.jpg";
import FAIROUZ_TSHIRT from "@/assets/mockup_tshirt_Blanc_Feirouz.jpg";
import CAIROKEE_MAHMA from "@/assets/cairokee_2.jpg";
const ALIEN_TSHIRT = require("@/assets/mockup_tshirt_rose_epeche_alien.jpg");
const ALIEN_TSHIRT_2 = require("@/assets/mockup_tshirt_rose_peche_alien_gauche.jpg");

const GIRL_PURPULE = require("@/assets/mockup_tshirt_mauve.jpg");
const GIRL_PURPULE_2 = require("@/assets/mockup_tshirt_mauve_gauche.jpg");

const CAPRICORN_TSHIRT = require("@/assets/capricorn.jpg");

const TWIN_PEAKS_TSHIRT = require("@/assets/MOCKUP_TSHIRT_noir.jpg");
const TWIN_PEAKS_TSHIRT_2 = require("@/assets/MOCKUP_TSHIRT_noir_2.jpg");

const PALESTINE_TSHIRT = require("@/assets/mockup_tshirt_Blanc_palest_2.jpg");
const PALESTINE_TSHIRT_2 = require("@/assets/mockup_tshirt_blanc_palestine.jpg");

const PALESTINE_TSHIRT_FROM = require("@/assets/mockup_tshirt_blanc_pales_from.jpg");
const PALESTINE_TSHIRT_FROM_2 = require("@/assets/from2.JPG");
const PALESTINE_TSHIRT_WATER = require("@/assets/water.JPG");
const PALESTINE_TSHIRT_WATER_2 = require("@/assets/water2.JPG");

const BASIC_TSHIRTS = require("@/assets/md-salman-tWOz2_EK5EQ-unsplash.jpg");

const DISNEY_TSHIRT = require("@/assets/mockup_tshirt_bleu_ciel_2.jpg");
const DISNEY_TSHIRT_2 = require("@/assets/mockup_tshirt_bleu_ciel_3.jpg");

const COLLAGE_TSHIRT = require("@/assets/mockup_tshirt_beige_collage.jpg");
const COLLAGE_TSHIRT_2 = require("@/assets/mockup_tshirt_rouge_bordeau_collage.jpg");

const CAIROKEE_TSHIRT = require("@/assets/mockup_tshirt_Camel_1.jpg");
const CAIROKEE_TSHIRT_2 = require("@/assets/mockup_tshirt_Camel_2.jpg");

const LUFY_TSHIRT = require("@/assets/mockup_tshirt_Blanc_luffy.jpg");
const LUFY_TSHIRT_2 = require("@/assets/MOCKUP_TSHIRT_noir_luffy.jpg");

export interface Item {
  id: number;
  picture: string;
  picture2: string;
}
export interface Color {
  id: number;
  refColor: string;
  name: string;
  items: Item[];
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  picture: any;
  picture2?: any;
  colors: Color[];
  showColorsBasics: boolean;
  showColors: boolean;
  price: number;
  currency: string;
}

export const TSHIRTS = [
  {
    id: 1,
    name: "basic t-shirt",
    slug: "basic_t_shirt",
    picture: BASIC_TSHIRTS,
    price: 22,
    currency: "TND",
  },
  {
    id: 2,
    name: "tennis t-shirt",
    slug: "tennis_t_shirt",
    picture: TENNIS_TSHIRT,
    picture2: TENNIS_TSHIRT_2,
    price: 35,
    currency: "TND",
  },
  {
    id: 3,
    name: "fairouz t-shirt",
    slug: "fairouz_t_shirt",
    picture: FAIROUZ_TSHIRT,
    price: 36,
    currency: "TND",
  },
  {
    id: 4,
    name: "alien t-shirt",
    slug: "alien_t_shirt",
    picture: ALIEN_TSHIRT,
    picture2: ALIEN_TSHIRT_2,
    price: 38,
    currency: "TND",
  },
  {
    id: 5,
    name: "Girl t-shirt",
    slug: "girl_t_shirt",
    picture: GIRL_PURPULE,
    picture2: GIRL_PURPULE_2,
    price: 39,
    currency: "TND",
  },
  {
    id: 6,
    name: "Palestine t-shirt",
    slug: "palestine_t_shirt",
    picture: PALESTINE_TSHIRT,
    picture2: PALESTINE_TSHIRT_2,
    price: 34,
    currency: "TND",
  },
  {
    id: 7,
    name: "Twin peacks t-shirt",
    slug: "twin_peacks_t_shirt",
    picture: TWIN_PEAKS_TSHIRT,
    picture2: TWIN_PEAKS_TSHIRT_2,
    price: 38,
    currency: "TND",
  },
  {
    id: 8,
    name: "Disney t-shirt",
    slug: "disney_t_shirt",
    picture: DISNEY_TSHIRT_2,
    picture2: DISNEY_TSHIRT,
    price: 38,
    currency: "TND",
  },
  {
    id: 9,
    name: "Collage Artists t-shirt",
    slug: "collage_artists_t_shirt",
    picture: COLLAGE_TSHIRT,
    picture2: COLLAGE_TSHIRT_2,
    price: 39,
    currency: "TND",
  },
  {
    id: 10,
    name: "Cairokee t-shirt",
    slug: "cairokee_t_shirt",
    picture: CAIROKEE_TSHIRT,
    picture2: CAIROKEE_TSHIRT_2,
    price: 45,
    currency: "TND",
  },
  {
    id: 11,
    name: "Luffy t-shirt",
    slug: "luffy_t_shirt",

    picture: LUFY_TSHIRT,
    picture2: LUFY_TSHIRT_2,
    price: 39,
    currency: "TND",
  },
  {
    id: 12,
    name: "Palestine From t-shirt",
    slug: "palestine_from_t_shirt",
    picture: PALESTINE_TSHIRT_FROM,
    picture2: PALESTINE_TSHIRT_FROM_2,
    price: 39,
    currency: "TND",
  },
  {
    id: 13,
    name: "Watermelon t-shirt",
    slug: "watermelon_t_shirt",
    picture: PALESTINE_TSHIRT_WATER,
    picture2: PALESTINE_TSHIRT_WATER_2,
    price: 37,
    currency: "TND",
  },
  {
    id: 14,
    name: "Capricorn t-shirt",
    slug: "capricorn_t_shirt",
    picture: CAPRICORN_TSHIRT,
    price: 32,
    currency: "TND",
  },
  {
    id: 15,
    name: "Choufli Hal t-shirt",
    slug: "choufli_hal_t_shirt",
    picture: CHOUFLI_HAL,
    picture2: CHOUFLI_HAL_2,
    price: 35,
    currency: "TND",
  },
  {
    id: 16,
    name: "Cairokee",
    slug: "cairokee_t_shirt",
    picture: CAIROKEE_MAHMA,
    price: 36,
    currency: "TND",
  },
];
