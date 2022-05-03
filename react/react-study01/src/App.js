import React from 'react'; //JSX 사용하려면 필요
import './App.css';

const name = 'React';
const tit = '리액트를 이용한 페이지';

function App() {
	//보통 리턴값은 () 소괄호로 감싼다.
	return (
		//JSX 안에서 변수를 사용하고 싶다면 {} 중괄호로 감싼다.
		<h1 title={tit}>
			안녕, {name}~!
		</h1>
	);
}

export default App;
