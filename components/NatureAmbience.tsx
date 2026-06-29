"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

type AudioWindow = Window &
  typeof globalThis & {
    webkitAudioContext?: typeof AudioContext;
  };

function createWindBuffer(context: AudioContext) {
  const duration = 2;
  const buffer = context.createBuffer(1, context.sampleRate * duration, context.sampleRate);
  const channel = buffer.getChannelData(0);

  for (let index = 0; index < channel.length; index += 1) {
    channel[index] = (Math.random() * 2 - 1) * 0.55;
  }

  return buffer;
}

function scheduleChirp(context: AudioContext, destination: GainNode) {
  const start = context.currentTime;
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  const filter = context.createBiquadFilter();

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(1550 + Math.random() * 520, start);
  oscillator.frequency.exponentialRampToValueAtTime(2450 + Math.random() * 760, start + 0.16);
  filter.type = "bandpass";
  filter.frequency.value = 2200;
  filter.Q.value = 5;
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(0.018, start + 0.035);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.22);

  oscillator.connect(filter);
  filter.connect(gain);
  gain.connect(destination);
  oscillator.start(start);
  oscillator.stop(start + 0.24);
}

export default function NatureAmbience() {
  const [playing, setPlaying] = useState(false);
  const contextRef = useRef<AudioContext | null>(null);
  const windSourceRef = useRef<AudioBufferSourceNode | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const timeoutsRef = useRef<number[]>([]);

  const stopAmbience = useCallback(() => {
    for (const timeout of timeoutsRef.current) {
      window.clearTimeout(timeout);
    }
    timeoutsRef.current = [];

    windSourceRef.current?.stop();
    windSourceRef.current = null;
    masterGainRef.current?.disconnect();
    masterGainRef.current = null;

    if (contextRef.current) {
      void contextRef.current.close();
      contextRef.current = null;
    }

    setPlaying(false);
  }, []);

  const queueBirds = useCallback(() => {
    const context = contextRef.current;
    const master = masterGainRef.current;

    if (!context || !master) {
      return;
    }

    const timeout = window.setTimeout(() => {
      const activeContext = contextRef.current;
      const activeMaster = masterGainRef.current;

      if (!activeContext || !activeMaster) {
        return;
      }

      scheduleChirp(activeContext, activeMaster);
      if (Math.random() > 0.55) {
        window.setTimeout(() => scheduleChirp(activeContext, activeMaster), 180);
      }
      queueBirds();
    }, 3600 + Math.random() * 5200);

    timeoutsRef.current.push(timeout);
  }, []);

  const startAmbience = useCallback(async () => {
    const audioWindow = window as AudioWindow;
    const AudioContextConstructor = audioWindow.AudioContext || audioWindow.webkitAudioContext;

    if (!AudioContextConstructor) {
      return;
    }

    const context = new AudioContextConstructor();
    const master = context.createGain();
    const windFilter = context.createBiquadFilter();
    const windGain = context.createGain();
    const windSource = context.createBufferSource();

    master.gain.value = 0.16;
    windFilter.type = "lowpass";
    windFilter.frequency.value = 620;
    windGain.gain.value = 0.055;
    windSource.buffer = createWindBuffer(context);
    windSource.loop = true;

    windSource.connect(windFilter);
    windFilter.connect(windGain);
    windGain.connect(master);
    master.connect(context.destination);
    windSource.start();

    contextRef.current = context;
    windSourceRef.current = windSource;
    masterGainRef.current = master;

    if (context.state === "suspended") {
      await context.resume();
    }

    queueBirds();
    setPlaying(true);
  }, [queueBirds]);

  useEffect(() => stopAmbience, [stopAmbience]);

  return (
    <button
      type="button"
      aria-label={playing ? "Mute nature ambience" : "Play nature ambience"}
      title={playing ? "Mute nature ambience" : "Play nature ambience"}
      onClick={() => {
        if (playing) {
          stopAmbience();
          return;
        }

        void startAmbience();
      }}
      className="fixed bottom-6 right-6 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--foreground)] shadow-[0_16px_50px_rgba(0,0,0,0.18)] backdrop-blur-xl transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
    >
      {playing ? (
        <Volume2 className="h-5 w-5" strokeWidth={1.8} />
      ) : (
        <VolumeX className="h-5 w-5" strokeWidth={1.8} />
      )}
    </button>
  );
}
