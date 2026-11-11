import { ExternalLink, Server, Globe } from 'lucide-react'

const STREAMLIT_URL = 'http://16.178.42.216:8501/'
const FASTAPI_URL = 'http://16.178.42.216:8000/docs'

export default function PatientDeploymentDemo() {
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
                        Live Deployment (currently stopped)
                    </p>
                </div>

                <h4 className="font-display text-lg text-ink">
                    Patient Data Management System
                </h4>

                <p className="mt-1 text-xs text-ink-faint">
                    Streamlit frontend · FastAPI backend · AWS EC2
                </p>
            </div>

            <span className="self-start sm:self-auto px-2.5 py-1 rounded-full border border-line bg-canvas-surface font-mono text-[10px] text-ink-faint">
                AWS / EC2
            </span>
        </div>

        {/* Browser-style deployment preview */}
        <div className="rounded-xl border border-line overflow-hidden">

            {/* Address bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-line bg-canvas-surface/50">
                <span className="h-2 w-2 rounded-full bg-ink-faint/40" />
                <span className="h-2 w-2 rounded-full bg-ink-faint/40" />
                <span className="h-2 w-2 rounded-full bg-ink-faint/40" />

                <div className="ml-3 flex-1 rounded-md border border-line px-3 py-1.5 font-mono text-[10px] text-ink-faint truncate">
                    16.178.42.216:8501 
                </div>
            </div>

            {/* Endpoints */}
            <div className="p-4 sm:p-5">

                <div className="grid sm:grid-cols-2 gap-3">

                    {/* Streamlit */}
                    <a
                        href={STREAMLIT_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="group rounded-lg border border-line p-4 hover:border-signal/50 hover:bg-canvas-surface/40 transition-all"
                    >
                        <div className="flex items-center justify-between mb-3">
                            <span className="font-mono text-[10px] uppercase tracking-wider text-ink-faint">
                                Frontend
                            </span>

                            <Globe
                                size={14}
                                className="text-ink-faint group-hover:text-signal transition-colors"
                            />
                        </div>

                        <p className="text-sm text-ink mb-1">
                            Streamlit Dashboard
                        </p>

                        <p className="font-mono text-[10px] text-ink-faint">
                            :8501
                        </p>
                    </a>

                    {/* FastAPI */}
                    <a
                        href={FASTAPI_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="group rounded-lg border border-line p-4 hover:border-signal/50 hover:bg-canvas-surface/40 transition-all"
                    >
                        <div className="flex items-center justify-between mb-3">
                            <span className="font-mono text-[10px] uppercase tracking-wider text-ink-faint">
                                API
                            </span>

                            <Server
                                size={14}
                                className="text-ink-faint group-hover:text-signal transition-colors"
                            />
                        </div>

                        <p className="text-sm text-ink mb-1">
                            FastAPI Swagger
                        </p>

                        <p className="font-mono text-[10px] text-ink-faint">
                            :8000/docs
                        </p>
                    </a>

                </div>

                {/* Deployment flow */}
                <div className="mt-5 pt-4 border-t border-line flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

                    <p className="font-mono text-[10px] text-ink-faint">
                        Docker → Docker Hub → AWS EC2
                    </p>

                    <a
                        href={STREAMLIT_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-signal text-canvas text-xs font-mono hover:opacity-90 transition-opacity"
                    >
                        Open live project
                        <ExternalLink size={12} />
                    </a>

                </div>

            </div>
        </div>

    </div>

    )
}
