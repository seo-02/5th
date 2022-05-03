import React from 'react';
import NewHello01 from './NewHello01';
import NewHello02 from './NewHello02';
import NewHello03 from './NewHello03';
import NewHello04 from './NewHello04';
import Lunch from './Lunch';

import './App.css';
import NewHello from './NewHello';
import List from './components/List';
import Hello from './Hello';

import Listitem01 from './components/Listitem01';
import Listitem02 from './components/Listitem02';
import Listitem03 from './components/Listitem03';

function App() {
	return (
		<>
			<List>
				<Listitem01 />
				<Listitem02 />
				<Listitem03 />
			</List>

			<hr />

			<Hello>자유로운 토핑추가</Hello>

			<h1>자기소개</h1>
			<NewHello01 />
			<NewHello02 />
			<NewHello03 />
			<NewHello04 />

			<hr />

			<Lunch />

			<hr />

			<NewHello name="둘리" msg='얼음타고 남극에서 왔어요' />
			<NewHello name="또치" msg='사하라 사막에서 왔어요' />
			<NewHello name="도우너" msg='깐타피아 별에서 왔어요' />
			<NewHello name="마이콜" msg='라면먹다 왔어요' />
		</>
	);
}

export default App;
