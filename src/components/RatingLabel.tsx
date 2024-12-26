export function RatingLabel({ rating }: { rating: number }) {
  const radius = 21
  const stroke = 5
  const normalizedRadius = radius - stroke / 2
  const circumference = 2 * Math.PI * normalizedRadius
  const offset = circumference - (rating / 10) * circumference

  const getRatingColor = (rating: number): string => {
    if (Math.round(rating * 10) / 10 >= 7) return "text-green-500"
    if (Math.round(rating * 10) / 10 >= 4) return "text-yellow-500"
    return "text-red-500"
  }

  return (
    <div className="flex flex-col items-center">
      <svg
        width={radius * 2}
        height={radius * 2}
        className="relative"
        style={{ transform: "rotate(-90deg)" }}
      >

        <circle
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          strokeWidth={stroke}
          fill="#1f2937"
          className="text-gray-600"
          stroke="currentColor"
        />

        <circle
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          strokeWidth={stroke}
          fill="transparent"
          className={getRatingColor(rating)}
          stroke="currentColor"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset}
        />
      </svg>

      <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white">
        {rating.toFixed(1)}
      </span>
    </div>
  )
}