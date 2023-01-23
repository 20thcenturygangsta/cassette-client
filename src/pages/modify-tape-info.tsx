import Button from 'components/button';
import Input from 'components/input';
import Tape from 'components/tape';
import Title from 'components/title';
import Link from 'next/link';
import { ChangeEvent, useEffect, useState } from 'react';
import { useUserStore } from 'store';
import subInstance from 'utils/api/sub';

import { Box, Info, InputBox } from '../styles/create-tape';

const MAX_LENGTH = {
  NICKNAME: 5,
  TITLE: 16,
};
const ModifyTapeInfo = () => {
  const [nickname, setNickname] = useState('');
  const [title, setTitle] = useState('');

  const { setUserData, userNickname, tapename } = useUserStore();

  useEffect(() => {
    subInstance.getUserTape().then((data) => console.log(data));
  }, []);

  const handleChangeNickname = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setNickname(target.value);
  };

  const handleChangeTitle = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setTitle(target.value);
  };

  return (
    <Box>
      <Box margin="0 0 24px 0">
        <Title name={userNickname} />
      </Box>
      <Box margin="0 0 44px 0">
        <Tape title="2023 한정판 테이프" date="21.01.01" sec="144" />
      </Box>
      <InputBox>
        <Input
          value={nickname}
          onChange={handleChangeNickname}
          label="카세트 주인장의 닉네임을 적어주세요."
          highlightWords={['닉네임']}
          placeholder={userNickname}
          maxLength={MAX_LENGTH.NICKNAME}
        />
      </InputBox>

      <InputBox>
        <Input
          value={title}
          onChange={handleChangeTitle}
          label="테이프의 제목을 적어주세요."
          highlightWords={['테이프의 제목']}
          placeholder={tapename}
          maxLength={MAX_LENGTH.TITLE}
        />
        <Info>
          친구들에게 어떤 얘기를 듣고싶나요?
          <br />
          ex&#41; 2023년 나의 새로운 도전을 응원해줘!
        </Info>
      </InputBox>
      <Link href="/modify-decorate-tape">
        <Button
          onClick={() => {
            setUserData(nickname, title);
          }}
          variant="main"
        >
          수정 완료
        </Button>
      </Link>
    </Box>
  );
};

export default ModifyTapeInfo;
