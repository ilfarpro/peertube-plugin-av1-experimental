async function register ({
  transcodingManager
}) {
  transcodingManager.addVODProfile('libsvtav1', 'SVT-AV1 CRF23 Preset 7', () => ({
    inputOptions: [],
    outputOptions: ['-pix_fmt yuv420p10le', '-preset', '7', '-crf', '23']
  }));

  transcodingManager.addVODEncoderPriority('video', 'libsvtav1', 1000);

  transcodingManager.addVODProfile('libopus', 'SVT-AV1 CRF23 Preset 7', () => ({
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
