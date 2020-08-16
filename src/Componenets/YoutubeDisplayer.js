import React from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';
import {View} from 'react-native';

export const YoutubeDisplayer = ({playerRef, YoutubeVideoID, playing}) => {
  return (
    <View>
      <YoutubePlayer
        ref={playerRef}
        height={300}
        width={400}
        videoId={YoutubeVideoID}
        play={playing}
        onChangeState={(event) => console.log(event)}
        onReady={() => console.log('ready')}
        onError={(e) => console.log(e)}
        onPlaybackQualityChange={(q) => console.log(q)}
        volume={50}
        playbackRate={1}
        initialPlayerParams={{
          cc_lang_pref: 'us',
          showClosedCaptions: true,
        }}
      />
    </View>
  );
};
