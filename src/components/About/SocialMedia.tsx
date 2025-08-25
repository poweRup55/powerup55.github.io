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

const socialMediaProjects: EnhancedProject[] = [
    {
        title: "The Secular Yeshiva",
        description: "Short promotional video for the secular yeshiva.",
        image: getFallbackImage("FILM"),
        url: "https://player.vimeo.com/video/837674779",
    },
    {
        title: "Labor Party Promo",
        description: "One of many promotional videos for the labor party during the 2019 elections.",
        image: getFallbackImage("FILM"),
        url: "https://player.vimeo.com/video/1057304439",
    },
    {
        title: "Shakuf & The Seventh Eye",
        description: "A call to action video for Shakuf & The Seventh Eye, an independent newspaper.",
        image: getFallbackImage("FILM"),
        url: "https://player.vimeo.com/video/1057297015",
    },
    {
        title: "Camp Barney Medintz",
        description: "Fun and exciting video showcasing the week's highlights.",
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
        description: "A beautiful wedding video showcasing the special moments.",
        image: getFallbackImage("FILM"),
        url: "https://player.vimeo.com/video/1057302984",
    },
];

const SocialMedia: React.FC = () => {
    const [selectedProject, setSelectedProject] =
        useState<EnhancedProject | null>(null);
    const [socialMediaProjectsState, setSocialMediaProjects] = useState<EnhancedProject[]>(
        socialMediaProjects
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
        loadThumbnails(socialMediaProjectsState, setSocialMediaProjects);
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
                    title="Social media and promotional videos that I've edited"
                    projects={socialMediaProjectsState}
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

export default SocialMedia;
