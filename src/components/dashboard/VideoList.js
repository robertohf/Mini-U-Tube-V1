import React from 'react'
import VideoListItem from './VideoListItem'
import { List } from '@material-ui/core';

const videoContainer = {
    display: 'flex',
    flexDirection: 'row',
    padding: '25px',
    textAlign: 'center',
    borderRight: '5px', 
    borderRadius: '4px'
  };

function VideoList(props) {
    const items = props.videos.map((video) => {
        return ( <VideoListItem 
                    onUserSelected={ props.onVideoSelect }
                    key={ video.etag } 
                    video={ video } /> 
                )
    })

    return ( <List style={videoContainer}>{ items }</List> )
}

export default VideoList
