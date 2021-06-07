import React from "react";


function Project(props) {
    return (
        <div>
            <div className="col col-md-3 col-sm-6 galleryCell">
                <figure className="galleryThumbnail">
                <img className="galleryImage" src={props.projectThumbnail} alt="thumbnail with the import page of the TiPS to Viewpoint payroll processing app" />
                    <p className="galleryItemTitle">{props.projectTitle}</p>
                    <p className="galleryItemSubtitle">{props.projectDescription}</p>
                    <a className="btn btn-info" href={props.githubRepoLink}>Link to Repo</a>
                </figure>
            </div>
        </div>
    );
}

export default Project;
