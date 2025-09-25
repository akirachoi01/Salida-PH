export default function handler(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const path = url.searchParams.get("res"); // hal: 360p, 480p, etc.

  // Initial starting sequence for each resolution
  const startingSequences = {
    "360p": 8000,
    "480p": 8000,
    "720p": 8000,
    "1080p": 8000,
  };

  // Store sequence in memory (ephemeral sa serverless)
  if (!global.sequences) {
    global.sequences = { ...startingSequences };
  }

  // Master playlist request
  if (!path) {
    const masterPlaylist = `#EXTM3U
#EXT-X-VERSION:3
#EXT-X-INDEPENDENT-SEGMENTS
#EXT-X-STREAM-INF:BANDWIDTH=1020800,AVERAGE-BANDWIDTH=985600,CODECS="avc1.4d4028,mp4a.40.2",RESOLUTION=640x360,FRAME-RATE=30.000
/api/playlist?res=360p
#EXT-X-STREAM-INF:BANDWIDTH=1249600,AVERAGE-BANDWIDTH=1205600,CODECS="avc1.4d4028,mp4a.40.2",RESOLUTION=854x480,FRAME-RATE=30.000
/api/playlist?res=480p
#EXT-X-STREAM-INF:BANDWIDTH=2496000,AVERAGE-BANDWIDTH=2405600,CODECS="avc1.4d4028,mp4a.40.2",RESOLUTION=1280x720,FRAME-RATE=30.000
/api/playlist?res=720p
#EXT-X-STREAM-INF:BANDWIDTH=4496000,AVERAGE-BANDWIDTH=4405600,CODECS="avc1.4d4028,mp4a.40.2",RESOLUTION=1920x1080,FRAME-RATE=30.000
/api/playlist?res=1080p
`;
    res.setHeader("Content-Type", "application/vnd.apple.mpegurl");
    return res.status(200).send(masterPlaylist);
  }

  // Variant playlist generator
  const resolution = path;
  const seq = global.sequences[resolution] || startingSequences[resolution];
  global.sequences[resolution] = seq + 1; // auto increment

  const segmentCount = 8; // ilang ts files per refresh
  let playlist = `#EXTM3U
#EXT-X-VERSION:3
#EXT-X-TARGETDURATION:6
#EXT-X-MEDIA-SEQUENCE:${seq}
`;

  for (let i = 0; i < segmentCount; i++) {
    playlist += `#EXTINF:6.00000,\nhttps://${req.headers.host}/segments/${resolution}_segment_${seq + i}.ts\n`;
  }

  res.setHeader("Content-Type", "application/vnd.apple.mpegurl");
  res.status(200).send(playlist);
}
