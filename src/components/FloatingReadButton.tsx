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

  // Carrega vozes disponíveis
  useEffect(() => {
    if (!("speechSynthesis" in window)) {
      alert("Este navegador não suporta leitura de texto.");
      return;
    }

    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      voicesRef.current = voices.filter((voice) => voice.lang === "pt-BR");
    };

    window.speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();

    // Retomar se estava lendo
    const wasReading = localStorage.getItem("wasReading") === "true";
    const savedIndex = parseInt(localStorage.getItem("lastParagraphIndex") || "0");
    if (wasReading) {
      const article = document.getElementById("article-content");
      if (article) {
        const paragraphs = Array.from(article.querySelectorAll("p, h2"));
        paragraphsRef.current = paragraphs;
        indexRef.current = savedIndex;
        setReading(true);
        setPaused(false);
        readNext();
      }
    }

    // Retomar leitura ao voltar para aba
    const handleVisibilityChange = () => {
      if (!document.hidden && reading && paused) {
        resumeReading();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const readNext = () => {
    const paragraphs = paragraphsRef.current;
    let index = indexRef.current;

    if (index < paragraphs.length) {
      const paragraph = paragraphs[index];
      const text = paragraph.textContent || "";

      if (previousParagraph.current) {
        previousParagraph.current.classList.remove("highlight-paragraph");
      }

      paragraph.classList.add("highlight-paragraph");
      previousParagraph.current = paragraph;
      setCurrentParagraph(index);

      const speech = new SpeechSynthesisUtterance(text);
      speech.lang = "pt-BR";
      speech.rate = 1.2;
      speech.pitch = 1.5;
      speech.volume = 1;

      if (voicesRef.current.length > 0) {
        speech.voice = voicesRef.current[0];
      }

      speech.onend = () => {
        setCurrentParagraph(null);
        indexRef.current += 1;
        localStorage.setItem("lastParagraphIndex", indexRef.current.toString());
        readNext();
      };

      window.speechSynthesis.speak(speech);
    } else {
      stopReading();
    }
  };

  const startReading = () => {
    const article = document.getElementById("article-content");
    if (!article) return;

    const paragraphs = Array.from(article.querySelectorAll("p, h2"));
    if (paragraphs.length === 0) return;

    paragraphsRef.current = paragraphs;
    indexRef.current = 0;
    localStorage.setItem("wasReading", "true");
    localStorage.setItem("lastParagraphIndex", "0");
    setReading(true);
    setPaused(false);
    readNext();
  };

  const pauseReading = () => {
    if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
      window.speechSynthesis.pause();
      setPaused(true);
    }
  };

  const resumeReading = () => {
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      setPaused(false);
    }
  };

  const stopReading = () => {
    window.speechSynthesis.cancel();
    setReading(false);
    setPaused(false);
    setCurrentParagraph(null);
    localStorage.removeItem("wasReading");
    localStorage.removeItem("lastParagraphIndex");
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
