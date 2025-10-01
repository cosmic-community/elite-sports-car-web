import { TeamMember } from '@/types'
import TeamCard from '@/components/TeamCard'

interface TeamGridProps {
  members: TeamMember[]
}

export default function TeamGrid({ members }: TeamGridProps) {
  if (!members || members.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400 text-lg">No team members available at this time.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {members.map((member) => (
        <TeamCard key={member.id} member={member} />
      ))}
    </div>
  )
}