// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Orders",
  },
  {
    icon: UilUsersAlt,
    heading: "Customers",
  },
  {
    icon: UilPackage,
    heading: "Products",
  },
  {
    icon: UilChart,
    heading: "Analytics",
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Sales",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Admin dashboard data
export const adminCardsData = [
  {
    title: "Total Users",
    color: {
      backGround: "linear-gradient(180deg, #4e54c8 0%, #8f94fb 100%)",
      boxShadow: "0px 10px 20px 0px #d1d2ff",
    },
    barValue: 75,
    value: "12,340",
    png: UilUsersAlt, // Replace with relevant MUI icon or custom icon
    series: [
      {
        name: "Total Users",
        data: [1000, 1200, 1100, 1300, 1400, 1500, 1600],
      },
    ],
  },
  {
    title: "Active Merchants",
    color: {
      backGround: "linear-gradient(180deg, #ff6a88 0%, #ff99ac 100%)",
      boxShadow: "0px 10px 20px 0px #ffccd5",
    },
    barValue: 60,
    value: "2,450",
    png: UilUsersAlt,
    series: [
      {
        name: "Active Merchants",
        data: [200, 250, 220, 300, 280, 320, 350],
      },
    ],
  },
  {
    title: "Pending Approvals",
    color: {
      backGround: "linear-gradient(180deg, #fbc2eb 0%, #a6c1ee 100%)",
      boxShadow: "0px 10px 20px 0px #e2c7f5",
    },
    barValue: 40,
    value: "120",
    png: UilUsersAlt,
    series: [
      {
        name: "Pending Approvals",
        data: [10, 15, 12, 20, 18, 25, 30],
      },
    ],
  },
];

// Merchant dashboard data
export const merchantCardsData = [
  {
    title: "Sales",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "18,500",
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [1000, 1500, 1200, 1800, 1600, 2000, 2100],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 65,
    value: "11,300",
    png: UilUsdSquare,
    series: [
      {
        name: "Revenue",
        data: [800, 1200, 1000, 1500, 1300, 1700, 1600],
      },
    ],
  },
  {
    title: "Orders",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 50,
    value: "320",
    png: UilUsdSquare,
    series: [
      {
        name: "Orders",
        data: [30, 40, 35, 50, 45, 55, 60],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Iron Man",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
];
