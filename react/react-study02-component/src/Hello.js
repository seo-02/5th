import React from 'react'; //JSX 사용가능(생략가능)
import './App.css';

const name = '리액트';
const myStyle = {
	backgroundColor: 'yellow'
};

//컴포넌트를 만드는 함수
function Hello(props) {
	console.log(props);

	return (
		//JSX 코드
		<h1 style={myStyle}>
			{props.children}, {name}~!
		</h1>
	);
}

export default Hello;
