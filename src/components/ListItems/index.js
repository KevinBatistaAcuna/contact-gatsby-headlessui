import React from 'react'

function ListItems({items}) {
  return (
    <ul className='md:w-fit w-full text-center md:text-left m-0 mt-6'>
        {items.map((item, i) => {
            return i===0 ? <li className='font-bold list-none' key={item}>{item}</li> : <li className='list-none' key={item}>{item}</li>;
        })}
    </ul>
  )
}

export default ListItems