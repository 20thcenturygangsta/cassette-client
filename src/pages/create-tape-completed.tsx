import Button from 'components/button';
import Tape from 'components/tape';
import Title from 'components/title';
import { useEffect } from 'react';
import { useResponsUserStore, useUserStore } from 'store';
import theme from 'styles/theme';
import subInstance from 'utils/api/sub';

import { Box } from '../styles/create-tape';

const CreateTapeCompleted = () => {
  const { setResponsUser, userURL } = useResponsUserStore();
  const { userNickname, tapename, setUserData } = useUserStore();

  const GUEST_URL = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/guest/${userURL}/guest-entry`;

  useEffect(() => {
    subInstance.getUserTape().then((data) => {
      setUserData(data?.result[0]['name'], data?.result[0]['title']);
      setResponsUser(data?.result[0]['tapeLink']);
    });
  }, [setResponsUser, setUserData]);

  return (
    <div>
      <Box margin="0 0 24px 0">
        <Title name={userNickname} color={theme.colors.white} />
      </Box>
      <Box margin="0 0 44px 0">
        <Tape title={tapename} date="21.01.01" sec="144" />
      </Box>

      <Button variant="main" onClick={() => alert(`링크 복사 : ${GUEST_URL}`)}>
        친구들에게 목소리 남겨달라고 하기
      </Button>
    </div>
  );
};

export default CreateTapeCompleted;
