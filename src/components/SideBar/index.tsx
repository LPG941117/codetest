import React, { useState } from 'react';
import styled from 'styled-components';
import { IDelayedRoute } from '@/interfaces/delayRoute';
import { IWeather } from '@/interfaces/weather';
import { headlines } from '@/constants/headlines';
import AccordionContainer from './accordionContainer';
import './index.scss';
import {
	Icon,
	Menu,
	Segment,
	Sidebar,
	Table,
	Button,
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

	const SidebarNav = styled.nav`
	background: #15171c;
	width: 250px;
	height: 100vh;
	display: flex;
	justify-content: center;
	position: fixed;
	top: 0;
	left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
	transition: 350ms;
	z-index: 10;
	`;

	const renderWeather = () => {
		return (
			<div>
				<div>
					<div>
						<h3>{weather?.city}</h3>
						<h2>{weather?.temperature}&deg;</h2>
						<h3><span>{weather?.date}</span><span>{weather?.time}</span></h3>
					</div>
					<Icon name='home'/>
				</div>
				{/* <Table>
					<Table.Body>
						<Table.Row>
							<Table.Cell>{headlines.humidity}</Table.Cell>
							<Table.Cell>{weather?.humidity}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>{headlines.chanceOfRain}</Table.Cell>
							<Table.Cell>{weather?.chanceOfRain}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>{headlines.wind}</Table.Cell>
							<Table.Cell>{weather?.wind}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>{headlines.tomottow}</Table.Cell>
							<Table.Cell>
								{weather?.tomorrow}
								<Icon name='sun'/>
							</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table> */}
			</div>
		)
	}

	const renderDelayedRouters = () => {
		const content = delayedRoutes?.map((delayedRoute, index) => {
			return(
				<div key={index}>
					<div>
						<div>
							<Icon name='circle' />
							{delayedRoute.routes[0]}
						</div>
						<div>
							{delayedRoute.distance}
						</div>
					</div>
					<div>
						<div>
							<Icon name='arrow down' />
							<div>
								{delayedRoute.routes[1]}
								{delayedRoute.routes[2]}
							</div>
						</div>
						<div>
							{delayedRoute.time + 'min'}
						</div>
					</div>
				</div>
			)
		}
		)

		return(
			<div>
				{content}
			</div>
		)
	}
		
	return (
		<div>
			{/* <Sidebar.Pushable as={Segment} >
				<Sidebar
					as={Menu}
					animation='overlay'
					icon='labeled'
					direction='right'
					onHide={() => setVisible(false)}
					vertical
					visible={visible}
				>
					<Icon name={visible ? 'angle double left' : 'angle double right'}/>
					{weather && renderWeather()}
					{delayedRoutes && <AccordionContainer 
						headline={headlines.delayedRoutes}
						wrappedContent={renderDelayedRouters}
					/>}
					{rumps && <Menu.Item as='a'>
						<Icon name='camera' />
						rumps
					</Menu.Item>}
				</Sidebar>
	
				<Sidebar.Pusher dimmed={visible} className='content'>
						<Button onClick={() => setVisible(!visible)}>
							{visible ? 'close the sidebar' : 'open the sidebar'}
						</Button>
		
				</Sidebar.Pusher>
			</Sidebar.Pushable> */}
		</div>
	)
}

export default SideBar;