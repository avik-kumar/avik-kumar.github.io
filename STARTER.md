# STARTER.md — Avik Kumar's Personal Portfolio

## 1. Project Overview

Build a polished, technically sophisticated personal portfolio website for **Avik Kumar**, a Computer Science undergraduate at Georgia Tech.

The website should serve as a central home for:
- Career opportunities, including research positions, internships, and full-time roles.
- Research projects, technical projects, and engineering work.
- Leadership and extracurricular contributions, particularly Georgia Tech Solar Racing.
- Technical writing, project notes, and future publications.
- A concise introduction to Avik's interests, working style, and technical direction.
- Links to GitHub, LinkedIn, email, papers, demos, and project repositories.

The site should feel like the online presence of an early-career engineer and researcher who takes technical work seriously. It should be credible to a robotics researcher, an ML engineer, a formal methods researcher, a technical recruiter, and another student interested in collaborating.

This is not a conventional résumé template, a startup landing page, a personal blog with a portfolio attached, or a collection of project cards without context.

**Core objective:** Make it immediately clear what Avik works on, what he has built, what he has contributed, and where someone can learn more.

## 2. Personal Background and Positioning

### Current profile

- Name: Avik Kumar
- Location: Atlanta, Georgia
- University: Georgia Institute of Technology
- Degree: B.S. in Computer Science
- Threads: Intelligence and Modeling & Simulation
- Expected graduation: May 2028 — verify before publishing
- Current academic stage: Second-year undergraduate as of October 2026
- Research involvement: Robotics research at Ha Lab, Georgia Tech
- Engineering leadership: Data subteam lead at Georgia Tech Solar Racing
- Primary interests: Robotics, reinforcement learning, machine learning, formal methods, SMT solving, and intelligent engineering systems

Keep the site focused on technical work rather than biographical trivia. Personal details should support the professional narrative rather than compete with it.

### Central positioning

Avik works across research, software engineering, and applied systems. His interests span both theoretically interesting problems and practical implementation.

The site should communicate three complementary dimensions:

1. **Research:** Investigating technical questions, understanding existing methods, designing experiments, and contributing to new approaches.
2. **Engineering:** Building reliable software, integrating complex systems, developing tools, and turning ideas into working implementations.
3. **Leadership:** Coordinating people and projects, improving engineering infrastructure, and enabling a technical team to operate more effectively.

These dimensions should reinforce each other. Do not present the site as three unrelated résumés.

### Suggested introductory copy

Use this as an initial draft, not immutable final copy:

> I'm Avik, a Computer Science student at Georgia Tech interested in intelligent systems, robotics, and the algorithms that make complex systems work.
>
> My work spans robotics research, machine learning and formal methods, and engineering software for Georgia Tech Solar Racing. I enjoy working at the intersection of theory and implementation: understanding a difficult problem, building the tools to investigate it, and getting the resulting system to work in practice.

A shorter alternative for the homepage hero:

> **I build systems, investigate algorithms, and turn technical ideas into working implementations.**

Supporting line:

> Computer Science @ Georgia Tech · Robotics · ML & Formal Methods · Engineering Systems

Avoid grandiose claims such as “redefining the future of AI,” “building tomorrow,” or “pushing the boundaries of innovation.” Let the projects demonstrate technical ability.

## 3. Audience and User Experience

Design for four primary audiences.

### A. Technical recruiters and hiring managers

They need to determine quickly:
- Who is Avik?
- What areas does he work in?
- What has he actually built?
- What was his personal contribution?
- What technologies and methods does he understand?
- Where can they find his résumé, GitHub, LinkedIn, and contact information?

Make these answers accessible from the homepage without requiring a long scroll.

### B. Researchers and graduate admissions readers

They need to see:
- Research questions and motivations.
- Technical approaches and relevant background.
- Avik's specific contributions.
- Experimental results, publications, and project status.
- Whether the work reflects genuine research involvement rather than only implementation.

Research pages should be more detailed than ordinary project summaries.

### C. Engineers and potential collaborators

They need to understand:
- The systems Avik has built.
- His approach to implementation, debugging, evaluation, and integration.
- His experience with software infrastructure and engineering workflows.
- What he is interested in working on next.

