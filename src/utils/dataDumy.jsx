import MakananIcon from "../assets/img/icons/Makanan-icon.png";
import MinumanIcon from "../assets/img/icons/Minuman-icon.png";
import SeblakIcon from "../assets/img/icons/Seblak-icon.png";
import UpcomingIcon from "../assets/img/icons/comingsoon-icon.png";
import CikuaImg from "../assets/img/products/Cikua.png";
import CrabImg from "../assets/img/products/Crab_stick.png";
import KopiArenImg from "../assets/img/products/Kopi_aren.png";
import DumplingKejuImg from "../assets/img/products/Dumpling_keju.png";
import { House, ShoppingCart, History } from "lucide-react";

const DataProducts = [
    {
        idProduct: 123,
        categoryProduct: "makanan",
        name: "Cikua",
        imgPath: CikuaImg,
        price: 2000,
        qty: 10
    },
    {
        idProduct: 123,
        categoryProduct: "makanan",
        name: "Crab Stick",
        imgPath: CrabImg,
        price: 2000,
        qty: 15
    },
    {
        idProduct: 123,
        categoryProduct: "minuman",
        name: "Kopi Top Aren",
        imgPath: KopiArenImg,
        price: 5000,
        qty: 40
    },
    {
        idProduct: 123,
        categoryProduct: "Makanan",
        name: "Dumpling Keju",
        imgPath: DumplingKejuImg,
        price: 6000,
        qty: 30
    }
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

const DataLink = [
    {
        icon: <House/>,
        span: "DASHBOARD",
        link: "dashboard"
    },
    {
        icon: <ShoppingCart/>,
        span: "TRANSAKSI",
        link: "transaction"
    },
    {
        icon: <History/>,
        span: "HISTORY",
        link: "history-transaction"
    }
];

const ChartDataPie = [
    { browser: "chrome", visitors: 275, fill: "var(--color-chrome)", color: "hsl(var(--chart-1))"},
    { browser: "safari", visitors: 200, fill: "var(--color-safari)", color: "hsl(var(--chart-2))"},
    { browser: "firefox", visitors: 187, fill: "var(--color-firefox)", color: "hsl(var(--chart-3))"},
    { browser: "edge", visitors: 173, fill: "var(--color-edge)", color: "hsl(var(--chart-4))"},
    { browser: "other", visitors: 90, fill: "var(--color-other)", color: "hsl(var(--chart-5))"},
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
    DataLink,
    ChartDataPie,
    ChartConfigPie,
    ChartData,
    ChartConfig,
    DataProducts
}