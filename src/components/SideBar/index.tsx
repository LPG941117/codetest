import React, { useState } from 'react';
import { IDelayedRoute } from '@/interfaces/delayRoute';
import { IWeather } from '@/interfaces/weather';
import { headlines } from '@/constants/headlines';
import AccordionContainer from './accordionContainer';
import {
	Grid,
	Header,
	Icon,
	Image,
	Menu,
	Segment,
	Sidebar,
  } from 'semantic-ui-react';


/**
 * HOC: to share common functionalities that related to shopping carts,
 * Modes: 1. Single Mdde: only add a single product to the shopping cart at a time, orderType must be passed as a prop of withShoppingCarts;
 *        2. Multiple Mode: add more than two products to the shopping cart at a time, each orderType should be passed as a param of addToShoppingCart;
 *        so, orderType can be used to deduce which mode is working.
 * @param {Array<IDelayedRoute>} delayedRoutes wrapped component
 * @param {IWeather} weather order type of product, if it is undefined, orderType should be passed into function addToShoppingCart directly
 */

interface SideBarProps {
	delayedRoutes?: Array<IDelayedRoute>;
	weather?: IWeather;
	rumps?: string;
}

const SideBar: React.FC<SideBarProps> = ({
	delayedRoutes,
	weather,
	rumps
}) => {
	const [visible, setVisible] = useState(true);

	return (
		<Grid>
			<Grid.Column>
				<Sidebar.Pushable as={Segment}>
					<Sidebar
						as={Menu}
						animation='overlay'
						icon='labeled'
						direction='right'
						inverted
						onHide={() => setVisible(false)}
						vertical
						visible={visible}
						width='thin'
					>
						{weather && <Menu.Item as='a'>
							<Icon name='home' />
							weather
						</Menu.Item>}
						{delayedRoutes && <Menu.Item as='a'>
							<Icon name='gamepad' />
							<AccordionContainer headline={headlines.delayedRoutes}/>
						</Menu.Item>}
						{rumps && <Menu.Item as='a'>
							<Icon name='camera' />
							rumps
						</Menu.Item>}
					</Sidebar>
		
					<Sidebar.Pusher dimmed={visible}>
						<Segment basic>
							<Header as='h3'>Application Content</Header>
							<Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
						</Segment>
					</Sidebar.Pusher>
				</Sidebar.Pushable>
			</Grid.Column>
		</Grid>
	)
}

export default SideBar;