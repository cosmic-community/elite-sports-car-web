import { getTeamMembers } from '@/lib/cosmic'
import TeamGrid from '@/components/TeamGrid'

export const revalidate = 60

export default async function TeamPage() {
  const team = await getTeamMembers()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
        <p className="text-gray-400 text-lg">
          Meet our expert sales consultants
        </p>
      </div>
      
      <TeamGrid members={team} />
    </div>
  )
}