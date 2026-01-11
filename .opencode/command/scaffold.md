---
description: Scaffold a mock landing page based on a description
agent: build
model: opencode/minimax-m2.1-free
---

Create a unique, memorable mock landing page for: {$ARGUMENTS}

## Instructions

1. Come up with 8 aesthetic approaches to the design, and present it to the user via the `question` tool. Use the selected approach to guide the design in the next step.

2. **Invoke the `@theme` subagent** to generate the color theme:

   ```
   @theme {$ARGUMENTS + " " + selected approach}
   ```

   The theme agent will return CSS variables - use these to update the `app/app.css` file.

3. ALWAYS **Use the `frontend-design` skill** to understand the design direction and the components to use.

4. **Use the `tailwindcss` skill** to build responsive React components as you populate `app/routes/home.tsx`.

## Landing Page Structure

Create a single-page layout with these sections:

1. **Hero Section**
   - A hook that creates immediate intrigue
   - Interactive element that demonstrates capability
   - Clear value proposition in ≤12 words
   - Primary CTA: "<primary_cta>"
   - Trust signals (logos, security badges)

2. **Problem/Solution Narrative**
   - Tell a story, don't list features
   - Use scroll-triggered reveals for dramatic effect
   - Include real-world scenario visualization

3. **Product Showcase**
   - Interactive demo preview or animated mockup
   - Show the product in action visually
   - Technical credibility indicators

4. **Social Proof**
   - Testimonials from target personas
   - Metrics that matter to <target_audience>
   - Customer grid with hover states

5. **Technical Differentiators**
   - Clean comparison or feature grid
   - Integration/API preview (if applicable)
   - Security & compliance badges

6. **Conversion Section**
   - Secondary CTA with urgency
   - Quick form (Name, Email, Company)
   - Alternative action: "<secondary_cta>"

7. **Footer**
   - Minimal, sophisticated
   - Essential links only
   - Newsletter capture

## Requirements

- Mobile-first responsive design (use `md:` and `lg:` breakpoints)
- Use semantic color tokens from the theme (`bg-primary`, `text-muted-foreground`, etc.)
- Try not to use arbitrary colors - use the theme variables instead.
- If you need to use icons, import them from `lucide-react`.
- Do not inline css - use the theme variables instead. If you need to add animations, add them under `@theme inline` or use the `motion` library from `motion/react`.
- Keep it minimal - this is a visual scaffold to get a feel for the design
- Use placeholder text/images where needed
