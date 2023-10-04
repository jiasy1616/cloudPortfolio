import { useProgress } from "@react-three/drei";
import "./Overlay.css";
import { usePlay } from "../contexts/Play";
import { useRef } from "react";

export const Overlay = () => {
  const { progress } = useProgress();
  const audio = useRef();
  const { play, end, setPlay, hasScroll } = usePlay();

  return (
    <>
      <div
        className={`overlay ${play ? "overlay--disable" : ""} ${
          hasScroll ? "overlay--scrolled" : ""
        }`}
      >
        <div
          className={`loader ${progress === 100 ? "loader--disappear" : ""}`}
        />
        {progress === 100 && (
          <div className={`intro ${play ? "intro--disappear" : ""}`}>
            <h1 className="logo">
              JIATMOS
              <div className="spinner">
                <div className="spinner_image"></div>
              </div>
            </h1>
            <audio src="/music/music.mp3" ref={audio}></audio>
            <p className="intro__scroll">Scroll to begin the journey</p>
            <button
              className="explore"
              onClick={() => {
                setPlay(true);
                setPlay(true);
                audio.current.play();
              }}
            >
              Explore
            </button>
          </div>
        )}
        <div className={`outro ${end ? "outro--appear" : ""}`}>
          <p className="outro__text">Wish you had a great flight with us...</p>
        </div>
      </div>
    </>
  );
};
