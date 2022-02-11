import React from 'react'

function CharacterItem({item}) {
  return (
    <div className="ui raised inverted card" >
        <a className="image" >
          <img src={item.img}/>
        </a>
        <div className="content">
          <a className="header">{item.name}</a>
          
        </div>
      </div>
  )
}

export default CharacterItem;