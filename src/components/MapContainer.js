import React, { useState } from 'react';
import styles from './MapContainer.module.css';
import NaverApiMap from './NaverAPIMap.js';
import PolygonInput from './PolygonInput.js';

function MapContainer() {
	const [polygon, setPolygon] = useState([]);
	const [option, setOption] = useState('WKT');
	// eslint-disable-next-line no-useless-escape
	const regex = /[^0-9\.\s,]/g;
	const getPolygon = (option, polygon) => {
		setOption(option);
		if (option === 'WKT') {
			setPolygon(polygon.replace(regex, '').split(','));
		} else {
			if (polygon) setPolygon(...JSON.parse(polygon).coordinates);
		}
	};
	return (
		<div className={('outline', styles.outline)}>
			<div className={('container', styles.container)}>
				<h1 className={styles.h1}>Drawing Polygon</h1>
				<hr className={styles.hr} />
				<PolygonInput propFunction={getPolygon} />
				<NaverApiMap polygon={polygon} option={option} />
				<div className={'map'}></div>
			</div>
		</div>
	);
}

export default MapContainer;
