export default function Categories({categories, onClick}){
    return <div className ='flex flex-wrap'>
        {categories.map(category=> (
                <button className='rounded'
                onClick={()=>onClick(category)}>{category}</button>))}
    </div>
}