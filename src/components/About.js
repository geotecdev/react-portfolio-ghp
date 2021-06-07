import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ProfilePicture from "../images/profile-picture.jpg";
import DotNetMenuItem from "../images/asp-dot-net-img.png";
import WpfMenuItem from "../images/wpf-img.png";
import OfficeMenuItem from "../images/office-img.png";
import AzureMenuItem from "../images/azure-img.png";
import MatplotlibMenuItem from "../images/matplotlib-img.png";


function About() {
    return (
        <div>
            <Header />
            <div>
                <br></br><br></br>
                <h1>About</h1>
                <br></br><br></br>
                <main className="container col-md-8">
                    <section className="row sectionContainer">
                        <h3 className="sectionHeading">Developer Profile</h3>
                        <img src={ProfilePicture} alt="selfie of Mike Ruane with an oval shaped frame" className="profilePicture" />
                        <p className="sectionText">
                            When I wrote my first line of vba four years ago, I didn't think of it as the first step to a career in software development; I was a project accountant at the time and my initial intention was no more lofty than creating a macro to hide some columns on an oversized Excel table. But in the weeks and months that followed, I started looking for more ways to script the boring aspects my job. Through that process, I became the "vba expert" at my company (Menard USA, a design/build geotechnical engineering firm) and started writing bespoke excel apps for co-workers. More broadly, I became fascinated with software development and the ways it can be used to simplify rote tasks and organize complex processes. And looking around the different departments in Menard, I saw that even in Engineering and Operations, people were still using plain, unconnected excel files for most forms. I realized that there were a lot of opportunities to develop apps that could streamline things and centralize data into a web based relatinal database. And more to the point, I could be that developer. This is when my dev career began in earnest: I resolved to learn C# .NET and SQL and started developing apps for Menard on the weekends.
                        </p>
                        <p className="sectionText">
                            After a year of writing custom apps around the company and finally catching the attention of our Engineering director, the company moved me to the newly created position of Software Developer for the R&D department. Since then, I have been able to build many of the projects I had envisioned for Menard when first starting out. Currently, I run a SQL database and  web api on Azure that serve as the back end for custom dashboards and apps including:
                        </p>
                        <p className="sectionBulletText">-The desktop payroll processing application for accounting</p>
                        <p className="sectionBulletText">-Excel based apps that allow posting and editing of records to the database via api calls</p>
                        <p className="sectionBulletText">-Dashboards and reporting applications for our design engineers</p>
                        <p className="sectionBulletText">-Cost projection tools for our project managers that draw on data from Viewpoint and our production tracking platform</p>
                        <p className="sectionBulletText">-Azure connected mobile applications built with PowerApps and MS Forms</p>
                        <br></br>
                    </section>
                    <br></br>

                    <section className="row skillsContainer">
                        <h3 className="sectionHeading">Skills</h3>
                        <figure className="col col-md-2 skillsCard">
                            <p className="skillsTitle">Languages</p>
                            <figcaption className="skillsCaption">C#, xaml, MSSQL, vba, python</figcaption>
                        </figure>
                        <figure className="col col-md-2 skillsCard">
                            <p className="skillsTitle">Frameworks</p>
                            <figcaption className="skillsCaption">.NET, ASP.NET, WPF, VSTO</figcaption>
                        </figure>
                        <figure className="col col-md-2 skillsCard">
                            <p className="skillsTitle">Platform Management</p>
                            <figcaption className="skillsCaption">Azure, SSMS, Salesforce, Sharepoint</figcaption>
                        </figure>
                        <figure className="col col-md-2 skillsCard">
                            <p className="skillsTitle">Reporting Software</p>
                            <figcaption className="skillsCaption">Crystal Reports, Power BI, Matplotlib</figcaption>
                        </figure>
                        <figure className="col col-md-2 skillsCard">
                            <p className="skillsTitle">SaaS Mobile Tools</p>
                            <figcaption className="skillsCaption">MS PowerApps, MS Forms</figcaption>
                        </figure>
                    </section>
                    <br></br>

                    <nav className="row sectionContainer">
                        <h3 className="sectionHeading">Applications</h3>
                        <ul className="nav nav-tabs">
                        <li className="active"><a data-toggle="tab" href="#app1">ASP.NET</a></li>
                            <li><a data-toggle="tab" href="#app2">WPF Desktop</a></li>
                            <li><a data-toggle="tab" href="#app3">MS Office Tools</a></li>
                            <li><a data-toggle="tab" href="#app4">Azure</a></li>
                            <li><a data-toggle="tab" href="#app5">Matplotlib</a></li>                    
                        </ul>
                        <section className="tab-content">
                            <figure id="app1" className="tab-pane fade in active">
                                <img className="appThumbnail" src={DotNetMenuItem} alt="split screen thumbnail with the landing page for Menard's web api, in front of a C# code file of a Controller class"/>                    
                                <p className="sectionText">I have built several production web services using C# and ASP.NET. The most notable example is Menard's web api, which is used as an interface for the database by many of my applications. Though the front end aspects of the api are fairly basic, I have a different web app that allows users to make edits to reference tables in our production tracking platform which uses bootstrap tables and layout.</p>
                            </figure>
                            <figure id="app2" className="tab-pane fade">
                                <img className="appThumbnail" src={WpfMenuItem} alt="screenshot from the xaml layout page in Visual Studio for a userform from the payroll processing application" />
                                <p className="sectionText">I have a fair amount of experience developing WPF for Menard; this framework has been my go-to for custom apps that don't require large scale distribution and can be run locally by the user. Examples include our payroll processing app, PM cost control app and the report aggregator program for our safety department, among others. This experience has made me familiar with the  MVVM design pattern and how to structure desktop applications with larger code bases.</p>
                                <br></br>
                            </figure>
                            <figure id="app3" className="tab-pane fade">
                                <img className="appThumbnail" src={OfficeMenuItem} alt="thumbnail with an image from the excel vba editor, including an overlayed userform "/>
                                <p className="sectionText">Office integrations are where I got my start, and despite the broader push to get away from excel and other office products for data processing, I still work with them regularly. These include vba in macros and userforms, but also custom VSTO plug-ins and other C# based apps I have written to search, parse and complete other tasks on content in ms office format files.</p>
                                <br></br>
                            </figure>
                            <figure id="app4" className="tab-pane fade">
                                <img className="appThumbnail" src={AzureMenuItem} alt="screenshot of Menard's resources page from the Azure portal" />
                                <p className="sectionText">Azure is the PaaS cloud service I have used for almost all of my web apps and services at Menard. Our SQL database and web api run on the platform, and managing these resources on Azure is really at the core of what I do. I also have experience with some other Azure services that I have used for single purpose apps, like Azure Functions for automated updates.</p>
                                <br></br>
                            </figure>
                            <figure id="app5" className="tab-pane fade">
                                <img className="appThumbnail" src=".//images/matplotlib-img.PNG" alt="split screen of a Matplotlib PowerBI chart visual and the python codebehind" />
                                <p className="sectionText">I have used matplotlib charts in several reports and applications, when there was a need to display more complex data sets. I used embedded matplotlib charts in the PowerBI based load test dashboard used by our engineering department.</p>
                                <br></br>
                            </figure>
                            
                        </section>
                    </nav>

                </main>
            </div>
            <br></br><br></br>
            <Footer />
        </div>
    );
}

export default About;