// pages/api/download-song.js
export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method not allowed' });
    }
  
    const { songId } = req.body;
  
    try {
      const response = await fetch('https://spotify-downloader9.p.rapidapi.com/downloadSong', {
        method: 'GET',
        headers: {
          'x-rapidapi-key': process.env.RAPIDAPI_KEY,
          'x-rapidapi-host': 'spotify-downloader9.p.rapidapi.com'
        }
      });
  
      if (!response.ok) {
        throw new Error('Error downloading song');
      }
  
      const data = await response.blob();
      res.setHeader('Content-Type', 'audio/mpeg');
      res.send(data);
    } catch (error) {
      res.status(500).json({ message: 'Error downloading song' });
    }
  }