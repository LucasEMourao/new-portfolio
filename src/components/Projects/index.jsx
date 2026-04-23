import {
  ProjectsMain,
  SectionFeatures,
  FeaturedCard,
  MediaContainer,
  ContentContainer,
  TechList,
  GridTwoColumns,
  ProjectCard,
  Badge,
} from "./style";
import { projects } from "../../data/projects";

const Projects = () => {
  const featuredProject = projects.find((project) => project.variant === "featured");
  const secondaryProjects = projects.filter((project) => project.variant === "standard");
  const getPrimaryLink = (project) => project.href || project.links?.[0]?.href || "#";

  return (
    <ProjectsMain>
      <h2>Sistemas & Engenharia</h2>
      <p>
        Projetos focados em resolver problemas complexos através de automação,
        inteligência artificial e arquitetura de software robusta.
      </p>

      <SectionFeatures>
        {featuredProject && (
          <FeaturedCard>
            <a
              className="featured-image-link"
              href={featuredProject.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaContainer>
                <img src={featuredProject.image} alt={featuredProject.imageAlt} />
              </MediaContainer>
            </a>
            <ContentContainer>
              <Badge>{featuredProject.badge}</Badge>
              <h2>
                <a
                  className="featured-title-link"
                  href={featuredProject.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {featuredProject.title}
                </a>
              </h2>
              {featuredProject.paragraphs.map((paragraph, index) => (
                <p key={`${featuredProject.id}-paragraph-${index}`}>{paragraph}</p>
              ))}
              <TechList>
                {featuredProject.tags.map((tag) => (
                  <span key={`${featuredProject.id}-tag-${tag}`}>{tag}</span>
                ))}
              </TechList>
              <div className="featured-links">
                {featuredProject.links?.map((link) => (
                  <a
                    key={`${featuredProject.id}-link-${link.label}`}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </ContentContainer>
          </FeaturedCard>
        )}

        <GridTwoColumns>
          {secondaryProjects.map((project) => (
            <ProjectCard key={project.id}>
              <a
                className="image-link"
                href={getPrimaryLink(project)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="image-wrapper">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    style={project.imageStyle}
                  />
                </div>
              </a>
              <div className="content">
                <Badge>{project.badge}</Badge>
                <h3>
                  <a
                    className="title-link"
                    href={getPrimaryLink(project)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <p>{project.description}</p>
                <TechList>
                  {project.tags.map((tag) => (
                    <span key={`${project.id}-tag-${tag}`}>{tag}</span>
                  ))}
                </TechList>
                {!!project.links?.length && (
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a
                        key={`${project.id}-link-${link.label}`}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </ProjectCard>
          ))}
        </GridTwoColumns>
      </SectionFeatures>
    </ProjectsMain>
  );
};

export default Projects;
