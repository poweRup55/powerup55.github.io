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
import VaccumnThumb from "../images/vacumn-thumbnail.png";


const filmEditorProjects: EnhancedProject[] = [
    {
        title: "Kiki | Doc-Aviv Audience Choice 2023",
        description:
            "After repeated expulsions from youth programs and looming charges, Kiki embarks on a therapeutic desert journey with his caregiver sister to confront responsibility and hope.",
        image: getFallbackImage("FILM"),
        url: "https://player.vimeo.com/video/1057333638",
    },
    {
        title: "Vaccumn | Supported by the New Fund for Cinema and Television",
        description:
            "A personal documentary about a couple trying to hold onto life and love while living in the shadow of war.",
        image: VaccumnThumb,
        url: "https://www.instagram.com/stories/highlights/17900926971014610/",
        type: "instagram-highlight",
    },
    {
        title: "Odd or Pair",
        description:
            "A short documentary exploring the emotional and practical challenges of searching for a soulmate.",
        image: getFallbackImage("FILM"),
        url: "https://player.vimeo.com/video/691631811",
    },
    {
        title: "Don't Be a Fish",
        description:
            "A humorous short about a man who discovers the courage to be authentic.",
        image: getFallbackImage("FILM"),
        url: "https://player.vimeo.com/video/775973776",
    },
];

const Films: React.FC = () => {
    const [selectedProject, setSelectedProject] =
        useState<EnhancedProject | null>(null);
    const [filmProjects, setFilmProjects] = useState<EnhancedProject[]>(
        filmEditorProjects
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
        // eslint-disable-next-line
    }, []);

    const handleProjectClick = (project: Project): void => {
        setSelectedProject(project as EnhancedProject);
    };

    const handleCloseModal = (): void => {
        setSelectedProject(null);
    };

    return (
        <>
            <div>
                <ProjectGallery
                    title="Films"
                    projects={filmProjects}
                    onProjectClick={handleProjectClick}
                />
            </div>
            <Modal isOpen={!!selectedProject} onClose={handleCloseModal}>
                {selectedProject && renderMediaEmbed(selectedProject)}
            </Modal>
        </>
    );
};

export default Films;
