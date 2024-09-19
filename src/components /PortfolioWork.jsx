import { useState } from 'react';

export default function PortfolioWork() {
    // Define the projects as an array of objects
    const projects = [
        { src: "../../public/img-projects/calisthenics-img.jpg", alt: "html/css project", category: "html/css", link:"http://magasinx.omar-gaal.dk/" },
        { src: "../../public/img-projects/clio-img.jpg", alt: "html/css project", category: "html/css", link:"https://omar-gaal.github.io/clio/" },
        { src: "../../public/img-projects/project-menace.jpg", alt: "html/css/javscript project", category: "javascript", link:"https://project-menace-2.0.omar-gaal.dk/" },
        { src: "../../public/img-projects/todoApp-img.png", alt: "html/css/javscript project", category: "javascript", link:"https://quik-to-do-3rtg3xjcq-omars-projects-e6c3dc57.vercel.app/" },
        { src: "../../public/img-projects/reactApp-1-img.jpg", alt: "React.js project", category: "react", link: "https://react-my-first-project-amlvl5zxx-omars-projects-e6c3dc57.vercel.app" },
        { src: "../../public/img-projects/reactApp-2-img.jpg", alt: "React.js project", category: "react", link: "https://first-react-app-seven-zeta.vercel.app/" }
    ];

    // Set up state for active filter
    const [activeFilter, setActiveFilter] = useState('all');

    // Filter the projects based on the active filter
    const filteredProjects = projects.filter(project => 
        activeFilter === 'all' || project.category.includes(activeFilter)
    );

    // Function to handle image click
    const handleImageClick = (link) => {
        window.open(link, "_blank");
    };

    return (
        <div>
            {/* Filter Buttons */}
            <div id='portfolioLink' className="filter-buttons">
                <button 
                    className={activeFilter === 'all' ? 'active' : ''} 
                    onClick={() => setActiveFilter('all')}
                >All</button>
                <button 
                    className={activeFilter === 'react' ? 'active' : ''} 
                    onClick={() => setActiveFilter('react')}
                >React.js</button>
                <button 
                    className={activeFilter === 'javascript' ? 'active' : ''} 
                    onClick={() => setActiveFilter('javascript')}
                >JavaScript</button>
                <button 
                    className={activeFilter === 'html/css' ? 'active' : ''} 
                    onClick={() => setActiveFilter('html/css')}
                >HTML/CSS</button>
            </div>

            {/* Grid of Projects */}
            <div className={`project-grid ${activeFilter === 'all' ? 'all-grid-layout' : ''}`}>
                {filteredProjects.map((project, index) => (
                    <div key={index} className="project-item">
                        <img 
                            src={project.src} 
                            alt={project.alt} 
                            id={project.id} 
                            onClick={() => project.link && handleImageClick(project.link)}
                            style={{ cursor: project.link ? 'pointer' : 'default' }} // Adds a pointer cursor if the image is clickable
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
