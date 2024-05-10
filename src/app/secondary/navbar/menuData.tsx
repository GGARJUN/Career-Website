import { Menu } from "@/types/menu";

const menuData: Menu[] = [

  {
    id: 2,
    title: "Students",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "8th-9th",
        path: "/students",
        newTab: false,
      },
      {
        id: 22,
        title: "10th-12th",
        path: "/students1",
        newTab: false,
      },
    ]
  },
  {
    id: 3,
    title: "College Graduates",
    path: "/college",
    newTab: false,
  },
  {
    id: 5,
    title: "Working Professional",
    path: "/working",
    newTab: false,
  },
  

 
  {
    id: 6,
    title: "Knowledge",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "About Page",
        path: "/about",
        newTab: false,
      },
      {
        id: 62,
        title: "Pricing Page",
        path: "/pricing",
        newTab: false,
      },
      {
        id: 63,
        title: "Contact Page",
        path: "/contact",
        newTab: false,
      },
      {
        id: 64,
        title: "Blog Grid Page",
        path: "/blogs",
        newTab: false,
      },
      {
        id: 66,
        title: "Sign Up Page",
        path: "/auth/signup",
        newTab: false,
      },
      {
        id: 67,
        title: "Sign In Page",
        path: "/auth/signin",
        newTab: false,
      },
      {
        id: 68,
        title: "Error Page",
        path: "/error",
        newTab: false,
      },
    ],
  },
  {
    id: 5,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
