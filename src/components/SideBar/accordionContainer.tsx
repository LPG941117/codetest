import React, { useState } from 'react';
import './index.scss';
import { FiChevronDown, FiChevronLeft } from "react-icons/fi";

/**
 * @description An interaction container that can hide the content
 * @param {string} headline used for the accordion container
 * @param {any} wrappedContent that will be rendered when the accordion container is dropped down
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
			{isDroppedDown && wrappedContent()}
		</div>
	)
}

export default AccordionContainer;