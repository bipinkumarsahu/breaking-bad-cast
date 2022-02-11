import React, { useState } from "react";

function Search({getQuery}) {
 
    const [text,setText] = useState('');

    const onInputChange = (q)=>{
        setText(q);
        getQuery(q);

    } 
 
    return (
    <div className="ui segment">
      <div className="ui fluid action input">
        <input type=" text" placeholder="Search Characters" value = {text} onChange={e=> onInputChange(e.target.value)} />
        <button className="ui icon button">
          <i className="search  icon"></i>
        </button>
      </div>
    </div>
  );
}

export default Search;
