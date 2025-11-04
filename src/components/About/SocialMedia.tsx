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
import instagramReelThumb from "../images/instagram-reel-horse.png";
import saveTheDateThumb from "../images/save-the-date-thumb.png";
import { EnhancedProject } from "../ProjectGallery";


const socialMediaProjects: EnhancedProject[] = [


    {
        title: "Ninja Horse",
        secondaryTitle: "Instagram Reel",
        description: "A romantic gateway turns sour when a ninja horse steals the show.",
        image: instagramReelThumb,
        url: "https://www.instagram.com/reel/DQTyVC3itMv/embed",
        type: "instagram-reel",
    },
    {
        title: "Save The Date",
        secondaryTitle: "Instagram Reel",
        description: "Not your typical save the date video.",
        image: saveTheDateThumb,
        url: "https://www.instagram.com/reel/DMvMfz0tliP/embed",
        type: "instagram-reel",
    },

    {
        title: "The Secular Yeshiva",
        secondaryTitle: "Promo Video",
        description: "One of those classic promo videos.",
        image: getFallbackImage("FILM"),
        url: "https://player.vimeo.com/video/837674779",
        type: "vimeo",
    },
    {
        title: "Labor Party Promo",
        secondaryTitle: "Campaign Video",
        description: "One of many promotional videos for the labor party during the 2019 elections.",
        image: getFallbackImage("FILM"),
        url: "https://player.vimeo.com/video/1057304439",
        type: "vimeo",
    },
    {
        title: "Shakuf & The Seventh Eye",
        secondaryTitle: "Call to Action Video",
        description: "A call to action video for Shakuf & The Seventh Eye, an independent newspaper.",
        image: getFallbackImage("FILM"),
        url: "https://player.vimeo.com/video/1057297015",
        type: "vimeo",
    },
    {
        title: "Camp Barney Medintz",
        secondaryTitle: "Highlights Video",
        description: "Fun and exciting video showcasing the week's highlights.",
        image: getFallbackImage("FILM"),
        url: "https://player.vimeo.com/video/1057303842",
        type: "vimeo",
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

    return (
        <>
            <div>
                <ProjectGallery
                    title="Social Media"
                    projects={socialMediaProjectsState}
                    onProjectClick={handleProjectClick}
                />
            </div>
            <Modal isOpen={!!selectedProject} onClose={handleCloseModal}>
                {selectedProject && (
                    <div className="project-popup">
                        <h2 className="project-popup-title">{selectedProject.title}</h2>
                        <p className="project-popup-description">{selectedProject.description}</p>
                        {renderMediaEmbed(selectedProject)}
                    </div>
                )}
            </Modal>
        </>
    );
};

export default SocialMedia;
