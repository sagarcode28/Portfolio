import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import project from '../app/lib/schemas/project'

export default defineConfig({
  name: 'sagar-portfolio',
  title: 'Sagar Portfolio CMS',
  basePath: '/studio',          // ← add this line

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  plugins: [structureTool()],

  schema: {
    types: [project],
  },
})