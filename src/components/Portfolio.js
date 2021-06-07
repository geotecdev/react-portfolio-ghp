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

//projectThumbnail, projectTitle, projectDescription

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
                        projectTitle={"Viewpoint to TiPS Payroll - Desktop App"}
                        projectDescription={"Windows application that Menard's accounting dept. uses for payroll processing"}
                    />
                    <Project 
                        projectThumbnail={project2Pic}
                        projectTitle={"TiPS updates Function App"}
                        projectDescription={"Azure Function application that pushes daily updates between platform apis"}
                    />                    
                </section>

                <section className="row galleryRow">
                    <Project 
                        projectThumbnail={project3Pic}
                        projectTitle={"Nicholson Micropile LP Template"}
                        projectDescription={"xlsm template with vba and userforms for dynamically adding/updating a web api"}
                    />
                    <Project 
                        projectThumbnail={project4Pic}
                        projectTitle={"Ganttic Decoder api"}
                        projectDescription={"Azure web api that parses output from the Ganttic api from any company's admin environment"}
                    />                    
                </section>

                <section className="row galleryRow">
                    <Project 
                        projectThumbnail={project5Pic}
                        projectTitle={"TiPS VSTO Add-In"}
                        projectDescription={"VSTO import tool for Excel"}
                    />
                    <Project 
                        projectThumbnail={project6Pic}
                        projectTitle={"Omnibox to .guh Converter"}
                        projectDescription={"Script to convert json data from datalogger to the previous file format"}
                    />                    
                </section>
                <br></br><br></br>
            </div>           

            <Footer />
        </div>
    );
}

export default Portfolio;
