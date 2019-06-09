import React from 'react'

function VideoDetail(props){
    const video = props.video

    if(!video)
        return <div style={{textAlign: 'center', paddingTop: '20px'}}>
            <p>If this message is showing the daily quota has maxed out.</p>
        </div>

    const videoId = video.id.videoId
    const url = `https://www.youtube.com/embed/${videoId}`

    return (
        <div className="video-detail">
            <div className="embed-responsive" style={{textAlign: 'center', backgroundColor: 'silver'}}>
                <iframe className="embed-responsive-item" src={ url } width="600" height="400" title={ video.snippet.title } ></iframe>
            </div>
            <div className="details" width="600" height="400">
                <div><h4>{ video.snippet.title }</h4></div>
                <div>{ video.snippet.description }</div>
            </div>
        </div>
    )
}

export default VideoDetail
