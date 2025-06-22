## Brief overview
This rule file outlines the preferred package manager for this project.

## Development workflow
- **Package Manager Preference**: Use Bun for all package management operations (installation, running scripts, etc.) instead of npm, yarn, or pnpm.
  - **Trigger Cases**:
    - When initializing a new project, use `bun init`.
    - When installing dependencies, use `bun install`.
    - When running scripts defined in `package.json`, use `bun run <script-name>`.
    - When adding new dependencies, use `bun add <package-name>`.
    - When removing dependencies, use `bun remove <package-name>`.