import React from 'react';

function List(props){
  return (
    <div className="container">
      <h1 className="text-center">스타벅스 UI디자인</h1>
      <ol className="listview">
        {props.children}
      </ol>
    </div>
  );
}

export default List