import React, { useState } from "react";
import { cn } from "../../lib/utils/cn";
interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  containerClassName?: string;
  hoverZoom?: boolean;
}
export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt = "Dokumentasi KKN",
  className,
  containerClassName,
  hoverZoom = false,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const fallbackLabel =
    alt
      ?.replace(/^Foto\s+/i, "")
      ?.trim()
      ?.charAt(0)
      ?.toUpperCase() || "K";
  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden bg-zinc-200",
        containerClassName,
      )}
    >
      {" "}
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          onError={() => setHasError(true)}
          className={cn(
            "absolute inset-0 block h-full w-full object-cover object-center",
            "transition-transform duration-500 ease-out",
            hoverZoom && "group-hover:scale-105",
            className,
          )}
          {...props}
        />
      ) : (
        <div
          role="img"
          aria-label={`${alt} - gambar tidak tersedia`}
          className=" absolute inset-0 flex h-full w-full items-center justify-center overflow-hidden bg-zinc-900 "
        >
          {" "}
          <div
            aria-hidden="true"
            className=" pointer-events-none absolute -left-1/4 -top-1/4 h-3/4 w-3/4 rounded-full bg-purple-600/15 blur-2xl "
          />{" "}
          <div
            aria-hidden="true"
            className=" pointer-events-none absolute -bottom-1/4 -right-1/4 h-2/3 w-2/3 rounded-full bg-orange-500/10 blur-2xl "
          />{" "}
          <div
            aria-hidden="true"
            className=" pointer-events-none absolute inset-[10%] rounded-[inherit] border border-white/10 "
          />{" "}
          <div className=" relative z-10 flex h-full w-full flex-col items-center justify-center px-[8%] text-center ">
            {" "}
            <div className=" flex h-[45%] w-[45%] min-h-8 min-w-8 max-h-16 max-w-16 items-center justify-center rounded-full border border-purple-400/40 bg-white/[0.03] shadow-[0_0_30px_rgba(168,85,247,0.15)] ">
              {" "}
              <span className=" font-editorial text-[clamp(0.875rem,5vw,1.875rem)] font-normal leading-none text-white ">
                {" "}
                {fallbackLabel}{" "}
              </span>{" "}
            </div>{" "}
            <div
              aria-hidden="true"
              className=" mt-[6%] h-px w-[25%] min-w-4 max-w-8 bg-gradient-to-r from-purple-500 to-orange-500 "
            />{" "}
            <span className=" mt-[4%] max-w-full truncate font-mono text-[clamp(0.4rem,1.5vw,0.5rem)] uppercase tracking-[0.12em] text-white/30 ">
              {" "}
              Image Not Found{" "}
            </span>{" "}
          </div>{" "}
        </div>
      )}{" "}
    </div>
  );
};
