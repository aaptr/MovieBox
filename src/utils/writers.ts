import { IMovieCredits, ICrewMember } from '@/types/MoviesTypes'

export function getWriters(movieCredits: IMovieCredits): ICrewMember[] {
  const writersMap = new Map<number, ICrewMember>()

  movieCredits.crew.forEach(member => {
    if (member.department === "writing") {
      if (!writersMap.has(member.id)) {
        writersMap.set(member.id, {
          id: member.id,
          name: member.name,
          job: member.job,
          profile_path: member.profile_path
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