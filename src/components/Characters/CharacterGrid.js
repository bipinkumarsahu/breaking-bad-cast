import React from 'react'
import CharacterItem from './CharacterItem';
function CharacterGrid({items, isLoading}) {
  return (
    isLoading?(<div className="ui icon message">
    <i className="notched circle loading icon"></i>
    <div className="content">
      <div className="header">
        Just one second
      </div>
      <p>We're fetching that content for you.</p>
    </div>
  </div>):(<div className="ui four column cards"  >
 {items.map(item=>(
     <CharacterItem item={item} key={item.char_id} />
 ))}
</div>)
  )
}

export default CharacterGrid