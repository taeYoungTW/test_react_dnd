import React, { useState } from 'react';

import RenderSquare from './RenderSquare';

const Board = () => {
	const [location, setLocation] = useState([0, 0]);
	const renderCounts = Array.from({ length: 64 }, (x, i) => i);
	return (
		<div
			style={{
				width: '100%',
				height: '100%',
				display: 'flex',
				flexWrap: 'wrap',
			}}
		>
			{renderCounts.map((i) => (
				<RenderSquare
					i={i}
					knightPosition={location}
					key={`renderSquare_${i}`}
					setLocation={setLocation}
				/>
			))}
		</div>
	);
};

export default Board;
