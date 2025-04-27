import {
  defaultFilmImage,
  defaultArtImage,
  defaultCodeImage,
  defaultGenericImage,
} from "../assets/fallbackImages";

interface VimeoOEmbedResponse {
  type: string;
  version: string;
  provider_name: string;
  provider_url: string;
  title: string;
  author_name: string;
  author_url: string;
  html: string;
  width: number;
  height: number;
  duration: number;
  description: string;
  thumbnail_url: string;
  thumbnail_width: number;
  thumbnail_height: number;
  thumbnail_url_with_play_button: string;
}

export const getVimeoThumbnail = async (videoId: string): Promise<string> => {
  try {
    const url = `https://vimeo.com/api/oembed.json?url=https://vimeo.com/${videoId}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch thumbnail: ${response.status}`);
    }

    const data: VimeoOEmbedResponse = await response.json();
    return data.thumbnail_url;
  } catch (error) {
    console.error("Error fetching Vimeo thumbnail:", error);
    return "";
  }
};

export const extractVimeoId = (url: string): string => {
  const match = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  return match ? match[1] : "";
};

// Default fallback images by project type
export const DEFAULT_IMAGES = {
  FILM: defaultFilmImage,
  ARTIST: defaultArtImage,
  DEVELOPER: defaultCodeImage,
  GENERIC: defaultGenericImage,
};

export const getFallbackImage = (
  projectType: keyof typeof DEFAULT_IMAGES = "GENERIC"
): string => {
  return DEFAULT_IMAGES[projectType] || DEFAULT_IMAGES.GENERIC;
};
