import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../Constants/Constants';
import Knight from './Knight';
import Square from './Square';

const RenderSquare = ({ i, knightPosition, setLocation }) => {
	const x = i % 8;
	const y = Math.floor(i / 8);
	const black = (x + y) % 2 === 1;
	const [knightX, knightY] = knightPosition;
	const isKnightHere = knightX === x && knightY === y;
	const piece = isKnightHere ? <Knight /> : <></>;

	const [{ isOver }, drop] = useDrop(
		() => ({
			accept: ItemTypes.KNIGHT,
			drop: () => setLocation([x, y]),
			collect: (monitor) => ({
				isOver: !!monitor.isOver(),
			}),
		}),
		[x, y]
	);

	// const handleSquareOnClick = () => {
	// 	setLocation([x, y]);
	// };

	return (
		<div
			ref={drop}
			key={i}
			style={{ width: '12.5%', height: '12.5%' }}
			// onClick={handleSquareOnClick}
		>
			<Square black={black}>{piece}</Square>
		</div>
	);
};

export default RenderSquare;
