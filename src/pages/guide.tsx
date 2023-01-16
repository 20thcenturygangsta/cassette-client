import Tape from 'components/tape';
import {
  CloseZone,
  Content,
  ContentZone,
  GuideButton,
  GuideContainer,
  Title,
} from 'styles/guide';

import Arrow from '../../public/assets/arrow.svg';
import Close from '../../public/assets/close.svg';
import Memo from '../../public/assets/memo.svg';

const guide = () => {
  return (
    <GuideContainer>
      <div>
        <CloseZone>
          <Close />
        </CloseZone>
        <Title>
          <Memo />
          <h1>Voice Tape 사용 가이드</h1>
        </Title>
        <ContentZone>
          <Content>
            <div>
              <Tape width="27px" title="" date="" sec="" height="25px" />
              <h2>Voice Tape는 어떤 서비스예요?</h2>
            </div>
            <p>
              Voice Tape 는 새해를 맞아 <br />
              고마웠던, 함께해서 즐거웠던, 친해지고 싶은 <br />
              사람에게 텍스트가 아닌 목소리로 <br />
              마음을 표현하는 서비스입니다!
            </p>
          </Content>
          <Content>
            <div>
              <Tape width="27px" title="" date="" sec="" height="25px" />
              <h2>Voice Tape는 어떻게 이용해요?</h2>
            </div>
            <ol>
              <li>
                내 테이프를 만들고 친구에게 녹음을 요청하는 <br /> 테이프 링크를
                공유해요.
              </li>
              <li>총 12명의 친구에게 녹음 테이프를 받을 수 있어요. </li>
              <li>
                녹음한 친구가 3명이 되면 테이프를 들을 수 있고 <br />
                개별 파일을 다운로드할 수 있어요.
              </li>
              <li>
                12개의 테이프가 모이면 모든 친구의 목소리가 <br /> 들어간 합본
                파일을 다운로드할 수 있어요.
              </li>
            </ol>
          </Content>
          <Content>
            <div>
              <Tape width="27px" title="" date="" sec="" height="25px" />
              <h2>Voice Tape를 매일 듣고 싶으신가요?</h2>
            </div>
            <p>
              Voice Tape 앱을 다운로드하면 <br /> 친구들의 목소리를 매일 쉽게
              들을 수 있어요!
            </p>
          </Content>
          <GuideButton variant="main">
            <div>
              Voice Tape 앱 다운로드하러 가기 <Arrow />
            </div>
          </GuideButton>
        </ContentZone>
      </div>
    </GuideContainer>
  );
};

export default guide;
