import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card } from 'react-native-elements';
import WatchButton from './WatchButton';

const VideoListItem = ({ video }) => {
  const {
    imageStyle,
    cardStyle,
    contentStyle,
    titleStyle,
    channelTitleStyle,
    descriptionStyle
  } = styles;

  const {
    title,
    channelTitle,
    description,
    thumbnails: {
      medium: { url }
    }
  } = video.snippet;

  return (
    <View>
      <Card containerStyle={cardStyle}>
        <Text style={titleStyle}>{title}</Text>
        <Image style={imageStyle} source={{ uri: url }} />
        <View style={contentStyle}>
          <Text style={channelTitleStyle}>{channelTitle}</Text>
          <Text style={descriptionStyle}>{description}</Text>
          <WatchButton videoId={video.id.videoId} />
        </View>
      </Card>
    </View>
  );
};

const styles = {
  cardStyle: {
    padding: 5,
    backgroundColor: '#000'
  },
  contentStyle: {
    flex: 1,
    padding: 5
  },
  titleStyle: {
    fontSize: 21,
    marginBottom: 5,
    color: '#fff',
    padding: 10
  },
  channelTitleStyle: {
    fontSize: 11,
    color: '#777',
    marginBottom: 5,
    alignSelf: 'flex-end'
  },
  descriptionStyle: {
    fontSize: 11,
    alignSelf: 'center',
    color: '#fff'
  },
  imageStyle: {
    alignSelf: 'stretch',
    height: 280
  }
};

export default VideoListItem;
