import React from 'react'
import { ListItem } from '@material-ui/core';

function VideoListItem(props) {
    const video = props.video;
    const onUserSelected = props.onUserSelected
    const imgUrl = video.snippet.thumbnails.default.url

    return (
        <ListItem onClick={ () => onUserSelected(video) } className="list-group-items">
            <div className="video-list media">
                <div className="media-right">
                    <img className="media-object" src={ imgUrl } alt={ video.snippet.title } width="150px" height="100px" />
                </div>
                <div className="media-body">
                    <div className="media-heading">{ video.snippet.title }</div>
                </div>
            </div>
        </ListItem>
    )
}

export default VideoListItem
