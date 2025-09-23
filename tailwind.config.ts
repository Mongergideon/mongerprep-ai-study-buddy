import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "375px",
        md: "768px", 
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        wine: "hsl(var(--wine-primary))",
        vanilla: "hsl(var(--vanilla-accent))",
        navy: "hsl(var(--deep-navy))",
        taupe: "hsl(var(--rose-taupe))",
        smoke: "hsl(var(--white-smoke))",
        
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundImage: {
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-premium': 'var(--gradient-premium)',
        'gradient-glass': 'var(--gradient-glass)',
        'gradient-subtle': 'var(--gradient-subtle)',
        'gradient-accent': 'var(--gradient-accent)',
        'gradient-mesh': 'var(--gradient-mesh)',
      },
      boxShadow: {
        'soft': 'var(--shadow-soft)',
        'hover': 'var(--shadow-hover)',
        'premium': 'var(--shadow-premium)',
        'glass': 'var(--shadow-glass)',
        'glow': 'var(--shadow-glow)',
      },
      transitionProperty: {
        'smooth': 'var(--transition-smooth)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0", opacity: "0" },
          to: { height: "var(--radix-accordion-content-height)", opacity: "1" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)", opacity: "1" },
          to: { height: "0", opacity: "0" }
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(60px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" }
        },
        "float": {
          "0%, 100%": { transform: "translate3d(0, 0px, 0)" },
          "50%": { transform: "translate3d(0, -10px, 0)" }
        },
        "float-slow": {
          "0%, 100%": { transform: "translate3d(0, 0px, 0) rotateY(0deg)" },
          "50%": { transform: "translate3d(0, -15px, 10px) rotateY(3deg)" }
        },
        "float-3d": {
          "0%, 100%": { transform: "translate3d(0, 0px, 0) rotateX(0deg) rotateY(0deg)" },
          "50%": { transform: "translate3d(0, -12px, 20px) rotateX(2deg) rotateY(-2deg)" }
        },
        "particle-float": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.2" },
          "50%": { transform: "translate(30px, -30px) scale(1.2)", opacity: "0.5" }
        },
        "gradient-shift": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" }
        },
        "glow-pulse": {
          "0%, 100%": { "box-shadow": "0 0 20px rgba(91, 35, 51, 0.3)" },
          "50%": { "box-shadow": "0 0 40px rgba(91, 35, 51, 0.6)" }
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-100px)" },
          "100%": { opacity: "1", transform: "translateX(0)" }
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(100px)" },
          "100%": { opacity: "1", transform: "translateX(0)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "fade-in-up": "fade-in-up 0.8s ease-out",
        "scale-in": "scale-in 0.4s ease-out",
        "float": "float 4s ease-in-out infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
        "float-3d": "float-3d 8s ease-in-out infinite",
        "particle-float": "particle-float 12s ease-in-out infinite",
        "gradient-shift": "gradient-shift 8s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "slide-in-left": "slide-in-left 0.8s ease-out",
        "slide-in-right": "slide-in-right 0.8s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
