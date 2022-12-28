import Button from 'conponents/button';
import ColorPlate from 'conponents/colorPlate';
import Tape from 'conponents/tape';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>cassette</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>main page</h1>
      <Button variant="main">
        <div>내 테이프 만들기</div>
      </Button>
      <Button variant="kakao">
        <div>카카오계정으로 로그인하기</div>
      </Button>
      투명 버튼 - 닫기
      <Button variant="clear">
        <div>닫기</div>
      </Button>
      <Button variant="guest">
        <div>목소리 남겨주기</div>
      </Button>
      <ColorPlate />
      <Tape text="나의 새로운 응원을 도전해줘!" date="21.01.01" sec="144" />
    </div>
  );
}
