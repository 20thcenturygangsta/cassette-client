import { AudioRecorder } from 'react-audio-voice-recorder';

import { TypeStyle } from './style';
import TapeSvg, { TapeSvgProps } from './tape';

interface TapeProps extends TapeSvgProps {
  hasAudio?: boolean;
}

const Tape = ({ hasAudio, title, date, sec, width }: TapeProps) => {
  const addAudioElement = (blob: any) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement('audio');
    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);
  };

  return (
    <TypeStyle>
      <TapeSvg title={title} date={date} sec={sec} width={width} />
      {hasAudio && <AudioRecorder onRecordingComplete={addAudioElement} />}
    </TypeStyle>
  );
};

export default Tape;
