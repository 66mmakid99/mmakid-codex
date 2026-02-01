# CLAUDE.md - AI Assistant Guide for mmakid-codex

This document provides essential context and guidelines for AI assistants working with the mmakid-codex repository.

## Repository Overview

**Repository:** mmakid-codex
**Purpose:** [To be defined as the project evolves]
**Status:** Initial setup phase

## Project Structure

```
mmakid-codex/
├── CLAUDE.md          # AI assistant guidelines (this file)
└── [project files]    # To be added
```

As the project grows, update this section to reflect the actual directory structure and the purpose of each major directory.

## Development Workflow

### Getting Started

1. Clone the repository
2. Review this CLAUDE.md file for context
3. Check for any additional documentation in the project

### Branch Strategy

- **Main branch:** Production-ready code
- **Feature branches:** Use descriptive names prefixed with the feature type
  - `feature/` - New features
  - `fix/` - Bug fixes
  - `refactor/` - Code refactoring
  - `docs/` - Documentation updates
  - `claude/` - AI-assisted development branches

### Commit Guidelines

- Write clear, descriptive commit messages
- Use conventional commit format when applicable:
  - `feat:` - New feature
  - `fix:` - Bug fix
  - `docs:` - Documentation changes
  - `refactor:` - Code refactoring
  - `test:` - Adding or updating tests
  - `chore:` - Maintenance tasks

## Code Conventions

### General Principles

1. **Readability First:** Write code that is easy to understand
2. **Keep It Simple:** Avoid over-engineering; implement only what's needed
3. **Consistency:** Follow established patterns in the codebase
4. **Documentation:** Comment complex logic; keep obvious code self-documenting

### File Organization

- Group related functionality together
- Use meaningful file and directory names
- Keep files focused on a single responsibility

## AI Assistant Guidelines

### When Working on This Codebase

1. **Read Before Modifying:** Always read existing code before making changes
2. **Preserve Patterns:** Follow established conventions in the codebase
3. **Minimal Changes:** Make focused changes; avoid unnecessary modifications
4. **Test Your Changes:** Verify modifications work as expected
5. **No Security Vulnerabilities:** Be mindful of OWASP top 10 vulnerabilities

### Code Quality Standards

- No hardcoded secrets or credentials
- Handle errors appropriately
- Validate user input at system boundaries
- Write maintainable, readable code

### What to Avoid

- Over-engineering solutions
- Adding unnecessary dependencies
- Making changes outside the scope of the task
- Creating files unless absolutely necessary
- Adding comments to unchanged code

## Testing

[Testing guidelines to be added as testing framework is established]

### Running Tests

```bash
# Commands to be defined
```

## Build & Deployment

[Build and deployment instructions to be added]

## Dependencies

[Dependency management guidelines to be added based on chosen tech stack]

## Troubleshooting

### Common Issues

[Document common issues and solutions as they arise]

## Contributing

1. Create a feature branch from main
2. Make focused, well-documented changes
3. Ensure all tests pass
4. Submit a pull request with clear description

---

**Last Updated:** 2026-02-01
**Maintained By:** Project contributors

*This document should be updated as the project evolves to reflect current practices and structure.*
