import { useState, useEffect } from 'react';
import { Header, SearchFilters, ProjectCard, FeaturedProjects, HeroSection } from './components';
import type { Project, SearchFilters as SearchFiltersType } from './types';

// Array inicial de proyectos con datos mínimos para construir la URL de la API
const initialProjects: Project[] = [
  {
    name: 'Quanta',
    owner: 'disney',
    repo: 'quanta',
    description: 'Quanta provides a generalized roaring bitmap based HTAP database engine. Its primary advantage over other database platforms is that it supports sub-second access to large data sets and supports updates in real time.',
    url: 'https://github.com/disney/quanta',
    language: 'C++',
    stars: 0,
    forks: 0,
    logo: 'https://static-mh.content.disney.io/matterhorn/assets/goc/disney_logo_dark@2x-45d70f7dd57b.png',
    category: 'Backend',
    featured: true
  },
  {
    name: 'Automated Cloud Advisor',
    owner: 'disneystreaming',
    repo: 'automated-cloud-advisor',
    description: 'Extensible tool for facilitating cost optimization in AWS, by collecting data for resources that are under-utilized. Great for new DevOps/Cloud engineers to start automating in AWS.',
    url: 'https://github.com/disneystreaming/automated-cloud-advisor',
    language: 'JavaScript',
    stars: 0,
    forks: 0,
    logo: 'https://raw.githubusercontent.com/disneystreaming/automated-cloud-advisor/main/website/static/img/logo.png',
    category: 'Tools',
    featured: true
  },
  {
    name: 'Weaver Test',
    owner: 'disneystreaming',
    repo: 'weaver-test',
    description: 'A Scala test framework that integrates tightly with Cats-Effect, which is the root of a large subset of the Scala ecosystem.',
    url: 'https://github.com/disneystreaming/weaver-test',
    language: 'Scala',
    stars: 0,
    forks: 0,
    logo: 'https://media.githubusercontent.com/media/disneystreaming/weaver-test/main/website/static/img/logo.png',
    category: 'Testing',
    featured: true
  },
  {
    name: 'MaterialX',
    owner: 'materialx',
    repo: 'MaterialX',
    description: 'An open standard for transfer of rich material and look-development content between applications and renderers. Used in feature films such as Star Wars: The Force Awakens.',
    url: 'https://github.com/materialx/MaterialX',
    language: 'C++',
    stars: 0,
    forks: 0,
    logo: 'https://raw.githubusercontent.com/materialx/MaterialX/main/documents/Images/MaterialXLogo.png',
    category: 'Graphics',
    moreInfoUrl: 'http://www.materialx.org'
  },
  {
    name: 'OpenSubdiv',
    owner: 'PixarAnimationStudios',
    repo: 'OpenSubdiv',
    description: 'A set of open source libraries that implement high performance subdivision surface evaluation on massively parallel CPU and GPU architectures.',
    url: 'https://github.com/PixarAnimationStudios/OpenSubdiv',
    language: 'C++',
    stars: 0,
    forks: 0,
    logo: 'https://graphics.pixar.com/opensubdiv/docs/images/opensubdiv_logo_header.png',
    category: 'Graphics'
  },
  {
    name: 'ssm-helpers',
    owner: 'disneystreaming',
    repo: 'ssm-helpers',
    description: 'Helpers to manage systems with AWS Systems Manager suite of management tools. Includes ssm-session for interactive shells and ssm-run for running commands on multiple instances.',
    url: 'https://github.com/disneystreaming/ssm-helpers',
    language: 'N/A',
    stars: 0,
    forks: 0,
    logo: 'https://avatars.githubusercontent.com/u/39944686?s=200&v=4',
    category: 'Tools'
  },
  {
    name: 'terraform-aws-kinesis-firehose-splunk',
    owner: 'disney',
    repo: 'terraform-aws-kinesis-firehose-splunk',
    description: 'Terraform module that configures a Kinesis Firehose, sets up a subscription for a desired CloudWatch Log Group and sends log data to Splunk. Incluye una Lambda para transformar los datos.',
    url: 'https://github.com/disney/terraform-aws-kinesis-firehose-splunk',
    language: 'Terraform',
    stars: 0,
    forks: 0,
    logo: 'https://static-mh.content.disney.io/matterhorn/assets/goc/disney_logo_dark@2x-45d70f7dd57b.png',
    category: 'Tools'
  },
  {
    name: 'trace-metrics-intellij-plugin',
    owner: 'disney',
    repo: 'trace-metrics-intellij-plugin',
    description: 'Trace Metrics is an IntelliJ plugin which makes use of New Relic trace annotations to create navigable connections between source code and live production metrics.',
    url: 'https://github.com/disney/trace-metrics-intellij-plugin',
    language: 'Java',
    stars: 0,
    forks: 0,
    logo: 'https://static-mh.content.disney.io/matterhorn/assets/goc/disney_logo_dark@2x-45d70f7dd57b.png',
    category: 'Tools'
  },
  {
    name: 'JERI Viewer',
    owner: 'disney',
    repo: 'JERI-Viewer', // Ajusta el repo si corresponde
    description: 'An interactive component for viewing JavaScript Extended-Range Images that can be embedded in websites and web-based documents.',
    url: 'https://jeri.io/',
    language: 'JavaScript',
    stars: 0,
    forks: 0,
    logo: 'https://jeri.io/img/logos/Jeri_Logo_Text.png',
    category: 'Multimedia'
  },
  {
    name: 'meteor-base',
    owner: 'disney',
    repo: 'meteor-base',
    description: 'A base Docker image for use by Meteor apps built using a multistage Dockerfile.',
    url: 'https://github.com/disney/meteor-base',
    language: 'JavaScript',
    stars: 0,
    forks: 0,
    logo: 'https://static-mh.content.disney.io/matterhorn/assets/goc/disney_logo_dark@2x-45d70f7dd57b.png',
    category: 'Tools'
  },
  {
    name: 'Groovity',
    owner: 'disney',
    repo: 'groovity',
    description: 'A modular scripting language and runtime built on open source foundations. Ideal para desarrollar aplicaciones del lado del servidor con características que reducen la complejidad del código.',
    url: 'https://github.com/disney/groovity',
    language: 'Groovy',
    stars: 0,
    forks: 0,
    logo: 'https://static-mh.content.disney.io/matterhorn/assets/goc/disney_logo_dark@2x-45d70f7dd57b.png',
    category: 'Backend'
  },
  {
    name: 'MaterialX (segunda instancia)',
    owner: 'materialx',
    repo: 'MaterialX',
    description: 'MaterialX es un estándar abierto para la transferencia de contenido de materiales y desarrollo visual entre aplicaciones y renderizadores.',
    url: 'https://github.com/materialx/MaterialX',
    language: 'C++',
    stars: 0,
    forks: 0,
    logo: 'https://raw.githubusercontent.com/materialx/MaterialX/main/documents/Images/MaterialXLogo.png',
    category: 'Graphics',
    moreInfoUrl: 'http://www.materialx.org'
  },
  {
    name: 'Universal Scene Description (USD)',
    owner: 'PixarAnimationStudios',
    repo: 'USD',
    description: 'USD es el primer software público que aborda la necesidad de intercambiar y ampliar escenas 3D complejas de forma robusta y escalable.',
    url: 'https://github.com/PixarAnimationStudios/USD',
    language: 'C++',
    stars: 0,
    forks: 0,
    logo: 'https://openusd.org/images/USDLogo24.svg',
    category: 'Graphics'
  },
  {
    name: 'hubot-service-now',
    owner: 'disney',
    repo: 'hubot-service-now',
    description: 'Un script para Hubot que realiza búsquedas en el API de Service Now.',
    url: 'https://github.com/disney/hubot-service-now',
    language: 'JavaScript',
    stars: 0,
    forks: 0,
    logo: 'https://static-mh.content.disney.io/matterhorn/assets/goc/disney_logo_dark@2x-45d70f7dd57b.png',
    category: 'Tools'
  },
  {
    name: 'cucumber-slices-maven-plugin',
    owner: 'DisneyStudios',
    repo: 'cucumber-slices-maven-plugin',
    description: 'Un plugin Maven para pruebas en paralelo de escenarios Cucumber, utilizable junto con Maven Surefire o Failsafe.',
    url: 'https://github.com/DisneyStudios/cucumber-slices-maven-plugin',
    language: 'Java',
    stars: 0,
    forks: 0,
    logo: 'https://static-mh.content.disney.io/matterhorn/assets/goc/disney_logo_dark@2x-45d70f7dd57b.png',
    category: 'Tools'
  },
  {
    name: 'OpenSubdiv (segunda instancia)',
    owner: 'PixarAnimationStudios',
    repo: 'OpenSubdiv',
    description: 'Librerías open source para evaluar superficies subdivididas en arquitecturas paralelas de CPU y GPU. Optimizado para superficies deformables con topología estática.',
    url: 'https://github.com/PixarAnimationStudios/OpenSubdiv',
    language: 'C++',
    stars: 0,
    forks: 0,
    logo: 'https://graphics.pixar.com/opensubdiv/docs/images/opensubdiv_logo_header.png',
    category: 'Graphics'
  },
  {
    name: 'munki',
    owner: 'munki',
    repo: 'munki',
    description: 'Conjunto de herramientas que, junto a un repositorio web de paquetes y metadatos, permiten gestionar instalaciones y eliminaciones de software en máquinas OS X.',
    url: 'https://github.com/munki/munki',
    language: 'N/A',
    stars: 0,
    forks: 0,
    logo: 'https://avatars.githubusercontent.com/u/8826633?s=200&v=4',
    category: 'Tools'
  },
  {
    name: 'OpenEXR',
    owner: 'openexr',
    repo: 'openexr',
    description: 'Formato de imagen HDR desarrollado por Industrial Light & Magic para aplicaciones de imagen digital.',
    url: 'https://github.com/openexr/openexr',
    language: 'C++',
    stars: 0,
    forks: 0,
    logo: 'https://openexr.com/en/latest/_static/openexr-horizontal-color.png',
    category: 'Graphics'
  },
  {
    name: 'jss-api-gem',
    owner: 'PixarAnimationStudios',
    repo: 'ruby-jss',
    description: 'El proyecto ruby-jss proporciona el módulo JSS, un framework Ruby para interactuar con la API REST del JSS de JAMF Software, facilitando la automatización de tareas relacionadas con Casper.',
    url: 'https://github.com/PixarAnimationStudios/ruby-jss',
    language: 'Ruby',
    stars: 0,
    forks: 0,
    logo: 'https://avatars.githubusercontent.com/u/1672744?s=200&v=4',
    category: 'Tools'
  },
  {
    name: 'SeExpr',
    owner: 'wdas',
    repo: 'seexpr',
    description: 'Lenguaje embebible de expresiones aritméticas que permite un control artístico flexible para la generación de imágenes por computadora.',
    url: 'https://github.com/wdas/seexpr/',
    language: 'C++',
    stars: 0,
    forks: 0,
    logo: 'https://wdas.github.io/SeExpr/images/seexpr-logo-white.png',
    category: 'Graphics'
  },
  {
    name: 'Alembic',
    owner: 'alembic',
    repo: 'alembic',
    description: 'Framework open source para el intercambio de gráficos por computadora, que destila escenas complejas en resultados geométricos “cocidos”.',
    url: 'https://github.com/alembic/alembic',
    language: 'C++',
    stars: 0,
    forks: 0,
    logo: 'https://www.alembic.io/images/alembic_logo.jpg',
    category: 'Graphics'
  },
  {
    name: 'Ptex',
    owner: 'wdas',
    repo: 'ptex',
    description: 'Sistema de mapeo de texturas para renderizado de producción, sin necesidad de asignación UV. Permite almacenar cientos de miles de imágenes en un solo archivo.',
    url: 'http://github.com/wdas/ptex',
    language: 'C++',
    stars: 0,
    forks: 0,
    logo: 'https://static-mh.content.disney.io/matterhorn/assets/goc/disney_logo_dark@2x-45d70f7dd57b.png',
    category: 'Graphics'
  },
  {
    name: 'Partio',
    owner: 'wdas',
    repo: 'partio',
    description: 'Librería open source en C++ para leer, escribir y manipular diversos formatos estándar de partículas (GEO, BGEO, PTC, etc.).',
    url: 'https://github.com/wdas/partio/',
    language: 'C++',
    stars: 0,
    forks: 0,
    logo: 'https://partio.us/partio/images/partioOrange.png',
    category: 'Graphics'
  }
];

