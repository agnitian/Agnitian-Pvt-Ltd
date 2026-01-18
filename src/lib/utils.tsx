import clsx from "clsx";

export function cn(...inputs: (string | undefined | boolean)[]) {
    return clsx(...inputs);
}

export function createPageUrl(page: string): string {
    const pageMap: Record<string, string> = {
        'Home': '/',
        'Products': '/products',
        'Solutions': '/solutions',
        'Blogs': '/blog',
        'About': '/about',
    };
    return pageMap[page] || '/';
}


export default function AgnitianText({
  color = '#000000',
}: {
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 1200 220"
      className="h-12 w-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* STEP SCANLINE MASK */}
        <mask id="step-scan">
          <rect width="100%" height="100%" fill="white" />

          {/* Bottom slicing */}
          <g fill="black">
            <rect y="130" width="100%" height="6" />
            <rect y="145" width="95%" height="6" />
            <rect y="160" width="88%" height="6" />
            <rect y="175" width="80%" height="6" />
            <rect y="190" width="70%" height="6" />
          </g>
        </mask>
      </defs>

      {/* MAIN TEXT */}
      <text
        x="50%"
        y="60%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="120"
        fontWeight="900"
        letterSpacing="16"
        fill={color}
        mask="url(#step-scan)"
        style={{
          fontFamily: 'Korataki, sans-serif',
        }}
      >
        AGNITIAN
      </text>
    </svg>
  );
}



