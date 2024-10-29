import React from "react";

interface Props {
  height?: string;
  weight?: string;
}

export const CircleAnimation: React.FC<Props> = ({height, weight}) => {
  return (
    <div className={`relative ${ weight ? weight :'w-56'} ${ height ? height : 'h-56'}`}>
      {/* Outer Circle - 75% border */}
      <div className="absolute top-0 left-0 w-full h-full rounded-full border-t-orange-500 border-r-orange-500 border-b-orange-500 border-l-transparent border animate-spin-slow" />

      {/* Middle Circle - 75% border, different alignment */}
      <div className="absolute top-[10%] left-[10%] w-[80%] h-[80%] rounded-full border-t-transparent border-l-orange-500 border-b-orange-500 border-r-orange-500 border animate-spin-reverse-slow" />

      {/* Inner Circle - 75% border, different alignment */}
      <div className="absolute top-[20%] left-[20%] w-[60%] h-[60%] rounded-full border-t-orange-500 border-b-orange-500 border-l-transparent border-r-orange-500 border animate-spin-slower" />
    </div>
  );
};
