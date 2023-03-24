import Kakao from '@icon/kakao.svg';
import Button from 'components/button';
import TapeSVG from 'components/tape/tape';
import FontFaceObserver from 'fontfaceobserver';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Container, Zone } from 'styles';

export default function Home() {
  const fontPretend = new FontFaceObserver('Pretendard-Regular');
  const contYcomputer = new FontFaceObserver('Ycomputer-Regular');

  const [font1Load, setFont1Load] = useState<boolean>(false);

  useEffect(() => {
    Promise.all([fontPretend.load(), contYcomputer.load()]).then(() => {
      setFont1Load(true);
    });

    const timer = setTimeout(() => {
      setFont1Load(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_REST_API}&redirect_uri=${process.env.NEXT_PUBLIC_CLIENT_URL}/kakao/bridge`;
  return (
    <>
      {font1Load ? (
        <Container>
          <Zone css={{ gridGap: '32px' }}>
            <div>
              <h1>2023 Vioce Tape</h1>
              <h2>테이프에 담은 내 마음</h2>
            </div>
            <TapeSVG
              title="2023 한정판 테이프"
              date="23.01.01"
              sec="144"
              color="cassette_orange"
            />
            <p>
              평소 전하지 못했던 마음을
              <br /> 목소리로 담아보세요 ♡
            </p>
          </Zone>
          <Zone css={{ gap: '16px', paddingTop: ' 106px' }}>
            <Link href={LOGIN_URL}>
              <Button variant="kakao">
                <Kakao />
                <span>카카오 로그인</span>
              </Button>
            </Link>
            <Link href={LOGIN_URL}>
              <Button variant="main">
                <span>내 테이프 만들기</span>
              </Button>
            </Link>
          </Zone>
        </Container>
      ) : null}
    </>
  );
}
