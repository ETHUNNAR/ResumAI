import React from 'react'

interface ScoreBadgeProps {
    score: number
}

const ScoreBadge: React.FC<ScoreBadgeProps> = ({ score }) => {
    const isStrong = score > 70
    const isGoodStart = !isStrong && score > 49

    const label = isStrong ? 'Strong' : isGoodStart ? 'Good Start' : 'Needs Work'

    const bgClass = isStrong
        ? 'bg-badge-green'
        : isGoodStart
            ? 'bg-badge-yellow'
            : 'bg-badge-red'

    const textClass = isStrong
        ? 'text-green-600'
        : isGoodStart
            ? 'text-yellow-600'
            : 'text-red-600'

    return (
        <div className={`inline-flex items-center rounded-full px-3 py-1 ${bgClass}`}>
            <p className={`text-sm font-medium ${textClass}`}>{label}</p>
        </div>
    )
}

export default ScoreBadge
