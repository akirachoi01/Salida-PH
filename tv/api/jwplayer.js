export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({ key: process.env.JWPLAYER_KEY });
}
