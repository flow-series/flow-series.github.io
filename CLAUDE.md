# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## ⚙️ High-Level Architecture
This project, `flow-series.github.io`, is a collection of distinct web applications, each encapsulated as a "flow." It serves as a comprehensive software suite rather than a monolithic application.

**Core Structure:**
1.  **Foundation**: The main site (`index.html`, `privacy.html`, `service.html`) provides universal entry points and legal boilerplate.
2.  **Feature Modules**: Functionality is split into three distinct modules:
    *   **`focusflow/`**: Dedicated to productivity and task management features.
    *   **`slideflow/`**: Dedicated to minimalist presentation/viewing features.
    *   **`workerflow/`**: Dedicated to complex scheduling and workflow engine features.
3.  **Resources**: Shared resources (`css/`, `js/`) maintain consistency across all flows. Executable assets are provided in the `downloads/` directory.

**Primary Development Concerns:**
*   **Isolation**: When working on a feature (e.g., `focusflow`), changes should be primarily contained within its respective directory and files.
*   **Cross-Cutting Concerns**: Global state, UI behavior, and internationalization (`i18n`) are handled in `js/components.js` and `js/i18n.js` and must be considered when modifying feature modules.

## 🛠️ Common Workflow
*   **Deployment/Execution**: The primary execution method is via the standard web server structure (assuming this is a GitHub Pages-like deployment). Specific build or lint commands are not available via the current tooling, but the structure implies standard web asset processing (HTML/CSS/JS).
*   **Testing**: Currently, no dedicated testing framework or testing commands are present. If testing is required, specific tests must be added manually.
*   **Development Guidance**: Use the `analysis_summary.md` for a detailed breakdown of components and their roles.

## 🧩 Key Modules and Roles
*   **`js/components.js`**: The primary initialization script. Its main role is constructing the persistent global UI elements (Header and Footer) upon `DOMContentLoaded`, and managing language state synchronization.
*   **`js/i18n.js`**: Handles localization logic, which relies on functions exposed in `components.js` (e.g., `setLanguage`).

---
**⚠️ Developer Notes:**
*   The project structure prioritizes functional modularity.
*   Do not attempt to run generalized frontend build tools unless specific tooling (like WebPack config) is provided in the repository.
*   Refer to `analysis_summary.md` for a detailed map of files and functions.
