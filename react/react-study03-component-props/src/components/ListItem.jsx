import React from 'react';

function ListItem(props){
  return(
    <li>
      <h2>{props.name} - {props.address}</h2>
      <p>{props.children}</p>
    </li>
  );
}

export default ListItem;