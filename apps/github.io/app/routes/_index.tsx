import { Separator } from '@resettle/design'
import {
  ActivityIcon,
  BarChartIcon,
  BriefcaseIcon,
  ClockIcon,
  CodeIcon,
  DollarSignIcon,
  GlobeIcon,
  LanguagesIcon,
  LineChartIcon,
  MapPinIcon,
  SearchIcon,
  TextIcon,
  UniversityIcon,
} from 'lucide-react'

import ApiProductCard from '~/components/ApiProductCard'
import Metadata from '~/components/Metadata'

export default function Developer() {
  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-hidden">
      <Metadata
        title="Resettle Dev Portal"
        description="Collection of all open source tools from Resettle."
        keywords={[
          'resettle developer portal',
          'developer portal',
          'developer documentation',
        ]}
      />
      <title>Resettle Dev Portal</title>
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-96 w-96 rotate-12 transform rounded-full bg-linear-to-br from-blue-300/60 via-cyan-300/50 to-blue-400/55 blur-3xl"></div>
        <div className="absolute -right-20 -bottom-20 h-80 w-80 -rotate-12 transform rounded-full bg-linear-to-tl from-amber-300/50 via-yellow-300/40 to-orange-300/45 blur-2xl"></div>
        <div className="absolute top-1/3 -left-20 h-72 w-72 rotate-45 transform rounded-full bg-linear-to-r from-blue-500/35 via-teal-400/45 to-cyan-500/40 blur-xl"></div>
        <div className="absolute top-1/4 -right-16 h-64 w-64 -rotate-30 transform rounded-full bg-linear-to-bl from-emerald-300/45 via-cyan-300/35 to-blue-300/40 blur-2xl"></div>
      </div>

      {/* Hero Section */}
      <section className="z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-4 py-20 sm:py-32">
        <div className="mx-auto flex max-w-4xl flex-col gap-4 text-center">
          <h1 className="text-4xl leading-tight font-bold tracking-tight sm:text-5xl md:text-6xl">
            Welcome to{' '}
            <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Resettle Dev Portal
            </span>
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg sm:text-xl">
            We provide tools to integrate global data effortlessly into your
            applications.
          </p>
        </div>
      </section>

      {/* Project Cards Section */}
      <section className="z-10 mx-auto w-full max-w-7xl px-4 pb-20">
        <div className="grid gap-8 md:grid-cols-2">
          <ApiProductCard
            key="place"
            slug="place"
            title="Place API & SDK"
            icon={
              <MapPinIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            }
            description="Search and query detailed information about places worldwide"
            color="blue"
            features={[
              {
                icon: (
                  <GlobeIcon className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                ),
                description:
                  'Search places by name, country code with fuzzy matching',
              },
              {
                icon: (
                  <SearchIcon className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                ),
                description:
                  'Cost of living data with multi-currency conversion',
              },
              {
                icon: (
                  <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                ),
                description:
                  'Detailed location info including coordinates & population',
              },
              {
                icon: (
                  <LanguagesIcon className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                ),
                description: 'Easy to use SDK in popular languages',
              },
            ]}
          />
          <ApiProductCard
            key="occupation"
            slug="occupation"
            title="Occupation API & SDK"
            icon={
              <BriefcaseIcon className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
            }
            description="Access standardized occupation codes and crosswalks"
            color="cyan"
            features={[
              {
                icon: (
                  <GlobeIcon className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" />
                ),
                description: 'Search occupation codes with fuzzy matching',
              },
              {
                icon: (
                  <SearchIcon className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" />
                ),
                description: 'Query occupations by classification system',
              },
              {
                icon: (
                  <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" />
                ),
                description:
                  'Crosswalk between different classification standards',
              },
              {
                icon: (
                  <LanguagesIcon className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" />
                ),
                description: 'Easy to use SDK in popular languages',
              },
            ]}
          />
          <ApiProductCard
            key="skill"
            slug="skill"
            title="Skill Taxonomy API"
            description="Integrate complete & standardized skill taxonomy"
            features={[
              {
                icon: (
                  <SearchIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
                ),
                description: 'Search skills with fuzzy matching',
              },
              {
                icon: (
                  <CodeIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
                ),
                description: 'Query occupations by category hierarchy',
              },
              {
                icon: (
                  <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
                ),
                description:
                  'Historical changes of skills for seamless integration',
              },
              {
                icon: (
                  <LanguagesIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
                ),
                description: 'Easy to use SDK in popular languages',
              },
            ]}
            icon={
              <ActivityIcon className="h-6 w-6 text-orange-600 dark:text-orange-400" />
            }
            color="orange"
          />
          <ApiProductCard
            key="university"
            slug="university-ranking"
            title="University Ranking API"
            description="Access unified & standardized university rankings"
            features={[
              {
                icon: (
                  <BarChartIcon className="mt-0.5 h-4 w-4 shrink-0 text-purple-500" />
                ),
                description: 'Retrieve ranking details of universities',
              },
              {
                icon: (
                  <LineChartIcon className="mt-0.5 h-4 w-4 shrink-0 text-purple-500" />
                ),
                description: 'Compare amongst rankings and universities',
              },
              {
                icon: (
                  <TextIcon className="mt-0.5 h-4 w-4 shrink-0 text-purple-500" />
                ),
                description: 'Unified university info and representation',
              },
              {
                icon: (
                  <LanguagesIcon className="mt-0.5 h-4 w-4 shrink-0 text-purple-500" />
                ),
                description: 'Easy to use SDK in popular languages',
              },
            ]}
            icon={
              <UniversityIcon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            }
            color="purple"
          />
          <ApiProductCard
            key="exchange"
            slug="exchange-rate"
            title="Exchange Rate API"
            description="Access exchange rate by time and currency"
            features={[
              {
                icon: (
                  <BarChartIcon className="mt-0.5 h-4 w-4 shrink-0 text-violet-500" />
                ),
                description: 'Over 100 global currencies',
              },
              {
                icon: (
                  <LineChartIcon className="mt-0.5 h-4 w-4 shrink-0 text-violet-500" />
                ),
                description: 'Retrieve conversion rate by date',
              },
              {
                icon: (
                  <TextIcon className="mt-0.5 h-4 w-4 shrink-0 text-violet-500" />
                ),
                description: 'Easy to use',
              },
              {
                icon: (
                  <LanguagesIcon className="mt-0.5 h-4 w-4 shrink-0 text-violet-500" />
                ),
                description: 'Easy to use SDK in popular languages',
              },
            ]}
            icon={
              <DollarSignIcon className="h-6 w-6 text-violet-600 dark:text-violet-400" />
            }
            color="violet"
          />
        </div>
      </section>

      <Separator className="mx-auto w-full max-w-6xl" />

      {/* Footer Links */}
      <footer className="z-10 w-full py-10 pb-8 text-center">
        <div className="grid grid-cols-2 gap-6 text-sm text-gray-600 sm:flex sm:items-center sm:justify-center">
          <a
            href="https://resettle.ai"
            className="transition-colors hover:text-gray-900 hover:underline"
          >
            Resettle
          </a>
          <span className="hidden sm:block sm:text-gray-400">·</span>
          <a
            href="https://resettle.ai/dev"
            className="transition-colors hover:text-gray-900 hover:underline"
          >
            API
          </a>
          <span className="hidden sm:block sm:text-gray-400">·</span>
          <a
            href="https://resettle.ai/blog"
            className="transition-colors hover:text-gray-900 hover:underline"
          >
            Blog
          </a>
          <span className="hidden sm:block sm:text-gray-400">·</span>
          <a
            href="https://github.com/resettle"
            className="transition-colors hover:text-gray-900 hover:underline"
          >
            Github
          </a>
          <span className="hidden sm:block sm:text-gray-400">·</span>
          <a
            href="https://resettle.ai/terms"
            className="transition-colors hover:text-gray-900 hover:underline"
          >
            Terms of Service
          </a>
          <span className="hidden sm:block sm:text-gray-400">·</span>
          <a
            href="https://resettle.ai/privacy"
            className="transition-colors hover:text-gray-900 hover:underline"
          >
            Privacy Policy
          </a>
          <span className="hidden sm:block sm:text-gray-400">·</span>
          <div className="transition-colors">© 2025 Resettle, Pte Ltd.</div>
        </div>
      </footer>
    </main>
  )
}
