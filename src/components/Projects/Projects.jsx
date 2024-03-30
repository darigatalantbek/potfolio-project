import "./projects.css";
import mediaVideo from "/Users/Талант/Desktop/web/project-portfolio/src/assests/media.mp4";
import jumystap from "/Users/Талант/Desktop/web/project-portfolio/src/assests/jumystap.mp4";
import to_do from "/Users/Талант/Desktop/web/project-portfolio/src/assests/to_do.mp4";

function Projects() {
  return (
    <div className="projects_cont">
      <p className="projects_title">Projects</p>
      <div className="video_content">
        <video
          src={jumystap}
          className="video"
          controls
          autoPlay
        ></video>
        <div className="video_text">
          <p className="project_video_text">JumysTap job search site</p>
          <p className="project_video_text">Adaptive for different devices</p>
        </div>
      </div>
      <div className="video_content">
        <div className="video_text">
          <p className="project_video_text">Recipes world! site with a variety of recipes</p>
          <p className="project_video_text">The data for the recipes is obtained from the server. By clicking on an individual recipe, you can read the full description of the recipe</p>
        </div>
        <video
          src={mediaVideo}
          className="video"
          controls
          autoPlay
        ></video>
      </div>
      <div className="video_content">
        <video
          src={to_do}
          className="video"
          controls
          autoPlay
        ></video>
        <div className="video_text">
          <p className="project_video_text">Simple To Do List</p>
          <p className="project_video_text">Ability to filter the todo list.</p>
          <p className="project_video_text">The data is saved in the browser.</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