### D. Other technical students

The site can also function as a public record of learning, building, and experimentation. It should leave room for future technical notes and project write-ups without requiring a formal publication for every project.

## 4. Design Direction

### Overall aesthetic

Create a restrained, editorial, technically literate website.

The visual reference should be closer to a carefully designed researcher's personal site or an independent engineer's portfolio than a generic corporate landing page.

Desired qualities:
- Minimal but not empty.
- Technical but not sterile.
- Personal but not overly casual.
- Visually distinctive without unnecessary decoration.
- Easy to scan, with depth available when readers want it.
- Excellent typography, spacing, alignment, and information hierarchy.

The content is the main attraction. The design should make technical work easier to understand rather than compete with it.

### Color palette

Start with:
- Warm off-white or very light neutral background.
- Near-black or charcoal primary text.
- Muted gray secondary text.
- One restrained accent color, potentially a deep blue, cobalt, or muted teal.
- Subtle borders and neutral surfaces.

Support a dark theme if it can be implemented cleanly, but prioritize a coherent light theme first.

Avoid:
- Excessive gradients.
- Neon colors everywhere.
- Rainbow-colored technology badges.
- Large glowing orbs and decorative blobs.
- Overuse of glassmorphism.
- Excessive shadows and rounded cards.
- Emoji as visual substitutes for icons.
- Generic AI-generated illustrations that do not represent actual work.

### Typography

Use a strong sans-serif for body text and headings. A restrained monospace font can provide contrast for metadata, project labels, dates, technical identifiers, and small annotations.

Possible pairings:
- Inter or Geist for primary typography.
- IBM Plex Mono or JetBrains Mono for technical metadata.

Keep line lengths comfortable, especially on research pages. Use whitespace to establish hierarchy rather than oversized text everywhere.

### Layout

- Constrain the main content to a readable maximum width.
- Use a simple, consistent navigation bar.
- Align content to a deliberate grid.
- Use a two-column layout selectively for project previews and profile sections.
- Use full-width sections only when they improve the narrative.
- Keep mobile layouts clean and functional.
- Prefer clear headings and compact metadata over decorative panels.

### Motion and interaction

Use subtle, purposeful interaction:
- Small hover transitions on links and project entries.
- Gentle entrance effects only where they improve orientation.
- A working light/dark theme toggle, if included.
- Copy-to-clipboard interactions for selected technical snippets, if useful.
- Functional project filters, if the number of projects justifies them.

Respect reduced-motion preferences. No animation should delay access to content or make navigation harder.

## 5. Site Architecture

Implement the following pages or sections.

### Page 1: Home (`/`)

The homepage is the most important page. It should establish identity, show the strongest work, and provide direct paths to deeper content.

Recommended structure:

#### A. Navigation

Left:
- `Avik Kumar` as a text wordmark, optionally with a small typographic monogram.

Right:
- Work
- Research
- About
- Writing
- Résumé

Provide direct GitHub and LinkedIn links, either in the navigation or a compact contact area. On mobile, use a simple accessible menu.

Do not make navigation overly elaborate.

#### B. Hero

Include:
- Name.
- A concise technical positioning statement.
- One short supporting paragraph.
- Primary action: Explore Work.
- Secondary action: Résumé.
- Compact links to GitHub, LinkedIn, and email.

The hero should be editorial rather than a generic centered SaaS hero. Consider a left-aligned composition with generous whitespace and a small column of technical metadata.

A small portrait is optional. Do not invent a profile photo or require one for the design to work.

Possible eyebrow text:

`COMPUTER SCIENCE · GEORGIA TECH`

Possible hero:

**Building intelligent systems, from algorithms to implementation.**

Supporting text should mention robotics, ML/formal methods, and engineering systems without listing every interest.

#### C. Selected Work

Feature three or four strong projects rather than every project Avik has ever touched.

Initial candidates:
1. Humanoid robotics research at Ha Lab.
2. ML-guided SMT solving and tactic search.
3. Georgia Tech Solar Racing telemetry and simulation systems.
4. One independent software project, such as ArxivReads or Second Brain.

