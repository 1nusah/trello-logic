import React from 'react';

import TaskList from './components/TaskList';
function App() {
	const Lists = [
		{
			title: 'React ',
			id: 0,
			cardItems: [
				{
					id: 0,
					content: 'Here we go',
				},
				{
					id: 1,
					content: 'TS dey lash me',
				},
			],
		},
		{
			title: 'In Progress ',
			id: 1,
			cardItems: [
				{
					id: 0,
					content: 'I dey top',
				},
			],
		},
		{
			title: 'Review ',
			id: 0,
			cardItems: [
				{
					id: 0,
					content: 'Niggas are on my case',
				},
			],
		},
	];
	return (
		<div className="App">
			<div>
				<h3>Trello clone</h3>
			</div>
			<div style={{ display: 'flex', overflowX: 'auto' }}>
				{Lists.map((item) => (
					<TaskList list={item} />
				))}
			</div>
		</div>
	);
}

export default App;
