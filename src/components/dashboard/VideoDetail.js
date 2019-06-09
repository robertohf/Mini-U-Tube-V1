import React from 'react'

function VideoDetail(props){
    const video = props.video

    if(!video)
        return <div>Loading...</div>

    const videoId = video.id.videoId
    const url = `https://www.youtube.com/embed/${videoId}`

    return (
        <div className="video-detail">
            <div className="embed-responsive" style={{textAlign: 'center'}}>
                <iframe className="embed-responsive-item" src={ url } width="600" height="400"></iframe>
            </div>
            <div className="details">
                <div>{ video.snippet.title }</div>
                <div>{ video.snippet.description }</div>
            </div>
        </div>
    )
}

export default VideoDetail
