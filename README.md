# Polygon Tool

## 방법
- 직접 그리기 **(지도 → 폴리곤)**
  - 지도 위에 마우스 클릭으로 직접 Marker를 찍으면 폴리곤 값을 WKT 형태로 얻을 수 있습니다.

- 값 입력하여 그리기 **(폴리곤 → 지도)**
  - WKT : GeoPolygon 좌표값들을 WKT(경도, 위도) 형태로 입력하면 숫자 부분만 읽어서 comma(,) 로 구분하여 위경도 값을 지도 상에 그려줍니다.
  - JSON : GeoJSON을 입력하면 JSON을 파싱하여 coordinates의 위경도 값을 지도 상에 그려줍니다.

## 테스트
- 지도 → 폴리곤
![image](https://user-images.githubusercontent.com/30275955/172971572-e6bbf8ea-1680-476a-9a97-0b49e8e9731b.png)
- 폴리곤 → 지도
![image](https://user-images.githubusercontent.com/30275955/172971415-e6528e4e-047b-49cb-9433-9c8f98d46101.png)

## 추가 예정 기능
- 다크모드
- 타입스크립트 & 상태관리 라이브러리 적용
- 지도 → 폴리곤 페이지
  - geoJSON 형식 반환 기능 추가
- 폴리곤 → 지도 페이지
  - 형식에 대한 설명 툴팁
  - input값 유효성 검사
- 폴리곤 형식 변환 페이지
