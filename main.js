async function register ({
  transcodingManager
}) {

  transcodingManager.addVODProfile('libsvtav1', 'SVT-AV1 CRF23 Preset 8', () => ({
    inputOptions: [],
    outputOptions: ['-pix_fmt yuv420p10le', '-preset', '8', '-crf', '23', '-svtav1-params', 'tune=0']
  }));

  transcodingManager.addVODEncoderPriority('video', 'libsvtav1', 1000);

  transcodingManager.addVODProfile('libopus', 'SVT-AV1 CRF23 Preset 8', () => ({
    inputOptions: [],
    outputOptions: ['-b:a', '320k', '-af', 'loudnorm=I=-14:LRA=11:TP=-1']
  }));
  
  transcodingManager.addVODProfile('libsvtav1', 'SVT-AV1 CRF23 Preset 7', () => ({
    inputOptions: [],
    outputOptions: ['-pix_fmt yuv420p10le', '-preset', '8', '-crf', '23', '-svtav1-params', 'tune=0']
  }));

  transcodingManager.addVODEncoderPriority('video', 'libsvtav1', 1000);

  transcodingManager.addVODProfile('libopus', 'SVT-AV1 CRF23 Preset 7', () => ({
    inputOptions: [],
    outputOptions: ['-b:a', '320k', '-af', 'loudnorm=I=-14:LRA=11:TP=-1']
  }));

  transcodingManager.addVODProfile('libsvtav1', 'SVT-AV1 CRF23 Preset 6', () => ({
    inputOptions: [],
    outputOptions: ['-pix_fmt yuv420p10le', '-preset', '8', '-crf', '23', '-svtav1-params', 'tune=0']
  }));

  transcodingManager.addVODEncoderPriority('video', 'libsvtav1', 1000);

  transcodingManager.addVODProfile('libopus', 'SVT-AV1 CRF23 Preset 6', () => ({
    inputOptions: [],
    outputOptions: ['-b:a', '320k', '-af', 'loudnorm=I=-14:LRA=11:TP=-1']
  }));

  transcodingManager.addVODProfile('libsvtav1', 'SVT-AV1 CRF23 Preset 5', () => ({
    inputOptions: [],
    outputOptions: ['-pix_fmt yuv420p10le', '-preset', '8', '-crf', '23', '-svtav1-params', 'tune=0']
  }));

  transcodingManager.addVODEncoderPriority('video', 'libsvtav1', 1000);

  transcodingManager.addVODProfile('libopus', 'SVT-AV1 CRF23 Preset 5', () => ({
    inputOptions: [],
    outputOptions: ['-b:a', '320k', '-af', 'loudnorm=I=-14:LRA=11:TP=-1']
  }));

  transcodingManager.addVODProfile('libsvtav1', 'SVT-AV1 CRF23 Preset 8 NoLoudNorm', () => ({
    inputOptions: [],
    outputOptions: ['-pix_fmt yuv420p10le', '-preset', '8', '-crf', '23', '-svtav1-params', 'tune=0']
  }));

  transcodingManager.addVODEncoderPriority('video', 'libsvtav1', 1000);

  transcodingManager.addVODProfile('libopus', 'SVT-AV1 CRF23 Preset 8 NoLoudNorm', () => ({
    inputOptions: [],
    outputOptions: ['-b:a', '320k']
  }));
  
  transcodingManager.addVODProfile('libsvtav1', 'SVT-AV1 CRF23 Preset 7 NoLoudNorm', () => ({
    inputOptions: [],
    outputOptions: ['-pix_fmt yuv420p10le', '-preset', '8', '-crf', '23', '-svtav1-params', 'tune=0']
  }));

  transcodingManager.addVODEncoderPriority('video', 'libsvtav1', 1000);

  transcodingManager.addVODProfile('libopus', 'SVT-AV1 CRF23 Preset 7 NoLoudNorm', () => ({
    inputOptions: [],
    outputOptions: ['-b:a', '320k']
  }));

  transcodingManager.addVODProfile('libsvtav1', 'SVT-AV1 CRF23 Preset 6 NoLoudNorm', () => ({
    inputOptions: [],
    outputOptions: ['-pix_fmt yuv420p10le', '-preset', '8', '-crf', '23', '-svtav1-params', 'tune=0']
  }));

  transcodingManager.addVODEncoderPriority('video', 'libsvtav1', 1000);

  transcodingManager.addVODProfile('libopus', 'SVT-AV1 CRF23 Preset 6 NoLoudNorm', () => ({
    inputOptions: [],
    outputOptions: ['-b:a', '320k']
  }));

  transcodingManager.addVODProfile('libsvtav1', 'SVT-AV1 CRF23 Preset 5 NoLoudNorm', () => ({
    inputOptions: [],
    outputOptions: ['-pix_fmt yuv420p10le', '-preset', '8', '-crf', '23', '-svtav1-params', 'tune=0']
  }));

  transcodingManager.addVODEncoderPriority('video', 'libsvtav1', 1000);

  transcodingManager.addVODProfile('libopus', 'SVT-AV1 CRF23 Preset 5 NoLoudNorm', () => ({
    inputOptions: [],
    outputOptions: ['-b:a', '320k']
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
