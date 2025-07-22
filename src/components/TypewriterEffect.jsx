import Typewriter from 'typewriter-effect';

export default function TypewriterEffect({
  texts = ["Hello, world!", "I'm Astro!", "Typewriter in loop."],
  autoStart = true,
  loop = true,
  delay = 60,
  className = '',
}) {
  return (
    <span className={className}>
      <Typewriter
        options={{
          strings: texts,
          autoStart,
          loop,
          delay,
          cursor: '_',
          cursorClassName: 'typewriter-underscore',
        }}
      />
      <style>{`
        .typewriter-underscore {
          animation: typewriter-blink 1.2s steps(1) infinite;
        }
        @keyframes typewriter-blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
      `}</style>
    </span>
  );
} 