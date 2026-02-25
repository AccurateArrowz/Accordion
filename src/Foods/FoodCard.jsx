export default function FoodCard({foodItem}){
    return <div className='h-48 w-1/3'>
        <img className='h-2/3 border' src={foodItem.image || ''} alt="" />
        <p>{foodItem.name}</p>
        <div>Categories: {foodItem.categories.join(', ')
        }
        </div>
    </div>
}