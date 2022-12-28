import styled from '@emotion/styled';
import { useStore } from 'store';
import theme from 'styles/theme';

import TapeSVG from '../../../public/assets/tape.svg';

interface TapeProps {
  text: string;
  date: string;
  sec: string;
}

const TypeStyle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 250px;

  p {
    position: absolute;
    font-family: 'Ycomputer-Regular';
    top: 19px;
    font-size: ${theme.fontSize.xs};
    font-weight: 400;
    line-height: 14px;
    text-align: center;
    margin: 0;
  }
`;

const Info = styled.div`
  position: relative;

  span {
    position: absolute;
    font-family: 'Ycomputer-Regular';
    font-weight: 400;
    font-style: normal;
    color: ${theme.colors.white};
    font-size: ${theme.fontSize.xxs};
    line-height: 7px;
  }

  span:first-of-type {
    left: 7.2%;
    right: 80.8%;
    top: 25.65%;
    bottom: 69.97%;
    padding-left: 18px;
  }

  span:last-of-type {
    left: 82.8%;
    right: 7.6%;
    top: 60.69%;
    bottom: 34.93%;
    padding-left: 195px;
  }
`;

const Tape = ({ text, date, sec }: TapeProps) => {
  const { tapeColor } = useStore();

  return (
    <TypeStyle>
      <p>{text}</p>
      <Info>
        <span>{date}</span>
        <span>{sec}&nbsp;sec</span>
      </Info>
      <TapeSVG fill={theme.colors[tapeColor]} />
    </TypeStyle>
  );
};

export default Tape;