function App() {
  const [projectsData, setProjectsData] = useState<Project[]>(initialProjects);
  const [filters, setFilters] = useState<SearchFiltersType>({
    query: '',
    category: 'All',
    language: 'All'
  });

  // Función para obtener datos desde la API de GitHub
  const fetchRepoData = async (owner: string, repo: string) => {
    try {
      const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
      if (!response.ok) throw new Error('Error fetching data');
      return await response.json();
    } catch (error) {
      console.error(`Error fetching ${owner}/${repo}:`, error);
      return null;
    }
  };

  useEffect(() => {
    // Actualiza cada proyecto con datos reales de GitHub
    const updateProjectsData = async () => {
      const updatedProjects = await Promise.all(
        projectsData.map(async (project) => {
          // Verifica que existan owner y repo para la consulta
          if (!project.owner || !project.repo) return project;
          const data = await fetchRepoData(project.owner, project.repo);
          if (data) {
            return {
              ...project,
              stars: data.stargazers_count,
              forks: data.forks_count,
              language: data.language || project.language
            };
          }
          return project;
        })
      );
      setProjectsData(updatedProjects);
    };

    updateProjectsData();
  }, []); // Se ejecuta solo una vez al montar

  const filteredProjects = projectsData.filter(project => {
    const matchesQuery =
      project.name.toLowerCase().includes(filters.query.toLowerCase()) ||
      project.description.toLowerCase().includes(filters.query.toLowerCase());
    const matchesCategory = filters.category === 'All' || project.category === filters.category;
    const matchesLanguage = filters.language === 'All' || project.language === filters.language;
    
    return matchesQuery && matchesCategory && matchesLanguage;
  });

  const featuredProjects = projectsData.filter(p => p.featured);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <HeroSection />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12 fade-up">
          <h2 className="text-5xl font-bold mb-4 disney-gradient">
            Disney Open Source
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Open Source Software is important to The Walt Disney Company. We've established an Open Source Program to encourage our developers to utilize and contribute to Open Source projects.
          </p>
        </div>
        <div className="mb-16 slide-in">
          <FeaturedProjects projects={featuredProjects} />
        </div>
        <div className="mb-8 fade-up">
          <h3 className="text-2xl font-bold mb-6">All Projects</h3>
          <SearchFilters filters={filters} onFilterChange={setFilters} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div key={project.name} className="fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </main>
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">About Disney</h4>
              <ul className="space-y-2">
                <li><a href="https://disney.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Disney.com</a></li>
                <li><a href="https://jobs.disneycareers.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Jobs at Disney</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="https://disneytermsofuse.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Terms of Use</a></li>
                <li><a href="https://www.disneyanimation.com/privacy" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-300">
            <p>© {new Date().getFullYear()} Disney. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
