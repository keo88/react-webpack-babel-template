import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import {
  utils,
  ReactRealTimeVADOptions,
  useMicVAD,
} from '@ricky0123/vad-react';

function UserSpeaking() {
  return <span style={{ color: 'green' }}>user is speaking</span>;
}

function UserNotSpeaking() {
  return <span style={{ color: 'red' }}>user is not speaking</span>;
}

function VoiceActivityDetector() {
  const [audioList, setAudioList] = useState<string[]>([]);

  const onSpeechEndCallBack = useCallback((audio: Float32Array) => {
    const wavBuffer = utils.encodeWAV(audio);
    const base64 = utils.arrayBufferToBase64(wavBuffer);
    const url = `data:audio/wav;base64,${base64}`;
    setAudioList((old) => [url, ...old]);
  }, []);

  const option = useRef<Partial<ReactRealTimeVADOptions>>({
    onSpeechEnd: onSpeechEndCallBack,
  });

  const { listening, userSpeaking, toggle } = useMicVAD(option.current);

  useEffect(() => {
    console.log('start');
    return () => {
      console.log('end');
    };
  }, []);

  return (
    <div>
      <h1>Demo of @ricky0123/vad-react</h1>
      <button type='submit' onClick={toggle}>
        Toggle VAD
      </button>
      {listening && <div>VAD is running</div>}
      {!listening && <div>VAD is NOT running</div>}
      {userSpeaking && <UserSpeaking />}
      {!userSpeaking && <UserNotSpeaking />}
      <ol id='playlist'>
        {audioList.map((audioURL) => (
          <li key={audioURL.substring(-10)}>
            <audio controls src={audioURL} />
          </li>
        ))}
      </ol>
    </div>
  );
}

export default memo(VoiceActivityDetector);
