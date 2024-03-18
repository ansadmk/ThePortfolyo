import { jarallax, jarallaxVideo } from "jarallax";
import "jarallax/dist/jarallax.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { youtubeFirst } from "../../Redux/selectors";
import { FetchData } from "../../Redux/axios";
// import "./styles.css";

export default function Parallax() {
  const youtubeVid=useSelector(youtubeFirst)
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(FetchData())
    
  },[])

  useEffect(() => {
    if (youtubeVid) {
      jarallaxVideo();
      jarallax(document.querySelectorAll(".jarallax"), {
        speed: 0.2,
        videoSrc: `https://www.youtube.com/watch?v=${youtubeVid.embedId}`,
      });
    }
  });
  return <div className="jarallax" />;
}
