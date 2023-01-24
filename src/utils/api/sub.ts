import { Color } from 'types';
import { Cassette, Tape, TapeResponse } from 'types/serverResponse';

import instance from './core';

const getUserTape = () =>
  instance<TapeResponse<Cassette[]>, TapeResponse<Cassette[]>>({
    url: `/api/v1/tape`,
  });

const getGuestTape = (id: number) => instance({ url: `/api/v1/tape${id}` });

const createUserTape = (title: string, name: string, colorCode: Color) => {
  return instance<TapeResponse<Tape>, TapeResponse<Tape>>({
    method: 'post',
    url: `/api/v1/tape`,
    data: {
      colorCode,
      title,
      name,
    },
  });
};

const modifyUseTape = (
  id: number,
  colorCode: Color,
  title: string,
  name: string,
) => {
  return instance<TapeResponse<Tape>, TapeResponse<Tape>>({
    method: 'put',
    url: `/api/v1/tape/${id}`,
    data: {
      colorCode,
      title,
      name,
    },
  });
};

const downloadTape = (id: number) =>
  instance({ url: `/api/v1/tape/download/${id}` });

const getUserTrack = (id: number) => instance({ url: `/api/v1/track/${id}` });

const subInstance = {
  getUserTape,
  getGuestTape,
  createUserTape,
  modifyUseTape,
  downloadTape,
  getUserTrack,
};

export default subInstance;
