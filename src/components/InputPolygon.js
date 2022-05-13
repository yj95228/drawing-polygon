import React, { useState } from 'react';
import styles from './InputPolygon.module.css';

function InputPolygon(props) {
	const [polygon, setPolygon] = useState('');
	const [option, setOption] = useState('WKT');
	const selectWKT = () => {
		setPolygon('');
		setOption('WKT');
		props.propFunction('WKT', polygon);
	};
	const selectJSON = () => {
		setPolygon('');
		setOption('JSON');
		props.propFunction('JSON', polygon);
	};
	const changePolygon = (event) => {
		setPolygon(event.target.value);
	};
	const keyDownPolygon = (event) => {
		changePolygon(event);
		if (event.key === 'Enter') {
			submitPolygon(event);
		}
	};
	const drawingPolygon = () => props.propFunction(option, polygon);
	const submitPolygon = (event) => {
		event.preventDefault();
		drawingPolygon();
	};
	const resetPolygon = () => {
		setPolygon('');
		props.propFunction(
			option,
			option === 'WKT' ? ',' : '{"coordinates":[[[]]]}'
		);
	};
	return (
		<>
			<div className={styles.options}>
				<span
					className={
						option === 'WKT'
							? `${styles.target} ${styles.option}`
							: styles.option
					}
					onClick={selectWKT}
				>
					WKT
				</span>
				<span style={{ margin: '0 10px 0 10px' }}>
					<b> | </b>
				</span>
				<span
					className={
						option === 'JSON'
							? `${styles.target} ${styles.option}`
							: styles.option
					}
					onClick={selectJSON}
				>
					JSON
				</span>
			</div>
			<div onSubmit={submitPolygon} className={styles.container}>
				{option === 'WKT' ? (
					<textarea
						className={styles.input}
						onChange={changePolygon}
						onKeyDown={keyDownPolygon}
						value={polygon}
						placeholder='polygon을 WKT 형식으로 작성해주세요&#13;&#10;.&#13;&#10;
          ex) POLYGON((126.88629117743575 37.509014447622896, 126.89022728765188 37.50573926721649, 126.89309905739181 37.50721530335715, 126.89013312271457 37.511438814295325, 126.88629117743575 37.509014447622896))'
					/>
				) : (
					<textarea
						className={styles.input}
						onChange={changePolygon}
						onKeyDown={keyDownPolygon}
						value={polygon}
						placeholder='polygon을 JSON 형식으로 작성해주세요&#13;&#10;.&#13;&#10;
          ex) {"coordinates": [[[127.021057,37.503455],[127.028214,37.488473],[127.03507,37.490567],[127.02926,37.502553],[127.028342,37.502257],[127.027602,37.502683],[127.026443,37.505066],[127.021057,37.503455]]],"type": "Polygon"}'
					/>
				)}
				<div className={styles.buttons}>
					<input
						type='submit'
						value='그리기'
						onClick={drawingPolygon}
						className={`${styles.button} ${styles.submit}`}
					/>
					<input
						type='reset'
						value='초기화'
						className={styles.button}
						onClick={resetPolygon}
					/>
				</div>
			</div>
		</>
	);
}

export default InputPolygon;
