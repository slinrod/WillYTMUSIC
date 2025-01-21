import { useState, useEffect } from 'react';

const RAPIDAPI_KEY = '0c96084f29msh17a2829a9a08707p1e39adjsn47967945c4b1';
const RAPIDAPI_HOST = 'youtube-music-api-yt.p.rapidapi.com';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': RAPIDAPI_KEY,
    'X-RapidAPI-Host': RAPIDAPI_HOST
  }
};

export const getTrendingVideos = async () => {
  try {
    const response = await fetch(
      'https://youtube-music-api-yt.p.rapidapi.com/trending',
      options
    );
    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error('Error fetching trending videos:', error);
    return [];
  }
};

export const searchVideos = async (query) => {
  try {
    const response = await fetch(
      `https://youtube-music-api-yt.p.rapidapi.com/search?q=${encodeURIComponent(query)}`,
      options
    );
    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error('Error searching videos:', error);
    return [];
  }
};

export const getVideoDetails = async (videoId) => {
  try {
    const response = await fetch(
      `https://youtube-music-api-yt.p.rapidapi.com/video?id=${videoId}`,
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching video details:', error);
    return null;
  }
};

export const getPlaylist = async (playlistId) => {
  try {
    const response = await fetch(
      `https://youtube-music-api-yt.p.rapidapi.com/playlist?list=${playlistId}`,
      options
    );
    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error('Error fetching playlist:', error);
    return [];
  }
};

export const formatViewCount = (viewCount) => {
  if (!viewCount) return '0 vistas';
  
  const views = parseInt(viewCount);
  if (views >= 1000000) {
    return `${(views / 1000000).toFixed(1)}M vistas`;
  } else if (views >= 1000) {
    return `${(views / 1000).toFixed(1)}K vistas`;
  }
  return `${views} vistas`;
};

export const getAudioUrl = async (videoId) => {
  try {
    const response = await fetch(
      `https://youtube-music-api-yt.p.rapidapi.com/audio?id=${videoId}`,
      options
    );
    const data = await response.json();
    return data.audioUrl;
  } catch (error) {
    console.error('Error fetching audio URL:', error);
    return null;
  }
};

export default {
  getTrendingVideos,
  searchVideos,
  getVideoDetails,
  getPlaylist,
  formatViewCount,
  getAudioUrl
};