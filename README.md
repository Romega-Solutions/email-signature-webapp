# Email Signature Creator

A modern, responsive email signature generator built with Astro and Tailwind CSS. Create professional email signatures with live preview and download functionality.

![Email Signature Creator Preview](./preview.png)

## 🚀 Features

- **Live Preview**: See changes in real-time as you type
- **Responsive Design**: Signature adapts to different screen sizes
- **Download as Image**: Export your signature as a PNG file
- **Professional Layout**: Clean, modern design with company branding
- **Easy Customization**: Simple form-based input for all signature fields

## 🏗️ Project Structure

```text
/
├── public/
│   ├── favicon.svg
│   └── assets/
│       └── astro.svg          # Default logo
├── src/
│   ├── components/
│   │   ├── BaseSignature.astro     # Main signature card component
│   │   ├── ControlsForm.astro      # Form for user input
│   │   ├── DownloadButtons.astro   # Download functionality
│   │   ├── SignaturePreview.astro  # Preview wrapper
│   │   └── Welcome.astro           # Main page layout
│   ├── layouts/
│   │   └── Layout.astro            # Base HTML layout
│   ├── pages/
│   │   └── index.astro             # Entry point
│   └── styles/
│       └── global.css              # Tailwind CSS imports
├── astro.config.mjs                # Astro configuration
├── tailwind.config.js              # Tailwind configuration
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🛠️ Tech Stack

- **[Astro](https://astro.build)** - Web framework for content-driven websites
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[html-to-image](https://github.com/bubkoo/html-to-image)** - Generate images from DOM nodes
- **TypeScript** - Type-safe JavaScript

## 🎨 Color Scheme

The project uses the Romega Solutions color system:

### Primary Colors

- **Primary Blue**: `hsla(209, 100%, 45%, 1)` - Main brand color
- **Accent Orange**: `hsla(42, 94%, 45%, 1)` - Secondary accent color

### Usage

- **Name**: Primary blue (`text-blue-900`)
- **Title**: Accent orange/yellow (`text-yellow-600`)
- **Background**: Light blue (`bg-blue-50`)
- **Borders**: Medium blue (`border-blue-200`)

## 📝 How to Use

1. **Fill out the form** with your personal/company information:

   - Full Name
   - Job Title
   - Phone Number
   - Email Address
   - Website URL
   - Physical Address
   - Logo URL

2. **See live preview** as you type - the signature updates in real-time

3. **Download your signature** by clicking the "Download as Image" button

4. **Use in your email client** by adding the downloaded image to your email signature

## 🎯 Customization

### Adding New Fields

1. Update `defaultData` in `Welcome.astro`
2. Add input field in `ControlsForm.astro`
3. Add display element in `BaseSignature.astro` with `data-field="fieldname"`
4. Update the `fields` array in the sync script

### Styling Changes

- Modify Tailwind classes in `BaseSignature.astro`
- Update colors in `tailwind.config.js`
- Add custom CSS in `global.css`

### Logo Customization

- Replace `/assets/astro.svg` with your company logo
- Update the default `logoUrl` in `Welcome.astro`

## 📱 Responsive Design

The signature is designed to be responsive and will:

- Stack vertically on mobile devices
- Maintain readability across all screen sizes
- Adapt container width based on content length
- Handle long text with proper word wrapping

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👀 Want to learn more?

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [html-to-image Documentation](https://github.com/bubkoo/html-to-image)

---

**Built with ❤️ by [Romega Solutions](https://www.romega-solutions.com)**
