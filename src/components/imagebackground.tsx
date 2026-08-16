import React from "react";

interface SectionImageBackgroundProps {
  children: React.ReactNode;
}

function SectionImageBackground({ children }: SectionImageBackgroundProps) {
  return (
    <div className="section-image-wrapper">
      <div className="section-image-overlay" />
      <div className="section-image-content">{children}</div>
    </div>
  );
}

export default SectionImageBackground;