Each entry should include:
- Project title.
- Category.
- One-sentence description.
- Personal role.
- Key technologies or methods.
- Project status, where useful.
- Links to a detailed write-up, repository, paper, or demo.

Use a mixture of prominent feature sections and compact entries. Do not force all projects into identical cards if their content differs.

#### D. Research and Engineering Snapshot

A compact section explaining the two complementary sides of the portfolio:

**Research**
- Robotics and embodied intelligence.
- Reinforcement learning and policy learning.
- Formal methods and solver optimization.

**Engineering**
- Telemetry and data infrastructure.
- Simulation and analysis.
- Software tools and technical integrations.

This should clarify the range of work without becoming a keyword dump.

#### E. Current Focus

An optional, lightweight section describing what Avik is currently exploring.

Possible themes:
- Simulation-to-real transfer for robotic manipulation.
- Learning-guided search and solver optimization.
- Better simulation and telemetry tooling for solar racing.

Treat these as candidate topics, not claims that each is an active project at all times. Keep the section easy to update.

#### F. Footer

Include:
- Email.
- GitHub.
- LinkedIn.
- Résumé.
- Copyright or a minimal personal-site signature.
- Optional last-updated date, generated automatically only if reliable.

Keep the footer understated.

### Page 2: Work (`/work/`)

Create a dedicated project index.

The page should allow readers to browse technical work by category:
- Robotics.
- Machine Learning.
- Formal Methods.
- Software Engineering.
- Simulation and Data Systems.
- Independent Projects.

Filters should be implemented only if there are enough entries to make them useful. A small portfolio is better served by a well-organized list than an elaborate filtering interface.

Each project should have a consistent summary structure:

- Name and short description.
- Domain and role.
- Problem being solved.
- Technical approach.
- Personal contribution.
- Outcome or current status.
- Relevant links.

Do not invent project outcomes or numerical performance improvements.

### Page 3: Individual Project Pages

Use a consistent template for project detail pages.

Suggested URL structure:
- `/work/robotics/`
- `/work/smt-search/`
- `/work/solar-racing/`
- `/work/arxivreads/`
- `/work/second-brain/`

Individual pages should be substantive enough to demonstrate technical depth. They should not merely repeat the homepage card.

Recommended sections:

1. **Overview** — What the project is and why it matters.
2. **Problem** — What challenge or limitation motivated the work.
3. **Approach** — Methods, architecture, algorithms, or engineering decisions.
4. **My Contribution** — What Avik personally designed, implemented, evaluated, or led.
5. **Technical Details** — Diagrams, code, experiments, architecture, or implementation notes where appropriate.
6. **Results** — Measured results, completed deliverables, publications, or verified milestones.
7. **Lessons and Limitations** — What worked, what did not, and what remains unresolved.
8. **Links** — Repository, paper, demo, related project, or collaborators' public work where appropriate.

Not every project needs every section. Avoid filler headings when there is insufficient content.

Clearly distinguish individual contributions from team accomplishments.

### Page 4: Research (`/research/`)

Provide a more research-oriented index, potentially linking to the same underlying project pages as `/work/`.

The emphasis should be on:
- Research questions.
- Technical methods.
- Experimental evaluation.
- Publications and preprints.
- Research interests and future directions.

Potential organization:
- Robotics and Embodied Intelligence.
- Formal Methods and Automated Reasoning.
- Publications and Research Artifacts.

For each research project, include the advisor or lab only when appropriate and publicly verifiable. Do not disclose internal research material or imply authorship or publication status that has not been confirmed.

For papers, provide:
- Title.
- Authors in the correct order.
- Venue and publication status.
- Abstract or concise summary.
- Avik's contribution.
- Links to the paper, code, and project page.

If a publication does not yet exist, label the work accurately as ongoing research rather than a publication.

### Page 5: About (`/about/`)

This page should add personality and context beyond the résumé.

Suggested sections:

**A short introduction**

Explain that Avik is interested in difficult technical problems and enjoys moving between mathematical ideas, algorithms, and working systems.

**How I like to work**

Possible themes:
- Understand the underlying problem before choosing a solution.
- Build tools that make complex systems easier to investigate.
- Combine rigorous reasoning with empirical testing.
- Prefer concrete results and technical ownership over superficial activity.

