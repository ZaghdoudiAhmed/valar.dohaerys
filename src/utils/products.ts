const TENNIS_TSHIRT = require('../../public/mockup_tshirt_beige_tennis_centre.jpg');
const FAIROUZ_TSHIRT = require('../../public/mockup_tshirt_Blanc_Feirouz.jpg');
const ALIEN_TSHIRT = require('../../public/mockup_tshirt_rose_epeche_alien.jpg');
const GIRL_PURPULE = require('../../public/mockup_tshirt_mauve.jpg');
const PALESTINE_TSHIRT = require('../../public/mockup_tshirt_Blanc_palest_2.jpg');
const BASIC_TSHIRTS = require('../../public/md-salman-tWOz2_EK5EQ-unsplash.jpg');
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
    id: 3,
    name: 'alien t-shirt',
    picture: ALIEN_TSHIRT,
    price: 38,
    currency: 'TND',
  },
  {
    id: 3,
    name: 'Girl t-shirt',
    picture: GIRL_PURPULE,
    price: 39,
    currency: 'TND',
  },
  {
    id: 3,
    name: 'Palestine t-shirt',
    picture: PALESTINE_TSHIRT,
    price: 34,
    currency: 'TND',
  },
];
