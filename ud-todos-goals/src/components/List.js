import React from 'react'

function List (props) {
  return (
    <ul>
      {
        props && 
        props.items && 
        props.items.map(item => 
          <li key={item.id}>
            <span 
              onClick={() => props.toggle && props.toggle(item.id)}
              style={{ textDecoration: item.complete ? 'line-through': 'none'}}>
              {item.name}
            </span>
            <button onClick={() => props.removeItem(item)}>X</button>
          </li>)
      }
    </ul>
  )
}

export default List