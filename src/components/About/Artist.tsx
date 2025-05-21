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

const initialArtProjects: EnhancedProject[] = [
  {
    title: "Society of Spectacles - Yonatan Koritny",
    description: "Experimental short film exploring visual culture.",
    image: getFallbackImage("FILM"),
    url: "https://player.vimeo.com/video/731561394",
  },
  {
    title: "I WISH - Yehonatan Koritny",
    description: "Short poetic video work.",
    image: getFallbackImage("FILM"),
    url: "https://player.vimeo.com/video/731561698",
  },
    {
      title: "Love - Yonatan Koritny - Submission Journal",
      description: "Short film about love.",
      image: getFallbackImage("FILM"),
      url: "https://player.vimeo.com/video/775958232",
    },
    {
      title: "Chronicle Of The Middle East - Yonatan Koritny",
      description: "Documentary about the Middle East.",
      image: getFallbackImage("FILM"),
      url: "https://player.vimeo.com/video/846269431",
    },
    {
      title: "Bari and Ray at the Time of Painting - Yonatan Koritny",
      description: "Short film about painting and creativity.",
      image: getFallbackImage("FILM"),
      url: "https://player.vimeo.com/video/731560581",
    },
    {
      title: "And Then We Became Sad",
      description: "Short film.",
      image: getFallbackImage("FILM"),
      url: "https://player.vimeo.com/video/697717442",
    },
];

const Artist: React.FC = () => {
  const [selectedProject, setSelectedProject] =
    useState<EnhancedProject | null>(null);
  const [projects, setProjects] =
    useState<EnhancedProject[]>(initialArtProjects);

  useEffect(() => {
    const loadThumbnails = async () => {
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

    loadThumbnails();
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
      <ProjectGallery
        title="Art Projects"
        projects={projects}
        onProjectClick={handleProjectClick}
      />

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

export default Artist;
