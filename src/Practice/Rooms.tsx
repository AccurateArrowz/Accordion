// Step 1: Create an object or array with 'as const'
const ROOM_STATUSES = ['occupied', 'pending', 'available'] as const;

// Step 2: Derive the type from the array
type RoomStatuses = (typeof ROOM_STATUSES)[number];

type Room = {
    id: number;
    status: RoomStatuses;
    currentGuest: string | null;
    floor: number
}

import React, { useState } from 'react'

function FilterOptions({onClick, currentFilter}: {onClick: (option: 'all' | RoomStatuses) => void, currentFilter: 'all' | RoomStatuses}){
    const filterOptions =['all', ...ROOM_STATUSES] as const;
    return <div className='flex gap-3'>
        {filterOptions.map((option) => (
            <button key={option} style={{border: '1px solid black',
                background: option === currentFilter ? 'blue' : 'white' }}
            onClick={()=>onClick(option)}>{option}</button>
        ))}
    </div>
}

export default function Rooms() {
    const rooms: Room[] = [
        {id: 1, status: 'occupied', currentGuest: 'John Doe', floor: 1},
        {id: 2, status: 'pending', currentGuest: null, floor: 2},
        {id: 3, status: 'available', currentGuest: null, floor: 3},
        {id: 4, status: 'occupied', currentGuest: 'Jane Smith', floor: 1},
        {id: 5, status: 'available', currentGuest: null, floor: 2},
        {id: 6, status: 'occupied', currentGuest: 'Bob Johnson', floor: 3},
        {id: 7, status: 'pending', currentGuest: null, floor: 1},
        {id: 8, status: 'available', currentGuest: null, floor: 2},
        {id: 9, status: 'occupied', currentGuest: 'Alice Brown', floor: 3},
        {id: 10, status: 'available', currentGuest: null, floor: 1},
        {id: 11, status: 'occupied', currentGuest: 'Charlie Wilson', floor: 2},
        {id: 12, status: 'pending', currentGuest: null, floor: 3},
        {id: 13, status: 'available', currentGuest: null, floor: 1},
        {id: 14, status: 'occupied', currentGuest: 'Diana Miller', floor: 2},
        {id: 15, status: 'available', currentGuest: null, floor: 3},
    ]
    const [currentFilter , setCurrentFilter] = useState<'all' | RoomStatuses>('all');

    function handleFilterOptionClick(option: 'all' | RoomStatuses){
        setCurrentFilter(option)
    };
    const filteredRooms = currentFilter === 'all'? rooms: rooms.filter(room=>room.status === currentFilter);
  return (
    <>
    
    <FilterOptions onClick={handleFilterOptionClick} currentFilter={currentFilter} ></FilterOptions>
    <table>
        <thead>
            <tr>
                <th>Room ID</th>
                <th>Status</th>
                <th>Current Guest</th>
                <th>Floor</th>
            </tr>
        </thead>
        <tbody>
            {filteredRooms.map((room) => (
                <tr key={room.id}>
                 <td>{room.id}</td>
                 <td>{room.status}</td>
                 <td>{room.currentGuest || 'None'}</td>
                 <td>{room.floor}</td>
                </tr>
            ))}
        </tbody>
    </table>

    </>
  )
}
