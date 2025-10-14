import React, { useState, useEffect } from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import value_converter, { API_KEY } from '../../data'
import moment from 'moment'

function PlayVideo({ videoId }) {
  const [apiData, setAipiData] = useState(null)

  const fetchVideoData = async () => {
    // Fetching videos data
    const videoDetails_url = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
    await fetch(videoDetails_url)
      .then(res => res.json())
      .then(data => setAipiData(data.items[0]))
  }

  useEffect(() => {
    fetchVideoData()
  }, [])

//  2:19:49

  return (
    <div className='play-video'>
      {/* <video src={video1} controls autoPlay muted></video> */}
      <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <h3>{apiData ? apiData.snippet.title : "Title here"}</h3>
      <div className="play-video-info">
        <p>{apiData ? value_converter(apiData.statistics.viewCount) : "16K"} &bull; apiData?{moment(apiData.snippet.publishedAt).fromNow()}: ""</p>
        <div className="">
          <span><img src={like} alt="" />125</span>
          <span><img src={dislike} alt="" />2</span>
          <span><img src={share} alt="" />Share</span>
          <span><img src={save} alt="" />Save</span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="" />
        <div>
          <p>Code With Jashwantt</p>
          <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>Channel that makes learning Easy</p>
        <p>Subscribe to watch more tutorial like this</p>
        <hr />
        <h4>130 comments</h4>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div className="">
            <h3>Jack Nicholson <span>1 day ago</span></h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis enim magnam dolorum, ea voluptatum recusandae fugiat? Harum quos molestiae obcaecati, officiis non unde dolores suscipit.</p>
            <div className="comment-action">
              <img src={like} alt="" /><span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div className="">
            <h3>Jack Nicholson <span>1 day ago</span></h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis enim magnam dolorum, ea voluptatum recusandae fugiat? Harum quos molestiae obcaecati, officiis non unde dolores suscipit.</p>
            <div className="comment-action">
              <img src={like} alt="" /><span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div className="">
            <h3>Jack Nicholson <span>1 day ago</span></h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis enim magnam dolorum, ea voluptatum recusandae fugiat? Harum quos molestiae obcaecati, officiis non unde dolores suscipit.</p>
            <div className="comment-action">
              <img src={like} alt="" /><span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div className="">
            <h3>Jack Nicholson <span>1 day ago</span></h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis enim magnam dolorum, ea voluptatum recusandae fugiat? Harum quos molestiae obcaecati, officiis non unde dolores suscipit.</p>
            <div className="comment-action">
              <img src={like} alt="" /><span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div className="">
            <h3>Jack Nicholson <span>1 day ago</span></h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis enim magnam dolorum, ea voluptatum recusandae fugiat? Harum quos molestiae obcaecati, officiis non unde dolores suscipit.</p>
            <div className="comment-action">
              <img src={like} alt="" /><span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}


export default PlayVideo
