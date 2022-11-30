import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import Modal from 'components/Modal';
import Button from 'components/Button';
import useStore from 'store/click';

interface Props {
  onModalClick: Dispatch<SetStateAction<boolean>>;
}
export default function SearchModal({ onModalClick }: Props) {
  const [inputs, setInputs] = useState({
    lat: '',
    lng: '',
    latlng: '',
    lnglat: '',
  });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    if (name === 'lng' || name === 'lat') {
      setInputs({
        ...inputs,
        latlng: '',
        lnglat: '',
        [name]: value,
      });
    } else {
      setInputs({
        lat: '',
        lng: '',
        latlng: '',
        lnglat: '',
        [name]: value,
      });
    }
  };
  const { searchCoordinates } = useStore((state) => state);
  const onClick = () => {
    searchCoordinates(inputs);
    onModalClick(false);
  };
  useEffect(() => {
    const escKeyModalClose = (e: { keyCode: number }) => {
      if (e.keyCode === 27) {
        onModalClick(false);
      } else if (e.keyCode === 13) {
        onClick();
      }
    };
    window.addEventListener('keydown', escKeyModalClose);
    return () => window.removeEventListener('keydown', escKeyModalClose);
  }, [inputs]);
  return (
    <Modal onModalClick={onModalClick}>
      <h1>좌표값으로 이동하기</h1>
      <p>위도(lat)</p>
      <input
        name='lat'
        placeholder='ex) 37.5666103'
        onChange={onChange}
        value={inputs.lat}
      />
      <p>경도(lng)</p>
      <input
        name='lng'
        placeholder='ex) 126.9783882'
        onChange={onChange}
        value={inputs.lng}
      />
      <p>lat, lng</p>
      <input
        name='latlng'
        placeholder='ex) 37.5666103, 126.9783882'
        onChange={onChange}
        value={inputs.latlng}
      />
      <p>lng, lat</p>
      <input
        name='lnglat'
        placeholder='ex) 126.9783882, 37.5666103'
        onChange={onChange}
        value={inputs.lnglat}
      />
      <Button onClick={onClick} text='이동' submit />
    </Modal>
  );
}
