'use client'
import { useState } from 'react'

const moods = ['Good', 'Okay', 'Low'] as const
type Mood = typeof moods[number]

export default function CardMockup() {
    const [selected, setSelected] = useState<Mood>('Okay')

    return (
        <div className="bg-cream border border-mist rounded-2xl p-8 w-full max-w-sm
                    shadow-[0_8px_40px_rgba(0,0,0,0.06)]">

            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] tracking-widest uppercase text-soft">
                    Today — May 10
                </span>
                <span className="text-[11px] font-medium text-moss
                         bg-moss/10 px-3 py-1 rounded-full">
                    Day 14 streak
                </span>
            </div>

            {/* Question */}
            <p className="font-serif text-lg text-ink mb-5 leading-snug">
                How are you feeling right now?
            </p>

            {/* Mood buttons */}
            <div className="flex gap-2 mb-6">
                {moods.map(mood => (
                    <button
                        key={mood}
                        onClick={() => setSelected(mood)}
                        className={`flex-1 py-3 rounded-xl border text-xs transition-all duration-150
                        ${selected === mood
                                ? 'border-moss bg-moss/8 text-moss font-medium'
                                : 'border-mist text-soft hover:border-moss/40'}`}
                    >
                        <MoodFace mood={mood} active={selected === mood} />
                        {mood}
                    </button>
                ))}
            </div>

            {/* AI response */}
            <div className="bg-sand rounded-xl p-4 mb-4">
                <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-moss" />
                    <span className="text-[10px] tracking-widest uppercase text-soft">Serene</span>
                </div>
                <p className="text-sm text-ink leading-relaxed">
                    It's okay to feel "just okay." Based on your week,{' '}
                    <strong className="text-moss font-medium">your sleep dipped Tue–Thu</strong>.
                    One thing that might help: a 10-min walk before your 3pm slot.
                </p>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
                <button className="flex-1 py-2.5 border border-mist rounded-lg text-xs
                           text-soft hover:border-moss hover:text-moss transition-colors
                           flex items-center justify-center gap-1.5">
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                        <path d="M5.5 1v9M1 5.5h9" stroke="currentColor"
                            strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                    Journal
                </button>
                <button className="flex-[2] py-2.5 bg-moss rounded-lg text-xs text-cream
                           font-medium hover:bg-ink transition-colors
                           flex items-center justify-center gap-1.5">
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                        <path d="M1.5 5.5l3 3 5-5" stroke="white"
                            strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Start my day
                </button>
            </div>
        </div>
    )
}

function MoodFace({ mood, active }: { mood: Mood; active: boolean }) {
    const color = active ? '#3d5a47' : '#6b6b63'
    return (
        <svg className="mx-auto mb-1.5" width="20" height="20"
            viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="8" stroke={color} strokeWidth="1.2" />
            {mood === 'Good' && (
                <path d="M7 11.5c.8 1.5 5.2 1.5 6 0"
                    stroke={color} strokeWidth="1.2" strokeLinecap="round" />
            )}
            {mood === 'Okay' && (
                <path d="M7 12h6" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
            )}
            {mood === 'Low' && (
                <path d="M7 13.5c.8-1.8 5.2-1.8 6 0"
                    stroke={color} strokeWidth="1.2" strokeLinecap="round" />
            )}
            <circle cx="7.5" cy="8.5" r="1" fill={color} />
            <circle cx="12.5" cy="8.5" r="1" fill={color} />
        </svg>
    )
}