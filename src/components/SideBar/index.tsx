import React, { useState } from 'react';
import { IDelayedRoute } from '@/interfaces/delayRoute';
import { IWeather } from '@/interfaces/weather';
import classNames from 'classnames';
import { headlines } from '@/constants/headlines';
import AccordionContainer from './accordionContainer';
import { FiChevronsRight, FiChevronsLeft } from "react-icons/fi";
import { WiDayCloudy } from "react-icons/wi";
import { CgSun } from "react-icons/cg";
import './index.scss';


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


	const renderWeather = () => {
		return (
			<div>
				<div className='weatherContainer'>
					<div className='detailContainer'>
						<div className='city'>{weather?.city}</div>
						<div className='temperature'>{weather?.temperature}&deg;</div>
						<div className='date'><span>{weather?.date}</span> <span>{weather?.time}</span></div>
					</div>
					<WiDayCloudy className='wiDayCloudy'/>
				</div>
				<table className='weatherTable'>
					<tr>
						<td>{headlines.humidity}</td>
						<td>{weather?.humidity}</td>
					</tr>
					<tr>
						<td>{headlines.chanceOfRain}</td>
						<td>{weather?.chanceOfRain}</td>
					</tr>
					<tr>
						<td>{headlines.wind}</td>
						<td>{weather?.wind} <span>kmh</span></td>
					</tr>
					<tr>
						<td>{headlines.tomottow}</td>
						<td>
							{weather?.tomorrow}&deg;{'  '} 
							<CgSun />
						</td>
					</tr>
				</table>
			</div>
		)
	}

	const renderDelayedRouters = () => {
		const content = delayedRoutes?.map((delayedRoute, index) => {
			return(
				<div key={index}>
					<div>
						<div>
							
							{delayedRoute.routes[0]}
						</div>
						<div>
							{delayedRoute.distance}
						</div>
					</div>
					<div>
						<div>
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
		})

		return(
			<div>
				{content}
			</div>
		)
	}
		
	return (
		<div>
			<button onClick={()=> {setVisible(!visible)}} className='button' >
				{!visible? 'show sidebar' : 'close sidebar'}
			</button>
			<div className={classNames('sidebar', 
				{
					'visibleSidebar': visible,
					'invisibleSidebar': !visible
				}
			)} >
				<div className='fiChevrons' onClick = {()=> {setVisible(!visible)}}>
					{visible? <FiChevronsRight /> : <FiChevronsLeft />}
				</div>
				{weather && renderWeather()}
				{delayedRoutes && <AccordionContainer 
					headline={headlines.delayedRoutes}
					wrappedContent={renderDelayedRouters}
				/>}
			</div>
		</div>
	)
}

export default SideBar;