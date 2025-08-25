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
        title: 'Kiki: Doc-Aviv\'s 2023 Audience Choice Award',
        description:
            "After being expelled from every youth-at-risk program and facing criminal charges, Kiki gets one last chance when his sister Gal, a caregiver, takes him on a therapeutic desert journey to help him take responsibility for his future.",
        image: getFallbackImage("FILM"),
        url: "https://player.vimeo.com/video/1057333638",
    },
    {
        title: 'Odd or Pair',
        description: "A short documentary about the challenges of finding a soulmate, created at Bezalel.",
        image: getFallbackImage("FILM"),
        url: "https://player.vimeo.com/video/691631811",
    },
    {
        title: "Don't Be a Fish",
        description: "A short humorous film about a man who learns the importance of being true to himself.",
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

    const getPrivacyEnhancedUrl = (url: string): string => {
        const dntParam = url.includes("?") ? "&dnt=1" : "?dnt=1";
        return `${url}${dntParam}&controls=1&transparent=0`;
    };

    return (
        <>
            <div>
                <ProjectGallery
                    title="Films / Video Editor"
                    projects={filmProjects}
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

export default Films;
