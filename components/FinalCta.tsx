import WaitlistForm from './WaitlistForm'

export default function FinalCta() {
    return (
        <section className="px-16 py-32 text-center relative overflow-hidden max-lg:px-8">
            {/* Background blob */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none -z-10"
                viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice">
                <ellipse cx="720" cy="300" rx="600" ry="300" fill="#f5f2ec" opacity="0.5" />
            </svg>

            <h2 className="font-serif text-5xl leading-tight tracking-tight
                     max-w-2xl mx-auto mb-6 max-lg:text-4xl">
                Start taking care of your mind.{' '}
                <em className="italic text-clay">Before it asks you to.</em>
            </h2>

            <p className="text-soft text-lg max-w-md mx-auto mb-2 leading-relaxed">
                Join the waitlist. Free forever plan available.<br />
                No credit card required.
            </p>

            {/* Reuse the same WaitlistForm — centered */}
            <div className="flex justify-center">
                <WaitlistForm />
            </div>

            {/* Trust signals */}
            <div className="mt-10 flex items-center justify-center gap-8
                      text-xs text-soft flex-wrap">
                {[
                    { label: 'GDPR compliant', icon: LockIcon },
                    { label: 'No data sold. Ever.', icon: StarIcon },
                    { label: 'Cancel anytime', icon: CheckIcon },
                ].map(({ label, icon: Icon }) => (
                    <span key={label} className="flex items-center gap-1.5">
                        <Icon />
                        {label}
                    </span>
                ))}
            </div>
        </section>
    )
}

function LockIcon() {
    return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <rect x="1" y="5" width="10" height="7" rx="1.5"
                stroke="#6b6b63" strokeWidth="1.1" />
            <path d="M4 5V3.5a2 2 0 014 0V5" stroke="#6b6b63" strokeWidth="1.1" />
        </svg>
    )
}
function StarIcon() {
    return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 1l1.2 3.6H11L8.4 6.8l1 3.4L6 8.4 2.6 10.2l1-3.4L1 4.6h3.8z"
                stroke="#6b6b63" strokeWidth="1" />
        </svg>
    )
}
function CheckIcon() {
    return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6l3 3 5-5" stroke="#6b6b63"
                strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}