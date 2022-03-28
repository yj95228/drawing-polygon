import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './DrawContainer.module.css';
import DrawNaverMap from './DrawNaverMap.js';
import InputPolygon from './InputPolygon.js';

function DrawContainer() {
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
		<div className={styles.container}>
			<Link to="make-polygon" className={styles.menu}>🔄 Making</Link>
			<h1 className={styles.h1}>Drawing Polygon</h1>
			<hr className={styles.hr} />
			<InputPolygon propFunction={getPolygon} />
			<DrawNaverMap polygon={polygon} option={option} />
			<div className={'map'}></div>
		</div>
	);
}

export default DrawContainer;
