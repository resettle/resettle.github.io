import {
  index,
  layout,
  route,
  type RouteConfig,
} from '@react-router/dev/routes'

export default [
  layout('components/NavigationLayout.tsx', [
    index('routes/_index.tsx'),
    route('doc', 'routes/doc.tsx'),
  ]),
] satisfies RouteConfig
