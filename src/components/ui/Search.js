import React, { useState } from "react";

function Search({getQuery}) {
 
    const [text,setText] = useState('');

    const onInputChange = (q)=>{
        setText(q);
        getQuery(q);

    } 
 
    return (
    <div className="ui segment">
      <div className="ui fluid icon input">
      <i className="search icon"></i>
        <input type=" text" placeholder="Search Characters" value = {text} onChange={e=> onInputChange(e.target.value)}>

       
        </input>
       
        
        
      </div>
    </div>
  );
}

export default Search;
