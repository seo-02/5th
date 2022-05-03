function Hi({color,name,children}){

  /**
   props = {
     color: "blue",
     name: "리액트",    
     children: "님, 반가워요~!"
   }
   */

  //  const color = props.color;
  //  const name = props.name;
  //  const children = props.children;

  // const {color,name,children} = props;

  return(
    <h1 style={{color:color}}>{name}{children}</h1>
  );
}

export default Hi;