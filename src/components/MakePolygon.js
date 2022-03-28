import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './MakePolygon.module.css';
import MakeNaverMap from './MakeNaverMap';

export default function MakePolygon() {
  const [polygon, setPolygon] = useState('');
  const getPolygon = (polygon) => setPolygon(polygon)
  // const getPolygon = useEffect(
  //   (polygon) => {
  //     setPolygon(polygon)
  //     // setResult(`POLYGON((${polygon.slice(2)}))`)
  //   }, [polygon, result]
  // )
  // `POLYGON((${polygon.slice(2)},${polygon.split(',')[1]}))`
  // const closePolygon = () => {
  //   console.log(polygon)
  // }
  // const resetPolygon = () => getPolygon('')
  return (
    <div className={styles.container}>
			<Link to="/" className={styles.menu}>🔄 Drawing</Link>
			<h1 className={styles.h1}>Making Polygon</h1>
      <hr className={styles.hr} />
      <div className={styles.textContainer}>
        <textarea disabled className={styles.result} value={`POLYGON((${polygon.slice(2)}))`} />
        {/* <div className={styles.buttons}>
          <input
            type="submit"
            value="완료"
            onClick={closePolygon}
            className={`${styles.button} ${styles.complete}`}
          />
          <input
            type="reset"
            value="초기화"
            className={styles.button}
            onClick={resetPolygon}
          />
        </div> */}
      </div>
      <MakeNaverMap propFunction={getPolygon} />
		</div>
  )
}