Frame these as authentic working preferences, not exaggerated claims of exceptionalism.

**Technical interests**

Organize interests into coherent groups rather than a giant list.

Research:
- Robotics and embodied AI.
- Reinforcement learning and policy learning.
- ML-guided search and optimization.
- SMT solving and formal methods.

Engineering:
- Python and C++.
- Simulation and robotics tooling.
- Data infrastructure and visualization.
- Backend services and developer tools.

Include only languages, frameworks, and tools that Avik can substantiate through actual experience. Mark deeper experience separately from exploratory familiarity.

**Beyond individual projects**

Briefly discuss Solar Racing as a collaborative engineering environment and the value of building infrastructure that helps a larger team succeed.

Personal interests such as badminton, cardistry, cooking, or reading can appear in a small optional section if Avik wants the site to feel more human. They should not dominate a career-focused portfolio.

Do not publish private family, immigration, financial, or other sensitive details.

### Page 6: Writing (`/writing/`)

Build a simple index for technical notes, longer project explanations, and future articles.

Potential topics:
- Lessons from integrating a robotics pipeline.
- Technical notes on simulation and policy learning.
- Experiments with PUCT and learned priors for search.
- Practical engineering decisions in telemetry systems.
- Explanations of SMT concepts and solver optimization.

These are topic ideas, not claims that articles already exist.

The writing section should work well even when empty or when only one article exists. Initially, it is acceptable to show a small number of published notes or a restrained placeholder directing readers to project write-ups.

Avoid a forced weekly blogging schedule. Publish when there is something useful to explain.

### Page 7: Résumé (`/resume/` or a PDF link)

Provide an obvious résumé link from the homepage and navigation.

Preferred behavior:
- Open a PDF in a new browser tab or let visitors download it.
- Keep a current PDF in a clearly documented public path, such as `/public/resume.pdf`.
- Optionally provide a lightweight HTML résumé page for accessibility and search indexing.
- Ensure that the résumé and website remain consistent.

Do not generate or publish a résumé containing unverified dates, GPA, awards, or contact information.

### Page 8: Contact

A dedicated page is optional. A compact contact section and consistent footer are probably sufficient initially.

Include professional contact channels:
- Email.
- LinkedIn.
- GitHub.

Avoid an unnecessary backend-powered contact form. A mail link is simpler, more reliable, and suitable for a static GitHub Pages site.

## 6. Featured Projects: Initial Content Briefs

Use the following as starting points. Treat every description as a draft that needs factual verification before public release.

### Project A: Humanoid Robotics Research

**Category:** Robotics / Embodied AI / Reinforcement Learning

**Context:** Research at Ha Lab involving humanoid robotics, locomotion, manipulation, teleoperation, and system integration.

**Known technical context:**
- Unitree G1 humanoid robot.
- Inspire dexterous hands.
- Isaac Sim and MuJoCo.
- VR-based teleoperation involving Pico hardware and trackers.
- Whole-body navigation and manipulation.
- Robot control and visualization tooling.

**Suggested framing:**

Working on the integration and development of robotic manipulation and locomotion systems, with an interest in translating learned policies and simulation workflows into practical robotic behavior.

**Detail-page content to gather:**
- Exact project title and research objective.
- Which components Avik personally implemented.
- The software architecture and data flow.
- What was simulated versus tested on physical hardware.
- Experimental results and demonstrations.
- Relevant paper and repository links, if public.
- Current status and intended next steps.

Do not imply that every listed component was independently developed by Avik. Make the distinction between system integration, implementation, and original research contributions explicit.

### Project B: ML-Guided SMT Solving

**Category:** Formal Methods / Automated Reasoning / Machine Learning

**Context:** Exploring machine-learning-guided search for SMT solver tactic sequences and strategies.

**Known technical context:**
- Z3 and SMT solving.
- Monte Carlo tree search.
- UCT and PUCT.
- Learned or LLM-generated tactic priors.
- Conditional strategies and tactic-sequence evaluation.
- Potential use of evolutionary search or local language models.

**Suggested framing:**

Investigating how learned guidance can improve the exploration of solver tactics, with the goal of discovering effective strategies while reducing unnecessary search.

