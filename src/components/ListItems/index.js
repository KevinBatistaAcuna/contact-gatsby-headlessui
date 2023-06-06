import React from 'react'

function ListItems({items}) {
  return (
    <ul>
        {items.map((item, i) => {
            return i===0 ? <li className='font-bold list-none'>{item}</li> : <li className='list-none'>{item}</li>;
        })}
    </ul>
  )
}

export default ListItems