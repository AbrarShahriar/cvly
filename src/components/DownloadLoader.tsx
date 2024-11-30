import React from "react";

export default function DownloadLoader() {
  const loadingStateTexts = [
    "📋 Setting up the layout...",
    "🔧 Fetching the fonts and styles...",
    "✍️ Injecting your information into the template...",
    "📄 Rendering your resume...",
    "✔️ Download starting...",
  ];

  return (
    <div className="loading-steps">
      {loadingStateTexts.map((state, i) => (
        <p key={i} className="step">
          {state}
        </p>
      ))}
    </div>
  );
}
