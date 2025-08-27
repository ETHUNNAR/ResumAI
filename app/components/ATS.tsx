import React from 'react'

export type ATSSuggestion = {
    type: 'good' | 'improve'
    tip: string
}

interface ATSProps {
    score: number // 0-100
    suggestions: ATSSuggestion[]
}

const ATS: React.FC<ATSProps> = ({ score, suggestions }) => {
    const isStrong = score > 69
    const isGoodStart = !isStrong && score > 49

    const gradientFrom = isStrong
        ? 'from-green-100'
        : isGoodStart
            ? 'from-yellow-100'
            : 'from-red-100'

    const statusIcon = isStrong
        ? '/icons/ats-good.svg'
        : isGoodStart
            ? '/icons/ats-warning.svg'
            : '/icons/ats-bad.svg'

    return (
        <div className={`bg-gradient-to-br ${gradientFrom} to-white rounded-2xl shadow-md w-full overflow-hidden`}> 
            <div className="flex items-center gap-4 p-6">
                <img src={statusIcon} alt="ATS status" className="w-12 h-12" />
                <div>
                    <h2 className="text-2xl font-bold">ATS Score - {score}/100</h2>
                    <p className="text-sm text-gray-500">Automated screening readiness based on formatting, keywords, and clarity.</p>
                </div>
            </div>

            <div className="px-6 pb-6">
                <h3 className="text-lg font-semibold mb-1">What this means</h3>
                <p className="text-sm text-gray-500 mb-4">
                    These suggestions can help ensure your resume parses cleanly and highlights the right information for Applicant Tracking Systems.
                </p>

                <ul className="space-y-2">
                    {suggestions?.map((s, idx) => {
                        const icon = s.type === 'good' ? '/icons/check.svg' : '/icons/warning.svg'
                        const iconAlt = s.type === 'good' ? 'Good' : 'Improve'
                        return (
                            <li key={idx} className="flex items-start gap-3">
                                <img src={icon} alt={iconAlt} className="mt-0.5 w-5 h-5" />
                                <span className="text-sm text-gray-800">{s.tip}</span>
                            </li>
                        )
                    })}
                </ul>

                <p className="text-sm text-gray-600 mt-4">
                    Keep refining your resume to boost your ATS compatibility and increase your chances of passing automated screenings.
                </p>
            </div>
        </div>
    )
}

export default ATS
