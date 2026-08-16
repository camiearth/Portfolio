import React from "react";

interface SectionVideoBackgroundProps {
  videoSrc: string;
  overlayOpacityTop?: number;
  overlayOpacityBottom?: number;
  children: React.ReactNode;
}

function SectionVideoBackground({
  videoSrc,
  overlayOpacityTop = 0.5,
  overlayOpacityBottom = 0.85,
  children,
}: SectionVideoBackgroundProps) {
  return (
    <div className="section-video-wrapper">
      <video className="section-video" autoPlay muted loop playsInline preload="none">
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div
        className="section-video-overlay"
        style={{
          background: `linear-gradient(180deg, rgba(13,17,22,${overlayOpacityTop}) 0%, rgba(13,17,22,${overlayOpacityBottom}) 100%)`,
        }}
      />
      <div className="section-video-content">{children}</div>
    </div>
  );
}

export default SectionVideoBackground;