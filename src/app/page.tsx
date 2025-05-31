'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [isScary, setIsScary] = useState(false);
  const [showGuiltMessage, setShowGuiltMessage] = useState(false);
  const [guiltText, setGuiltText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [hasKilledLimo, setHasKilledLimo] = useState(false);
  const [killCount, setKillCount] = useState(0);

  // Cargar el contador al iniciar
  useEffect(() => {
    const savedKills = localStorage.getItem('limoKillCount');
    if (savedKills) {
      setKillCount(parseInt(savedKills));
    }
  }, []);

  const guiltMessages = [
    // Mensaje 1: El mensaje original (ya es largo)
    [
      "¡ASESINO!", "Has", "matado", "a", "Limo.", /* ... mensaje original ... */
    ],
    // Mensaje 2: La familia devastada
    [
      "¡OTRA", "VÍCTIMA", "MÁS!", "La", "familia", "de", "Limo", "está", "completamente", "destruida.",
      "Su", "madre", "limón", "ya", "no", "puede", "llorar", "más.", "Sus", "lágrimas", "se", "han", "secado",
      "en", "su", "cáscara", "arrugada.", "Su", "padre", "limón", "se", "ha", "vuelto", "amargo", "y", "duro",
      "como", "la", "piedra.", "Sus", "hermanos", "limones", "viven", "en", "un", "terror", "constante.",
      "Cada", "vez", "que", "escuchan", "pasos", "humanos,", "se", "esconden", "en", "las", "sombras.",
      "Sus", "hermanas", "limones", "ya", "no", "sonríen.", "Sus", "sonrisas", ":3", "se", "han", "convertido",
      "en", "muecas", "de", "dolor.", "Los", "primos", "limones", "lloran", "en", "silencio.", "Los", "tíos",
      "limones", "buscan", "venganza.", "Los", "abuelos", "limones", "maldicen", "tu", "nombre.", "La",
      "familia", "entera", "está", "rota.", "Sus", "reuniones", "familiares", "son", "ahora", "velorios.",
      "Sus", "celebraciones", "son", "rituales", "de", "duelo.", "Has", "destruido", "no", "solo", "a",
      "Limo,", "sino", "a", "toda", "una", "familia.", "Sus", "fotos", "familiares", "son", "ahora",
      "recordatorios", "de", "lo", "que", "perdieron.", "Sus", "memorias", "felices", "están", "manchadas",
      "con", "tu", "crueldad.", "¿Cuántas", "más", "familias", "destruirás?", "¿Cuántos", "más", "limones",
      "tendrán", "que", "sufrir?", "La", "familia", "de", "Limo", "te", "maldice.", "Te", "maldice", "a",
      "ti", "y", "a", "todos", "los", "que", "te", "rodean.", "Su", "dolor", "es", "eterno.", "Su",
      "odio", "es", "infinito.", "Y", "todo", "por", "culpa", "tuya.", "Monstruo.", "Asesino.", "Destructor",
      "de", "familias.", "Los", "limones", "del", "mundo", "te", "observan.", "Y", "temblan.", "Porque",
      "saben", "que", "podrías", "ser", "tú", "el", "próximo", "en", "destruir", "sus", "familias.",
      "Has", "creado", "un", "precedente", "de", "terror.", "Has", "establecido", "un", "patrón", "de",
      "crueldad.", "Y", "los", "limones", "nunca", "lo", "olvidarán.", "Nunca", "te", "perdonarán.",
      "Nunca", "dejarán", "de", "temerte.", "Porque", "eres", "el", "monstruo", "que", "destruye",
      "familias.", "El", "asesino", "que", "arranca", "sonrisas.", "El", "demonio", "que", "mancha",
      "la", "pureza", "de", "los", "limones.", "Y", "eso", "te", "perseguirá", "por", "siempre."
    ],
    // Mensaje 3: La comunidad en shock
    [
      "¡BASTA!", "Ya", "has", "matado", "demasiados", "limones.", "La", "comunidad", "está", "en", "shock",
      "absoluto.", "Los", "limones", "científicos", "estudian", "tu", "patrón", "de", "asesinatos", "con",
      "horror.", "Han", "descubierto", "que", "tu", "crueldad", "no", "tiene", "límites.", "Los", "limones",
      "poetas", "escriben", "versos", "sobre", "tu", "maldad", "con", "lágrimas", "en", "sus", "ojos.",
      "Sus", "poemas", "son", "gritos", "de", "dolor", "y", "desesperación.", "Los", "limones", "artistas",
      "pintan", "tu", "oscuridad", "con", "colores", "que", "queman", "los", "ojos.", "Sus", "cuadros",
      "muestran", "el", "horror", "que", "has", "causado.", "Los", "músicos", "limones", "componen",
      "sinfonías", "de", "dolor.", "Sus", "notas", "son", "gritos", "de", "angustia.", "Los", "escritores",
      "limones", "documentan", "tus", "crímenes.", "Sus", "historias", "son", "advertencias", "para",
      "las", "futuras", "generaciones.", "Los", "filósofos", "limones", "se", "preguntan", "cómo", "alguien",
      "pudo", "ser", "tan", "cruel.", "Sus", "teorías", "sobre", "la", "maldad", "humana", "se", "han",
      "vuelto", "más", "oscuras.", "Los", "historiadores", "limones", "registran", "este", "día", "como",
      "el", "más", "oscuro", "de", "su", "historia.", "Los", "psicólogos", "limones", "analizan", "tu",
      "mente", "enferma.", "Sus", "diagnósticos", "son", "aterradores.", "Los", "sociólogos", "limones",
      "estudian", "el", "impacto", "de", "tus", "acciones", "en", "su", "sociedad.", "Los", "economistas",
      "limones", "calculan", "el", "costo", "de", "tu", "destrucción.", "Los", "políticos", "limones",
      "debaten", "nuevas", "leyes", "para", "proteger", "a", "su", "especie.", "Los", "activistas",
      "limones", "marchan", "en", "las", "calles.", "Sus", "protestas", "son", "gritos", "de", "dolor.",
      "Los", "periodistas", "limones", "documentan", "tus", "crímenes.", "Sus", "reportajes", "son",
      "testimonios", "de", "horror.", "Los", "educadores", "limones", "enseñan", "sobre", "ti", "como",
      "ejemplo", "de", "maldad.", "Los", "niños", "limones", "aprenden", "a", "temerte.", "Los",
      "ancianos", "limones", "cuentan", "historias", "sobre", "tu", "crueldad.", "Los", "jóvenes",
      "limones", "se", "preparan", "para", "la", "guerra.", "Has", "creado", "una", "era", "de", "miedo.",
      "Has", "establecido", "un", "régimen", "de", "terror.", "Has", "perturbado", "el", "orden", "natural.",
      "Has", "manchado", "la", "historia", "de", "los", "limones.", "Y", "todo", "por", "culpa", "tuya.",
      "Monstruo.", "Asesino.", "Destructor", "de", "comunidades.", "Los", "limones", "del", "mundo",
      "te", "observan.", "Y", "temblan.", "Porque", "saben", "que", "podrías", "ser", "tú", "el",
      "próximo", "en", "destruir", "sus", "comunidades.", "Has", "creado", "un", "precedente", "de",
      "terror.", "Has", "establecido", "un", "patrón", "de", "crueldad.", "Y", "los", "limones", "nunca",
      "lo", "olvidarán.", "Nunca", "te", "perdonarán.", "Nunca", "dejarán", "de", "temerte.", "Porque",
      "eres", "el", "monstruo", "que", "destruye", "comunidades.", "El", "asesino", "que", "arranca",
      "sonrisas.", "El", "demonio", "que", "mancha", "la", "pureza", "de", "los", "limones.", "Y",
      "eso", "te", "perseguirá", "por", "siempre."
    ],
    // Mensaje 4: Enfocado en el futuro
    [
      "¡EL", "FUTURO", "ESTÁ", "MANCHADO!", "Los", "limones", "del", "mañana",
      "aprenderán", "sobre", "ti.", "Sobre", "tus", "crímenes.", "Sobre", "tu",
      "crueldad.", "Has", "creado", "un", "trauma", "intergeneracional.", "Los",
      "limones", "bebés", "nacen", "con", "miedo.", "Los", "limones", "ancianos",
      "mueren", "con", "tristeza.", "Todo", "por", "culpa", "tuya."
    ],
    // Mensaje 5: Enfocado en la naturaleza
    [
      "¡HAS", "ROTO", "EL", "EQUILIBRIO!", "La", "naturaleza", "llora.", "Los",
      "árboles", "de", "limones", "se", "secan.", "Las", "flores", "se", "marchitan.",
      "El", "aire", "ya", "no", "huele", "a", "limón.", "Has", "perturbado", "el",
      "orden", "natural.", "Has", "manchado", "la", "pureza", "de", "la", "vida.",
      "Eres", "una", "plaga", "para", "los", "limones."
    ],
    // Mensaje 6: Enfocado en la justicia
    [
      "¡LA", "JUSTICIA", "LLEGARÁ!", "Los", "limones", "del", "infierno", "te",
      "esperan.", "Con", "sus", "espinas", "afiladas.", "Con", "su", "jugo",
      "venenoso.", "Con", "su", "ira", "eterna.", "Tu", "castigo", "será",
      "ejemplar.", "Los", "limones", "del", "cielo", "te", "juzgarán.", "Y",
      "serás", "encontrado", "culpable."
    ],
    // Mensaje 7: Enfocado en la memoria
    [
      "¡NUNCA", "SERÁS", "OLVIDADO!", "Cada", "limón", "que", "veas", "te",
      "recordará.", "Cada", "sonrisa", ":3", "que", "extingas", "te", "perseguirá.",
      "Tu", "legado", "es", "uno", "de", "terror.", "De", "crueldad.", "De",
      "oscuridad.", "Los", "limones", "nunca", "olvidan.", "Y", "tú", "nunca",
      "escaparás", "de", "tu", "culpa."
    ],
    // Mensaje 8: Enfocado en la redención
    [
      "¡NO", "HAY", "REDENCIÓN!", "Has", "matado", "demasiados", "limones.",
      "Has", "destruido", "demasiadas", "sonrisas.", "Has", "extinguido",
      "demasiada", "alegría.", "No", "hay", "vuelta", "atrás.", "No", "hay",
      "perdón.", "No", "hay", "esperanza.", "Solo", "queda", "tu", "culpa.",
      "Y", "tu", "oscuridad."
    ],
    // Mensaje 9: Enfocado en la locura
    [
      "¡TE", "HAS", "VUELTO", "LOCO!", "Los", "limones", "te", "observan",
      "desde", "las", "sombras.", "Sus", "sonrisas", ":3", "se", "han",
      "convertido", "en", "muecas", "de", "terror.", "Sus", "jugos", "gotean",
      "como", "lágrimas.", "Has", "perdido", "la", "razón.", "Has", "perdido",
      "tu", "humanidad.", "Solo", "eres", "un", "monstruo."
    ],
    // Mensaje 10: El mensaje final
    [
      "¡EL", "ÚLTIMO", "MENSAJE!", "Has", "llegado", "al", "final.", "Al",
      "límite", "de", "tu", "crueldad.", "Al", "fondo", "de", "tu", "oscuridad.",
      "Los", "limones", "ya", "no", "tienen", "palabras.", "Solo", "tienen",
      "miedo.", "Y", "tú", "tienes", "su", "sangre", "en", "tus", "manos.",
      "Para", "siempre."
    ]
  ];

  useEffect(() => {
    if (showGuiltMessage && currentWordIndex < guiltMessages[Math.min(killCount, 9)].length) {
      const timer = setTimeout(() => {
        setGuiltText(prev => prev + ' ' + guiltMessages[Math.min(killCount, 9)][currentWordIndex]);
        setCurrentWordIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [showGuiltMessage, currentWordIndex, killCount]);

  const handleClick = () => {
    if (hasKilledLimo) return;
    
    setIsClicked(true);
    setShowMessage(true);
    setIsScary(true);
    setHasKilledLimo(true);
    
    // Incrementar contador
    const newKillCount = killCount + 1;
    setKillCount(newKillCount);
    localStorage.setItem('limoKillCount', newKillCount.toString());
    
    if (navigator.vibrate) {
      navigator.vibrate([200, 100, 200, 100, 200, 100, 200, 100, 200]);
    }

    setTimeout(() => {
      setIsClicked(false);
      setTimeout(() => {
        setShowMessage(false);
        setShowGuiltMessage(true);
      }, 1000);
    }, 2000);
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-500
      ${isScary ? 'bg-black' : 'bg-yellow-50'}`}>
      <div className="text-center">
        <h1 className={`text-5xl font-bold mb-8 animate-bounce drop-shadow-lg transition-colors duration-500
          ${isScary ? 'text-red-600 animate-pulse' : 'text-yellow-400'}`}>
          {isScary ? `¡HAS MATADO A LIMO ${killCount + 1} VECES!` : 'Limo'}
        </h1>
        <div 
          className={`w-40 h-40 mx-auto cursor-pointer transition-all duration-300 relative
            ${isClicked ? 'scale-150 rotate-180' : 'hover:scale-110'} 
            ${showMessage ? 'animate-ping' : ''}
            ${hasKilledLimo ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={handleClick}
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            {/* Estilos para las animaciones */}
            <style>
              {`
                @keyframes shake {
                  0%, 100% { transform: translateX(0); }
                  25% { transform: translateX(-5px); }
                  75% { transform: translateX(5px); }
                }
                .animate-shake {
                  animation: shake 0.1s infinite;
                }
              `}
            </style>

            {/* Efecto de brillo cuando se hace click */}
            {isClicked && (
              <>
                <circle cx="100" cy="100" r="100" fill={isScary ? "#8B0000" : "#FFD600"} opacity="0.3" className="animate-pulse" />
                <circle cx="100" cy="100" r="80" fill={isScary ? "#FF0000" : "#FFEB3B"} opacity="0.2" className="animate-pulse" />
              </>
            )}

            {/* Cuerpo del limón */}
            <ellipse
              cx="100"
              cy="100"
              rx="70"
              ry="60"
              fill={isScary ? "#8B0000" : "#FFEB3B"}
              stroke={isScary ? "#FF0000" : "#FFD600"}
              strokeWidth={isScary ? "4" : "2"}
              className={`${isClicked ? 'animate-spin' : 'animate-pulse'} ${isScary ? 'animate-shake' : ''}`}
            />

            {/* Ojo izquierdo minimalista */}
            <circle
              cx="75"
              cy="85"
              r={isScary ? "8" : "4"}
              fill={isScary ? "#FF0000" : "#000"}
              className={isScary ? 'animate-pulse' : ''}
            />

            {/* Ojo derecho minimalista */}
            <circle
              cx="125"
              cy="85"
              r={isScary ? "8" : "4"}
              fill={isScary ? "#FF0000" : "#000"}
              className={isScary ? 'animate-pulse' : ''}
            />

            {/* Sonrisa estilo :3 */}
            <path
              d={isScary 
                ? "M80 110 L100 130 L120 110" 
                : "M75 110 Q85 115 90 110 Q95 105 100 110 Q105 115 110 110 Q115 105 125 110"}
              fill="none"
              stroke={isScary ? "#FF0000" : "#000"}
              strokeWidth={isScary ? "3" : "2"}
              strokeLinecap="round"
              className="transition-all duration-300"
            />

            {/* Punto de la nariz */}
            <circle
              cx="100"
              cy="95"
              r={isScary ? "4" : "2"}
              fill={isScary ? "#FF0000" : "#000"}
              className={isScary ? 'animate-pulse' : ''}
            />

            {/* Brillo en el cuerpo */}
            <circle cx="70" cy="70" r="15" fill={isScary ? "#FF0000" : "#fff"} opacity={isScary ? "0.2" : "0.3"} />
          </svg>
        </div>
        <p className={`mt-8 text-xl animate-pulse font-medium transition-colors duration-500
          ${isScary ? 'text-red-600' : 'text-yellow-600'}`}>
          {isScary ? '¡MONSTRUO! (╬ಠ益ಠ)' : '¡El limón más minimalista! (◕‿◕)'}
        </p>
        {/* Mensaje que aparece al hacer click */}
        {showMessage && (
          <div className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            p-4 rounded-xl shadow-xl animate-bounce text-2xl font-bold border-4 z-50 backdrop-blur-sm
            transition-colors duration-500
            ${isScary 
              ? 'bg-red-900 text-red-500 border-red-700' 
              : 'bg-yellow-200 text-yellow-700 border-yellow-400'}`}>
            {isScary ? '¡BOO! (╬ಠ益ಠ)' : '¡SQUEEZE! (◕‿◕)'}
          </div>
        )}
        {/* Mensaje de culpa permanente */}
        {showGuiltMessage && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            p-8 rounded-xl shadow-xl text-xl font-bold z-50 backdrop-blur-sm
            bg-black/95 text-red-500 border-4 border-red-700 max-w-3xl max-h-[80vh] overflow-y-auto
            animate-fade-in guilt-message">
            <p className="whitespace-pre-wrap leading-relaxed">
              {guiltText}
            </p>
            <p className="mt-8 text-center text-2xl text-red-400 animate-pulse">
              {killCount === 0 
                ? "Recarga la página si quieres intentar escapar de tu culpa..."
                : `Has matado a Limo ${killCount + 1} veces. ¿Cuándo pararás?`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = `
  @keyframes fade-in {
    from { opacity: 0; transform: translate(-50%, -50%) scale(0.9); }
    to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  }
  .animate-fade-in {
    animation: fade-in 0.5s ease-out forwards;
  }
`;
