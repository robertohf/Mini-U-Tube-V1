import React from 'react'
import VideoListItem from './VideoListItem'

function VideoList(props) {
    const items = props.videos.map((video) => {
        return ( <VideoListItem 
                    onUserSelected={ props.onVideoSelect }
                    key={ video.etag } 
                    video={ video } /> 
                )
    })

    return ( <ul>{ items }</ul> )
}

export default VideoList
