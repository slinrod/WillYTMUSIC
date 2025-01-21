import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Menu, Search, Cast, MoreVertical, Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import cancion1 from './assets/audio/cancion1.mp3';
import cancion2 from './assets/audio/cancion2.mp3';
import cancion3 from './assets/audio/cancion3.mp3';
import cancion4 from './assets/audio/cancion4.mp3';
import cancion5 from './assets/audio/cancion5.mp3';
import cancion6 from './assets/audio/cancion6.mp3';
import cancion7 from './assets/audio/cancion7.mp3';
import cancion8 from './assets/audio/cancion8.mp3';

const firebaseConfig = {
  apiKey: "AIzaSyAzMJCTJY5rH090QTKmL3A56pLOSm38RwM",
  authDomain: "proyectofinalxd-d98ef.firebaseapp.com",
  projectId: "proyectofinalxd-d98ef",
  storageBucket: "proyectofinalxd-d98ef.appspot.com",
  messagingSenderId: "1093691744006",
  appId: "1:1093691744006:web:07a79d6ca6559ab7720887",
  measurementId: "G-2907KQ3YF7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const API_BASE_URL = 'https://youtube-music-api-yt.p.rapidapi.com';
const API_KEY = '0c96084f29msh17a28299a9a08707p1e39adjsn47967945c4b1';

const tracks = [
  {
    url: cancion1,
    title: "Take Me to the Beach (con Ado)",
    tags: ["house"],
  },
  {
    url: cancion2,
    title: "Beeper Funk (Super Slowed)",
    tags: ["dnb"],
  },
  {
    url: cancion3,
    title: "Dive!! / A-One",
    tags: ["dubstep"],
  },
  {
    url: cancion4,
    title: "X-Slide",
    tags: ["funk"],
  },
  {
    url: cancion5,
    title: "El Cuarteto de Nos - Invisible",
    tags: ["rock"],
  },
  {
    url: cancion6,
    title: "Capital Cities - Safe And Sound (Lyrics)",
    tags: ["pop"],
  },
  {
    url: cancion7,
    title: "Shape of You",
    tags: ["pop"],
  },
  {
    url: cancion8,
    title: "Thunder",
    tags: ["rock"],
  }
];

const musicVideos = [
  {
    id: 1,
    title: "Take Me to the Beach (con Ado)",
    artist: "Sencillo • Imagine Dragons",
    views: "1.2M",
    thumbnail: "https://i.ytimg.com/vi/7HLrviPwEaU/maxresdefault.jpg",
    audioUrl: cancion1
  },
  {
    id: 2,
    title: "Beeper Funk (Super Slowed)",
    artist: "Sencillo • DJ Paulinho",
    views: "856K",
    thumbnail: "https://i.ytimg.com/vi/YT7V-WYBAN0/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGC0gcigTMA8=&rs=AOn4CLDxlpJpTsBFOsrE9qU5thEo-d_BpA",
    audioUrl: cancion2
  },
  {
    id: 3,
    title: "Dive!! / A-One (The Strongest Battlegrounds KJ's Official Theme Song)",
    artist: "A-One Official",
    views: "2.9 M",
    thumbnail: "https://i.ytimg.com/vi/4ZvnbsfXRk0/maxresdefault.jpg",
    audioUrl: cancion3
  },
  {
    id: 4,
    title: "X-Slide",
    artist: "Sencillo • 2KE y 808full",
    views: "1.8M",
    thumbnail: "https://i.ytimg.com/vi/eLZDDRDMPbI/maxresdefault.jpg",
    audioUrl: cancion4
  },
  {
    id: 5,
    title: "El Cuarteto de Nos - Invisible",
    artist: "Cuarteto de Nos ",
    views: "18.M",
    thumbnail: "https://i.ytimg.com/vi/7qdgPw0wyKY/maxresdefault.jpg",
    audioUrl: cancion5
  },
  {
    id: 6,
    title: "Capital Cities - Safe And Sound (Lyrics)",
    artist: "ChoyLyrics",
    views: "10M",
    thumbnail: "https://i.ytimg.com/vi/47dtFZ8CFo8/maxresdefault.jpg",
    audioUrl: cancion6
  },
  {
    id: 7,
    title: "Shape of You",
    artist: "Ed Sheeran",
    views: "5.8B",
    thumbnail: "https://i.ytimg.com/vi/Vds8ddYXYZY/maxresdefault.jpg",
    audioUrl: cancion7
  },
  {
    id: 8,
    title: "Thunder",
    artist: "Imagine Dragons",
    views: "2.1B",
    thumbnail: "https://i.ytimg.com/vi/fKopy74weus/maxresdefault.jpg",
    audioUrl: cancion8
  }
];

const ExploreView = () => {
  const sections = [
    {
      title: "Nuevos lanzamientos",
      icon: "⭐",
      background: "bg-gradient-to-r from-purple-600 to-blue-600"
    },
    {
      title: "Rankings",
      icon: "📈",
      background: "bg-gradient-to-r from-green-600 to-teal-600"
    },
    {
      title: "Estados de ánimo y géneros",
      icon: "🎵",
      background: "bg-gradient-to-r from-gray-700 to-gray-900"
    }
  ];

  const newReleases = musicVideos.slice(0, 5);

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {sections.map((section, index) => (
          <div 
            key={index}
            className={`${section.background} rounded-xl p-6 cursor-pointer hover:opacity-90 transition-opacity`}
          >
            <div className="text-4xl mb-4">{section.icon}</div>
            <h2 className="text-2xl font-bold">{section.title}</h2>
          </div>
        ))}
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Álbumes y sencillos nuevos</h2>
          <div className="flex items-center gap-2">
            <button className="px-4 py-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              Más
            </button>
            <ChevronLeft className="w-8 h-8 p-1 hover:bg-white/10 rounded-full cursor-pointer" />
            <ChevronRight className="w-8 h-8 p-1 hover:bg-white/10 rounded-full cursor-pointer" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {newReleases.map((release) => (
            <div key={release.id} className="cursor-pointer group">
              <div className="relative mb-2">
                <img 
                  src={release.thumbnail}
                  alt={release.title}
                  className="w-full aspect-square object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Play fill="white" size={24} />
                  </div>
                </div>
              </div>
              <h3 className="font-medium line-clamp-2">{release.title}</h3>
              <p className="text-sm text-gray-400">{release.artist}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const YouTubeMusicClone = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [user, setUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentView, setCurrentView] = useState('principal');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const audioRef = useRef(new Audio());

  const categories = [
    "Entrenamiento", "Relajación", "Energía", "Fiesta", 
    "Para sentirte bien", "Triste", "Romance", "Viaje diario", "Concentración"
  ];

  const handleCategoryClick = useCallback((category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  }, [selectedCategory]);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setError(error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setUser(null);
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
      setError(error.message);
    }
  };

  const searchSongs = async (query) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${API_BASE_URL}/search?q=${encodeURIComponent(query)}`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'youtube-music-api-yt.p.rapidapi.com',
          'X-RapidAPI-Key': API_KEY
        }
      });

      if (!response.ok) {
        throw new Error('Error al buscar canciones');
      }

      const data = await response.json();
      return data;
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = useCallback(async (event) => {
    const query = event.target.value;
    setSearchTerm(query);

    if (query.length > 2) {
      const results = await searchSongs(query);
      if (results?.content) {
        const formattedResults = results.content.map((item) => ({
          id: item.videoId || Math.random().toString(),
          title: item.title || 'Sin título',
          artist: item.artist?.name ? `Artista • ${item.artist.name}` : 'Artista desconocido',
          views: item.viewCount ? `${Math.floor(item.viewCount / 1000)}K` : '0 views',
          thumbnail: item.thumbnail || '/api/placeholder/400/320',
          duration: item.duration
        }));
        setSearchResults(formattedResults);
      }
    } else {
      setSearchResults([]);
    }
  }, []);

  const handlePlayPause = useCallback(() => {
    if (currentSong) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.error('Error al reproducir audio:', error);
          setError('Error al reproducir la canción');
        });
      }
      setIsPlaying(!isPlaying);
    }
  }, [currentSong, isPlaying]);

  const handleSongSelect = useCallback((video) => {
    if (isPlaying) {
      audioRef.current.pause();
    }

    if (!video.audioUrl) {
      setError('URL de audio no disponible');
      return;
    }

    setCurrentSong(video);
    audioRef.current.src = video.audioUrl;
    audioRef.current.load();
    audioRef.current.play().catch(error => {
      console.error('Error al reproducir audio:', error);
      setError('Error al reproducir la canción');
    });
    setIsPlaying(true);
  }, [isPlaying]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
    };
  }, []);

  const displayVideos = searchTerm.length > 2 ? searchResults : musicVideos;

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="text-center text-red-500 p-4">
          {error}
        </div>
      );
    }

    return currentView === 'explorar' ? (
      <ExploreView />
    ) : (
      <>
        <div className="overflow-x-auto whitespace-nowrap py-4 px-6 mb-4">
          <div className="flex space-x-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-white text-black'
                    : 'bg-white/10 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
            {displayVideos.map((video) => (
              <div 
                key={video.id} 
                className="group relative cursor-pointer"
                onClick={() => handleSongSelect(video)}
              >
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Play fill="white" size={40} />
                  </div>
                </div>
                <div className="mt-2">
                  <h3 className="font-semibold line-clamp-2">{video.title}</h3>
                  <p className="text-sm text-gray-400 mt-1">
                    {video.artist} • {video.views}
                    {video.duration && ` • ${video.duration}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      );
    };
  
    return (
      <div className="min-h-screen bg-black text-white">
        <header className="flex items-center justify-between p-4 bg-black">
          <div className="flex items-center gap-4">
            <Menu className="w-6 h-6 cursor-pointer hover:text-gray-300" />
            <div className="flex items-center">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <Play fill="white" size={16} />
              </div>
              <span className="ml-2 font-semibold">YouTube Music</span>
            </div>
          </div>
  
          <div className="flex-1 max-w-2xl mx-8">
            <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
              <Search className="w-5 h-5 text-gray-400" />
              <input 
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Buscar canciones, álbumes, artistas o podcasts"
                className="bg-transparent w-full ml-3 outline-none text-white"
              />
            </div>
          </div>
  
          <div className="flex items-center gap-4">
            <Cast className="w-6 h-6 cursor-pointer hover:text-gray-300" />
            <MoreVertical className="w-6 h-6 cursor-pointer hover:text-gray-300" />
            {user ? (
              <div className="flex items-center gap-2">
                <img 
                  src={user.photoURL}
                  alt="Profile" 
                  className="w-8 h-8 rounded-full"
                />
                <button 
                  onClick={handleLogout}
                  className="px-6 py-2 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors"
                >
                  Cerrar sesión
                </button>
              </div>
            ) : (
              <button 
                onClick={handleLogin}
                className="px-6 py-2 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors"
              >
                Acceder
              </button>
            )}
          </div>
        </header>
  
        <nav className="px-4 border-b border-white/10">
          <ul className="flex items-center space-x-4">
            <li 
              className={`py-4 px-6 hover:bg-white/10 rounded-lg cursor-pointer transition-colors ${currentView === 'principal' ? 'bg-white/10' : ''}`}
              onClick={() => setCurrentView('principal')}
            >
              Principal
            </li>
            <li 
              className={`py-4 px-6 hover:bg-white/10 rounded-lg cursor-pointer transition-colors ${currentView === 'explorar' ? 'bg-white/10' : ''}`}
              onClick={() => setCurrentView('explorar')}
            >
              Explorar
            </li>
          </ul>
        </nav>
  
        <main className="container mx-auto px-4">
          {renderContent()}
        </main>
  
        {currentSong && (
          <div className="fixed bottom-0 left-0 right-0 bg-black/90 border-t border-white/10 p-4">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
              <div className="flex items-center gap-4">
                <img 
                  src={currentSong.thumbnail} 
                  alt={currentSong.title}
                  className="w-16 h-16 rounded-lg"
                />
                <div>
                  <h4 className="font-medium">{currentSong.title}</h4>
                  <p className="text-sm text-gray-400">{currentSong.artist}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button 
                  className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
                  onClick={handlePlayPause}
                >
                  {isPlaying ? (
                    <Pause fill="black" size={24} />
                  ) : (
                    <Play fill="black" size={24} />
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default YouTubeMusicClone;