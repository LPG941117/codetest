import React from 'react';
import { DELAYED_ROUTES } from '@/constants/delayRoutes';
import { WEATHER } from '@/constants/weather';
import SideBar from '@/components/SideBar';

function App() {
	return (
	<div>
		<SideBar delayedRoutes={DELAYED_ROUTES} weather={WEATHER} />
	</div>
	);
}

export default App;
