# FFMVic Architecture Open Docs

[![Deploy Docs](https://img.shields.io/github/actions/workflow/status/vic-ffm/architecture-docs-open-public/deploy-docs.yml?label=Deploy%20Docs)](https://github.com/vic-ffm/architecture-docs-open-public/actions/workflows/deploy-docs.yml)
[![Documentation License: CC BY 4.0](https://img.shields.io/badge/Docs-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Code License: MIT](https://img.shields.io/badge/Code-MIT-yellow.svg)](LICENSE)

This repository contains generic technical architecture and implementation guides produced by the Department of Energy, Environment and Climate Action (DEECA) for Forest Fire Management Victoria (FFMVic). These documents are intended for public access and use.

## ⚠️ Important Note for Department Staff

The content published in this repository is **open to the public**. All documents and materials hosted here are publicly accessible.

If you are an employee of the Department of Energy, Environment and Climate Action (DEECA) or an associated Victorian Government entity, you **must obtain approval from your manager** before contributing or publishing any new material to this repository. Please ensure that any information shared complies with all relevant departmental policies regarding public information disclosure.

## 📖 Accessing the Documentation

The latest version of the documentation is can be viewed at:

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

## 📜 <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a> Licence

### Documentation

All documentation content within this repository is licenced under the Creative Commons Attribution 4.0 International License (CC BY 4.0).

This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.

### Code

All code within this repository is licenced under a MIT-style Licence.

Please see the [LICENSE](LICENSE) file in the root of the repository for the full text of the Licence.

## 🛠️ About this Site

Published using [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/).
