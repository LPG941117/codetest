import React, { useState } from 'react';
import './index.scss';
import { FiChevronDown, FiChevronLeft } from "react-icons/fi";

/**
 * @description HOC: to share common functionalities that related to shopping carts,
 * @param {Array<IDelayedRoute>} delayedRoutes wrapped component
 * @param {IWeather} weather order type of product, if it is undefined, orderType should be passed into function addToShoppingCart directly
 */

interface AccordionContainerProps {
	headline?: string;
	wrappedContent?: any;
}

const AccordionContainer: React.FC<AccordionContainerProps> = props => {
	const { headline, wrappedContent } = props;
	const [isDroppedDown, setIsDroppedDown] = useState(true);

	const handleClick = () => {
		setIsDroppedDown(!isDroppedDown);
	}

	return (
		<div className='accordionContainer'>
			<div className='headline' onClick={handleClick}>
				<h3>{headline}</h3>
				{isDroppedDown? <FiChevronDown /> : <FiChevronLeft />}
			</div>
			{wrappedContent()}
		</div>
	)
}

export default AccordionContainer;