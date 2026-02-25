import React from 'react'
import NavItem from './NavItem'
export const navData = [
  {
    id: 1,
    label: "Home",
    path: "/",
  },
  {
    id: 2,
    label: "Products",
    path: "/products",
    children: [
      {
        id: 21,
        label: "Electronics",
        path: "/products/electronics",
        children: [
          { id: 211, label: "Phones", path: "/products/electronics/phones" },
          { id: 212, label: "Laptops", path: "/products/electronics/laptops" },
        ],
      },
      {
        id: 22,
        label: "Clothing",
        path: "/products/clothing",
        children: [
          { id: 221, label: "Men", path: "/products/clothing/men" },
          { id: 222, label: "Women", path: "/products/clothing/women" },
        ],
      },
    ],
  },
  {
    id: 3,
    label: "About Us",
    path: "/about",
  },
  {
    id: 4,
    label: "Blog",
    path: "/blog",
    children: [
      { id: 41, label: "Tech", path: "/blog/tech" },
      {
        id: 42,
        label: "Lifestyle",
        path: "/blog/lifestyle",
        children: [
          { id: 421, label: "Travel", path: "/blog/lifestyle/travel" },
          { id: 422, label: "Health", path: "/blog/lifestyle/health" },
        ],
      },
    ],
  },
];


function RecurssiveNavPractice() {
  return (
    <div className='w-[300px] bg-amber-300 h-screen absolute left-0 top-0'>
      {navData.map(item=> <NavItem item={item}></NavItem>)}
        
    </div>
  )
}

export default RecurssiveNavPractice