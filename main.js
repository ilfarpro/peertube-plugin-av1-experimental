async function register ({
  transcodingManager
}) {
  transcodingManager.addVODProfile('libsvtav1', 'SVT-AV1 CRF23 Slow', () => ({
    inputOptions: [],
    outputOptions: ['-preset', '7', '-crf', '23', '-svtav1-params', 'fast-decode=1:tune=0:film-grain=8']
  }));

  transcodingManager.addVODEncoderPriority('video', 'libsvtav1', 1000);

  transcodingManager.addVODProfile('libopus', 'SVT-AV1 CRF23 Slow', () => ({
    inputOptions: [],
    outputOptions: ['-b:a', '320k', '-af', 'loudnorm=I=-14:LRA=11:TP=-1']
  }));

  transcodingManager.addVODEncoderPriority('audio', 'libopus', 1000);
}

async function unregister () {
  transcodingManager.removeAllProfilesAndEncoderPriorities();
}

module.exports = {
  register,
  unregister
};
