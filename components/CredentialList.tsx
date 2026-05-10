interface CredItem {
  text: string;
  status?: string;
}

interface CredentialListProps {
  title: string;
  items: CredItem[];
}

export default function CredentialList({ title, items }: CredentialListProps) {
  return (
    <div className="mb-11">
      {/* Block heading */}
      <div
        className="font-fraunces font-medium text-[21px] text-navy mb-3.5"
        style={{ letterSpacing: "-0.2px" }}
      >
        {title}
      </div>

      {/* Item list */}
      <ul className="list-none p-0">
        {items.map((item, i) => (
          <li
            key={i}
            className={[
              "relative py-[9px] pl-[22px]",
              "font-inter text-[16px] leading-[1.6] text-[#4B5563]",
              "border-b border-[rgba(27,42,78,0.07)]",
              i === items.length - 1 ? "border-b-0" : "",
              // copper dash decoration
              "before:content-[''] before:absolute before:left-0 before:top-[18px]",
              "before:w-2 before:h-px before:bg-copper",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {item.text}
            {item.status && (
              <>
                {" — "}
                <span
                  className={`font-fraunces italic font-normal text-[14.5px] ${
                    item.status === "Completed" ? "text-sage" : "text-copper"
                  }`}
                >
                  {item.status}
                </span>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
