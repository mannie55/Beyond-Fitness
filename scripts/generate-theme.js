const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../TOKENS');
const outputCssFile = path.join(__dirname, '../app/theme.css');

// Helper to convert kebab-case
function toKebab(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

// Convert hex and alpha to rgba if needed
function formatColor(hex, alpha) {
  if (alpha === undefined || alpha === 1) return hex.toUpperCase();
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${parseFloat(alpha.toFixed(4))})`;
}

// Resolve figma alias name to CSS variable
function resolveAlias(aliasName) {
  if (!aliasName) return null;
  const parts = aliasName.split('/');
  const category = parts[0].toLowerCase();
  const name = toKebab(parts[1]);
  if (category === 'color') {
    return `var(--color-${name})`;
  } else if (category === 'opacity') {
    return `var(--color-${name})`;
  }
  return `var(--${category}-${name})`;
}

function generate() {
  let css = `/* GENERATED DESIGN TOKENS. DO NOT EDIT DIRECTLY. */\n\n`;

  // 1. Load Primitives
  const primitivePath = path.join(baseDir, 'Primitives (1)/Mode 1.tokens.json');
  const primitives = JSON.parse(fs.readFileSync(primitivePath, 'utf8'));

  css += `:root {\n  /* Primitives - Colors */\n`;
  if (primitives.Color) {
    Object.keys(primitives.Color).forEach(k => {
      const token = primitives.Color[k];
      const name = toKebab(k);
      const val = formatColor(token.$value.hex, token.$value.alpha);
      css += `  --color-${name}: ${val};\n`;
    });
  }

  css += `\n  /* Primitives - Opacities */\n`;
  if (primitives.Opacity) {
    Object.keys(primitives.Opacity).forEach(k => {
      const token = primitives.Opacity[k];
      const name = toKebab(k);
      const val = formatColor(token.$value.hex, token.$value.alpha);
      css += `  --color-${name}: ${val};\n`;
    });
  }

  // 2. Load UI Styles (Radii and Border Widths)
  const uiStylesPath = path.join(baseDir, 'UI Styles (1)/Mode 1.tokens.json');
  if (fs.existsSync(uiStylesPath)) {
    const uiStyles = JSON.parse(fs.readFileSync(uiStylesPath, 'utf8'));
    css += `\n  /* UI Styles - Corner Radii */\n`;
    if (uiStyles.Radius) {
      Object.keys(uiStyles.Radius).forEach(k => {
        const token = uiStyles.Radius[k];
        const name = toKebab(k);
        // Radius values in rem (1rem = 16px)
        const val = token.$value === 0 ? '0px' : `${token.$value / 16}rem`;
        css += `  --radius-${name}: ${val};\n`;
      });
    }
    css += `\n  /* UI Styles - Stroke Widths */\n`;
    if (uiStyles.Stroke) {
      Object.keys(uiStyles.Stroke).forEach(k => {
        const token = uiStyles.Stroke[k];
        const name = toKebab(k);
        css += `  --border-width-${name}: ${token.$value}px;\n`;
      });
    }
  }

  // 3. Load Spacing & Sizing (Desktop vs Mobile)
  const spacingMobilePath = path.join(baseDir, 'Spacing & Sizing (1)/Mobile.tokens.json');
  const spacingDesktopPath = path.join(baseDir, 'Spacing & Sizing (1)/Desktop.tokens.json');
  const spacingMobile = JSON.parse(fs.readFileSync(spacingMobilePath, 'utf8'));
  const spacingDesktop = JSON.parse(fs.readFileSync(spacingDesktopPath, 'utf8'));

  css += `\n  /* Spacing & Sizing - Layout constants */\n`;
  // Common Spacing values (like Container and Max Width)
  if (spacingMobile.Container) {
    Object.keys(spacingMobile.Container).forEach(k => {
      const token = spacingMobile.Container[k];
      css += `  --width-${toKebab(k)}: ${token.$value / 16}rem;\n`;
    });
  }
  if (spacingMobile['Max Width']) {
    Object.keys(spacingMobile['Max Width']).forEach(k => {
      const token = spacingMobile['Max Width'][k];
      css += `  --max-width-${toKebab(k)}: ${token.$value / 16}rem;\n`;
    });
  }

  css += `\n  /* Spacing & Sizing - Responsive Padding (Mobile default) */\n`;
  if (spacingMobile['Page Padding']) {
    Object.keys(spacingMobile['Page Padding']).forEach(k => {
      const token = spacingMobile['Page Padding'][k];
      css += `  --spacing-${toKebab(k)}: ${token.$value / 16}rem;\n`;
    });
  }
  if (spacingMobile['Section Padding']) {
    Object.keys(spacingMobile['Section Padding']).forEach(k => {
      const token = spacingMobile['Section Padding'][k];
      css += `  --spacing-${toKebab(k)}: ${token.$value / 16}rem;\n`;
    });
  }

  // 4. Load Typography (Desktop vs Mobile)
  const typographyMobilePath = path.join(baseDir, 'Typography (1)/Mobile.tokens.json');
  const typographyDesktopPath = path.join(baseDir, 'Typography (1)/Desktop.tokens.json');
  const typographyMobile = JSON.parse(fs.readFileSync(typographyMobilePath, 'utf8'));
  const typographyDesktop = JSON.parse(fs.readFileSync(typographyDesktopPath, 'utf8'));

  css += `\n  /* Typography - Font Sizes (Mobile default) */\n`;
  if (typographyMobile['Text Sizes']) {
    Object.keys(typographyMobile['Text Sizes']).forEach(k => {
      const token = typographyMobile['Text Sizes'][k];
      css += `  --text-${toKebab(k)}: ${token.$value / 16}rem;\n`;
    });
  }

  css += `}\n\n`;

  // 5. Desktop overrides inside media query
  css += `/* Desktop layout overrides */\n@media (min-width: 768px) {\n  :root {\n`;
  css += `    /* Spacing overrides */\n`;
  if (spacingDesktop['Page Padding']) {
    Object.keys(spacingDesktop['Page Padding']).forEach(k => {
      const token = spacingDesktop['Page Padding'][k];
      const mobVal = spacingMobile['Page Padding'][k].$value;
      if (token.$value !== mobVal) {
        css += `    --spacing-${toKebab(k)}: ${token.$value / 16}rem;\n`;
      }
    });
  }
  if (spacingDesktop['Section Padding']) {
    Object.keys(spacingDesktop['Section Padding']).forEach(k => {
      const token = spacingDesktop['Section Padding'][k];
      const mobVal = spacingMobile['Section Padding'][k].$value;
      if (token.$value !== mobVal) {
        css += `    --spacing-${toKebab(k)}: ${token.$value / 16}rem;\n`;
      }
    });
  }

  css += `\n    /* Typography overrides */\n`;
  if (typographyDesktop['Text Sizes']) {
    Object.keys(typographyDesktop['Text Sizes']).forEach(k => {
      const token = typographyDesktop['Text Sizes'][k];
      const mobVal = typographyMobile['Text Sizes'][k].$value;
      if (token.$value !== mobVal) {
        css += `    --text-${toKebab(k)}: ${token.$value / 16}rem;\n`;
      }
    });
  }
  css += `  }\n}\n\n`;

  // 6. Semantic Color Schemes
  const colorSchemesPath = path.join(baseDir, 'Color Schemes (1)/Mode 1.tokens.json');
  const colorSchemes = JSON.parse(fs.readFileSync(colorSchemesPath, 'utf8'));

  Object.keys(colorSchemes).forEach(schemeKey => {
    if (schemeKey.startsWith('$')) return;
    const schemeName = toKebab(schemeKey);
    css += `/* Color Scheme: ${schemeKey} */\n.${schemeName} {\n`;
    const scheme = colorSchemes[schemeKey];
    Object.keys(scheme).forEach(k => {
      const token = scheme[k];
      const varName = toKebab(k);
      
      let val;
      if (token.$extensions && token.$extensions['com.figma.aliasData']) {
        const alias = token.$extensions['com.figma.aliasData'].targetVariableName;
        val = resolveAlias(alias);
      }
      if (!val) {
        val = formatColor(token.$value.hex, token.$value.alpha);
      }
      css += `  --color-${varName}: ${val};\n`;
    });
    css += `}\n\n`;
  });

  fs.writeFileSync(outputCssFile, css);
  console.log(`Successfully generated theme CSS variables at ${outputCssFile}`);
}

generate();
