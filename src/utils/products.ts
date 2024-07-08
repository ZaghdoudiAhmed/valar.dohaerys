const TENNIS_TSHIRT = require('@/assets/mockup_tshirt_beige_tennis_centre.jpg');
const TENNIS_TSHIRT_2 = require('@/assets/mockup_tshirt_beige_tennis_gauche.jpg');
const FAIROUZ_TSHIRT = require('@/assets/mockup_tshirt_Blanc_Feirouz.jpg');

const ALIEN_TSHIRT = require('@/assets/mockup_tshirt_rose_epeche_alien.jpg');
const ALIEN_TSHIRT_2 = require('@/assets/mockup_tshirt_rose_peche_alien_gauche.jpg');
const ALIEN_WHITE = require('@/assets/mockup_tshirt_blanc_alien.jpg');
const ALIEN_WHITE_2 = require('@/assets/mockup_tshirt_blanc_alien_gauche.jpg');

const GIRL_PURPULE = require('@/assets/mockup_tshirt_mauve.jpg');
const GIRL_PURPULE_2 = require('@/assets/mockup_tshirt_mauve_gauche.jpg');

const GIRL_WHITE = require('@/assets/mockup_tshirt_blanc.jpg');
const GIRL_WHITE_2 = require('@/assets/mockup_tshirt_blanc_gauche.jpg');

const TWIN_PEAKS_TSHIRT = require('@/assets/MOCKUP_TSHIRT_noir.jpg');
const TWIN_PEAKS_TSHIRT_2 = require('@/assets/MOCKUP_TSHIRT_noir_2.jpg');

const PALESTINE_TSHIRT = require('@/assets/mockup_tshirt_Blanc_palest_2.jpg');
const PALESTINE_TSHIRT_2 = require('@/assets/mockup_tshirt_blanc_palestine.jpg');

const PALESTINE_TSHIRT_FROM = require('@/assets/mockup_tshirt_blanc_pales_from.jpg');

const BASIC_TSHIRTS = require('@/assets/md-salman-tWOz2_EK5EQ-unsplash.jpg');

const DISNEY_TSHIRT = require('@/assets/mockup_tshirt_bleu_ciel_2.jpg');
const DISNEY_TSHIRT_2 = require('@/assets/mockup_tshirt_bleu_ciel_3.jpg');

const COLLAGE_TSHIRT = require('@/assets/mockup_tshirt_beige_collage.jpg');
const COLLAGE_TSHIRT_2 = require('@/assets/mockup_tshirt_rouge_bordeau_collage.jpg');

const CAIROKEE_TSHIRT = require('@/assets/mockup_tshirt_Camel_1.jpg');
const CAIROKEE_TSHIRT_2 = require('@/assets/mockup_tshirt_Camel_2.jpg');

const LUFY_TSHIRT = require('@/assets/mockup_tshirt_Blanc_luffy.jpg');
const LUFY_TSHIRT_2 = require('@/assets/MOCKUP_TSHIRT_noir_luffy.jpg');

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
  picture: any;
  picture2?: any;
  colors: Color[];
  showColorsBasics: boolean;
  showColors: boolean;
  price: number;
  currency: string;
}

export const Products = [
  {
    id: 1,
    name: 'basic t-shirt',
    picture: BASIC_TSHIRTS,
    showColorsBasics: true,
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
    showColors: true,
    colors: [
      {
        id: 1,
        refColor: '#e4aca5',
        name: 'peche',
        items: [
          {
            id: 11,
            picture: ALIEN_TSHIRT,
            picture2: ALIEN_TSHIRT_2,
          },
        ],
      },
      {
        id: 2,
        refColor: '#fff',
        name: 'white',
        items: [
          {
            id: 21,
            picture: ALIEN_WHITE,
            picture2: ALIEN_WHITE_2,
          },
        ],
      },
    ],
    price: 38,
    currency: 'TND',
  },
  {
    id: 5,
    name: 'Girl t-shirt',
    showColors: true,
    colors: [
      {
        id: 1,
        refColor: '#e4aca5',
        name: 'peche',
        items: [
          {
            id: 11,
            picture: GIRL_PURPULE,
            picture2: GIRL_PURPULE_2,
          },
        ],
      },
      {
        id: 2,
        refColor: '#fff',
        name: 'white',
        items: [
          {
            id: 12,
            picture: GIRL_WHITE,
            picture2: GIRL_WHITE_2,
          },
        ],
      },
      {
        id: 3,
        refColor: '#b964b9',
        name: 'violet',
        items: [],
      },
    ],
    price: 39,
    currency: 'TND',
  },
  {
    id: 6,
    name: 'Palestine t-shirt',
    picture: PALESTINE_TSHIRT,
    picture2: PALESTINE_TSHIRT_2,
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
    picture2: LUFY_TSHIRT_2,
    price: 39,
    currency: 'TND',
  },
  {
    id: 12,
    name: 'Palestine t-shirt',
    picture: PALESTINE_TSHIRT_FROM,
    price: 39,
    currency: 'TND',
  },
];
