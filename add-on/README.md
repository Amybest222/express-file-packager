# Express File Packager

Express File Packager is an Adobe Express add-on that exports document pages into a single ZIP package.

It supports multiple export formats and includes an optional `fonts.txt` output so collaborators can quickly see which fonts are being used for delivery and handoff workflows.

## Features

- Export selected pages as `PNG`, `JPG`, and `PDF`
- Choose export range: current page or entire document
- Bundle all exported assets into one ZIP file
- Optional Font List output (`fonts.txt`) included in the package
- Clear progress and status feedback in the panel UI

## Built With

- Adobe Express Add-on SDK
- Document Sandbox Runtime
- JavaScript (ES modules)
- HTML + CSS
- JSZip

## Project Structure

```
add-on/
	src/
		index.html              # Panel UI and export workflow
		manifest.json           # Add-on manifest and entrypoint config
		sandbox/
			code.js               # Document sandbox runtime API exposure
		ui/
			index.js              # UI runtime bridge example
```

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm
- Adobe Express Add-on Developer setup

### Install

```bash
npm install
```

### Build

```bash
npm run build
```

### Run

```bash
npm run start
```

## How To Use

1. Open the add-on panel in Adobe Express.
2. Select one or more output formats (`PNG`, `JPG`, `PDF`).
3. Choose page range (`Current Page Only` or `All Pages`).
4. Optionally enable `Font List (fonts.txt)`.
5. Click `Create Package`.
6. Download the generated ZIP file.

## Font List Option

When `Font List (fonts.txt)` is enabled, the package includes a `fonts.txt` file containing the fonts selected in the panel.

This is useful for:

- production handoff
- print/vendor communication
- keeping a simple record of typography choices in each package

## Permissions and Notes

- Export depends on Adobe Express document export permissions.
- If export is restricted for the current document, the add-on shows a warning and skips package creation.

## Help URL (For Listing)

If you publish this on GitHub, use your repository URL as the Help URL, for example:

`https://github.com/amybest222/express-file-packager`

## Privacy

Express File Packager does not collect, store, or transmit personal data.

All processing happens locally within Adobe Express while creating export packages.

The add-on only generates user-requested output files (for example: PNG, JPG, PDF, and optional fonts.txt) and downloads them to your device.

Full privacy notice:

https://github.com/amybest222/express-file-packager/blob/main/add-on/PRIVACY.md

## EULA

For terms of use, see Adobe Terms of Use:

https://www.adobe.com/legal/terms.html

## License

Add your preferred license here (for example: MIT).