**Detail-page content to gather:**
- Formal problem definition.
- Baseline search algorithm.
- Proposed algorithm and why it differs.
- Role of the language model or learned prior.
- Benchmark suite and evaluation methodology.
- Solver performance, search cost, and relevant ablations.
- Reproducibility and implementation links.
- Publication or competition results, where verified.

Distinguish implemented features from proposed experiments. Do not claim that PUCT or learned priors improve performance until the experiments support that conclusion.

If an award or competition result is relevant, verify the official event name, category, and exact result before publishing it.

### Project C: Georgia Tech Solar Racing — Data and Software Systems

**Category:** Engineering Leadership / Data Infrastructure / Simulation

**Context:** Leading the Data subteam of Georgia Tech Solar Racing, which supports solar-vehicle telemetry, data visualization, analysis, and race strategy.

**Known technical context:**
- Real-time telemetry.
- Grafana and InfluxDB.
- AWS-hosted infrastructure.
- Dashboard and visualization development.
- MATLAB/Simulink vehicle simulation.
- Solar forecasting and strategy tooling.
- Backend services and data pipelines.

**Suggested framing:**

Leading development of the software and data systems that help a solar-racing team observe vehicle behavior, analyze performance, and make informed engineering and race-strategy decisions.

**Detail-page structure:**

1. **System overview:** How data moves from the vehicle or data sources into storage, processing, and visualization.
2. **Architecture:** Show an actual architecture diagram where disclosure is permitted.
3. **Engineering contributions:** Specify the systems Avik built, maintained, or led.
4. **Team leadership:** Explain the technical scope and cross-functional coordination.
5. **Reliability and testing:** Discuss how the systems are tested, deployed, monitored, and debugged.
6. **Simulation and strategy:** Explain relevant models and decision-support tools.
7. **Impact:** Include verified improvements, deployment outcomes, or actual usage.

The page should demonstrate that the Data team is an engineering organization, not simply a race-strategy group.

Do not publish secrets, internal infrastructure credentials, sensitive vehicle data, or proprietary designs.

### Project D: ArxivReads

**Category:** Independent Software / Developer Tools / Information Retrieval

**Context:** A Goodreads-style application for discovering and tracking academic papers, with semantic search.

**Suggested framing:**

An attempt to make research discovery more organized by combining paper tracking with semantic search and a more personal reading workflow.

**Content to gather:**
- Intended user and problem.
- Search architecture and retrieval method.
- Paper metadata sources.
- Frontend and backend design.
- Features implemented versus planned.
- Deployment and usage, if any.
- Repository and live demo.

Emphasize actual engineering decisions and working functionality rather than the concept alone.

### Project E: Discord-Native Second Brain

**Category:** Developer Tools / Personal Knowledge Management / AI Applications

**Context:** A Discord-native tool for querying personal knowledge, managing tasks, organizing Markdown notes, using specialized agents, and ingesting PDFs and text.

**Suggested framing:**

Exploring a chat-native knowledge system that combines searchable personal information, task workflows, document ingestion, and specialized AI-assisted interactions.

**Content to gather:**
- Architecture and major components.
- Document ingestion and retrieval pipeline.
- How notes and tasks are represented.
- Agent design and tool invocation.
- Data storage and privacy decisions.
- Current implementation status.
- Repository and demonstration links.

Be explicit about which capabilities are implemented. Do not present planned agent behavior as working functionality.

## 7. Visual Elements That Should Reflect the Work

The portfolio should use real artifacts wherever possible.

Prioritize:
- Robotics photos or short demonstration videos.
- Actual simulation screenshots.
- System architecture diagrams.
- Technical plots and evaluation results.
- Telemetry dashboard screenshots with sensitive information removed.
- Solver search diagrams or benchmark charts.
- Code excerpts when they explain an important design decision.
- Screenshots of completed independent projects.

Each image should have a purpose: establish context, explain a system, demonstrate a result, or make the work easier to understand.

Do not create fake screenshots, fabricated benchmark plots, invented UI, or synthetic project imagery that could be mistaken for real work.

If public media is not yet available, use clean typography and diagrams instead of filling the page with stock images.

