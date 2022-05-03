function Car({brand, number, children}){
  return(
    <h2>
      {brand}가 만든 {children} {number}~!
    </h2>
  );
}

export default Car;