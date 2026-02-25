import { useState } from 'react';
import SearchBar from './SearchBar'
import Categories from './Categories';
import FoodCard from './FoodCard'

const categories = [
    "All",
  "Italian",
  "Vegetarian",
  "Indian",
  "Non-Vegetarian",
  "Rice",
  "Salad",
  "Healthy",
  "Japanese",
  "Seafood",
  "American",
  "Fast Food",
  "Breakfast",
  "Dessert",
  "Grilled",
  "Pasta",
  "Middle Eastern",
  "Street Food",
  "Bakery"
];

export default function FoodsPage(){
    const [foodItems, setFoodItems] = useState([
  {
    id: 1,
    name: "Margherita Pizza",
    categories: ["Italian", "Vegetarian"],
    image: "https://via.placeholder.com/150?text=Pizza",
  },
  {
    id: 2,
    name: "Chicken Biryani",
    categories: ["Indian", "Non-Vegetarian", "Rice"],
    image: "https://via.placeholder.com/150?text=Biryani",
  },
  {
    id: 3,
    name: "Caesar Salad",
    categories: ["Salad", "Healthy", "Vegetarian"],
    image: "https://via.placeholder.com/150?text=Salad",
  },
  {
    id: 4,
    name: "Sushi Roll",
    categories: ["Japanese", "Seafood"],
    image: "https://via.placeholder.com/150?text=Sushi",
  },
  {
    id: 5,
    name: "Cheeseburger",
    categories: ["American", "Fast Food", "Non-Vegetarian"],
    image: "https://via.placeholder.com/150?text=Burger",
  },
  {
    id: 6,
    name: "Pancakes",
    categories: ["Breakfast", "Dessert"],
    image: "https://via.placeholder.com/150?text=Pancakes",
  },
  {
    id: 7,
    name: "Tandoori Paneer",
    categories: ["Indian", "Vegetarian", "Grilled"],
    image: "https://via.placeholder.com/150?text=Paneer",
  },
  {
    id: 8,
    name: "Spaghetti Carbonara",
    categories: ["Italian", "Pasta", "Non-Vegetarian"],
    image: "https://via.placeholder.com/150?text=Spaghetti",
  },
  {
    id: 9,
    name: "Falafel Wrap",
    categories: ["Middle Eastern", "Vegetarian", "Street Food"],
    image: "https://via.placeholder.com/150?text=Falafel",
  },
  {
    id: 10,
    name: "Chocolate Cake",
    categories: ["Dessert", "Bakery"],
    image: "https://via.placeholder.com/150?text=Cake",
  },
]);
    const [currentCategories, setCurrentCategories] = useState(['All']);

    function handleCategoryClick({category}){
        setCurrentCategories([...categories, category]);
    }

    let currentFoodItems;
    if(currentCategories.includes('All')){
        currentFoodItems = foodItems;
    }else{
        currentFoodItems =  foodItems.filter(item=>{
            for(let itemCategory of item.categories){
                if(currentCategories.includes(itemCategory)){
                    return true;
                }
            return false;
         }})
    }
//className='w-2/3 mx-auto'
    return <div >
        <SearchBar></SearchBar>
        <Categories categories={categories} onClick={handleCategoryClick}></Categories>
       <ul className='w-2/3 flex gap-6'>
        {currentFoodItems.map(item=> 
            <FoodCard foodItem={item} key={item.id}></FoodCard>
        )}
    </ul>
     </div>
}