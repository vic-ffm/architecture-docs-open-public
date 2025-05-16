# FFMVic Open Tech Docs

[![Deploy Docs](https://img.shields.io/github/actions/workflow/status/vic-ffm/open-tech-docs-public/deploy-docs.yml?label=Deploy%20Docs)](https://github.com/vic-ffm/open-tech-docs-public/actions/workflows/deploy-docs.yml)
[![Documentation License: CC BY 4.0](https://img.shields.io/badge/Docs-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Code License: MIT](https://img.shields.io/badge/Code-MIT-yellow.svg)](LICENSE)

This repository contains generic technical documentation and implementation guides produced by the Department of Energy, Environment and Climate Action (DEECA) for Forest Fire Management Victoria (FFMVic). These documents are intended for public access and use.

## ⚠️ Important Note for Department Staff

The content published in this repository is **open to the public**. All documents and materials hosted here are publicly accessible.

If you are an employee of the Department of Energy, Environment and Climate Action (DEECA) or an associated Victorian Government entity, you **must obtain approval from your manager** before contributing or publishing any material to this repository. Please ensure that any information shared complies with all relevant departmental policies regarding public information disclosure.

## 🚨 Commit Guidelines: What to Share & What to Shun 🚨

⚠️ **IMPORTANT READ BEFORE CONTRIBUTING** ⚠️

| ✅ Allowed Content                | 🚫 Strictly Prohibited Content        |
|-----------------------------------|---------------------------------------|
| 📚 Generic architectural documentation | 🔒 **Any portion of FFMVic's existing apps/config/infra** |
| 🎉 Showcases of new platform features | 🕵️ **Personally Identifiable Information (PII)** |
| 📝 Conceptual code snippets demonstrating patterns | 🔑 **Passwords/credentials of any kind** |
| 📊 Best practice implementation examples | 🛡️ **Authentication tokens/API keys** |
| 🧠 Educational/theoretical content | 🔌 **SSH keys or cryptographic secrets** |
| 🌐 Generic framework version comparisons | 💸 **Financial/payment system details** |
| 📂 Open source code snippets | 🗄️ **Internal database schemas/credentials** |

### 🔴 Important Notes:
- **Never commit** "just a quick test" with real credentials
- **Never include** screenshots containing sensitive data
- **When in doubt**, ask maintainers first! 🙋

🚩 **Found something sensitive?**
Immediately contact repo maintainers and follow [GitHub's guide to removing sensitive data](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)

## 📖 Accessing the Documentation

The latest version of the documentation can be viewed at:

**➡️ [https://opendocs.ffm.vic.gov.au](https://opendocs.ffm.vic.gov.au/)**

## ✍️ Authoring Guide

This repo is published using Material for MkDocs. To take advantage of its features:

**Page & Content Structure:**
*   **Navigation Tabs & Sections:** Top-level sections in `nav` become tabs. Markdown headings (`#`, `##`, `###`) create page sections and populate the right-hand table of contents (up to 3 levels deep).
*   **Content Tabs:** Group related content.
    ```markdown
    === "Tab Title 1"
        Content for tab 1...
    === "Tab Title 2"
        Content for tab 2...
    ```
*   **Admonitions:** Highlight notes, warnings, tips, etc.
    ```markdown
    !!! <type> "Optional Title"
        Content...
    ```
    Supported types: `note`, `abstract`, `info`, `tip`, `success`, `question`, `warning`, `failure`, `danger`, `bug`, `example`, `quote`.
*   **Collapsible Admonitions (Details):**
    ```markdown
    ??? <type> "Title"
        Content...
    ```
    Use `???+` to make it open by default.
*   **Footnotes:**
    ```markdown
    Text with a footnote.[^1]
    [^1]: Footnote definition.
    ```
*   **Task Lists:**
    ```markdown
    - [x] Completed task
    - [ ] Incomplete task
    ```
*   **Tags:** Categorise pages by adding to frontmatter:
    ```yaml
    ---
    tags:
      - Tag1
      - Another Tag
    ---
    ```
*   **Content Snippets:** Include content from other files:
    ```markdown
    --8<-- "path/to/your/snippet.md"
    ```

**Code Blocks & Formatting:**
*   **Syntax Highlighting:** Standard fenced code blocks. Specify language for syntax highlighting:
    ```markdown
    ```python
    print("Hello, world!")
    ```
*   **Inline Code Highlighting:**
    ```markdown
    Use `#!python print()` for inline.
    ```
*   **Code Annotations:** Explain parts of your code. Add `#(n)` in a comment within the code block, then define below:
    ```markdown
    ```python
    def greet(): # (1)
        print("Hello")
    ```

1.  This is a greeting function.
    ```
*   **Copy Code Button:** Automatically added to code blocks.
*   **Keyboard Keys:** `++ctrl+alt+del++`.
*   **Highlighting Text:** `==marked text==` .
*   **Strikethrough, Sub/Superscript:** `~~strikethrough~~`, `H~2~O`, `X^2^`.
*   **Emojis:** Use standard emoji codes, e.g., `:smile:`.

**Diagrams:**
*   **Mermaid Diagrams:** Create flowcharts, sequence diagrams, etc.
    ```markdown
    ```mermaid
    graph TD;
        A-->B;
    ```
*   **Draw.io Diagrams:** Embed diagrams created with Draw.io. Save your `.drawio` file in the `docs` directory and embed it like an image:
    ```markdown
    ![My Diagram](./path/to/diagram.drawio)
    ```

**Interactive Elements:**
*   **Tooltips:** Add a `title` to links or use [Abbreviations](https://python-markdown.github.io/extensions/abbreviations/) for term definitions.
    ```markdown
    [Link text](url "Tooltip for link")
    An HTML abbreviation.
    *[HTML]: Hyper Text Markup Language
    ```
*   **Attribute Lists:** Add classes, IDs, or attributes to elements for advanced styling:
    ```markdown
    A paragraph with a class.{ .my-custom-class }
    ```

**Other Features:**
*   **Instant Loading:** Fast navigation between pages.
*   **Search:** Client-side search with suggestions and highlighting.
*   **Last Revision Date:** Automatically shown on pages.
*   **"Edit this page" Link:** Direct link to the source file on GitHub.

For more advanced usage and other features, please refer to the [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/reference/) and [Python Markdown](https://python-markdown.github.io/extensions/) documentation.

## 🛠️ Local Development Setup & Deployment

### 📋 Prerequisites
- Python 3.10+ installed and available in `$PATH`
- Git

### 🚀 Quick Start Guide

1. **Install `uv`**:
   ```bash
   curl -LsSf https://astral.sh/uv/install.sh | sh
   ```

2. **Clone Repository**:
   ```bash
   git clone https://github.com/vic-ffm/open-tech-docs-public.git
   cd open-tech-docs-public
   ```

3. **Create Virtual Environment**:
   ```bash
   uv venv
   ```

4. **Activate Virtual Environment**:
   ```bash
   # For bash/zsh:
   source .venv/bin/activate

   # For fish shell:
   source .venv/bin/activate.fish

   # There is also support for nu shell, csh, powershell, etc.
   ```

5. **Install Dependencies**:
   ```bash
   uv pip install -r requirements.txt
   ```

6. **Start Development Server**:
   ```bash
   mike serve
   ```
   🔥 Features hot reloading at [http://127.0.0.1:8000](http://127.0.0.1:8000)

7. **Production Build** (optional):
   ```bash
   mkdocs build --strict --verbose
   ```

### 🌍 Deployment Workflow

| Action | GitHub Workflow | Result |
|--------|-----------------|--------|
| Push to `main` | `Deploy Docs` workflow runs | 🚀 Builds & deploys to [opendocs.ffm.vic.gov.au](https://opendocs.ffm.vic.gov.au) |
| Create PR | `Build Docs (PR Check)` runs | ✅ Validates build without deployment |
| Merge to `main` | Triggers full deployment | 📚 Updates live documentation |

### 🔄 Versioning with Mike

[Mike](https://github.com/jimporter/mike) manages documentation versions through a **single deployment branch** (`gh-pages`) using a directory-based versioning system. Here's how it works:

#### 🌿 Version Structure
```mermaid
graph TD
    A[Deployment Branch] --> B["📁 latest (alias)"]
    A --> C["📁 main (version)"]
    A --> D["📁 2.1 (version)"]
    A --> E["📁 2.0 (version)"]
    B -->|Symlink| C
```

#### Key Concepts
1. **Version Directories**
   Each release gets its own directory (e.g., `2.0/`, `main/`) containing full docs
2. **Alias System**
   - `latest` points to current stable version
   - Maintains historical versions indefinitely
3. **Branch Strategy**
   ```mermaid
   graph LR
       S[Source Branch: main] -->|CI/CD| D[Deployment Branch: gh-pages]
       F[Feature Branch] -->|PR| S
       H[Hotfix Branch] -->|PR| S
   ```

#### Workflow Rules
- 🏷️ **Version Naming**
  Use semantic versioning (`2.0`, `2.1`) for releases
  `main` is reserved for development/edge docs
- 🔀 **Alias Management**
  Update aliases when releasing:
  ```bash
  mike deploy 2.2 latest --push --update-aliases
  ```
- 🚫 **No Direct Commits**
  All versioning operations must go through:
  1. GitHub PR process
  2. `mike` CLI commands
  3. CI/CD automation

#### Deployment Process
1. New commits to `main` trigger CI/CD
2. Mike creates/updates version directory
3. Aliases updated via symlinks
4. Full version history preserved

#### Accessing Versions
| Version Type | URL Format |
|--------------|------------|
| Specific release | `https://opendocs.ffm.vic.gov.au/2.0/` |
| Latest stable | `https://opendocs.ffm.vic.gov.au/latest/` |
| Development | `https://opendocs.ffm.vic.gov.au/main/` |

### 🚨 Troubleshooting
- **Broken Links**: Run `mkdocs build --strict` before committing
- **Dependency Issues**: Try `uv pip compile requirements.in --output-file requirements.txt`
- **Version Conflicts**: Use `uv clean` before recreating venv

## 📜 <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a> Licence

### Documentation

All documentation contained in this repository is licenced under the [Creative Commons Attribution 4.0 International License (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/).

### Code

All source code contained in this repository is licenced under a MIT-style Licence.

Please see the [LICENSE](LICENSE) file in the root of the repository for the full text of the Licence.

## 🛠️ About this Site

Published using [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/).
