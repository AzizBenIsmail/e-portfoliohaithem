import React, { useEffect, useRef, useState } from 'react';
import './BackgroundMusic.css';

// Composant minimal pour musique de fond
// Remarque: placez votre fichier audio doux dans `public/audio/background.mp3`
// ou changez le chemin `audioSrc` ci-dessous.
const audioSrc = '/audio/background.mp3';

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(() => {
    try {
      return localStorage.getItem('bgmusic-muted') === 'true';
    } catch (e) {
      return true; // commencer muet par défaut
    }
  });
  // note: we don't keep a separate "playing" state — audio playback status
  // is controlled directly on the audio element to avoid unused variable lint warnings.

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.loop = true;
    audio.volume = 0.2; // volume par défaut doux
    audio.muted = muted;

    // Si l'utilisateur a déjà autorisé son, tenter de jouer
    if (!muted) {
      const p = audio.play();
      if (p && typeof p.then === 'function') {
        p.catch(() => {});
      }
    }
  }, [muted]);

  const toggleMute = () => {
    const next = !muted;
    setMuted(next);
    try { localStorage.setItem('bgmusic-muted', next); } catch (e) {}
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = next;
    if (!next) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  };

  return (
    <div className="bg-music" aria-hidden={false}>
      <audio ref={audioRef} src={audioSrc} preload="auto" />
      <button
        className="bg-music-btn"
        onClick={toggleMute}
        aria-pressed={!muted}
        aria-label={muted ? 'Activer la musique de fond' : 'Désactiver la musique de fond'}
        title={muted ? 'Activer la musique' : 'Désactiver la musique'}
      >
        {muted ? '🔈' : '🔊'}
      </button>
    </div>
  );
};

export default BackgroundMusic;
