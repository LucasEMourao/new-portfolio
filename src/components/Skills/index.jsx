import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNode,
  FaGitAlt,
  FaBrain,
  FaNetworkWired,
  FaServer,
  FaLayerGroup
} from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { Abilities, AbilityCards, AbilityCard, Info } from "./style";

const Skills = () => {
  return (
    <Abilities>
      <h2>Habilidades & Competências</h2>
      <p>
        Desenvolvedor FullStack com foco em <strong>Performance</strong>,{" "}
        <strong>Arquitetura Escalável</strong> e <strong>Experiência do Usuário</strong>.
        Minha abordagem combina rigor técnico no backend (Node/Postgres/Automação)
        com interfaces reativas e acessíveis no frontend (React/Next.js/Framer).
      </p>
      <AbilityCards>
        {/* Card 1: Frontend Architecture (HTML + CSS) */}
        <AbilityCard>
          <div style={{ display: 'flex', gap: '0.5rem', color: '#e34c26' }}>
            <FaHtml5 className="icon" />
            <FaCss3Alt className="icon" style={{ color: '#264de4' }} />
          </div>
          <Info>
            <h3>Frontend Architecture</h3>
            <p>
              Arquitetura Semântica, Acessibilidade (WAI-ARIA) e Design Systems escaláveis.
              Foco em layouts performáticos (GPU-accelerated), responsividade fluida
              e manutenção de estilos organizados via Styled-Components.
            </p>
          </Info>
        </AbilityCard>

        {/* Card 2: React Ecosystem */}
        <AbilityCard>
          <FaReact className="icon" style={{ color: '#61dafb' }} />
          <Info>
            <h3>React Ecosystem</h3>
            <p>
              Gerenciamento de estado complexo, Hooks customizados e ciclos de vida.
              Construção de interfaces SPA/Next.js focadas em reusabilidade,
              performance de renderização e UX sofisticada.
            </p>
          </Info>
        </AbilityCard>

        {/* Card 3: TypeScript Core */}
        <AbilityCard>
          <BiLogoTypescript className="icon" style={{ color: '#3178c6' }} />
          <Info>
            <h3>TypeScript Core</h3>
            <p>
              Desenvolvimento Type-Safe para garantir contratos de dados robustos
              entre Frontend e Backend. Uso de Generics e Utility Types para
              reduzir bugs em runtime e melhorar a manutenibilidade.
            </p>
          </Info>
        </AbilityCard>

        {/* Card 4: Backend Engineering */}
        <AbilityCard>
          <FaNode className="icon" style={{ color: '#339933' }} />
          <Info>
            <h3>Backend Engineering</h3>
            <p>
              APIs RESTful e arquiteturas assíncronas. Manipulação de processos
              pesados (File System/Streams), interação com bancos de dados (Postgres)
              e lógica de servidor segura e escalável.
            </p>
          </Info>
        </AbilityCard>

        {/* Card 5: Automation & Orchestration */}
        <AbilityCard>
          <FaNetworkWired className="icon" style={{ color: '#ea4b71' }} />
          <Info>
            <h3>Automation (n8n)</h3>
            <p>
              Arquiteturas orientadas a eventos e Webhooks. Orquestração de workflows
              assíncronos complexos, tratamento de erros resiliente e integração
              de sistemas isolados para automação de processos críticos.
            </p>
          </Info>
        </AbilityCard>

        {/* Card 6: Applied AI Integration */}
        <AbilityCard>
          <FaBrain className="icon" style={{ color: '#9b59b6' }} />
          <Info>
            <h3>Applied AI Integration</h3>
            <p>
              Integração determinística de LLMs em sistemas de produção.
              Engenharia de prompt para outputs estruturados (JSON),
              validação de dados de entrada/saída e uso de IA como componente lógico funcional.
            </p>
          </Info>
        </AbilityCard>

        {/* Card 7: DevOps & Workflow */}
        <AbilityCard>
          <div style={{ display: 'flex', gap: '0.5rem', color: '#f05032' }}>
            <FaGitAlt className="icon" />
            <FaServer className="icon" style={{ color: 'var(--theme-color)' }} />
          </div>
          <Info>
            <h3>DevOps & Workflow</h3>
            <p>
              CI/CD e Versionamento Semântico (Git). Gestão de fluxo de trabalho
              colaborativo, Code Reviews rigorosos e manutenção de histórico
              limpo para entregas contínuas e seguras.
            </p>
          </Info>
        </AbilityCard>

      </AbilityCards>
    </Abilities>
  );
};

export default Skills;
