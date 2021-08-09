import React from "react";
function VideoDetail(props) {
  if (!props.video) return <div></div>;
  const VideoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`;

  return (
    <>
      <div id="select" className="card col-xxl-12 col-md-12 col-sm-12 col-xs-12">
        <iframe src={VideoSrc} className='card-img-top' title='Video Player' />
        <div className="card-body">
          <h4 className='electrolize' style={{ fontWeight: 'bold' }}>{props.video.snippet.title}</h4>
          <p className='baloo'>{props.video.snippet.channelTitle}</p>
          <p className='baloo'>{props.video.snippet.description}</p>
        </div>
      </div>
    </>
  )
}
export default VideoDetail;