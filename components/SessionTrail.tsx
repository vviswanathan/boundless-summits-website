const stations = [
  {
    number: "One",
    title: "Where we're going",
    desc: (
      <>
        The session opens with a clear agreement on what you want from our time
        together. Not a topic — an outcome. Something specific enough that, at
        the end, we both know whether we got there.
      </>
    ),
  },
  {
    number: "Two",
    title: "What's in the way",
    desc: (
      <>
        We name the obstacle honestly. Sometimes it&apos;s a fear, sometimes a
        habit, sometimes a belief that&apos;s been quietly running the show. We
        don&apos;t rush past it.
      </>
    ),
  },
  {
    number: "Three",
    title: "What's possible",
    desc: (
      <>
        This is where the breakthroughs live. We explore options — including
        ones outside your comfort zone — without committing yet. Most of the{" "}
        <em>aha</em> moments happen here.
      </>
    ),
  },
  {
    number: "Four",
    title: "What we're taking with us",
    desc: (
      <>
        Before the session ends, you name what mattered most. The insights that
        landed. The shifts that surfaced. Writing them down is how the wisdom
        moves into the rest of your life.
      </>
    ),
  },
  {
    number: "Five",
    title: "What's next",
    desc: (
      <>
        You leave with two to four commitments for the next two weeks. Specific.
        Doable. Chosen by you, not assigned by me. The space between sessions is
        where the real work happens.
      </>
    ),
  },
];

export default function SessionTrail() {
  return (
    <div className="mt-7">
      {/* SVG Trail — hidden on narrow viewports */}
      <div className="my-7 max-[900px]:hidden">
        <svg
          viewBox="0 0 1000 140"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block overflow-visible"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="trailGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#B87333" stopOpacity="0.55" />
              <stop offset="50%" stopColor="#B87333" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#B87333" stopOpacity="0.55" />
            </linearGradient>
            <radialGradient id="stationGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#B87333" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#B87333" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Meandering dashed trail */}
          <path
            d="M 60 90
               C 130 60, 200 100, 260 70
               S 380 90, 440 60
               S 580 100, 640 70
               S 780 50, 840 80
               S 940 60, 960 70"
            fill="none"
            stroke="url(#trailGrad)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="6 8"
            opacity="0.9"
          />

          {/* Station 1 — cx=80, cy=88 */}
          <circle cx="80" cy="88" r="22" fill="url(#stationGlow)" />
          <circle cx="80" cy="88" r="10" fill="#FAF6EE" stroke="#B87333" strokeWidth="1.5" />
          <circle cx="80" cy="88" r="3" fill="#B87333" />

          {/* Station 2 — cx=270, cy=68 */}
          <circle cx="270" cy="68" r="22" fill="url(#stationGlow)" />
          <circle cx="270" cy="68" r="10" fill="#FAF6EE" stroke="#B87333" strokeWidth="1.5" />
          <circle cx="270" cy="68" r="3" fill="#B87333" />

          {/* Station 3 — summit, cx=475, cy=80 */}
          <circle cx="475" cy="80" r="26" fill="url(#stationGlow)" />
          <circle cx="475" cy="80" r="12" fill="#FAF6EE" stroke="#B87333" strokeWidth="1.5" />
          <circle cx="475" cy="80" r="4" fill="#B87333" />
          <g transform="translate(475, 80)" opacity="0.45">
            <line x1="0" y1="-18" x2="0" y2="-22" stroke="#B87333" strokeWidth="1" />
            <line x1="0" y1="18" x2="0" y2="22" stroke="#B87333" strokeWidth="1" />
            <line x1="-18" y1="0" x2="-22" y2="0" stroke="#B87333" strokeWidth="1" />
            <line x1="18" y1="0" x2="22" y2="0" stroke="#B87333" strokeWidth="1" />
          </g>

          {/* Station 4 — cx=680, cy=70 */}
          <circle cx="680" cy="70" r="22" fill="url(#stationGlow)" />
          <circle cx="680" cy="70" r="10" fill="#FAF6EE" stroke="#B87333" strokeWidth="1.5" />
          <circle cx="680" cy="70" r="3" fill="#B87333" />

          {/* Station 5 — destination, cx=920, cy=70 */}
          <circle cx="920" cy="70" r="22" fill="url(#stationGlow)" />
          <circle cx="920" cy="70" r="10" fill="#FAF6EE" stroke="#B87333" strokeWidth="1.5" />
          <g transform="translate(920, 70)" fill="#B87333">
            <path d="M 0 -5 L 1 -1 L 5 0 L 1 1 L 0 5 L -1 1 L -5 0 L -1 -1 Z" />
          </g>

          {/* Atmospheric stars */}
          <g opacity="0.35" fill="#B87333">
            <circle cx="160" cy="25" r="1" />
            <circle cx="380" cy="20" r="0.8" />
            <circle cx="560" cy="30" r="1" />
            <circle cx="780" cy="18" r="0.8" />
            <circle cx="860" cy="35" r="1" />
          </g>
        </svg>
      </div>

      {/* Station description grid */}
      <div
        className={[
          "grid gap-y-9",
          /* ≥900px: 5 columns, no left-border, top padding */
          "min-[900px]:grid-cols-5 min-[900px]:gap-x-6 min-[900px]:mt-[50px]",
          /* <900px: 1 column, copper left-border on each card */
          "max-[899px]:grid-cols-1 max-[899px]:gap-y-9",
        ]
          .join(" ")}
      >
        {stations.map(({ number, title, desc }) => (
          <div
            key={number}
            className={[
              /* mobile only: left border + padding */
              "max-[899px]:border-l-2 max-[899px]:border-copper max-[899px]:pl-9",
            ].join(" ")}
          >
            <div
              className="font-fraunces italic font-light text-[13px] text-copper mb-2"
              style={{ letterSpacing: "1px" }}
            >
              {number}
            </div>
            <div
              className="font-fraunces italic text-[19px] text-navy leading-[1.3] mb-3.5"
              style={{ letterSpacing: "-0.2px" }}
            >
              {title}
            </div>
            <p className="font-inter text-[14.5px] leading-[1.65] text-[#4B5563]">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
