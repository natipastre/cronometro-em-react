import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [tempo, setTempo] = useState(0);
  const [ativo, setAtivo] = useState(false);

  useEffect(() => {
    let intervalo = null;
    if (ativo) {
      intervalo = setInterval(() => {
        setTempo((prevTempo) => prevTempo + 1);
      }, 1000);
    } else {
      clearInterval(intervalo);
    }
    return () => clearInterval(intervalo);
  }, [ativo]);

  const formatarTempo = () => {
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    return `${minutos.toString().padStart(2, "0")}:${segundos
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="app">
      <div className="container">
        <h1>⏱ Tempo em Movimento</h1>
        <div className="display">{formatarTempo()}</div>
        <div className="botoes">
          {!ativo ? (
            <button className="iniciar" onClick={() => setAtivo(true)}>
              ▶️ Iniciar
            </button>
          ) : (
            <button className="pausar" onClick={() => setAtivo(false)}>
              ⏸️ Pausar
            </button>
          )}
          <button
            className="resetar"
            onClick={() => {
              setAtivo(false);
              setTempo(0);
            }}
          >
            🔄 Resetar
          </button>
        </div>
      </div>

      <footer>
        <p>Feito com 💜 por <strong>Natália Pastre</strong></p>
        <p className="react-logo">⚛️ Desenvolvido em <span>React</span></p>
      </footer>
    </div>
  );
}
