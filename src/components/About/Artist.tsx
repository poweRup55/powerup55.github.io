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
import { renderMediaEmbed } from "../../utils/mediaUtils";
import { EnhancedProject } from "../ProjectGallery";

import streamThumb from "../images/stream-thumbnail.png";

const initialArtProjects: EnhancedProject[] = [
  {
    title: "Society of Spectacles",
    description:
      "An experimental video art piece that delves into the complexities of contemporary visual culture and the societal gaze.",
    image: getFallbackImage("FILM"),
    url: "https://player.vimeo.com/video/731561394",
  },
  {
    title: "STREAM",
    description:
      "Liquid digital water art installation",
    image: streamThumb,
    url: "https://www.instagram.com/p/CtaOmVQoz4O/embed",
    type: "instagram-post",
  },
  {
    title: "I WISH",
    description:
      "A personal and introspective exploration of identity, desire, and the aspirations of men.",
    image: getFallbackImage("FILM"),
    url: "https://player.vimeo.com/video/731561698",
  },
  {
    title: "Love",
    description:
      "A tender and intimate portrayal of love as seen through the affectionate eyes of a partner.",
    image: getFallbackImage("FILM"),
    url: "https://player.vimeo.com/video/775958232",
  },
  {
    title: "Chronicle Of The Middle East",
    description:
      "An experimental documentary examining the intersection of global warming and the political climate in the Middle East.",
    image: getFallbackImage("FILM"),
    url: "https://player.vimeo.com/video/846269431",
  },
  {
    title: "Bari and Ray Painting Time",
    description:
      "A heartwarming illustration of a conversation between two brothers and their mother.",
    image: getFallbackImage("FILM"),
    url: "https://player.vimeo.com/video/731560581",
  }
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

  return (
    <>
      <ProjectGallery
        title="Bezalel Art Projects"
        projects={projects}
        onProjectClick={handleProjectClick}
      />

      <Modal isOpen={!!selectedProject} onClose={handleCloseModal}>
        {selectedProject && renderMediaEmbed(selectedProject)}
      </Modal>
    </>
  );
};

export default Artist;
