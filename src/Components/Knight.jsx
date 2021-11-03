import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../Constants/Constants';

const Knight = () => {
	const [{ isDragging }, drag] = useDrag(() => ({
		type: ItemTypes.KNIGHT,
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
		}),
	}));
	return (
		<div
			ref={drag}
			style={{
				opacity: isDragging ? 0.5 : 1,
				fontWeight: 'bold',
				cursor: 'move',
				textAlign: 'center',
			}}
		>
			Knight
		</div>
	);
};

export default Knight;