## 8. Content and Writing Standards

The writing should sound like a thoughtful technical person explaining real work.

### Preferred style

- Specific rather than grandiose.
- Concise summaries with deeper explanations available.
- Clear distinctions between individual work and team work.
- Honest descriptions of project status.
- Quantitative results where available and properly sourced.
- Technical detail appropriate to the intended audience.

### Every project should answer

1. What problem were you trying to solve?
2. Why is the problem interesting or difficult?
3. What did you personally do?
4. How did you approach it?
5. What did you learn or achieve?
6. What can the reader inspect, reproduce, or explore?

Avoid:
- Buzzword-heavy paragraphs.
- Unsubstantiated claims of expertise.
- Lists of technologies without explaining their purpose.
- Inflated descriptions of routine implementation.
- Fake performance metrics.
- Repeated biographies on every page.
- Overly polished marketing language that obscures what was actually done.

### Claims and verification

Create a content checklist for information that must be confirmed before launch:
- Graduation date.
- GPA, if included.
- Official role titles and dates.
- Exact research contributions.
- Publication status and authorship.
- Competition awards and results.
- Project performance metrics.
- Public availability of code and demonstrations.
- Contact details.

When uncertain, omit the claim or label it appropriately.

## 9. Technical Implementation

### Hosting

Use GitHub Pages for a static website hosted from a GitHub repository.

The implementation must work correctly when hosted either:
- At a user site, such as `username.github.io`.
- At a project site, such as `username.github.io/repository-name/`.

Do not hardcode root-relative paths that break when the site is deployed under a repository subpath.

### Suggested stack

Prefer a maintainable, static-first architecture.

Recommended default:
- Astro for static site generation.
- TypeScript for components and application logic.
- CSS or a lightweight styling system with design tokens.
- Markdown or MDX for project pages and writing.
- GitHub Actions for build and deployment.
- GitHub Pages as the hosting provider.

Astro is a good fit because most of the website is content and navigation, not a highly interactive web application.

A simpler alternative is plain HTML, CSS, and TypeScript if that produces a cleaner implementation. Avoid adding a complex frontend framework, database, backend, authentication system, or CMS without a real requirement.

### Suggested repository structure

```text
portfolio/
├── STARTER.md
├── README.md
├── package.json
├── astro.config.mjs
├── tsconfig.json
├── public/
│   ├── favicon.svg
│   ├── images/
│   └── resume.pdf
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── ProjectCard.astro
│   │   ├── ProjectHeader.astro
│   │   └── SocialLinks.astro
│   ├── content/
│   │   ├── config.ts
│   │   ├── projects/
│   │   └── writing/
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── work/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   ├── research.astro
│   │   ├── writing/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   └── 404.astro
│   └── styles/
│       └── global.css
├── .github/
│   └── workflows/
│       └── deploy.yml
└── README.md
```

Adapt the structure to the framework's conventions. Do not create empty directories or boilerplate files that have no purpose.

The résumé can be linked directly as a PDF. A dedicated résumé page can be added if it provides real value.

### Content architecture

Keep project information separate from presentation where practical.

Each project record should support fields such as:
- `title`
- `slug`
- `summary`
- `category`
- `role`
- `date`
- `status`
- `technologies`
- `featured`
- `image`
- `links`
- `content`

Use the framework's content collections or another typed, maintainable structure.

Avoid duplicating project descriptions in the homepage, work index, and individual detail pages. Reuse the same underlying project data where possible.

### GitHub Actions deployment

Configure GitHub Actions to:
1. Install dependencies.
2. Build the static site.
3. Fail on build errors.
4. Upload the generated static output.
5. Deploy to GitHub Pages.

Document the required repository settings and any base-path configuration in `README.md`.

Use supported, maintained GitHub Pages deployment actions and pin action versions appropriately. Do not commit build artifacts, secrets, or unnecessary generated files.

### Local development

The repository should include straightforward commands for:
- Installing dependencies.
- Starting the development server.
- Running a production build.
- Previewing the built site locally.
- Checking formatting or types, where configured.

Ensure the production build succeeds before considering the site complete.

## 10. Quality Requirements

### Responsive design

