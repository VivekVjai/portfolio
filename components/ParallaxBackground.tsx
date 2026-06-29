"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function CloudCluster({
  className,
  variant = "soft"
}: {
  className: string;
  variant?: "soft" | "dense" | "bright";
}) {
  return (
    <div className={`cloud-cluster cloud-cluster--${variant} ${className}`}>
      <span className="cloud-puff cloud-puff--one" />
      <span className="cloud-puff cloud-puff--two" />
      <span className="cloud-puff cloud-puff--three" />
      <span className="cloud-puff cloud-puff--four" />
      <span className="cloud-puff cloud-puff--five" />
      <span className="cloud-base" />
    </div>
  );
}

function ForestHorizon() {
  return (
    <svg
      viewBox="0 0 1440 520"
      className="h-full w-full"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="farMountain" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#6fbf98" />
          <stop offset="100%" stopColor="#2f7d5b" />
        </linearGradient>
        <linearGradient id="midMountain" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#4fa16d" />
          <stop offset="100%" stopColor="#18553a" />
        </linearGradient>
        <linearGradient id="nearForest" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#1f7a45" />
          <stop offset="100%" stopColor="#082316" />
        </linearGradient>
        <filter id="softDepth" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="14" stdDeviation="18" floodColor="#082316" floodOpacity="0.28" />
        </filter>
      </defs>

      <path
        d="M0 298 C130 220 220 156 360 214 C496 270 610 134 764 192 C884 238 990 164 1125 112 C1254 62 1356 96 1440 142 L1440 520 L0 520 Z"
        fill="url(#farMountain)"
        opacity="0.58"
      />
      <path
        d="M0 352 C126 264 238 250 352 178 C438 124 508 214 612 232 C754 258 828 122 952 154 C1064 183 1142 276 1248 224 C1328 185 1382 198 1440 226 L1440 520 L0 520 Z"
        fill="url(#midMountain)"
        opacity="0.82"
        filter="url(#softDepth)"
      />
      <path
        d="M0 404 C82 348 174 338 282 302 C404 262 514 286 628 314 C748 343 834 280 952 286 C1092 294 1208 350 1440 272 L1440 520 L0 520 Z"
        fill="#17472f"
        opacity="0.94"
      />

      {Array.from({ length: 34 }).map((_, index) => {
        const x = index * 45 - 20;
        const height = 78 + (index % 5) * 18;
        const y = 380 - (index % 7) * 12;

        return (
          <g key={index} transform={`translate(${x} ${y})`}>
            <path
              d={`M18 0 L36 ${height * 0.42} L27 ${height * 0.42} L45 ${height * 0.7} L33 ${height * 0.7} L52 ${height} L0 ${height} L19 ${height * 0.7} L8 ${height * 0.7} L25 ${height * 0.42} L16 ${height * 0.42} Z`}
              fill={index % 3 === 0 ? "#0b3a24" : "#0d4f2d"}
              opacity={index % 2 === 0 ? 0.92 : 0.78}
            />
            <rect x="24" y={height * 0.72} width="5" height="58" fill="#102719" opacity="0.74" />
          </g>
        );
      })}

      <path
        d="M0 458 C190 426 328 452 498 430 C664 408 780 444 934 426 C1110 404 1252 442 1440 416 L1440 520 L0 520 Z"
        fill="url(#nearForest)"
      />
    </svg>
  );
}

