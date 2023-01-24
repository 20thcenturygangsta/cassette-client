import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useResponsUserStore } from 'store';
import mainInstance from 'utils/api/main';
import { setAuthToken } from 'utils/storage/authCookie';

const Bridge = () => {
  const router = useRouter();
  const { code } = router.query;
  const { setResponsUser } = useResponsUserStore();

  useEffect(() => {
    if (code) {
      mainInstance.KakaoSocialLogin(code as string).then((data) => {
        setAuthToken('accessToken', data.result.jwtInformation.accessToken),
          data.result.tapes.length === 0
            ? router.push('/create-tape')
            : router.push('/create-tape-completed'),
          setResponsUser(
            data.result.tapes[0]['tapeLink'],
            data.result.tapes[0]['tapeId'],
          );
      });
    }
  }, [code, router, setResponsUser]);

  return <div>로딩중...입니다...</div>;
};

export default Bridge;
