import { Video } from "lucide-react";

export default function YouTubeEmbed({ url }) {
  // Accepts full YouTube URL or youtu.be link and converts to embed URL
  const videoId =
    url.match(/v=([^&]+)/)?.[1] ||
    url.match(/youtu\.be\/([^?]+)/)?.[1] ||
    url.match(/embed\/([^?]+)/)?.[1];

  const embedUrl = videoId
    ? `https://www.youtube.com/embed/${videoId}`
    : null;

  if (!embedUrl) return <p>Invalid YouTube URL</p>;

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-2">
        <Video className="text-amber-600 mr-3" size={32} />
        <span>Video</span>
      </div>

      <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
        <iframe
          className="absolute inset-0 w-full h-full rounded-xl"
          src={embedUrl}
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}
