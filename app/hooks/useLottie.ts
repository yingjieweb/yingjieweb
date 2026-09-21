import { useEffect, useRef } from "react";
import type {
  AnimationConfigWithData,
  AnimationConfigWithPath,
  AnimationItem,
} from "lottie-web";

const useLottie = (
  animationData: string | object,
  extra?: Omit<AnimationConfigWithData, "animationData" | "path">
) => {
  const lottieRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    let cancelled = false;

    const loadAnimation = async () => {
      const { default: lottie } = await import("lottie-web");

      if (!lottieRef.current || cancelled) return;

      let config: AnimationConfigWithData | AnimationConfigWithPath = {
        container: lottieRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        ...extra,
      };

      if (typeof animationData === "string") {
        config = { ...config, path: animationData } as AnimationConfigWithPath;
      } else {
        config = { ...config, animationData } as AnimationConfigWithData;
      }

      animationRef.current = lottie.loadAnimation(config);
    };

    loadAnimation();

    return () => {
      cancelled = true;
      animationRef.current?.destroy();
      animationRef.current = null;
    };
  }, [animationData, extra]);

  return lottieRef;
};

export default useLottie;
