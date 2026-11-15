// src/components/CallCard.jsx
export function CallCard() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
      {/* Header row — status indicator */}
      <div className="mb-6 flex items-center justify-between">
        <span className="text-sm font-medium text-slate-500">Live call</span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700">
          <span className="size-2 rounded-full bg-green-500" />
          Active
        </span>
      </div>

      {/* Transcript */}
      <div className="space-y-4">
        {/* Agent */}
        <div className="flex items-start gap-3">
          <div className="grid size-8 shrink-0 place-items-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">
            A
          </div>
          <p className="rounded-lg rounded-tl-none bg-slate-50 px-3 py-2 text-sm text-slate-700">
            Hello! Thanks for calling Acme support. How can I help you today?
          </p>
        </div>

        {/* Caller */}
        <div className="flex items-start gap-3 flex-row-reverse">
          <div className="grid size-8 shrink-0 place-items-center rounded-full bg-slate-200 text-sm font-bold text-slate-700">
            C
          </div>
          <p className="rounded-lg rounded-tr-none bg-indigo-50 px-3 py-2 text-sm text-slate-700">
            I want to check the status of my order.
          </p>
        </div>

        {/* Agent */}
        <div className="flex items-start gap-3">
          <div className="grid size-8 shrink-0 place-items-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">
            A
          </div>
          <p className="rounded-lg rounded-tl-none bg-slate-50 px-3 py-2 text-sm text-slate-700">
            Sure — can you share the order ID, or the email you used?
          </p>
        </div>

        {/* Caller */}
        <div className="flex items-start gap-3 flex-row-reverse">
          <div className="grid size-8 shrink-0 place-items-center rounded-full bg-slate-200 text-sm font-bold text-slate-700">
            C
          </div>
          <p className="rounded-lg rounded-tr-none bg-indigo-50 px-3 py-2 text-sm text-slate-700">
            It's #48213.
          </p>
        </div>

        {/* Typing indicator */}
        <div className="flex items-start gap-3">
          <div className="grid size-8 shrink-0 place-items-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">
            A
          </div>
          <div className="flex items-center gap-1 rounded-lg rounded-tl-none bg-slate-50 px-3 py-3">
            <span className="size-1.5 animate-bounce rounded-full bg-slate-400" />
            <span
              className="size-1.5 animate-bounce rounded-full bg-slate-400"
              style={{ animationDelay: '150ms' }}
            />
            <span
              className="size-1.5 animate-bounce rounded-full bg-slate-400"
              style={{ animationDelay: '300ms' }}
            />
          </div>
        </div>
      </div>

      {/* Footer stats */}
      <div className="mt-6 grid grid-cols-3 gap-3 border-t border-slate-100 pt-4 text-center">
        <div>
          <p className="text-xs text-slate-500">Latency</p>
          <p className="text-sm font-semibold text-slate-900">420 ms</p>
        </div>
        <div>
          <p className="text-xs text-slate-500">Language</p>
          <p className="text-sm font-semibold text-slate-900">EN → HI</p>
        </div>
        <div>
          <p className="text-xs text-slate-500">Confidence</p>
          <p className="text-sm font-semibold text-slate-900">97%</p>
        </div>
      </div>
    </div>
  )
}