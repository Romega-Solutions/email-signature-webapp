# Email Signature Creator

A modern, responsive email signature generator built with Astro and Tailwind CSS. Create professional email signatures with live preview and download functionality.

![Email Signature Creator Preview](./preview.png)

## 🚀 Features

- **🔐 Authentication System**: Secure login to protect access
- **Live Preview**: See changes in real-time as you type
- **High-Quality Export**: Download signatures at 4x resolution for crisp, professional results
- **Local Font Loading**: Uses locally hosted Merriweather fonts to avoid CORS issues
- **Responsive Design**: Signature adapts to different screen sizes
- **Download as Image**: Export your signature as a high-quality PNG file
- **Professional Layout**: Clean, modern design with company branding
- **Easy Customization**: Simple form-based input for all signature fields
- **Team Directory Integration**: Quick access to team member information
- **Session Management**: Secure cookie-based authentication with 7-day sessions

## 🔐 Authentication

The application is protected with authentication to ensure only authorized Romega Solutions team members can access the signature creator.

### Default Credentials

**Username:** `romega_admin`  
**Password:** `RomegaSignature2024!`

### Security Features

- Session-based authentication with HTTP-only cookies
- Middleware protection for all routes except login
- Automatic redirect to login for unauthenticated users
- Logout functionality with session cleanup
- 7-day session duration

### Changing Credentials

For production deployment, update the credentials in `src/lib/auth.ts`:

```typescript
export const ADMIN_CREDENTIALS = {
  username: 'your_new_username',
  password: 'your_strong_password',
};

export const SESSION_SECRET = 'your_random_secret_key_here';
```

**Better Practice - Use Environment Variables:**

Create a `.env` file in the root directory:

```env
ADMIN_USERNAME=your_username
ADMIN_PASSWORD=your_strong_password
SESSION_SECRET=your_random_secret_key
```

Then update `src/lib/auth.ts`:

```typescript
export const ADMIN_CREDENTIALS = {
  username: import.meta.env.ADMIN_USERNAME || 'romega_admin',
  password: import.meta.env.ADMIN_PASSWORD || 'RomegaSignature2024!',
};

export const SESSION_SECRET = import.meta.env.SESSION_SECRET || 'your-secret-key';
```

## 🏗️ Project Structure

