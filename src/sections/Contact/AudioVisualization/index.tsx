import React, { useEffect, useRef } from "react";

const audio = require("../../../assets/audios/triumph.mp3");
let source: any, buffer: any;

interface IProps {
  audioPlaySwitch: boolean;
}

const AudioVisualization: React.FC<IProps> = (props) => {
  const { audioPlaySwitch } = props;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isInit, setIsInit] = React.useState(false);
  const [audioAnalyser, setAudioAnalyser] = React.useState<any>(null);
  const [curCanvasCtx, setCurCanvasCtx] =
    React.useState<CanvasRenderingContext2D | null>(null);

  const initCanvas = () => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const canvasCtx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = 200;
    setCurCanvasCtx(canvasCtx);
  };
  const onAudioPlay = () => {
    if (isInit) {
      return;
    }
    setIsInit(true);
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
    draw(datas, 255);
  };
  const draw = (datas: number[], maxValue: number) => {
    let barX = -100;
    const barWidth = window.innerWidth / datas.length;
    const barSpacing = 1;
    if (!curCanvasCtx) return;
    curCanvasCtx.clearRect(0, 0, window.innerWidth, 200);
    const linearGradient = curCanvasCtx.createLinearGradient(
      0,
      0,
      window.innerWidth,
      0
    );
    for (var i = 0; i < datas.length; i++) {
      var barHeight = (datas[i] / maxValue) * 200;
      var barY = 200 - barHeight;
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
    if (audioPlaySwitch) {
      audioRef.current?.play();
      onAudioPlay();
    } else {
      audioRef.current?.pause();
    }
  }, [audioPlaySwitch]);
  useEffect(() => {
    if (isInit && audioAnalyser) {
      update();
    }
  }, [isInit, audioAnalyser]);

  return (
    <div style={{ backgroundColor: "rgba(0,0,0, 0.1)" }}>
      <canvas ref={canvasRef}></canvas>
      <audio src={audio} loop ref={audioRef}></audio>
    </div>
  );
};

export default AudioVisualization;
