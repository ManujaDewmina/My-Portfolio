import React from "react";
import styles from "./project.module.css";
import ProjectItem from "./ProjectItem";
import ProjectsData from "../../Data/ProjectsData";
import SocialData from "../../Data/SocialData";
import Button from "../Widgets/Button";
import { useSelector } from "react-redux";

const Projects = (props) => {
    const nonThemeColor = useSelector(state => state.nonThemeColor);
    const uiColor = useSelector(state => state.uiColor);
    let projects = ProjectsData.DUMMY_PROJECTS;
    return (
        <div id="projects">
            <div className={styles.projects}>
                {/* <section className={styles.projectImg}>
                    <img src={projectCoverImg} alt="" />
                </section> */}
                <section className={styles.projectHeader}>
                    <h1><span style={{ color: nonThemeColor , fontSize:"2.8rem"}}>My Recent </span><span style={{ color: uiColor , fontSize:"2.8rem"}}>Works</span></h1>
                    {/* <div>My works makes use of vast variety of latest technology tools...</div> */}
                </section>
            </div>
            <div className={styles.projectList}>
                {projects.map((item, index) => {
                    return <ProjectItem key={index} project={item} />
                })}
            </div>
            <div className={styles.moreProject}>
                <a target="_blank" rel="noreferrer" href={`${SocialData.githubLink}?tab=repositories`}>
                    <Button className={styles.moreProjectBtn}>More Projects</Button>
                </a>
            </div>
        </div>
    )
};

export default Projects;
