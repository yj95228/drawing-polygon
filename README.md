# Polygon Tool

## 방법
- 직접 그리기 **(지도 → 폴리곤)**
  - 지도 위에 마우스 클릭으로 직접 Marker를 찍으면 폴리곤 값을 WKT 형태로 얻을 수 있습니다.

- 값 입력하여 그리기 **(폴리곤 → 지도)**
  - WKT : GeoPolygon 좌표값들을 WKT(경도, 위도) 형태로 입력하면 숫자 부분만 읽어서 comma(,) 로 구분하여 위경도 값을 지도 상에 그려줍니다.
  - JSON : GeoJSON을 입력하면 JSON을 파싱하여 coordinates의 위경도 값을 지도 상에 그려줍니다.

## 테스트
- 지도 → 폴리곤
![image](https://user-images.githubusercontent.com/30275955/164215022-7c9dab13-b7d0-4dc3-af6f-8fb9c62b43d2.png)
- 폴리곤 → 지도
![image](https://user-images.githubusercontent.com/30275955/164896267-ac414b93-4b0e-4211-a8e8-8b65251c4f35.png)

## 추가 예정 기능
- 다크모드
- 지도 → 폴리곤 페이지
  - 폴리곤 닫는 기능
  - 초기화 버튼
  - textInput 선택 시 복사 기능
- 폴리곤 → 지도 페이지
  - WKT / JSON 옵션 선택 없이 감지하여 변환
  - 형식에 대한 설명 툴팁
  - input값 유효성 검사
