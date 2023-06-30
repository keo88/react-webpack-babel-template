import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import {
  utils,
  useMicVAD,
  ReactRealTimeVADOptions,
} from '@ricky0123/vad-react';
// import {MicVAD} from '@ricky0123/vad-web';

function UserSpeaking() {
  return <span style={{ color: 'green' }}>user is speaking</span>;
}

function UserNotSpeaking() {
  return <span style={{ color: 'red' }}>user is not speaking</span>;
}

function VoiceActivityDetector() {
  const [audioList, setAudioList] = useState<string[]>([]);

  // console.log('audioList', audioList.length);

  const onSpeechEndCallBack = useCallback((audio: Float32Array) => {
    console.log('onSpeechEndCallBack');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    const wavBuffer = utils.encodeWAV(audio);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    const base64 = utils.arrayBufferToBase64(wavBuffer);
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    const url = `data:audio/wav;base64,${base64}`;
    setAudioList((old) => [url, ...old]);
  }, []);

  const option = useRef<Partial<ReactRealTimeVADOptions>>({
    onSpeechEnd: onSpeechEndCallBack,
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
  const { listening, userSpeaking, toggle } = useMicVAD(option.current);

  useEffect(() => {
    console.log('start');
    return () => console.log('end');
  }, []);

  return (
    <div>
      <h1>Demo of @ricky0123/vad-react</h1>
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,react/button-has-type */}
      <button onClick={toggle}>Toggle VAD</button>
      {listening && <div>VAD is running</div>}
      {!listening && <div>VAD is NOT running</div>}
      {userSpeaking && <UserSpeaking />}
      {!userSpeaking && <UserNotSpeaking />}
      <ol id='playlist'>
        {audioList.map((audioURL) => (
          <li key={audioURL.substring(-10)}>
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <audio controls src={audioURL} />
          </li>
        ))}
      </ol>
    </div>
  );
}

export default memo(VoiceActivityDetector);
