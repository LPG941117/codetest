import "./index.scss";
import React from "react";
import { PieChart, Pie, Cell } from "recharts";
/**
 * @description A pure component to render the ramp chart
 */

export default function RampChart() {
	// temp mock ramp data
	const data = [
		{ name: "Group A", value: 400 },
		{ name: "Group B", value: 300 },
		{ name: "Group C", value: 300 },
		{ name: "Group D", value: 200 }
	];
	
	const COLORS = ['#00B8AA', '#45DAD2', '#A7E5E0', '#ffffff'];
	
	const RADIAN = Math.PI / 180;
	const renderCustomizedLabel = ({
		cx,
		cy,
		midAngle,
		innerRadius,
		outerRadius,
		percent,
		}: any) => {
			const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
			const x = cx + 1.3 * radius * Math.cos(-midAngle * RADIAN);
			const y = cy + 1.3 * radius * Math.sin(-midAngle * RADIAN);
		
		return (
			<text
				x={x}
				y={y}
				fill="#3EDBD2"
				textAnchor={x > cx ? "start" : "end"}
				dominantBaseline="central"
			>
				{`${(percent * 100).toFixed(0)}%`}
			</text>
		);
	};

	return (
		<div className='pieChart'>
			<PieChart width={240} height={240}>
				<Pie
					data={data}
					cx={120}
					cy={120}
					labelLine={false}
					label={renderCustomizedLabel}
					innerRadius={55}
					outerRadius={78}
					dataKey="value"
				>
					{data.map((entry, index) => (
					<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
					))}
				</Pie>
			</PieChart>
			<div className='algorithm' >
				Ramp algorithm blablabla
			</div>
		</div>
	);
}