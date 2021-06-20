import React, { useState } from 'react';
import { IDelayedRoute } from '@/interfaces/delayRoute';
import { IWeather } from '@/interfaces/weather';
import classNames from 'classnames';
import { headlines } from '@/constants/headlines';
import { EDelayType } from '@/constants/delayRoutes';
import AccordionContainer from './accordionContainer';
import RampChart from './rampChart';
import { FiChevronsRight, FiChevronsLeft } from "react-icons/fi";
import { WiDayCloudy } from "react-icons/wi";
import { HiArrowNarrowDown } from "react-icons/hi";
import { BsFillCircleFill } from "react-icons/bs";
import { CgSun } from "react-icons/cg";
import './index.scss';


/**
 * @description A sidebar that used for the showing weather information, delayed routes and ramp content
 * @param {Array<IDelayedRoute>} delayedRoutes an array of delayed routes info
 * @param {IWeather} weather information of weather today
 */

interface SideBarProps {
	delayedRoutes?: Array<IDelayedRoute>;
	weather?: IWeather;
}

const SideBar: React.FC<SideBarProps> = ({
	delayedRoutes,
	weather,
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
				<div key={index} className='delayedRoute'>
					<div className='firstRow'>
						<div className='leftElement'>
							<BsFillCircleFill color={index > 1 ? EDelayType.MEDIUM : EDelayType.BUSY}/>
							<div>{delayedRoute.routes[0]}</div>
						</div>
						<div className='rightElement'>
							{delayedRoute.distance}km
						</div>
					</div>
					<div className='secondRow'>
						<div className='leftElement'>
							<HiArrowNarrowDown className='arrowDown' />
							<div className='routeSmall'>
								<div>{delayedRoute.routes[1]}</div>
								<div>{delayedRoute.routes[2]}</div>
							</div>
						</div>
						<div className='rightElement'>
							{delayedRoute.time}<span>min</span>
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
				{<AccordionContainer 
					headline={headlines.rampChart}
					wrappedContent={RampChart}
				/>}
			</div>
		</div>
	)
}

export default SideBar;