import React from 'react'

function VideoListItem(props) {
    const video = props.video;
    const onUserSelected = props.onUserSelected
    const imgUrl = video.snippet.thumbnails.default.url

    return (
        <li onClick={ () => onUserSelected(video) } className="list-group-items">
            <div className="video-list media">
                <div className="media-right">
                    <img className="media-object" src={ imgUrl } />
                </div>
                <div className="media-body">
                    <div className="media-heading">{ video.snippet.title }</div>
                </div>
            </div>
        </li>
    )
}

export default VideoListItem
