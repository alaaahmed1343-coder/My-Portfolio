import { Code2 } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'

export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-3 text-center text-sm text-muted-foreground">
        <div className="flex items-center gap-2 font-mono text-xs">
          <Code2 className="size-4 text-berry" />

          <span>
            Alaa<span className="text-berry">.</span>
          </span>
        </div>

        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}