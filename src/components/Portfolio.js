import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Project from "./Project";
import project1Pic from "../images/gallery-img-1.PNG";
import project2Pic from "../images/gallery-img-2.PNG";
import project3Pic from "../images/gallery-img-3.PNG";
import project4Pic from "../images/gallery-img-4.PNG";
import project5Pic from "../images/gallery-img-5.PNG";
import project6Pic from "../images/gallery-img-6.png";

//projectThumbnail, projectTitle, projectDescription, githubRepoLink

function Portfolio() {
    return (
        <div>
            <Header />
            <br></br><br></br><br></br>
            <div className="container sectionContainer">
                <h1>Portfolio</h1>
                <br></br>
                <section className="row galleryRow">
                    <Project 
                        projectThumbnail={project1Pic}
                        projectTitle={"jQuery Day Planner App"}
                        projectDescription={"A day planner with time-specific UI states and jQuery"}
                        githubRepoLink={"https://github.com/geotecdev/jQuery-Day-Planner-App"}
                    />
                    <Project 
                        projectThumbnail={project2Pic}
                        projectTitle={"JS-Code-Quiz"}
                        projectDescription={"Website with interactive JavaScript that quizzes user's JS knowledge"}
                        githubRepoLink={"https://github.com/geotecdev/JS-Code-Quiz"}
                    />                    
                </section>

                <section className="row galleryRow">
                    <Project 
                        projectThumbnail={project3Pic}
                        projectTitle={"Youtube Movie Search"}
                        projectDescription={"Check out details about your favorite films from the imdb api!"}
                        githubRepoLink={"https://github.com/geotecdev/YouTube-Movie-Search"}
                    />
                    <Project 
                        projectThumbnail={project4Pic}
                        projectTitle={"The Meal Mentor"}
                        projectDescription={"Web app to Find meal alternatives based on nutrition from the spoonacular api"}
                        githubRepoLink={"https://github.com/Bhavipatel21/the_meal_mentor"}
                    />                    
                </section>

                <section className="row galleryRow">
                    <Project 
                        projectThumbnail={project5Pic}
                        projectTitle={"PWA Budget Tracker"}
                        projectDescription={"Budget Tracking app using MongoDb with offline capabilities"}
                        githubRepoLink={"https://github.com/geotecdev/PWA-Budget-Tracker"}
                    />
                    <Project 
                        projectThumbnail={project6Pic}
                        projectTitle={"Sequelize E-Commerce Back End"}
                        projectDescription={"ecommerce site and node js server with sql connection"}
                        githubRepoLink={"https://github.com/geotecdev/Sequelize-E-Commerce-Back-End"}
                    />                    
                </section>
                <br></br><br></br>
            </div>           

            <Footer />
        </div>
    );
}

export default Portfolio;
