import Button from 'components/button';
import ColorPlate from 'components/colorPlate';
import Tape from 'components/tape';
import Link from 'next/link';
import { useColorStore, useUserStore } from 'store';
import { DecoContainer, DecoZone } from 'styles/decorate-tape';
import { Color } from 'types';

export interface decorateTapeProps {
  color: Color;
}

const DecorateTape = () => {
  const { tapeColor } = useColorStore();
  const { userNickname } = useUserStore();

  return (
    <DecoContainer color={tapeColor}>
      <DecoZone css={{ gap: '24px' }}>
        <h3>{userNickname}&apos;s Tape</h3>
        <Tape title="2023 한정판 테이프" date="21.01.01" sec="144" />
        <DecoZone css={{ gap: '136px' }}>
          <div>
            <p>
              테이프 <span>안쪽 색상</span>를 골라주세요!
            </p>
            <ColorPlate />
          </div>
          <Link href="create-tape-completed">
            <Button variant="main">꾸미기 완료</Button>
          </Link>
        </DecoZone>
      </DecoZone>
    </DecoContainer>
  );
};

export default DecorateTape;
