import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@resettle/design'
import { ArrowRightIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router'

type ApiProductCardProps = {
  slug: string
  title: string
  icon: ReactNode
  description: string
  features: {
    icon: ReactNode
    description: string
  }[]
  color: string
}

export default function ApiProductCard({
  slug,
  title,
  icon,
  description,
  features,
  color,
}: ApiProductCardProps) {
  return (
    <Card className="border-border/60 bg-card/60 flex flex-col backdrop-blur-sm">
      <CardHeader>
        <div
          className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-${color}-100 dark:bg-${color}-900/30`}
        >
          {icon}
        </div>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-6">
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold">Key Features</h4>
          <ul className="text-muted-foreground grid gap-2 text-sm">
            {features.map(f => (
              <li className="flex items-start gap-2">
                {f.icon}
                <span>{f.description}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto pt-4">
          <Button asChild size="lg" className="w-full">
            <a href="https://resettle.ai/dev">
              Check out the Service
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
        <div className="mt-auto">
          <Button asChild size="lg" variant="outline" className="w-full">
            <Link to={`/doc#${slug}`}>
              View Documentation
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
