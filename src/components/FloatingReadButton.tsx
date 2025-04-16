import { useState, useEffect, useRef } from "react";
import { HiSpeakerWave, HiPause, HiStop } from "react-icons/hi2";

export function FloatingReadButton() {
  const [reading, setReading] = useState(false);
  const [paused, setPaused] = useState(false);
  const [currentParagraph, setCurrentParagraph] = useState<number | null>(null);

  const voicesRef = useRef<SpeechSynthesisVoice[]>([]);
  const indexRef = useRef(0);
  const paragraphsRef = useRef<Element[]>([]);
  const previousParagraph = useRef<Element | null>(null);
  const isReadingRef = useRef(false); // ajuda a manter estado mesmo fora do React lifecycle

  useEffect(() => {
    if (!("speechSynthesis" in window)) {
      alert("Este navegador não suporta leitura de texto.");
      return;
    }

    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      voicesRef.current = voices.filter((v) => v.lang === "pt-BR");
    };

    window.speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();

    const handleVisibilityChange = () => {
      if (document.hidden && isReadingRef.current && !window.speechSynthesis.paused) {
        pauseReading();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  const speakParagraph = (text: string, index: number) => {
    return new Promise<void>((resolve) => {
      window.speechSynthesis.cancel(); // evita sobreposição de falas no iOS
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "pt-BR";
      utterance.rate = 1.1;
      utterance.pitch = 1.3;
      utterance.volume = 1;
      if (voicesRef.current.length > 0) {
        utterance.voice = voicesRef.current[0];
      }

      utterance.onend = () => resolve();
      window.speechSynthesis.speak(utterance);
    });
  };

  const readNext = async () => {
    const paragraphs = paragraphsRef.current;
    while (indexRef.current < paragraphs.length && isReadingRef.current) {
      const paragraph = paragraphs[indexRef.current];
      if (!paragraph) break;

      // Destaque visual
      if (previousParagraph.current) {
        previousParagraph.current.classList.remove("highlight-paragraph");
      }
      paragraph.classList.add("highlight-paragraph");
      paragraph.scrollIntoView({ behavior: "smooth", block: "center" });
      previousParagraph.current = paragraph;
      setCurrentParagraph(indexRef.current);

      await speakParagraph(paragraph.textContent || "", indexRef.current);

      if (!isReadingRef.current) break;

      indexRef.current += 1;
    }

    stopReading();
  };

  const startReading = () => {
    const article = document.getElementById("article-content");
    if (!article) return;

    const paragraphs = Array.from(article.querySelectorAll("p, h2"));
    if (paragraphs.length === 0) return;

    paragraphsRef.current = paragraphs;
    indexRef.current = 0;
    isReadingRef.current = true;

    setReading(true);
    setPaused(false);
    readNext();
  };

  const pauseReading = () => {
    window.speechSynthesis.pause();
    setPaused(true);
  };

  const resumeReading = () => {
    window.speechSynthesis.resume();
    setPaused(false);
  };

  const stopReading = () => {
    window.speechSynthesis.cancel();
    isReadingRef.current = false;
    setReading(false);
    setPaused(false);
    setCurrentParagraph(null);
    indexRef.current = 0;

    if (previousParagraph.current) {
      previousParagraph.current.classList.remove("highlight-paragraph");
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex gap-2">
      {!reading && (
        <button
          onClick={startReading}
          title="Ouvir artigo"
          className="bg-black text-white p-4 rounded-full shadow-xl hover:scale-105 transition-all"
        >
          <HiSpeakerWave className="text-2xl" />
        </button>
      )}

      {reading && !paused && (
        <button
          onClick={pauseReading}
          title="Pausar"
          className="bg-yellow-500 text-black p-4 rounded-full shadow-xl hover:scale-105 transition-all"
        >
          <HiPause className="text-2xl" />
        </button>
      )}

      {reading && paused && (
        <button
          onClick={resumeReading}
          title="Continuar"
          className="bg-green-500 text-white p-4 rounded-full shadow-xl hover:scale-105 transition-all"
        >
          <HiSpeakerWave className="text-2xl" />
        </button>
      )}

      {reading && (
        <button
          onClick={stopReading}
          title="Parar"
          className="bg-red-600 text-white p-4 rounded-full shadow-xl hover:scale-105 transition-all"
        >
          <HiStop className="text-2xl" />
        </button>
      )}

      <style jsx global>{`
        .highlight-paragraph {
          background-color: rgb(20, 20, 20);
          transition: background-color 0.3s ease;
          scroll-margin-top: 100px;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
}
