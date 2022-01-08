import TaskListCard from './TaskListCard';
type CardHeader = { title: string; id: number };
type TaskListProps = {
	list: {
		title: string;
		id: number;
		cardItems?: { id: number; content: string }[];
	};
};
export default function TaskList({ list }: TaskListProps) {
	console.log('list ', list);

	return (
		<div
			style={{
				backgroundColor: '#cecece',
				paddingTop: 10,
				paddingBottom: 10,
				width: 350,
				marginLeft: 5,
				marginRight: 5,
			}}
		>
			<p>{list.title}</p>
			<TaskListCard card={list.cardItems} />
		</div>
	);
}
