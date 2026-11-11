
import { ExternalLink, Github, Server, Activity } from 'lucide-react'

const GITHUB_URL = 'https://github.com/RajeshPhulwaria006/Triage'
const LIVE_URL = 'https://aayu-helix.vercel.app/'

export default function TriageDemo() {
    return (
        <div className="rounded-xl border border-line bg-canvas p-5 sm:p-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
                        </span>

                        <p className="font-mono text-[11px] uppercase tracking-wider text-signal">
                            Project Showcase
                        </p>
                    </div>

                    <h4 className="font-display text-lg text-ink">
                        Intelligent Clinical Triage System
                    </h4>

                    <p className="mt-1 text-xs text-ink-faint">
                        Next.js · TypeScript · SQLite · Docker
                    </p>
                </div>

                <span className="self-start sm:self-auto px-2.5 py-1 rounded-full border border-line bg-canvas-surface font-mono text-[10px] text-ink-faint">
                    Healthcare / Decision Support
                </span>
            </div>

            {/* Browser-style preview */}
            <div className="rounded-xl border border-line overflow-hidden">
                {/* Address bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-line bg-canvas-surface/50">
                    <span className="h-2 w-2 rounded-full bg-ink-faint/40" />
                    <span className="h-2 w-2 rounded-full bg-ink-faint/40" />
                    <span className="h-2 w-2 rounded-full bg-ink-faint/40" />

                    <div className="ml-3 flex-1 rounded-md border border-line px-3 py-1.5 font-mono text-[10px] text-ink-faint truncate">
                        github.com/RajeshPhulwaria006/Triage
                    </div>
                </div>

                <div className="p-4 sm:p-5">
                    {/* System capabilities */}
                    <div className="grid sm:grid-cols-2 gap-3">
                        <div className="rounded-lg border border-line p-4">
                            <div className="flex items-center justify-between mb-3">
                                <span className="font-mono text-[10px] uppercase tracking-wider text-ink-faint">
                                    Clinical Engine
                                </span>
                                <Activity
                                    size={14}
                                    className="text-signal"
                                />
                            </div>

                            <p className="text-sm text-ink mb-1">
                                Rule-Based Triage
                            </p>

                            <p className="text-xs text-ink-faint">
                                Explainable acuity prioritization and safety escalation.
                            </p>
                        </div>

                        <div className="rounded-lg border border-line p-4">
                            <div className="flex items-center justify-between mb-3">
                                <span className="font-mono text-[10px] uppercase tracking-wider text-ink-faint">
                                    Infrastructure
                                </span>
                                <Server
                                    size={14}
                                    className="text-ink-faint"
                                />
                            </div>

                            <p className="text-sm text-ink mb-1">
                                Persistent Queue & Audit
                            </p>

                            <p className="text-xs text-ink-faint">
                                SQLite storage, recovery journaling, and traceable staff actions.
                            </p>
                        </div>
                    </div>

                    {/* Workstations */}
                    <div className="mt-5 pt-4 border-t border-line">
                        <p className="font-mono text-[10px] uppercase tracking-wider text-ink-faint mb-3">
                            Application Workstations
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {['Patient Registration', 'Live Queue Dashboard', 'Audit Ledger'].map(
                                (item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-2 rounded-lg border border-line bg-canvas-surface/40 text-xs text-ink"
                                    >
                                        {item}
                                    </span>
                                )
                            )}
                        </div>

                        <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                            <p className="font-mono text-[10px] text-ink-faint">
                                Next.js → SQLite → Docker
                            </p>

                            <div
                            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-signal text-canvas text-xs font-mono hover:opacity-90 transition-opacity"
                            >
                                <a
                                    href={GITHUB_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-signal text-canvas text-xs font-mono hover:opacity-90 transition-opacity"
                                >
                                    View project
                                    <ExternalLink size={12} />
                                </a>
                                <a
                                    href={LIVE_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-signal text-canvas text-xs font-mono hover:opacity-90 transition-opacity"
                                >
                                    Live Demo
                                    <ExternalLink size={12} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <p className="mt-3 text-[11px] leading-relaxed text-ink-faint">
                Clinical decision-support prototype. Prioritization rules
                require appropriate clinical validation before real-world use.
            </p>
        </div>
    )
}
