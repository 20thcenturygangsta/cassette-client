import styled from '@emotion/styled';
import { ChangeEvent, useEffect, useState } from 'react';
import { useStore } from 'store';
import theme from 'styles/theme';
import { Color } from 'types';

const Item = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const CircleStyle = styled.input<CircleProps>`
  z-index: 1;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: ${({ color }) => theme.colors[color]};

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  ${({ checked }) =>
    checked &&
    ` 
    &:checked {
      opacity: 1;
      cursor: default;

      &::after {
        content: url(assets/check.svg);;
        display: flex;
        padding: 10px      
      }
    }
  `}
`;

const ColorPlateStyle = styled.div`
  width: 100%;
  max-width: 327px;
  display: flex;
  gap: 16px;
  background-color: ${theme.colors.tertiary};
  flex-wrap: wrap;
  padding: 16px 22px;
  border-radius: 10px;
`;

interface CircleProps {
  color: Color;
}

const Circle = ({ color }: CircleProps) => {
  const [checkedColor, setCheckedColor] = useState<Color>('cassetteorange');
  const [isColorValue, setIsColorValue] = useState<boolean>(true);

  const { setTapeColor } = useStore();

  useEffect(() => {
    setIsColorValue(color === checkedColor);
  }, [checkedColor, color]);

  const handleColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setTapeColor(value as Color);
    setCheckedColor(value as Color);
  };

  return (
    <Item>
      <CircleStyle type="radio" name="color" color={color} value={color} checked={isColorValue} onChange={handleColorChange} />
    </Item>
  );
};

const ColorPlate = () => {
  return (
    <ColorPlateStyle>
      <Circle color="cassetteorange" />
      <Circle color="olive" />
      <Circle color="emerald" />
      <Circle color="deeppink" />
      <Circle color="purple" />
      <Circle color="tangerine" />
      <Circle color="ceruleanblue" />
      <Circle color="pink" />
      <Circle color="brown" />
      <Circle color="lightgreen" />
    </ColorPlateStyle>
  );
};

export default ColorPlate;
