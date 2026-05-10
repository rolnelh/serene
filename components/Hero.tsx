import WaitlistForm from './WaitlistForm';
import CardMockup from './CardMockup';

export default function Hero() {
    return (
        <section className="min-h-screen grid grid-cols-2 items-center
                        px-16 pt-32 pb-20 gap-16 relative overflow-hidden
                        max-lg:grid-cols-1 max-lg:px-8">
            {/* Background shapes */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none -z-10"
                viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
                <ellipse cx="1100" cy="200" rx="500" ry="400" fill="#f5f2ec" opacity="0.6" />
                <ellipse cx="200" cy="700" rx="300" ry="250" fill="#e8e4dc" opacity="0.4" />
            </svg>

            {/* Left — Content */}
            <div className="max-w-xl animate-fade-up">
                {/* <div className="inline-flex items-center gap-2 text-xs font-medium
                        tracking-widest uppercase text-moss
                        px-4 py-1.5 rounded-full mb-8">
                    <span className="w-2 h-2 rounded-full bg-moss" />
                    AI Mental Wellness — Now in Beta
                </div> */}

                <h1 className="font-serif text-5xl leading-[1.1] tracking-tight text-ink font-semibold">
                    Your mind needs <em className="text-clay">daily care,</em><br />
                    not crisis care.
                </h1>

                <p className="mt-6 text-soft text-lg leading-relaxed max-w-md">
                    Serene is your AI mental coach. 2-minute daily check-ins
                    that actually help — no therapist waitlist, no judgment, no fluff.
                </p>

                <WaitlistForm />

                {/* Social proof */}
                <div className="mt-6 flex items-center gap-3 text-xs text-soft">
                    <AvatarRow />
                    <span>247 people already on the waitlist</span>
                </div>
            </div>

            {/* Right — Mockup */}
            <div className="flex justify-center max-lg:hidden">
                <CardMockup />
            </div>
        </section>
    )
}

function AvatarRow() {
    const colors = ['#d4c5b0', '#b8c4b0', '#c4b8c0']
    return (
        <div className="flex">
            {colors.map((bg, i) => (
                <span key={i}
                    className="w-7 h-7 rounded-full border-2 border-cream -ml-2 first:ml-0 overflow-hidden"
                    style={{ background: bg }} />
            ))}
        </div>
    )
}