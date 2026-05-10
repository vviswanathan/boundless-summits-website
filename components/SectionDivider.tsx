const bgMap = {
  cream: "bg-cream",
  "cream-deep": "bg-cream-deep",
  "cream-warmer": "bg-cream-warmer",
} as const;

interface Props {
  bg: keyof typeof bgMap;
}

export default function SectionDivider({ bg }: Props) {
  return (
    <div className={`flex justify-center py-8 ${bgMap[bg]}`}>
      <span className="w-16 h-px bg-copper opacity-40" />
    </div>
  );
}
