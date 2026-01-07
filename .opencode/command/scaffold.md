---
description: Scaffold a mock landing page based on a description
agent: build
model: opencode/minimax-m2.1-free
---

Create a mock landing page for: {$ARGUMENTS}

## Instructions

1. **First, invoke the `@theme` subagent** to generate the color theme:
   ```
   @theme {$ARGUMENTS}
   ```
   The theme agent will return CSS variables - use these in step 3.

2. **Use the `tailwindcss` skill** to build responsive React components

3. **Create/update these files**:
   - `app/app.css` - Add the theme variables from the @theme agent (colors, fonts, radius)
   - `app/routes/home.tsx` - The landing page route with sections

## Landing Page Structure

Create a single-page layout with these sections:
- **Hero** - Headline, subheadline, CTA button, optional hero image/visual
- **Features** - 3-4 feature cards with icons or visuals
- **CTA Section** - Final call-to-action with button

## Requirements

- Mobile-first responsive design (use `md:` and `lg:` breakpoints)
- Dark mode support (use `dark:` variants)
- Use semantic color tokens from the theme (`bg-primary`, `text-muted-foreground`, etc.)
- Keep it minimal - this is a visual scaffold to get a feel for the design
- Use placeholder text/images where needed

## Output

After creating the files, run `bun run dev` and tell the user to open http://localhost:5173 to preview.
