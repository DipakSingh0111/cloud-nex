const fs = require('fs');
let content = fs.readFileSync('app/components/Footer.tsx', 'utf8');
content = content.replace(/href="#"\r?\n\s+aria-label="Facebook"/g, 'href={contact.socials.find((s: any) => s.platform === \\'facebook\\')?.url || "#"}\n                aria-label="Facebook"');
content = content.replace(/href="#"\r?\n\s+aria-label="X"/g, 'href={contact.socials.find((s: any) => s.platform === \\'x\\')?.url || "#"}\n                aria-label="X"');
content = content.replace(/href="#"\r?\n\s+aria-label="Website"/g, 'href={contact.socials.find((s: any) => s.platform === \\'dribbble\\')?.url || "#"}\n                aria-label="Website"');
content = content.replace(/href="#"\r?\n\s+aria-label="Behance"/g, 'href={contact.socials.find((s: any) => s.platform === \\'behance\\')?.url || "#"}\n                aria-label="Behance"');
content = content.replace(/href="#"\r?\n\s+aria-label="LinkedIn"/g, 'href={contact.socials.find((s: any) => s.platform === \\'linkedin\\')?.url || "#"}\n                aria-label="LinkedIn"');
fs.writeFileSync('app/components/Footer.tsx', content);
