import { useEffect, useMemo, useState } from 'react'
import { ExternalLink, GitPullRequest } from 'lucide-react'
import { motion } from 'motion/react'

const API = '/open-source/pull-requests'

const statusStyles = {
  open: 'bg-emerald-100 text-emerald-700',
  closed: 'bg-rose-100 text-rose-700',
  merged: 'bg-violet-100 text-violet-700',
  unknown: 'bg-stone-100 text-stone-600',
}

const formatDate = (date) => new Intl.DateTimeFormat('en', { dateStyle: 'medium' }).format(new Date(date))

const readJson = async (response) => {
  const contentType = response.headers.get('content-type') || ''
  if (!contentType.includes('application/json')) {
    throw new Error('Open source API is unavailable. Start the backend server and try again.')
  }
  return response.json()
}

const OpenSource = () => {
  const [pullRequests, setPullRequests] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch(API)
      .then(async (response) => {
        if (!response.ok) throw new Error('Unable to load pull requests')
        setPullRequests(await readJson(response))
      })
      .catch((loadError) => setError(loadError.message))
      .finally(() => setLoading(false))
  }, [])

  const summary = useMemo(() => ({
    total: pullRequests.length,
    merged: pullRequests.filter((item) => item.status === 'merged').length,
    open: pullRequests.filter((item) => item.status === 'open').length,
  }), [pullRequests])

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 sm:pt-14 lg:px-8"
    >
      {error && <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} role="alert" className="mb-5 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">{error}</motion.p>}

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="mb-4 flex flex-wrap items-end justify-between gap-4"
      >
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-600">Contribution database</p>
          <h2 className="mt-2 font-mono text-2xl font-bold uppercase tracking-tight text-stone-950">Selected pull requests</h2>
        </div>
        <div className="flex gap-2 text-xs font-bold uppercase tracking-[0.12em] text-stone-500">
          {[
            ['bg-stone-100 text-stone-500', summary.total, 'total'],
            ['bg-violet-100 text-violet-700', summary.merged, 'merged'],
            ['bg-emerald-100 text-emerald-700', summary.open, 'open'],
          ].map(([style, value, label]) => (
            <motion.span
              key={label}
              whileHover={{ scale: 1.06 }}
              className={`rounded-full px-3 py-2 ${style}`}
            >
              {value} {label}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {loading ? <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-16 text-sm uppercase tracking-[0.18em] text-stone-500">Loading archive...</motion.p> : (
        pullRequests.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pullRequests.map((pullRequest, index) => (
              <motion.a
                key={pullRequest.id}
                href={pullRequest.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 28, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: Math.min(index * 0.045, 0.8), duration: 0.4 }}
                whileHover={{ y: -7, scale: 1.015 }}
                className="group border border-stone-200 bg-white p-6 shadow-sm transition-colors hover:border-lime-300 hover:shadow-xl"
              >
                <div className="flex min-w-0 items-start justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <img
                      src={`https://github.com/${pullRequest.org}.png?size=80`}
                      alt={`${pullRequest.org} logo`}
                      className="h-11 w-11 rounded-xl border border-stone-200 bg-stone-50 object-cover transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
                    />
                    <div className="min-w-0">
                      <p className="truncate text-xs font-bold uppercase tracking-[0.14em] text-stone-500">{pullRequest.org}</p>
                      <p className="mt-1 text-xs text-stone-400">#{pullRequest.number}</p>
                    </div>
                  </div>
                  <span className={`min-w-24 shrink-0 border px-3 py-2 text-center text-xs font-bold uppercase tracking-[0.12em] ${pullRequest.status === 'open' ? 'animate-pulse ' : ''}${statusStyles[pullRequest.status] || statusStyles.unknown}`}>{pullRequest.status}</span>
                </div>
                <h3 className="mt-6 line-clamp-2 min-h-12 font-semibold leading-6 text-stone-900 group-hover:text-lime-700">{pullRequest.title || `${pullRequest.org}/${pullRequest.repo} #${pullRequest.number}`}</h3>
                <p className="mt-4 truncate text-sm font-medium text-stone-500">{pullRequest.repo}</p>
                <div className="mt-6 flex items-center justify-between border-t border-stone-100 pt-4 text-xs text-stone-400">
                  <span>{formatDate(pullRequest.date)}</span><ExternalLink size={14} />
                </div>
              </motion.a>
            ))}
          </div>
        ) : <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 px-6 py-16 text-center"><GitPullRequest className="mx-auto text-stone-400" size={32} /><p className="mt-4 font-semibold text-stone-800">Your archive is ready.</p><p className="mt-2 text-sm text-stone-500">Add pull request entries to backend/data/open-source.json.</p></motion.div>
      )}
    </motion.section>
  )
}

export default OpenSource
