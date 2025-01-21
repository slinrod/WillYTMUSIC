// En tu componente principal, donde muestras los videos:
import MusicDownloader from './MusicDownloader';

// Dentro del renderizado de cada video:
<div className="mt-2">
  <MusicDownloader 
    songId={video.id} 
    title={video.title}
  />
</div>