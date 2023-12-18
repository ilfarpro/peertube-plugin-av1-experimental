async function register ({
  transcodingManager
}) {
  transcodingManager.addVODProfile('libsvtav1', 'av1', () => ({
    inputOptions: [],
    outputOptions: ['-preset', '6', '-crf', '23', '-svtav1-params', 'fast-decode=1', '-svtav1-params', 'tune=0:film-grain=8']
  }));

  transcodingManager.addVODEncoderPriority('video', 'libsvtav1', 1000);

  transcodingManager.addVODProfile('libopus', 'av1', () => ({
    inputOptions: [],
    outputOptions: ['-b:a', '256k']
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
