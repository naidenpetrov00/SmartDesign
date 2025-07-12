import type { SvgIconColor } from "../../../types/enums";

interface SvgIconProps {
  width: string;
  color: SvgIconColor;
}

const SvgIcon = ({ width, color }: SvgIconProps) => (
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    // height="200.000000pt"
    viewBox="0 0 200.000000 200.000000"
    preserveAspectRatio="xMidYMid meet"
  >
    {" "}
    <g
      transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
      fill={color}
      stroke="none"
    >
      {" "}
      <path d="M565 1616 c-69 -17 -132 -46 -215 -100 -78 -51 -130 -119 -130 -170 1 -59 60 -162 192 -333 43 -56 78 -105 78 -108 0 -3 -75 -5 -166 -5 -145 0 -168 2 -179 17 -8 11 -32 18 -74 21 -56 4 -61 3 -61 -16 0 -28 22 -43 72 -45 33 -2 51 -10 77 -36 99 -94 310 -149 401 -103 44 22 52 66 21 118 -26 43 -26 44 -1 44 10 0 44 9 73 20 42 16 60 18 81 10 18 -6 41 -7 69 0 23 5 44 10 47 10 3 0 5 -66 5 -147 0 -163 12 -209 61 -232 35 -16 86 -14 112 5 31 22 27 34 -7 21 -23 -8 -34 -7 -53 5 -36 23 -49 78 -55 228 l-6 136 109 53 c133 64 212 120 291 204 67 72 108 159 98 207 -17 78 -173 154 -370 180 -90 12 -165 2 -227 -29 l-37 -18 -23 25 c-27 29 -78 52 -110 51 -13 0 -45 -6 -73 -13z m170 -56 c41 -34 -17 -179 -116 -284 -55 -60 -57 -64 -43 -84 8 -12 24 -22 34 -22 27 0 95 84 141 175 36 71 40 86 37 137 l-4 57 100 3 c263 8 446 -38 477 -120 29 -75 -78 -196 -276 -314 -57 -34 -160 -88 -168 -88 -2 0 5 48 16 108 20 117 55 229 93 307 l25 50 -21 17 c-33 26 -56 22 -78 -15 -30 -47 -63 -127 -53 -127 5 0 14 14 20 32 20 58 19 24 -5 -92 -13 -63 -29 -157 -36 -209 -12 -92 -13 -94 -45 -107 -42 -18 -64 -18 -40 0 9 7 17 16 17 19 0 9 -93 -24 -112 -41 -10 -8 -48 -23 -85 -34 l-68 -19 -58 63 c-86 92 -185 227 -204 276 -21 55 -7 107 44 163 45 50 167 126 241 150 62 21 141 20 167 -1z m259 -102 c-5 -7 -9 -21 -9 -30 0 -21 -20 -19 -21 2 0 8 7 22 15 31 18 19 27 17 15 -3z m-475 -613 c11 -43 3 -62 -30 -76 -71 -29 -230 14 -293 80 l-25 26 170 0 170 1 8 -31z" />{" "}
      <path d="M1093 983 c-18 -7 -16 -30 4 -37 21 -8 38 8 30 28 -7 16 -13 18 -34 9z" />{" "}
      <path d="M1683 974 c-8 -21 13 -42 28 -27 13 13 5 43 -11 43 -6 0 -13 -7 -17 -16z" />{" "}
      <path d="M1330 945 c0 -8 -4 -15 -10 -15 -5 0 -10 -7 -10 -15 0 -8 5 -15 10 -15 6 0 10 -22 10 -49 0 -51 9 -61 51 -61 12 0 19 7 19 20 0 13 -5 18 -15 14 -12 -5 -15 3 -15 35 0 28 4 41 14 41 8 0 16 7 20 15 4 10 -1 15 -14 15 -11 0 -20 7 -20 15 0 8 -9 15 -20 15 -11 0 -20 -7 -20 -15z" />{" "}
      <path d="M1230 932 c-8 -3 -18 -10 -22 -16 -5 -8 -8 -7 -8 2 0 6 -11 12 -25 12 -26 0 -26 -1 -23 -67 3 -60 5 -68 23 -68 17 0 21 8 25 50 4 42 8 50 25 50 17 0 20 -7 20 -47 0 -37 4 -48 18 -52 23 -6 29 10 25 69 -3 50 -27 78 -58 67z" />{" "}
      <path d="M1080 866 c0 -67 7 -80 34 -70 13 5 16 20 15 70 -1 60 -3 64 -25 64 -23 0 -24 -3 -24 -64z" />{" "}
      <path d="M1426 908 c-23 -32 -20 -65 9 -93 26 -27 54 -31 86 -14 26 13 13 32 -16 25 -26 -7 -55 1 -55 15 0 5 23 9 50 9 41 0 50 3 50 18 0 36 -29 62 -70 62 -29 0 -43 -6 -54 -22z" />{" "}
      <path d="M1572 863 c2 -53 6 -68 18 -68 10 0 17 14 20 45 4 34 10 47 28 55 12 5 22 15 22 22 0 19 -27 16 -39 -4 -10 -17 -10 -17 -11 0 0 10 -8 17 -20 17 -19 0 -21 -5 -18 -67z" />{" "}
      <path d="M1680 859 c0 -62 2 -70 18 -67 14 3 18 16 20 71 3 62 1 67 -18 67 -18 0 -20 -6 -20 -71z" />{" "}
      <path d="M1766 917 c-11 -8 -18 -27 -19 -51 -2 -64 59 -97 111 -60 27 18 31 84 6 108 -19 19 -74 21 -98 3z m72 -53 c2 -22 -2 -33 -13 -38 -25 -9 -35 2 -35 40 0 31 3 35 23 32 17 -2 23 -11 25 -34z" />{" "}
      <path d="M1905 863 c1 -66 3 -69 35 -64 6 0 10 19 10 41 0 29 5 43 20 52 11 7 20 18 20 25 0 16 -12 17 -28 1 -9 -9 -12 -9 -12 0 0 7 -10 12 -23 12 -21 0 -22 -4 -22 -67z" />{" "}
      <path d="M1262 585 c3 -46 0 -53 -19 -34 -19 19 -57 6 -71 -24 -28 -58 29 -134 73 -97 11 9 15 10 15 1 0 -7 9 -11 21 -9 19 3 20 10 22 102 1 96 0 99 -22 103 -22 3 -23 0 -19 -42z m-7 -95 c0 -28 -4 -35 -20 -35 -13 0 -21 8 -23 23 -5 34 5 54 25 50 13 -2 18 -13 18 -38z" />{" "}
      <path d="M1620 595 c0 -21 30 -31 40 -14 11 17 3 29 -21 29 -10 0 -19 -7 -19 -15z" />{" "}
      <path d="M1345 540 c-26 -29 -24 -79 4 -102 25 -19 67 -23 91 -8 20 13 4 25 -32 25 -17 0 -33 6 -35 13 -3 8 9 12 41 12 42 0 46 2 46 23 0 52 -79 77 -115 37z m75 -19 c0 -5 -11 -11 -25 -13 -17 -4 -25 -1 -25 8 0 8 11 14 25 14 14 0 25 -4 25 -9z" />{" "}
      <path d="M1492 548 c-26 -26 -9 -62 32 -69 11 -2 21 -10 24 -18 4 -11 -2 -13 -26 -8 -34 7 -54 -9 -31 -24 20 -13 73 -11 87 3 25 25 14 56 -23 68 -42 14 -47 35 -6 27 34 -7 45 1 30 20 -14 16 -71 17 -87 1z" />{" "}
      <path d="M1620 490 c0 -63 2 -70 20 -70 18 0 20 7 20 70 0 63 -2 70 -20 70 -18 0 -20 -7 -20 -70z" />{" "}
      <path d="M1703 548 c-19 -25 -23 -52 -12 -85 12 -38 49 -54 75 -32 14 12 16 11 12 -6 -3 -16 -12 -20 -42 -20 -47 0 -59 -21 -19 -32 37 -9 64 -5 86 14 13 13 17 32 17 95 0 71 -2 78 -20 78 -11 0 -20 -5 -20 -12 0 -9 -3 -9 -12 0 -16 16 -53 15 -65 0z m72 -38 c9 -27 -3 -60 -21 -60 -20 0 -34 40 -22 63 12 23 35 22 43 -3z" />{" "}
      <path d="M1850 490 c0 -69 0 -70 26 -70 24 0 26 3 20 30 -7 37 8 80 29 80 12 0 15 -12 15 -55 0 -52 1 -55 25 -55 23 0 25 4 25 44 0 64 -14 96 -43 96 -13 0 -29 -6 -36 -12 -11 -10 -14 -10 -18 0 -3 6 -13 12 -24 12 -17 0 -19 -8 -19 -70z" />{" "}
    </g>{" "}
  </svg>
  // <svg
  //   xmlns="http://www.w3.org/2000/svg"
  //   xmlnsXlink="http://www.w3.org/1999/xlink"
  //   id="svg2"
  //   width={width}
  //   // height="102.667"
  //   version="1.1"
  //   viewBox="0 0 366.667 102.667"
  // >
  //   <g id="g8" transform="matrix(1.33333 0 0 -1.33333 0 102.667)">
  //     <g id="g10" transform="scale(.1)">
  //       <g id="g12" transform="matrix(2743.2 0 0 763.2 1.732 1.732)">
  //         <image
  //           xlinkHref="data:image/png;base64,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"
  //           id="image14"
  //           width="1"
  //           height="1"
  //           imageRendering="optimizeSpeed"
  //           preserveAspectRatio="none"
  //           transform="matrix(1 0 0 -1 0 1)"
  //         ></image>
  //       </g>
  //     </g>
  //   </g>
  // </svg>
);

export default SvgIcon;
