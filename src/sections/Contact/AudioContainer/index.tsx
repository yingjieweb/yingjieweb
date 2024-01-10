import React, { useEffect, useRef } from "react";
import { detectMobile } from "../../../utils";

const isMobile = detectMobile();
const audio = require("../../../assets/audios/triumph.mp3");
const canvasSize = isMobile ? 150 : 400;
let source: any, buffer: any;

const AudioContainer = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isInit, setIsInit] = React.useState(false);
  const [audioAnalyser, setAudioAnalyser] = React.useState<any>(null);
  const [curCanvas, setCurCanvas] = React.useState<any>(null);
  const [curCanvasCtx, setCurCanvasCtx] = React.useState<any>(null);

  const initCanvas = () => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const canvasCtx = canvas.getContext("2d");
    if (!canvasCtx) return;
    canvas.width = canvasSize * devicePixelRatio;
    canvas.height = canvasSize * devicePixelRatio;
    canvas.style.width = canvas.style.height = canvasSize + "px";
    setCurCanvas(canvas);
    setCurCanvasCtx(canvasCtx);
  };
  const onAudioPlay = () => {
    if (isInit) {
      return;
    }
    setIsInit(true);
    console.log("initAudioAnalyser");
    const audioCtx = new AudioContext();
    const analyser = audioCtx.createAnalyser();
    analyser.fftSize = 512;
    buffer = new Uint8Array(analyser.frequencyBinCount);
    if (!audioRef.current) return;
    if (source) return;
    source = audioCtx.createMediaElementSource(audioRef.current);
    source.connect(analyser);
    analyser.connect(audioCtx.destination);
    setAudioAnalyser(analyser);
  };
  const update = () => {
    requestAnimationFrame(update);
    if (!isInit) {
      return;
    }
    audioAnalyser.getByteFrequencyData(buffer);
    const offset = Math.floor((buffer.length * 2) / 3);
    const datas = new Array(offset * 2);
    for (let i = 0; i < offset; i++) {
      datas[i] = datas[datas.length - i - 1] = buffer[i];
    }
    console.log("datas", datas);
    draw(datas, 255);
  };
  const draw = (datas: number[], maxValue: number) => {
    const r = curCanvas.width / 4 + 20 * devicePixelRatio;
    const center = curCanvas.width / 2;
    curCanvasCtx.clearRect(0, 0, curCanvas.width, curCanvas.height);
    const hslStep = 360 / (datas.length - 1);
    const maxLen = curCanvas.width / 2 - r;
    const minLen = 2 * devicePixelRatio;
    for (let i = 0; i < datas.length; i++) {
      curCanvasCtx.beginPath();
      const len = Math.max((datas[i] / maxValue) * maxLen, minLen);
      const rotate = hslStep * i;
      curCanvasCtx.strokeStyle = `hsl(${rotate}deg, 65%, 65%)`;
      curCanvasCtx.lineWidth = minLen;
      const rad = (rotate * Math.PI) / 180;
      const beginX = center + Math.cos(rad) * r;
      const beginY = center + Math.sin(rad) * r;
      const endX = center + Math.cos(rad) * (r + len);
      const endY = center + Math.sin(rad) * (r + len);
      curCanvasCtx.moveTo(beginX, beginY);
      curCanvasCtx.lineTo(endX, endY);
      curCanvasCtx.stroke();
    }
  };

  useEffect(() => {
    initCanvas();
  }, []);
  useEffect(() => {
    if (isInit && audioAnalyser) {
      update();
    }
  }, [isInit, audioAnalyser]);

  return (
    <div
      style={{ width: 100, height: 20, backgroundColor: "green" }}
      onClick={() => {
        audioRef.current?.play();
        onAudioPlay();
      }}
    >
      <canvas ref={canvasRef}></canvas>
      <audio src={audio} loop ref={audioRef}></audio>
    </div>
  );
};

export default AudioContainer;
