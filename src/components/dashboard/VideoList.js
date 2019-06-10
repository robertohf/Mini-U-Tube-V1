import React from 'react'
import VideoListItem from './VideoListItem'
import { List } from '@material-ui/core';

const videoContainer = {
    display: 'content',
    padding: '25px',
    textAlign: 'center',
  };

function VideoList(props) {
    const items = props.videos.map((video) => {
        return ( <VideoListItem 
                    onUserSelected={ props.onVideoSelect }
                    key={ video.etag } 
                    video={ video } /> 
                )
    })

    return ( <List style={{display: 'flex', textAlign: 'center'}}>{ items }</List> )
}

export default VideoList
