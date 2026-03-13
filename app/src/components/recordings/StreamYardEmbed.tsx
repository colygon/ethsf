"use client";

interface StreamYardEmbedProps {
  embedId: string;
  title?: string;
}

export function StreamYardEmbed({ embedId, title = "Recording" }: StreamYardEmbedProps) {
  return (
    <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
      <iframe
        src={`https://streamyard.com/e/${embedId}`}
        title={title}
        allowFullScreen
        className="absolute inset-0 w-full h-full rounded-card"
        style={{ border: "none" }}
      />
    </div>
  );
}
