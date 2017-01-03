import {AudioPlayer,AudioRecorder,AudioUtils} from 'react-native-audio';

export function playRecording (name){
  AudioPlayer.play(AudioUtils.DocumentDirectoryPath+'/'+name+'.aac');
}
