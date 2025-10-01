import { TeamMember } from '@/types'

interface TeamCardProps {
  member: TeamMember
}

export default function TeamCard({ member }: TeamCardProps) {
  const photoUrl = member.metadata?.photo?.imgix_url
  const name = member.metadata?.name || member.title
  const position = member.metadata?.position
  const bio = member.metadata?.bio
  const email = member.metadata?.email
  const phone = member.metadata?.phone

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      {photoUrl && (
        <div className="aspect-square relative overflow-hidden">
          <img
            src={`${photoUrl}?w=800&h=800&fit=crop&auto=format,compress`}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        {position && (
          <p className="text-primary mb-4">{position}</p>
        )}
        {bio && (
          <p className="text-gray-400 text-sm mb-4">{bio}</p>
        )}
        <div className="space-y-2 text-sm">
          {email && (
            <p className="text-gray-400">
              <a href={`mailto:${email}`} className="hover:text-primary transition-colors">
                {email}
              </a>
            </p>
          )}
          {phone && (
            <p className="text-gray-400">
              <a href={`tel:${phone}`} className="hover:text-primary transition-colors">
                {phone}
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}