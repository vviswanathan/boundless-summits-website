const stars = [
  { size: 2, top: 12, left: 8,  delay: 0 },
  { size: 1, top: 22, left: 78, delay: 1 },
  { size: 2, top: 68, left: 88, delay: 2 },
  { size: 1, top: 75, left: 6,  delay: 1.5 },
  { size: 2, top: 35, left: 92, delay: 0.5 },
  { size: 1, top: 82, left: 65, delay: 2.5 },
  { size: 2, top: 50, left: 4,  delay: 3 },
  { size: 1, top: 18, left: 50, delay: 3.5 },
  { size: 1, top: 88, left: 30, delay: 1.2 },
  { size: 2, top: 60, left: 12, delay: 2.2 },
  { size: 1, top: 28, left: 18, delay: 0.8 },
  { size: 1, top: 78, left: 80, delay: 1.8 },
];

export default function StarField() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {stars.map((s, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            width: s.size,
            height: s.size,
            top: `${s.top}%`,
            left: `${s.left}%`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
