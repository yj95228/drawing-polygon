import React, { useState, Dispatch, SetStateAction } from 'react';
import Modal from 'components/Modal';
import Button from 'components/Button';

interface Props {
  onModalClick: Dispatch<SetStateAction<boolean>>;
}
export default function SearchModal({ onModalClick }: Props) {
  const [inputs, setInputs] = useState({
    lng: '',
    lat: '',
    lnglat: '',
    latlng: '',
  });
  const { lng, lat, lnglat, latlng } = inputs;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    if (name === 'lng' || name === 'lat') {
      setInputs({
        ...inputs,
        lnglat: '',
        latlng: '',
        [name]: value,
      });
    } else {
      setInputs({
        lng: '',
        lat: '',
        lnglat: '',
        latlng: '',
        [name]: value,
      });
    }
    console.log(inputs);
  };
  const onClick = () => console.log('asdf');
  return (
    <Modal onModalClick={onModalClick}>
      <h1>좌표값으로 검색하기</h1>
      <p>위도(lat)</p>
      <input
        name='lat'
        placeholder='ex) 37.5666103'
        onChange={onChange}
        value={lat}
      />
      <p>경도(lng)</p>
      <input
        name='lng'
        placeholder='ex) 126.9783882'
        onChange={onChange}
        value={lng}
      />
      <p>lat, lng</p>
      <input
        name='lnglat'
        placeholder='ex) 37.5666103, 126.9783882'
        onChange={onChange}
        value={lnglat}
      />
      <p>lng, lat</p>
      <input
        name='latlng'
        placeholder='ex) 126.9783882, 37.5666103'
        onChange={onChange}
        value={latlng}
      />
      <Button onClick={onClick} text='검색' submit />
    </Modal>
  );
}
