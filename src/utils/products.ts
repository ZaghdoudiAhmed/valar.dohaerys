const TENNIS_TSHIRT = require('@/assets/mockup_tshirt_beige_tennis_centre.jpg');
const TENNIS_TSHIRT_2 = require('@/assets/mockup_tshirt_beige_tennis_gauche.jpg');
const FAIROUZ_TSHIRT = require('@/assets/mockup_tshirt_Blanc_Feirouz.jpg');
const ALIEN_TSHIRT = require('@/assets/mockup_tshirt_rose_epeche_alien.jpg');
const ALIEN_TSHIRT_2 = require('@/assets/mockup_tshirt_rose_peche_alien_gauche.jpg');
const GIRL_PURPULE = require('@/assets/mockup_tshirt_mauve.jpg');
const GIRL_PURPULE_2 = require('@/assets/mockup_tshirt_mauve_gauche.jpg');
const TWIN_PEAKS_TSHIRT = require('@/assets/MOCKUP_TSHIRT_noir.jpg');
const TWIN_PEAKS_TSHIRT_2 = require('@/assets/MOCKUP_TSHIRT_noir_2.jpg');
const PALESTINE_TSHIRT = require('@/assets/mockup_tshirt_Blanc_palest_2.jpg');
const BASIC_TSHIRTS = require('@/assets/md-salman-tWOz2_EK5EQ-unsplash.jpg');

const DISNEY_TSHIRT = require('@/assets/mockup_tshirt_bleu_ciel_2.jpg');
const DISNEY_TSHIRT_2 = require('@/assets/mockup_tshirt_bleu_ciel_3.jpg');

const COLLAGE_TSHIRT = require('@/assets/mockup_tshirt_beige_collage.jpg');
const COLLAGE_TSHIRT_2 = require('@/assets/mockup_tshirt_rouge_bordeau_collage.jpg');

const CAIROKEE_TSHIRT = require('@/assets/mockup_tshirt_Camel_1.jpg');
const CAIROKEE_TSHIRT_2 = require('@/assets/mockup_tshirt_Camel_2.jpg');

const LUFY_TSHIRT = require('@/assets/mockup_tshirt_Blanc_luffy.jpg');
export interface Product {
  id: number;
  name: string;
  picture: any;
  showColors: boolean;
  price: number;
  currency: string;
}
export const Products = [
  {
    id: 1,
    name: 'basic t-shirt',
    picture: BASIC_TSHIRTS,
    showColors: true,
    price: 22,
    currency: 'TND',
  },
  {
    id: 2,
    name: 'tennis t-shirt',
    picture: TENNIS_TSHIRT,
    picture2: TENNIS_TSHIRT_2,
    price: 35,
    currency: 'TND',
  },
  {
    id: 3,
    name: 'fairouz t-shirt',
    picture: FAIROUZ_TSHIRT,
    price: 36,
    currency: 'TND',
  },
  {
    id: 4,
    name: 'alien t-shirt',
    picture: ALIEN_TSHIRT,
    picture2: ALIEN_TSHIRT_2,
    showColors: true,
    price: 38,
    currency: 'TND',
  },
  {
    id: 5,
    name: 'Girl t-shirt',
    picture: GIRL_PURPULE,
    picture2: GIRL_PURPULE_2,
    price: 39,
    currency: 'TND',
  },
  {
    id: 6,
    name: 'Palestine t-shirt',
    picture: PALESTINE_TSHIRT,
    price: 34,
    currency: 'TND',
  },
  {
    id: 7,
    name: 'Twin peacks t-shirt',
    picture: TWIN_PEAKS_TSHIRT,
    picture2: TWIN_PEAKS_TSHIRT_2,
    price: 38,
    currency: 'TND',
  },
  {
    id: 8,
    name: 'Disney t-shirt',
    picture: DISNEY_TSHIRT_2,
    picture2: DISNEY_TSHIRT,
    price: 38,
    currency: 'TND',
  },
  {
    id: 9,
    name: 'Collage Artists t-shirt',
    picture: COLLAGE_TSHIRT,
    picture2: COLLAGE_TSHIRT_2,
    price: 39,
    currency: 'TND',
  },
  {
    id: 10,
    name: 'Cairokee t-shirt',
    picture: CAIROKEE_TSHIRT,
    picture2: CAIROKEE_TSHIRT_2,
    price: 45,
    currency: 'TND',
  },
  {
    id: 11,
    name: 'Luffy t-shirt',
    picture: LUFY_TSHIRT,
    price: 39,
    currency: 'TND',
  },
];
