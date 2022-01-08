import React from 'react';

type TaskCardProps = {
	card?: {
		id: number;
		content: string;
	}[];
};
const TaskListCard = ({ card }: TaskCardProps) => {
	return (
		<div style={{ backgroundColor: 'white', padding: 10 }}>
			{card?.map((item, index) => (
				<p>{item.content}</p>
			))}
		</div>
	);
};

export default TaskListCard;