```text
/
├── public/
│   ├── favicon.svg
│   ├── romega-logo.svg           # Company logo
│   ├── fonts/                    # Local fonts directory
│   │   ├── Merriweather_24pt-Bold.ttf
│   │   └── Merriweather_24pt-Regular.ttf
│   └── *.svg                     # Icon assets (call, at, globe, address)
├── src/
│   ├── components/
│   │   ├── BaseSignature.astro     # Main signature card component
│   │   ├── ControlsForm.astro      # Form for user input
│   │   ├── DownloadButtons.astro   # High-quality download functionality
│   │   ├── SignaturePreview.astro  # Preview wrapper
│   │   └── Welcome.astro           # Main page layout with logout
│   ├── layouts/
│   │   └── Layout.astro            # Base HTML layout
│   ├── pages/
│   │   ├── index.astro             # Protected main page
│   │   ├── login.astro             # Login page
│   │   └── api/
│   │       ├── login.ts            # Login API endpoint
│   │       └── logout.ts           # Logout API endpoint
│   ├── lib/
│   │   └── auth.ts                 # Authentication utilities
│   ├── middleware.ts               # Route protection middleware
│   ├── assets/
│   │   └── fonts/                  # Source font files
│   │       ├── Merriweather_24pt-Bold.ttf
│   │       └── Merriweather_24pt-Regular.ttf
│   └── styles/
│       └── global.css              # Tailwind CSS + local font definitions
├── astro.config.mjs                # Astro configuration (SSR enabled)
├── tailwind.config.js              # Tailwind configuration with RS colors
├── .env                            # Environment variables (create this)
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

- **[Astro](https://astro.build)** - Web framework with SSR for authentication
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[html-to-image](https://github.com/bubkoo/html-to-image)** - Generate high-quality images from DOM nodes
- **TypeScript** - Type-safe JavaScript
- **Cookie-based Sessions** - Secure authentication

## 🎨 Color Scheme

The project uses the Romega Solutions color system:

### Primary Colors (Blue)

- **rs-primary-50** to **rs-primary-950**: Full range of blue shades
- **Main brand color**: `hsla(209, 100%, 45%, 1)` (rs-primary-500)

### Accent Colors (Yellow/Orange)

- **rs-accent-50** to **rs-accent-950**: Full range of yellow/orange shades
- **Secondary accent**: `hsla(42, 94%, 45%, 1)` (rs-accent-500)

### Neutral Colors

- **rs-neutral-50** to **rs-neutral-950**: Gray scale for text and backgrounds

### Typography

- **Names**: Merriweather (serif, bold) - Loaded locally
- **Titles**: Source Sans 3 (sans-serif, medium) - From Google Fonts
- **Body Text**: Source Sans 3 (sans-serif)

## 📝 How to Use

1. **Login** using the provided credentials

2. **Fill out the form** with your information:
   - Full Name
   - Job Title
   - Phone Number (WhatsApp)
   - Email Address

3. **See live preview** as you type - the signature updates in real-time

4. **Download your signature** by clicking the "📥 Download as Image" button
   - Downloads at 4x resolution for maximum quality
   - Includes proper fonts (Merriweather for name, Source Sans for details)
   - White background for better email compatibility

5. **Follow the setup instructions** to add to Gmail:
   - Watch the embedded tutorial video
   - Follow the step-by-step guide
   - Access team directory for reference

6. **Logout** when finished using the logout button in the header

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

- Replace `/romega-logo.svg` with your company logo
- Update icon SVGs in the public folder

### Font Customization

To use different local fonts:

1. Add `.ttf` font files to `public/fonts/`
2. Update `@font-face` declarations in `src/styles/global.css`
3. Reference the new font family in components

## 🖼️ Image Export Quality

The download functionality generates ultra-high quality images:

- **4x Resolution**: 4 times the display resolution
- **Pixel Ratio**: Set to 4 for crisp rendering
- **Quality**: Maximum PNG quality (1.0)
- **Font Rendering**: Antialiased with optimized text rendering
- **Background**: White (#ffffff) for email compatibility
- **File Naming**: Automatically named based on user's name

## 📱 Responsive Design

The signature is designed to be responsive and will:

- Stack vertically on mobile devices
- Maintain readability across all screen sizes
- Adapt container width based on content length
- Handle long text with proper word wrapping
- Scale properly in email clients

## 🔒 Security Best Practices

1. **Change default credentials** immediately after deployment
2. **Use environment variables** for sensitive data
3. **Enable HTTPS** in production (required for secure cookies)
4. **Regularly update** session secrets
5. **Monitor access logs** for unauthorized attempts
6. **Keep dependencies updated** for security patches

## 🚀 Deployment

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd EmailSignature
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your credentials
   ```

4. **Copy fonts to public directory**
   ```bash
   mkdir -p public/fonts
   cp src/assets/fonts/*.ttf public/fonts/
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

6. **Deploy to your hosting provider**
   - Vercel, Netlify, or any Node.js hosting
   - Ensure SSR (Server-Side Rendering) is enabled
   - Set environment variables in hosting dashboard

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

Need help? Contact:

- **IT Support**: [it@romega-solutions.com](mailto:it@romega-solutions.com)
- **HR Team**: [hr@romega-solutions.com](mailto:hr@romega-solutions.com)

## 👀 Want to learn more?

- [Astro Documentation](https://docs.astro.build)
- [Astro Middleware](https://docs.astro.build/en/guides/middleware/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [html-to-image Documentation](https://github.com/bubkoo/html-to-image)

---

**Built with ❤️ by [Ken Patrick Garcia](mailto:kengarcia.romegasolutions@gmail.com) for Romega Solutions**

**Version:** 2.0.0  
**Last Updated:** October 2025