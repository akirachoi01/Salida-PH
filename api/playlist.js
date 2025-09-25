export default async function handler(req, res) {
  try {
    // URL of your original playlist
    const remoteUrl = "https://www.salidaph.online/freemovie/playlist.m3u8";

    // Fetch latest playlist
    const response = await fetch(remoteUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Vercel Fetch)"
      }
    });

    if (!response.ok) {
      return res.status(response.status).send("Failed to fetch playlist");
    }

    const data = await response.text();

    // Set CORS and content headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/vnd.apple.mpegurl");

    // Return latest playlist
    res.status(200).send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
}
