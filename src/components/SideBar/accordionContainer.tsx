import React, { useState } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';
import './index.scss';


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
		<div>
			<Accordion>
				<Accordion.Title
					active={true}
					index={0}
					onClick={handleClick}
				>
					{headline}
					<Icon name={isDroppedDown? 'angle down' : 'angle left'} />
				</Accordion.Title>
				<Accordion.Content active={isDroppedDown}>
					{wrappedContent()}
				</Accordion.Content>
			</Accordion>
		</div>
	)
}

export default AccordionContainer;