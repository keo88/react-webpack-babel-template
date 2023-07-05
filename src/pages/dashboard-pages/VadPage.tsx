import React, { useState } from 'react';
import Branch from 'features/ui/atoms/Branch';
import VoiceActivityDetector from 'features/record/components/molecules/VoiceActivityDetector';

function VadPage() {
  const [isShowVAD, setIsShowVAD] = useState(false);

  const displayVAD = () => {
    setIsShowVAD(true);
  };

  return (
    <div className='flex flex-col flex-1 justify-center items-center'>
      <h1 className='text-3xl font-light'>Start VAD</h1>
      <button
        type='submit'
        onClick={displayVAD}
        className='py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700'
      >
        Start
      </button>
      <Branch condition={isShowVAD}>
        <VoiceActivityDetector />
        <p> </p>
      </Branch>
    </div>
  );
}

export default VadPage;
