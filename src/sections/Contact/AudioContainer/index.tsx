import React, { useEffect, useRef } from "react";
import { detectMobile } from "../../../utils";

const isMobile = detectMobile();
const audio = require("../../../assets/audios/triumph.mp3");
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
    var barX = 0;
    const barWidth = 100 / datas.length;
    const barSpacing = 1;
    curCanvasCtx.clearRect(0, 0, curCanvas.width, curCanvas.height);
    const linearGradient = curCanvasCtx.createLinearGradient(0, 0, 200, 0);
    linearGradient.addColorStop(0, "red");
    linearGradient.addColorStop(0.5, "green");
    linearGradient.addColorStop(1, "blue");
    for (var i = 0; i < datas.length; i++) {
      var barHeight = (datas[i] / 255) * 100;
      var barY = 100 - barHeight;
      curCanvasCtx.fillStyle = linearGradient;
      curCanvasCtx.fillRect(barX, barY, barWidth, barHeight);
      barX += barWidth + barSpacing;
      linearGradient.addColorStop(
        i / (datas.length - 1),
        `rgb(${255 - (i * 255) / (datas.length - 1)}, ${
          (i * 255) / (datas.length - 1)
        }, 0)`
      );
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
      style={{ width: '2000px', height: 20, backgroundColor: "orange" }}
      onClick={() => {
        audioRef.current?.play();
        onAudioPlay();
      }}
    >
      <canvas ref={canvasRef} width="2000px" height="100"></canvas>
      <audio src={audio} loop ref={audioRef}></audio>
    </div>
  );
};

export default AudioContainer;