Test at:
- Wide desktop.
- Standard laptop.
- Tablet.
- Mobile.

No horizontal overflow, broken navigation, unreadable code blocks, or inaccessible interactions.

### Accessibility

- Semantic HTML.
- Logical heading hierarchy.
- Keyboard-accessible navigation.
- Visible focus states.
- Sufficient color contrast.
- Useful alt text for meaningful images.
- Reduced-motion support.
- Accessible theme controls, if implemented.

### Performance

- Prefer static rendering.
- Optimize and appropriately size images.
- Avoid large JavaScript bundles for simple content.
- Lazy-load noncritical images.
- Avoid unnecessary third-party scripts.
- Ensure the site remains useful with JavaScript disabled wherever practical.

### Search and sharing

Include:
- Page-specific titles and descriptions.
- Canonical URLs when the deployment URL is known.
- Open Graph metadata.
- A favicon.
- A sitemap.
- A robots.txt appropriate for a public portfolio.
- Clean, stable URLs.
- A useful 404 page.

Do not index incomplete draft pages or expose unpublished research notes accidentally.

### Privacy and security

The site is public by default. Review everything before publishing.

Never include:
- API keys or tokens.
- Credentials or private repository URLs.
- Internal documents not approved for public release.
- Personal financial or immigration documents.
- Sensitive contact or location information.
- Private information about lab members or teammates.

Use public links only where sharing is authorized.

## 11. Implementation Phases

Build incrementally. A coherent first release is more valuable than a half-finished site with many features.

### Phase 1 — Strong first release

- Set up the repository and static site framework.
- Establish the visual system and responsive navigation.
- Build the homepage.
- Create the work index.
- Write substantive pages for the strongest two or three projects.
- Add the About page.
- Add GitHub, LinkedIn, email, and résumé links.
- Configure GitHub Pages deployment.
- Verify the public production URL.

### Phase 2 — Research and content depth

- Add the dedicated research index.
- Expand project write-ups with diagrams, results, and demonstrations.
- Add publications and competition results where verified.
- Add the independent software projects.
- Improve cross-linking between related work.

### Phase 3 — Writing and refinements

- Publish technical notes when ready.
- Add project filters if justified by portfolio size.
- Add dark mode if it improves the experience.
- Refine metadata, accessibility, and performance.
- Add analytics only if genuinely useful and with appropriate privacy consideration.

Do not delay Phase 1 while waiting for every project to have a perfect write-up.

## 12. Definition of Done

The initial site is complete when:

- The website is live on GitHub Pages.
- The repository contains all necessary source files and setup instructions.
- The homepage immediately explains who Avik is and what he works on.
- The strongest projects are easy to find.
- Each featured project has an accurate, substantive description.
- Personal contributions are distinguished from team contributions.
- All navigation, social, paper, and repository links work.
- The site works on desktop and mobile.
- The production build succeeds.
- The deployment pipeline works from a repository update.
- No placeholder text, fake results, broken images, or dead links remain.
- Publicly visible claims have been checked for accuracy.
- A future update does not require redesigning the whole site.

## 13. Instructions to the Coding Agent

Treat this file as the project's product and design brief.

Before implementation:
1. Inspect the repository and its existing files.
2. Preserve useful existing work rather than overwriting it blindly.
3. Identify missing assets and information.
4. Establish the base path and GitHub Pages deployment configuration.
5. Build a small, coherent design system before implementing all pages.

During implementation:
- Prioritize content hierarchy and visual consistency.
- Build reusable components where they reduce duplication.
- Keep the code maintainable and typed.
- Avoid unnecessary dependencies.
- Use real assets when available.
- Keep the website functional throughout development.
- Do not invent personal facts, project results, publication status, or technical details.
- Use clearly marked internal placeholders for missing information, and remove them from the public build before launch.

After implementation:
- Run the production build.
- Fix all build errors.
- Check internal links and asset paths.
- Test the responsive layouts.
- Verify GitHub Pages deployment and the deployed URL.
- Document how to update projects, writing, résumé, and contact links.

The final result should feel intentional and technically credible. It should make the work easy to explore, reward deeper reading, and remain simple enough to maintain throughout the rest of undergraduate study and beyond.
