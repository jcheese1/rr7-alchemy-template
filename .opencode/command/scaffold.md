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
   The theme agent will return CSS variables - use these to update the `app/app.css` file.

2. **Use the `frontend-design` skill** to understand the design direction and the components to use.

3. **Use the `tailwindcss` skill** to build responsive React components as you populate `app/routes/home.tsx`.

## Landing Page Structure

Create a single-page layout with these sections:
- **Hero** - Headline, subheadline, CTA button, optional hero image/visual
- **Features** - 3-4 feature cards with icons or visuals
- **CTA Section** - Final call-to-action with button

## Requirements

- Mobile-first responsive design (use `md:` and `lg:` breakpoints)
- Use semantic color tokens from the theme (`bg-primary`, `text-muted-foreground`, etc.)
- Try not to use arbitrary colors - use the theme variables instead.
- Do not inline css - use the theme variables instead. If you need to add animations, add them under `@theme inline`.
- Keep it minimal - this is a visual scaffold to get a feel for the design
- Use placeholder text/images where needed