import React, { useState, useEffect } from "react";
import ProjectGallery from "../Project/ProjectGallery";
import Modal from "../Modal/Modal";
import "./About.css";
import "../styles/Shared.css";
import { Project } from "../Project/ProjectGallery";
import {
  extractVimeoId,
  getVimeoThumbnail,
  getFallbackImage,
} from "../../utils/videoUtils";

interface EnhancedProject extends Project {
  thumbnailLoaded?: boolean;
}

const filmEditorProjects: EnhancedProject[] = [
  {
    title: '"Kiki": Award-Winning Feature Documentary',
    description: "Trailer for an award-winning feature-length documentary film.",
    image: getFallbackImage("FILM"),
    url: "https://player.vimeo.com/video/1057333638",
  },
  {
    title: '"Pair or Odd": Short Documentary',
    description: "Documentary film at Bezalel.",
    image: getFallbackImage("FILM"),
    url: "https://player.vimeo.com/video/691631811",
  },
  {
      title: "\"Don't Be a Fish\":Student Short Film",
      description: "Student short film.",
      image: getFallbackImage("FILM"),
      url: "https://player.vimeo.com/video/775973776",
  },
];

const promoEditorProjects: EnhancedProject[] = [
  {
    title: "Shakuf & The Seventh Eye",
    description: "Video for Shakuf & The Seventh Eye.",
    image: getFallbackImage("FILM"),
    url: "https://player.vimeo.com/video/1057297015",
  },
  {
    title: "Labor Party Promo",
    description: "Promotional video for the Labor Party.",
    image: getFallbackImage("FILM"),
    url: "https://player.vimeo.com/video/1057304439",
  },
  {
    title: "Weekly Recap Video",
    description: "Weekly recap video.",
    image: getFallbackImage("FILM"),
    url: "https://player.vimeo.com/video/1057303842",
  },
  {
    title: "Ort Hatzor HaGlilit Promo",
    description: "Promotional video for Ort Hatzor HaGlilit School.",
    image: getFallbackImage("FILM"),
    url: "https://player.vimeo.com/video/1057304254",
  },
  {
    title: "Sample Wedding Video",
    description: "Sample wedding video.",
    image: getFallbackImage("FILM"),
    url: "https://player.vimeo.com/video/1057302984",
  },
  {
    title: "The Secular Yeshiva",
    description: "Short promotional video about the secular yeshiva.",
    image: getFallbackImage("FILM"),
    url: "https://player.vimeo.com/video/837674779",
  },
];

const FilmEditing: React.FC = () => {
  const [selectedProject, setSelectedProject] =
    useState<EnhancedProject | null>(null);
  const [filmProjects, setFilmProjects] = useState<EnhancedProject[]>(
    filmEditorProjects
  );
  const [promoProjects, setPromoProjects] = useState<EnhancedProject[]>(
    promoEditorProjects
  );

  useEffect(() => {
    const loadThumbnails = async (
      projects: EnhancedProject[],
      setProjects: React.Dispatch<React.SetStateAction<EnhancedProject[]>>
    ) => {
      const updatedProjects = await Promise.all(
        projects.map(async (project) => {
          if (!project.thumbnailLoaded && project.url) {
            const videoId = extractVimeoId(project.url);
            if (videoId) {
              try {
                const thumbnailUrl = await getVimeoThumbnail(videoId);
                return {
                  ...project,
                  image: thumbnailUrl || project.image,
                  thumbnailLoaded: true,
                };
              } catch (error) {
                // Keep fallback image if thumbnail fails to load
                return {
                  ...project,
                  thumbnailLoaded: true,
                };
              }
            }
          }
          return project;
        })
      );
      setProjects(updatedProjects);
    };
    loadThumbnails(filmProjects, setFilmProjects);
    loadThumbnails(promoProjects, setPromoProjects);
    // eslint-disable-next-line
  }, []);

  const handleProjectClick = (project: Project): void => {
    setSelectedProject(project as EnhancedProject);
  };

  const handleCloseModal = (): void => {
    setSelectedProject(null);
  };

  const getPrivacyEnhancedUrl = (url: string): string => {
    const dntParam = url.includes("?") ? "&dnt=1" : "?dnt=1";
    return `${url}${dntParam}&controls=1&transparent=0`;
  };

  return (
    <>
      <div>
        <ProjectGallery
          title="Films Editor"
          projects={filmProjects}
          onProjectClick={handleProjectClick}
        />
        <ProjectGallery
          title="Promotional Videos Editor"
          projects={promoProjects}
          onProjectClick={handleProjectClick}
        />
      </div>
      <Modal isOpen={!!selectedProject} onClose={handleCloseModal}>
        {selectedProject && (
          <div className="film-video-container">
            <h2>{selectedProject.title}</h2>
            <div className="vimeo-embed-container">
              <iframe
                src={getPrivacyEnhancedUrl(selectedProject.url || "")}
                frameBorder="0"
                allow="fullscreen; picture-in-picture"
                allowFullScreen
                title={selectedProject.title}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default FilmEditing;