export default function ParallaxBackground() {
  const { scrollYProgress } = useScroll();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const sunY = useTransform(scrollYProgress, [0, 0.55, 0.78], ["0vh", "-38vh", "-66vh"]);
  const sunX = useTransform(scrollYProgress, [0, 0.78], ["0vw", "-8vw"]);
  const sunScale = useTransform(scrollYProgress, [0, 0.55, 0.78], [1, 0.9, 0.72]);
  const sunOpacity = useTransform(scrollYProgress, [0, 0.45, 0.72], [1, 0.82, 0]);

  const cloudBackY = useTransform(scrollYProgress, [0, 1], ["0vh", "-18vh"]);
  const cloudBackX = useTransform(scrollYProgress, [0, 1], ["0vw", "-10vw"]);
  const cloudMidY = useTransform(scrollYProgress, [0, 1], ["0vh", "-31vh"]);
  const cloudMidX = useTransform(scrollYProgress, [0, 1], ["0vw", "8vw"]);
  const cloudFrontY = useTransform(scrollYProgress, [0, 1], ["0vh", "-44vh"]);
  const cloudFrontX = useTransform(scrollYProgress, [0, 1], ["0vw", "-6vw"]);
  const cloudOpacity = useTransform(scrollYProgress, [0, 0.5, 0.82], [1, 0.7, 0.26]);

  const forestY = useTransform(scrollYProgress, [0.45, 0.82, 1], ["30vh", "8vh", "0vh"]);
  const forestOpacity = useTransform(scrollYProgress, [0.4, 0.72, 1], [0, 0.58, 1]);
  const forestScale = useTransform(scrollYProgress, [0.45, 1], [1.08, 1]);
  const meadowOpacity = useTransform(scrollYProgress, [0.58, 1], [0, 0.74]);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 transition-colors duration-700"
        style={{
          background: isDark
            ? "linear-gradient(180deg, #071120 0%, #0d1b2b 45%, #102d27 100%)"
            : "linear-gradient(180deg, #9ed8ff 0%, #dff4ff 48%, #e9f7df 100%)"
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_18%,rgba(255,255,255,0.42),transparent_24%),linear-gradient(180deg,transparent_0%,rgba(255,255,255,0.18)_55%,transparent_100%)] opacity-60 dark:opacity-20" />

      <motion.div
        className={`nature-sun ${
          isDark ? "nature-sun--moon" : ""
        } left-[48%] top-[16%] sm:left-[56%] lg:left-[61%]`}
        style={{ x: sunX, y: sunY, scale: sunScale, opacity: sunOpacity }}
      />

      <motion.div
        className="cloud-layer cloud-layer--back"
        style={{ x: cloudBackX, y: cloudBackY, opacity: cloudOpacity }}
      >
        <CloudCluster className="left-[-7%] top-[20%] w-[34rem] max-w-[86vw]" variant="soft" />
        <CloudCluster className="left-[52%] top-[8%] w-[30rem] max-w-[75vw]" variant="soft" />
        <CloudCluster className="left-[20%] top-[42%] w-[22rem] max-w-[70vw]" variant="bright" />
      </motion.div>

      <motion.div
        className="cloud-layer cloud-layer--mid"
        style={{ x: cloudMidX, y: cloudMidY, opacity: cloudOpacity }}
      >
        <CloudCluster className="left-[18%] top-[12%] w-[42rem] max-w-[96vw]" variant="dense" />
        <CloudCluster className="left-[66%] top-[31%] w-[31rem] max-w-[82vw]" variant="bright" />
        <CloudCluster className="left-[-10%] top-[52%] w-[34rem] max-w-[92vw]" variant="dense" />
      </motion.div>

      <motion.div
        className="cloud-layer cloud-layer--front"
        style={{ x: cloudFrontX, y: cloudFrontY, opacity: cloudOpacity }}
      >
        <CloudCluster className="left-[43%] top-[44%] w-[45rem] max-w-[110vw]" variant="dense" />
        <CloudCluster className="left-[-3%] top-[70%] w-[28rem] max-w-[86vw]" variant="bright" />
      </motion.div>

      <motion.div
        className="absolute inset-x-0 bottom-0 h-[52vh] bg-gradient-to-t from-[#c9f0b8]/70 via-[#dff5cf]/22 to-transparent dark:from-[#0d2f20]/80 dark:via-[#0e3a29]/25"
        style={{ opacity: meadowOpacity }}
      />

      <motion.div
        className="absolute inset-x-0 bottom-[-2vh] h-[54vh]"
        style={{ y: forestY, opacity: forestOpacity, scale: forestScale, transformOrigin: "bottom" }}
      >
        <ForestHorizon />
      </motion.div>
    </div>
  );
}
