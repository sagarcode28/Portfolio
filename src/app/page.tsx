import Hero from '@/app/components/home/Hero'
import StatsBar from '@/app/components/home/StatsBar'
import ServicesSection from '@/app/components/home/ServicesSection'
import FeaturedWork from '@/app/components/home/FeaturedWork'
import SkillsGrid from '@/app/components/home/SkillsGrid'
import CTABanner from '@/app/components/home/CTABanner'
import { getFeaturedProjects } from '@/app/lib/sanity.queries'

export default async function Home() {
  const projects = await getFeaturedProjects()

  return (
    <>
      <Hero />
      {/* <StatsBar/> */}
      <ServicesSection />
      <FeaturedWork projects={projects}/>
      <SkillsGrid />
      <CTABanner />
    </>
  )
}