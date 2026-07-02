import { Star } from 'lucide-react'

interface StarRatingProps {
  rating: number
  size?: number
}

export function StarRating({ rating, size = 16 }: StarRatingProps) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} size={size} className="fill-sky text-sky" strokeWidth={1.5} />
      ))}
    </div>
  )
}
