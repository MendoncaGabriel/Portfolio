import { useState, useEffect, useRef } from "react";
import { HiSpeakerWave, HiStop } from "react-icons/hi2";

export function FloatingReadButton() {
  const [reading, setReading] = useState(false);
  const [currentParagraph, setCurrentParagraph] = useState<number | null>(null); // Para controlar o parágrafo atual
  const voicesRef = useRef<SpeechSynthesisVoice[]>([]);

  // Carregar vozes disponíveis no navegador
  useEffect(() => {
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      voicesRef.current = voices.filter(voice => voice.lang === "pt-BR");
    };

    window.speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();
  }, []);

  const handleRead = () => {
    const article = document.getElementById("article-content");
    if (!article) return;

    const paragraphs = Array.from(article.getElementsByTagName("p"));
    let index = 0;

    const readNext = () => {
      if (index < paragraphs.length) {
        const paragraph = paragraphs[index];
        const text = paragraph.innerText;

        // Marcar o parágrafo atual
        setCurrentParagraph(index);

        const speech = new SpeechSynthesisUtterance(text);
        speech.lang = "pt-BR";
        speech.rate = 1.3; // Velocidade
        speech.pitch = 1.5; // Tom
        speech.volume = 1; // Volume máximo

        // Se houver voz pt-BR disponível, usar a primeira
        if (voicesRef.current.length > 0) {
          speech.voice = voicesRef.current[0];
        }

        speech.onend = () => {
          // Passar para o próximo parágrafo
          setCurrentParagraph(null);
          index++;
          readNext(); // Recursivamente chama o próximo parágrafo
        };

        window.speechSynthesis.speak(speech);
      } else {
        setReading(false); // Terminar leitura quando acabar os parágrafos
      }
    };

    if (!reading) {
      setReading(true);
      readNext(); // Começar a leitura
    } else {
      window.speechSynthesis.cancel();
      setReading(false);
      setCurrentParagraph(null);
    }
  };

  return (
    <button
      onClick={handleRead}
      className={`fixed bottom-6 right-6 bg-gradient-to-r bg-black text-white p-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 z-50 flex items-center justify-center ${
        reading ? 'animate-pulse' : ''
      }`}
      title={reading ? "Parar narração" : "Ouvir artigo"}
    >
      {reading ? (
        <HiStop className="text-2xl" />
      ) : (
        <HiSpeakerWave className="text-2xl" />
      )}
    </button>
  );
}
