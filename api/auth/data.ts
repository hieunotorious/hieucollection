import {
  AllType,
  BrandType,
  CategoryType,
  ProductType,
} from "./models/product";
import { Gender, User } from "./models/user";
import { v4 as uuidv4, v4 } from "uuid";

export const userlist: User[] = [
  {
    username: "hieu2",
    password: "123hieu2",
    name: "hieu",
    id: "123",
    address: "123 hieu",
    phone: "123",
    birthday: "123",
    gender: Gender.male,
  },
  {
    username: "hieu",
    password: "123hieu",
    name: "hieu",
    id: "123",
    address: "123 hieu",
    phone: "123",
    birthday: "123",
    gender: Gender.male,
  },
];

export const DefaultProduct: ProductType[] = [
  {
    id: v4(),
    name: "Batman: Hush MAFEX No.126 Batman (Black Ver.)",
    img: "images/BH.jpeg",
    review: 123,
    price: 94.99,
    rating: 1,
    description: "123",
    brand: BrandType.mafex,
    category: CategoryType.action_figure,
    available: true,
    all: AllType.new,
  },
  {
    id: v4(),
    name: "  Batman: Hush MAFEX No.175 Nightwing",
    img: "images/nw.jpeg",
    review: 123,
    price: 194.99,
    rating: 1,
    description: "123",
    brand: BrandType.mafex,
    sale: 19.99,
    category: CategoryType.action_figure,
    available: true,
    all: AllType.sale,
  },
  {
    id: v4(),
    name: "Batman: Hush MAFEX No.170 Huntress",
    img: "images/bw.jpeg",
    review: 123,
    price: 104.99,
    rating: 1,
    description: "123",
    brand: BrandType.mafex,
    category: CategoryType.action_figure,
    available: true,
    all: AllType.pre_order,
  },
  {
    id: v4(),
    name: "Batman: Hush MAFEX No.133 Hush",
    img: "images/hush.jpeg",
    review: 123,
    price: 139.99,
    rating: 1,
    description: "123",
    brand: BrandType.mafex,
    category: CategoryType.action_figure,
    available: true,
    all: AllType.new,
  },
  {
    id: v4(),
    name: "Marvel MAFEX No.160 Jean Grey (Comic Ver.)",
    img: "images/jean.jpeg",
    review: 123,
    price: 104.99,
    rating: 1,
    description: "123",
    brand: BrandType.mafex,
    category: CategoryType.action_figure,
    available: true,
    all: AllType.new,
  },
  {
    id: v4(),
    name: "Marvel MAFEX No.179 Magneto (Original Comic Ver.)",
    img: "images/magneto.jpeg",
    review: 123,
    price: 139.99,
    rating: 1,
    description: "123",
    brand: BrandType.mafex,
    category: CategoryType.action_figure,
    available: true,
    all: AllType.new,
  },
  {
    id: v4(),
    name: "Kamen Rider S.H.Figuarts Kamen Rider Zi-O (Ohma Form) Exclusive",
    img: "images/zio.jpeg",
    review: 123,
    price: 123.99,
    rating: 1,
    description: "123",
    brand: BrandType.shf,
    category: CategoryType.action_figure,
    available: true,
    all: AllType.pre_order,
  },
  {
    id: v4(),
    name: "Kamen Rider S.H.Figuarts -Shinkoccho Seihou- Kamen Rider Beast Exclusive",
    img: "images/lion.jpeg",
    review: 123,
    price: 136.99,
    rating: 1,
    description: "123",
    brand: BrandType.shf,
    category: CategoryType.action_figure,
    available: true,
    all: AllType.new,
  },
  {
    id: v4(),
    name: " Kamen Rider S.H.Figuarts Kamen Rider Build Cross-ZBuild Form Exclusive",
    img: "images/build.jpeg",
    review: 123,
    price: 134.99,
    rating: 1,
    description: "123",
    brand: BrandType.shf,
    category: CategoryType.action_figure,
    available: true,
    all: AllType.new,
  },
  {
    id: v4(),
    name: "  Kamen Rider Build S.H.Figuarts Kamen Rider Build (Genius Form) Exclusive",
    img: "images/genius.jpeg",
    review: 123,
    price: 34.99,
    rating: 1,
    description: "123",
    brand: BrandType.shf,
    category: CategoryType.action_figure,
    available: true,
    all: AllType.new,
  },
  {
    id: v4(),
    name: "Ultraman Trigger S.H.Figuarts Ultraman Trigger (Multi Type)",
    img: "images/trigger.jpeg",
    review: 123,
    price: 44.99,
    rating: 1,
    description: "123",
    sale: 19.99,
    brand: BrandType.shf,
    category: CategoryType.action_figure,
    available: true,
    all: AllType.sale,
  },
  {
    id: v4(),
    name: "Ultraman S.H.Figuarts Ultraman Ginga Strium Exclusive",
    img: "images/ginga.jpeg",
    review: 123,
    price: 132.99,
    rating: 1,
    description: "123",
    brand: BrandType.shf,
    category: CategoryType.action_figure,
    available: true,
    all: AllType.new,
  },
  {
    id: v4(),
    name: "Marvel Legends 20th Anniversary Series Iron Man",
    img: "images/iron.jpeg",
    review: 123,
    price: 34.99,
    rating: 1,
    description: "123",
    brand: BrandType.marvel_legend,
    category: CategoryType.action_figure,
    available: true,
    all: AllType.pre_order,
  },
  {
    id: v4(),
    name: "Marvel Comics 80th Anniversary Marvel Legends Iron Man",
    img: "images/iron2.jpeg",
    review: 123,
    price: 34.99,
    rating: 1,
    description: "123",
    brand: BrandType.marvel_legend,
    category: CategoryType.action_figure,
    available: true,
    all: AllType.new,
  },
  {
    id: v4(),
    name: "Avengers: Endgame Marvel Legends The Infinity Saga Iron Man Mark 85 & Thanos Two-Pack",
    img: "images/2p.jpeg",
    review: 123,
    price: 69.99,
    rating: 1,
    description: "123",
    sale: 39.99,
    brand: BrandType.marvel_legend,
    category: CategoryType.action_figure,
    available: true,
    all: AllType.sale,
  },
  {
    id: v4(),
    name: "Avengers: Infinity War Marvel Legends Loki VS Corvus Glaive Exclusive Two-Pack",
    img: "images/2p3.jpeg",
    review: 123,
    price: 42.99,
    rating: 1,
    description: "123",
    sale: 20.99,
    brand: BrandType.marvel_legend,
    category: CategoryType.action_figure,
    available: true,
    all: AllType.sale,
  },
  {
    id: v4(),
    name: "Iron Man Marvel Legends The Infinity Saga Iron Man Mark III",
    img: "images/iron3.jpeg",
    review: 123,
    price: 61.99,
    rating: 1,
    description: "123",
    brand: BrandType.marvel_legend,
    category: CategoryType.action_figure,
    available: true,
    all: AllType.new,
  },
  {
    id: v4(),
    name: "Iron Man Marvel Legends The Infinity Saga Iron Man Mark III",
    img: "images/iron4.jpeg",
    review: 123,
    price: 28.99,
    rating: 1,
    description: "123",
    brand: BrandType.marvel_legend,
    category: CategoryType.action_figure,
    available: true,
    all: AllType.new,
  },
  {
    id: v4(),
    name: "DC Essentials Unkillables Red Hood (DCeased) Figure",
    img: "images/rz.jpeg",
    review: 123,
    price: 29.99,
    rating: 1,
    description: "123",
    brand: BrandType.dc_collectibles,

    category: CategoryType.action_figure,
    available: true,
    all: AllType.new,
  },
  {
    id: v4(),
    name: "DC Essentials Batgirl (DCeased) Figure",
    img: "images/bz.jpeg",
    review: 123,
    price: 29.99,
    rating: 1,
    description: "123",
    brand: BrandType.dc_collectibles,

    category: CategoryType.action_figure,
    available: true,
    all: AllType.new,
  },
  {
    id: v4(),
    name: "DC Essentials Nightwing (DCeased) Figure",
    img: "images/nz.jpeg",
    review: 123,
    price: 29.99,
    rating: 1,
    description: "123",
    brand: BrandType.dc_collectibles,

    category: CategoryType.action_figure,
    available: true,
    all: AllType.new,
  },
  {
    id: v4(),
    name: "DC Essentials The Joker (DCeased) Figure",
    img: "images/jz.jpeg",
    review: 123,
    price: 29.99,
    rating: 1,
    description: "123",
    brand: BrandType.dc_collectibles,

    category: CategoryType.action_figure,
    available: true,
    all: AllType.new,
  },
  {
    id: v4(),
    name: "DC Essentials Superman (DCeased) Figure",
    img: "images/sz.jpeg",
    review: 123,
    price: 29.99,
    rating: 1,
    description: "123",
    brand: BrandType.dc_collectibles,
    sale: 19.99,
    category: CategoryType.action_figure,
    available: true,
    all: AllType.sale,
  },
  {
    id: v4(),
    name: "DC Essentials The Batman (DCeased) Figure",
    img: "images/batz.jpeg",
    review: 123,
    price: 29.99,
    rating: 1,
    description: "123",
    brand: BrandType.dc_collectibles,
    sale: 19.99,
    category: CategoryType.action_figure,
    available: true,
    all: AllType.sale,
  },
  {
    id: v4(),
    name: " Marvel Legends Series Loki Agent of Asgard 6-inch Retro",
    img: "images/loki.jpeg",
    review: 123,
    price: 24.99,
    rating: 1,
    description: "123",
    brand: BrandType.marvel_legend,
    sale: 22.0,
    category: CategoryType.action_figure,
    available: true,
    all: AllType.sale,
  },

  {
    id: v4(),
    name: " WWE Randy Orton Elite Collection Action Figure, Series # 90",
    img: "images/randy.jpeg",
    review: 123,
    price: 21.0,
    rating: 1,
    description: "123",
    brand: BrandType.mattel,
    sale: 15.0,
    category: CategoryType.action_figure,
    available: true,
    all: AllType.sale,
  },
  {
    id: v4(),
    name: "McFarlane Multiverse The Batman from Batman Movie Deluxe Figure",
    img: "images/batman.jpeg",
    review: 123,
    price: 35.0,
    rating: 1,
    description: "123",
    brand: BrandType.mcfarlane,
    category: CategoryType.statue,
    available: true,
    all: AllType.new,
  },
  {
    id: v4(),
    name: "WWE Ultimate Edition Brock Lesnar",
    img: "images/brock.jpeg",
    review: 123,
    price: 36.99,
    rating: 1,
    description: "123",
    brand: BrandType.mattel,
    category: CategoryType.action_figure,
    available: true,
    all: AllType.new,
  },
  {
    id: v4(),
    name: "WWE Ultimate Edition The Rock Figure",
    img: "images/rock.jpeg",
    review: 123,
    price: 36.99,
    rating: 1,
    description: "123",
    brand: BrandType.mattel,
    category: CategoryType.action_figure,
    available: true,
    all: AllType.new,
  },
  {
    id: v4(),
    name: "WWE Ultimate Edition John Cena Figure",
    img: "images/cena.jpeg",
    review: 123,
    price: 36.99,
    rating: 1,
    description: "123",
    brand: BrandType.mattel,
    category: CategoryType.action_figure,
    available: true,
    all: AllType.pre_order,
  },
  {
    id: v4(),
    name: "DC Comics Super Man and Lois Lane 1/6 Scale Diorama",
    img: "images/sups.jpeg",
    review: 123,
    price: 666.99,
    rating: 1,
    description: "123",
    brand: BrandType.figuart,
    category: CategoryType.statue,
    available: true,
    all: AllType.new,
  },
  {
    id: v4(),
    name: "Darkstalkers Felicia (Black Ver.) Limited Edition 1/4 Scale Statue",
    img: "images/dark.jpeg",
    review: 123,
    price: 849.99,
    rating: 1,
    description: "123",
    brand: BrandType.figuart,
    category: CategoryType.statue,
    available: true,
    all: AllType.pre_order,
  },
  {
    id: v4(),
    name: "DC Rebirth Premium Collectibles Catwoman Limited Edition Statue",
    img: "images/cat.jpeg",
    review: 123,
    price: 499.99,
    rating: 1,
    description: "123",
    brand: BrandType.figuart,
    category: CategoryType.statue,
    available: true,
    all: AllType.new,
  },
  {
    id: v4(),
    name: "Vampirella 1/3 Scale Statue",
    img: "images/vamp.jpeg",
    review: 123,
    price: 919.99,
    rating: 1,
    description: "123",
    brand: BrandType.figuart,
    category: CategoryType.statue,
    available: true,
    all: AllType.new,
  },
  {
    id: v4(),
    name: "Journey to the West Monkey King (Blue) Limited Edition Statue",
    img: "images/tnk.jpeg",
    review: 123,
    price: 139.99,
    rating: 1,
    description: "123",
    brand: BrandType.figuart,
    category: CategoryType.statue,
    available: true,
    all: AllType.new,
  },

  {
    id: v4(),
    name: " The Batman 1/10 Art Scale Limited Edition Statue",
    img: "images/Pbat.jpeg",
    review: 123,
    price: 174.99,
    rating: 1,
    description: "123",
    brand: BrandType.figuart,
    category: CategoryType.statue,
    available: true,
    all: AllType.new,
  },
  {
    id: v4(),
    name: "Dragon Ball Super S.H.Figuarts Super Saiyan God Super Saiyan Gogeta",
    img: "images/Pgoku.jpeg",
    review: 123,
    price: 59.99,
    rating: 1,
    description: "123",
    brand: BrandType.shf,
    category: CategoryType.action_figure,
    available: true,
    all: AllType.new,
  },
  {
    id: v4(),
    name: "Dragon Ball Super S.H.Figuarts Super Saiyan Broly (Full Power) ",
    img: "images/Pbroly.jpeg",
    review: 123,
    price: 83.99,
    rating: 1,
    description: "123",
    brand: BrandType.shf,
    category: CategoryType.action_figure,
    available: true,
    all: AllType.new,
  },
  {
    id: v4(),
    name: "Spider-Man: No Way Home S.H.Figuarts The Friendly Neighborhood Spider-Man",
    img: "images/s2.jpeg",
    review: 123,
    price: 94.99,
    rating: 1,
    description: "123",
    brand: BrandType.shf,
    category: CategoryType.action_figure,
    available: true,
    all: AllType.new,
  },
  {
    id: v4(),
    name: "The Amazing Spider-Man 2 S.H.Figuarts Spider-Man ",
    img: "images/s3.png",
    review: 123,
    price: 94.99,
    rating: 1,
    description: "123",
    brand: BrandType.shf,
    category: CategoryType.action_figure,
    available: true,
    all: AllType.new,
  },
  {
    id: v4(),
    name: "SNaruto: Shippuden S.H.Figuarts Sasuke Uchiha (He Who Bears All Hatred)",
    img: "images/sasuke.jpeg",
    review: 123,
    price: 59.99,
    rating: 1,
    description: "123",
    brand: BrandType.shf,
    category: CategoryType.action_figure,
    available: true,
    all: AllType.new,
  },
  {
    id: v4(),
    name: "Naruto: Shippuden S.H.Figuarts Naruto Uzumaki (The Jinchuuriki Entrusted with Hope) ",
    img: "images/naruto.jpeg",
    review: 123,
    price: 34.99,
    rating: 1,
    description: "123",
    brand: BrandType.shf,
    category: CategoryType.action_figure,
    available: true,
    all: AllType.new,
  },

  {
    id: v4(),
    name: " WWE Ultimate Edition 14 Roman Reigns",
    img: "images/roman.jpeg",
    review: 123,
    price: 36.99,
    rating: 1,
    description: "123",
    brand: BrandType.mattel,
    sale: 15.0,
    category: CategoryType.action_figure,
    available: true,
    all: AllType.sale,
  },

  {
    id: v4(),
    name: "WWE Ultimate Edition 13 Hulk Hogan",
    img: "images/Phogan.jpeg",
    review: 123,
    price: 36.99,
    rating: 1,
    description: "123",
    brand: BrandType.mattel,
    sale: 15.0,
    category: CategoryType.action_figure,
    available: true,
    all: AllType.sale,
  },
  {
    id: v4(),
    name: " Justice League (2021) DC Multiverse Superman Action Figure",
    img: "images/sup.jpeg",
    review: 123,
    price: 19.99,
    rating: 1,
    description: "123",
    brand: BrandType.mcfarlane,
    category: CategoryType.action_figure,
    available: true,
    all: AllType.new,
  },

  {
    id: v4(),
    name: "Justice League (2021) DC Multiverse Aquaman Action Figure",
    img: "images/aquaman.jpeg",
    review: 123,
    price: 19.99,
    rating: 1,
    description: "123",
    brand: BrandType.mcfarlane,
    category: CategoryType.action_figure,
    available: true,
    all: AllType.new,
  },
  {
    id: v4(),
    name: " Justice League (2021) DC Multiverse Darkseid Mega Action Figure",
    img: "images/darkseid.jpeg",
    review: 123,
    price: 49.99,
    rating: 1,
    description: "123",
    brand: BrandType.mcfarlane,
    sale: 15.0,
    category: CategoryType.action_figure,
    available: true,
    all: AllType.sale,
  },

  {
    id: v4(),
    name: "Justice League (2021) DC Multiverse The Flash Action Figure",
    img: "images/flash.jpeg",
    review: 123,
    price: 19.99,
    rating: 1,
    description: "123",

    brand: BrandType.mcfarlane,
    category: CategoryType.action_figure,
    available: true,
    all: AllType.pre_order,
  },

  {
    id: v4(),
    name: "Batman: The Dark Knight Returns DC Multiverse Superman vs. Armored Batman Two-Pack",
    img: "images/bvs.jpeg",
    review: 123,
    price: 49.99,
    rating: 1,
    description: "123",
    sale: 15.0,
    brand: BrandType.mcfarlane,
    category: CategoryType.action_figure,
    available: true,
    all: AllType.sale,
  },
];