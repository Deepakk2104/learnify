export async function fetchVideo(query) {
  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=1&q=${encodeURIComponent(
        query
      )}&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`
    );
    const data = await res.json();

    const video = data.items?.[0];
    if (!video) return null;

    return {
      title: video.snippet.title,
      videoId: video.id.videoId,
      thumbnail: video.snippet.thumbnails.medium.url,
      url: `https://www.youtube.com/watch?v=${video.id.videoId}`,
    };
  } catch (err) {
    console.error("YouTube API error:", err);
    return null;
  }
}
