import { Link } from 'react-router'

import Logo from './Logo'

export default function Navigation() {
  return (
    <div className="bg-card/80 sticky top-0 right-0 left-0 z-50 h-14 border-b backdrop-blur-md">
      <div className="container mx-auto flex h-full items-center justify-between gap-2 px-4">
        <Link aria-label="Go to Resettle dev" to="/">
          <div className="flex flex-row">
            <Logo className="h-5 pr-1" />
            <div className="text-sm">dev portal</div>
          </div>
        </Link>
      </div>
    </div>
  )
}
