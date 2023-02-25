import { GuestTrack } from 'styles/create-tape-completed';

import { EmptyTapeZone, TapeName } from './style';

interface EmptyTapeProps {
  emptyNum: number;
  MaxNum: number;
  isShown: boolean;
}

const EmptyTape = ({ emptyNum, MaxNum, isShown }: EmptyTapeProps) => {
  const getEmptyTape = (emptyNum: number, MaxNum: number) => {
    const arr = [];
    for (let i = 0; i < MaxNum - emptyNum; i++) {
      arr.push(
        <GuestTrack isShown={isShown}>
          <EmptyTapeZone></EmptyTapeZone>
          <TapeName>
            Tape{' '}
            {emptyNum + i + 1 < 10
              ? `0${emptyNum + i + 1}`
              : `${emptyNum + i + 1}`}
          </TapeName>
        </GuestTrack>,
      );
    }
    return arr;
  };

  return <>{getEmptyTape(emptyNum, MaxNum)}</>;
};

export default EmptyTape;
