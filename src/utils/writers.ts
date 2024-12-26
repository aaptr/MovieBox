import { IMovieCredits, ICrewMember } from '@/types/MoviesTypes'

export function getWriters(movieCredits: IMovieCredits): ICrewMember[] {
  if (!movieCredits.crew) {
    return []
  }

  const writersMap = new Map<number, ICrewMember>()

  movieCredits.crew.forEach(member => {
    if (member.department === "Writing") {
      if (!writersMap.has(member.id)) {
        writersMap.set(member.id, {
          id: member.id,
          name: member.name,
          profile_path: member.profile_path,
          job: member.job,
        })
      } else {
        const existingWriter = writersMap.get(member.id)
        if (existingWriter && !existingWriter.job.includes(member.job)) {
          existingWriter.job += `, ${member.job}`
        }
      }
    }
  })

  return Array.from(writersMap.values())
}

