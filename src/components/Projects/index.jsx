import movieflix from "../../assets/images/movieflix.webp";
import openCutPipeline from "../../assets/images/opencut-pipeline.png";
import n8nPipeline from "../../assets/images/n8n-pipeline.png";
import {
  ProjectsMain,
  SectionFeatures,
  FeaturedCard,
  MediaContainer,
  ContentContainer,
  TechList,
  GridTwoColumns,
  ProjectCard,
  Badge
} from "./style";

const Projects = () => {
  return (
    <ProjectsMain>
      <h2>Sistemas & Engenharia</h2>
      <p>
        Projetos focados em resolver problemas complexos através de Automação,
        Inteligência Artificial e Arquitetura de Software robusta.
      </p>

      <SectionFeatures>
        {/* Featured Project: OpenCut */}
        <FeaturedCard
          href="https://github.com/LucasEMourao/OpenCut/tree/simplified-editor"
          target="_blank"
          rel="noreferrer"
        >
          <MediaContainer>
            <img src={openCutPipeline} alt="OpenCut AI Pipeline Diagram" />
          </MediaContainer>
          <ContentContainer>
            <Badge>System Architecture</Badge>
            <h2>OpenCut: Editor de Vídeo Nativo com IA</h2>
            <p>
              A edição de vídeo é 80% corte manual repetitivo. Estendi o OpenCut (via branch <strong>simplified-editor</strong>)
              criando um pipeline Auto-Cut AI-first que elimina esse trabalho braçal.
            </p>
            <p>
              Diferente de editores web padrão, esta versão customizada utiliza <strong>Bun</strong> para orquestrar
              processos <strong>FFmpeg nativos</strong> diretamente no host (WSL2), contornando os limites de memória do navegador.
              O sistema integra a <strong>Gemini File API</strong> para 'assistir' e 'ouvir' a filmagem, gerando listas de corte
              baseadas em contexto semântico.
            </p>
            <TechList>
              <span>Next.js 15</span>
              <span>Bun Runtime</span>
              <span>Native FFmpeg</span>
              <span>Gemini 1.5 Pro</span>
              <span>Turborepo</span>
            </TechList>
            <div>
              <a
                href="https://github.com/LucasEMourao/OpenCut/tree/simplified-editor"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--primary-color)', fontWeight: 'bold', textDecoration: 'none' }}
              >
                🔗 Ver Arquitetura no GitHub (Branch simplified-editor)
              </a>
            </div>
          </ContentContainer>
        </FeaturedCard>

        <GridTwoColumns>
          {/* Secondary Project: Botflix Pro */}
          <ProjectCard>
            <a
              href="https://github.com/LucasEMourao/botflix-pro"
              target="_blank"
              rel="noreferrer"
            >
              <div className="image-wrapper">
                <img src={movieflix} alt="Botflix Pro Interface" />
              </div>
              <div className="content">
                <Badge>Product UX & AI Agent</Badge>
                <h3>Botflix Pro</h3>
                <p>
                  Uma plataforma cinematográfica com concierge de IA conversacional.
                  Desenvolvi um agente com memória de contexto que entende nuances como
                  "algo inspirador, mas não clichê". Foco total em UX/UI de alto nível
                  com animações fluidas e layout responsivo.
                </p>
                <TechList>
                  <span>React</span>
                  <span>Vite</span>
                  <span>Typescript</span>
                  <span>n8n Workflow</span>
                </TechList>
              </div>
            </a>
          </ProjectCard>

          {/* Tertiary Project: n8n Automator */}
          <ProjectCard>
            <a
              href="https://github.com/LucasEMourao/n8n-nfe-extractor"
              target="_blank"
              rel="noreferrer"
            >
              <div className="image-wrapper">
                <img src={n8nPipeline} alt="n8n Invoice Extractor Workflow" style={{ objectFit: 'contain', padding: '1rem', background: '#111' }} />
              </div>
              <div className="content">
                <Badge>Business Automation Impact</Badge>
                <h3>NFe Automator</h3>
                <p>
                  Extração financeira Zero-Touch. Projetei um pipeline que ingere NFs desestruturadas (PDF)
                  via e-mail. Utilizando <strong>Gemini Vision</strong>, o sistema 'enxerga' o documento
                  para categorizar impostos e totais, inserindo JSON validado diretamente no banco de dados.
                  Redução estimada de 95% no tempo manual.
                </p>
                <TechList>
                  <span>n8n Self-hosted</span>
                  <span>Gemini Vision</span>
                  <span>Postgres</span>
                  <span>Gmail API</span>
                </TechList>
              </div>
            </a>
          </ProjectCard>
        </GridTwoColumns>
      </SectionFeatures>
    </ProjectsMain>
  );
};

export default Projects;
