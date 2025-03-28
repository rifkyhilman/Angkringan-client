import MakananIcon from "@/assets/img/icons/Makanan-icon.png";
import MinumanIcon from "@/assets/img/icons/Minuman-icon.png";
import SeblakIcon from "@/assets/img/icons/Seblak-icon.png";
import UpcomingIcon from "@/assets/img/icons/comingsoon-icon.png";

import CikuaImg from "@/assets/img/products/Cikua.png";
import CrabImg from "@/assets/img/products/Crab_stick.png";
import KopiArenImg from "@/assets/img/products/kopi_aren.png";
import DumplingKejuImg from "@/assets/img/products/Dumpling_keju.png";
import EstehImg from "@/assets/img/products/esteh_manis.png";
import ExtrajozzImg from "@/assets/img/products/extrajozz.png";
import KapalapiImg from "@/assets/img/products/kapal_api.png";
import MangkokImg from "@/assets/img/products/mangkok.png";
import NasikucingImg from "@/assets/img/products/nasi_kucing.png";
import SatebasoImg from "@/assets/img/products/sate_baso.png";
import SateususImg from "@/assets/img/products/sate_usus.png";

const DataProducts = [
    {
        idProduct: 11241245,
        categoryProduct: "seblak",
        name: "Mangkok",
        imgPath: MangkokImg,
        price: 3000
    },
    {
        idProduct: 21251245,
        categoryProduct: "seblak",
        name: "Cikua",
        imgPath: CikuaImg,
        price: 2000
    },
    {
        idProduct: 312412414,
        categoryProduct: "seblak",
        name: "Crab Stick",
        imgPath: CrabImg,
        price: 2000
    },
    {
        idProduct: 45674125,
        categoryProduct: "minuman",
        name: "Kopi Top Aren",
        imgPath: KopiArenImg,
        price: 5000
    },
    {
        idProduct: 678571251231,
        categoryProduct: "seblak",
        name: "Dumpling Keju",
        imgPath: DumplingKejuImg,
        price: 2000
    },
    {
        idProduct: 98568733523412,
        categoryProduct: "minuman",
        name: "Es Teh",
        imgPath: EstehImg,
        price: 3000
    },
    {
        idProduct: 45731245,
        categoryProduct: "minuman",
        name: "Es Extrajozz",
        imgPath: ExtrajozzImg,
        price: 5000
    },
    {
        idProduct: 236124521,
        categoryProduct: "minuman",
        name: "Kopi Hitam",
        imgPath: KapalapiImg,
        price: 5000
    },
    {
        idProduct: 31255326,
        categoryProduct: "makanan",
        name: "Nasi Kucing",
        imgPath: NasikucingImg,
        price: 6000
    },
    {
        idProduct: 235612435,
        categoryProduct: "makanan",
        name: "Sate Usus Ayam",
        imgPath: SateususImg,
        price: 2000
    },
    {
        idProduct: 153436,
        categoryProduct: "makanan",
        name: "Sate Baso Ayam",
        imgPath: SatebasoImg,
        price: 2000
    },
]

const DataKategori = [
    {
        name: "makanan",
        pathImg: MakananIcon
    },
    {
        name: "minuman",
        pathImg: MinumanIcon
    },
    {
        name: "seblak",
        pathImg: SeblakIcon
    },
    {
        name: "segera hadir",
        pathImg: UpcomingIcon
    },
    {
        name: "segera hadir",
        pathImg: UpcomingIcon
    }
]


const ChartDataPie = [
    { browser: "chrome", visitors: 275, fill: "var(--color-chrome)"},
    { browser: "safari", visitors: 200, fill: "var(--color-safari)"}, 
    { browser: "firefox", visitors: 187, fill: "var(--color-firefox)"}, 
    { browser: "edge", visitors: 173, fill: "var(--color-edge)"}, 
    { browser: "other", visitors: 90, fill: "var(--color-other)"},
  ];

const ChartConfigPie = {
    visitors: {
      label: "Visitors",
    },
    chrome: {
      label: "Chrome",
      color: "hsl(var(--chart-1))",
    },
    safari: {
      label: "Safari",
      color: "hsl(var(--chart-2))",
    },
    firefox: {
      label: "Firefox",
      color: "hsl(var(--chart-3))",
    },
    edge: {
      label: "Edge",
      color: "hsl(var(--chart-4))",
    },
    other: {
      label: "Other",
      color: "hsl(var(--chart-5))",
    },
  }; 

const ChartData = [
    { month: "Senin", desktop: 186 },
    { month: "Selasa", desktop: 305 },
    { month: "Rabu", desktop: 237 },
    { month: "Kamis", desktop: 73 },
    { month: "Jum'at", desktop: 209 },
    { month: "Sabtu", desktop: 214 },
    { month: "Minggu", desktop: 310 },
];

const ChartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
    },
};

export {
    DataKategori,
    ChartDataPie,
    ChartConfigPie,
    ChartData,
    ChartConfig,
    DataProducts
}
