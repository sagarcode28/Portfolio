import { sanityClient } from './sanity.client'

export async function getFeaturedProjects() {
  return sanityClient.fetch(
    `*[_type == "project" && featured == true] | order(publishedAt desc) {
      _id,
      title,
      slug,
      tagline,
      impact,
      "tech": tech,
      category
    }`
  )
}

export async function getAllProjects() {
  return sanityClient.fetch(
    `*[_type == "project"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      tagline,
      impact,
      "tech": tech,
      category,
      featured
    }`
  )
}