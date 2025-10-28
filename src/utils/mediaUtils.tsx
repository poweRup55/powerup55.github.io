import React from "react";

export interface MediaProject {
    title: string;
    url?: string;
    image?: string;
    type?: "vimeo" | "instagram-reel" | "instagram-post" | "instagram-highlight";
}

const getPrivacyEnhancedUrl = (url: string): string => {
    const dntParam = url.includes("?") ? "&dnt=1" : "?dnt=1";
    return `${url}${dntParam}&controls=1&transparent=0`;
};

export const renderMediaEmbed = (project: MediaProject): React.JSX.Element => {
    const type = project.type || "vimeo";

    if (type === "instagram-reel" || type === "instagram-post") {
        return (
            <div className="film-video-container">
                <h2>{project.title}</h2>
                <div className="instagram-embed-container">
                    <iframe
                        src={project.url || ""}
                        frameBorder="0"
                        scrolling="no"
                        allowTransparency={true}
                        title={project.title}
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        );
    }

    if (type === "instagram-highlight") {
        return (
            <div className="film-video-container">
                <h2>{project.title}</h2>
                <div className="instagram-highlight-content">
                    {project.image && (
                        <div className="highlight-preview-image">
                            <img
                                src={typeof project.image === 'string' ? project.image : ''}
                                alt={project.title}
                            />
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="instagram-cta-button"
                                aria-label={`Open ${project.title} on Instagram`}
                            >
                                Open on Instagram
                            </a>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="film-video-container">
            <h2>{project.title}</h2>
            <div className="vimeo-embed-container">
                <iframe
                    src={getPrivacyEnhancedUrl(project.url || "")}
                    frameBorder="0"
                    allow="fullscreen; picture-in-picture"
                    allowFullScreen
                    title={project.title}
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};
