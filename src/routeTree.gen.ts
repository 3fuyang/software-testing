/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as HomeworkCalendarProblemRouteImport } from './routes/homework/calendar-problem/route'
import { Route as HomeworkComputerSellingRouteImport } from './routes/homework/computer-selling/route'
import { Route as HomeworkIndexImport } from './routes/homework/index'
import { Route as HomeworkTelecomSystemRouteImport } from './routes/homework/telecom-system/route'
import { Route as HomeworkTriangleJudgeRouteImport } from './routes/homework/triangle-judge/route'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const HomeworkIndexRoute = HomeworkIndexImport.update({
  id: '/homework/',
  path: '/homework/',
  getParentRoute: () => rootRoute,
} as any)

const HomeworkTriangleJudgeRouteRoute = HomeworkTriangleJudgeRouteImport.update(
  {
    id: '/homework/triangle-judge',
    path: '/homework/triangle-judge',
    getParentRoute: () => rootRoute,
  } as any,
).lazy(() =>
  import('./routes/homework/triangle-judge/route.lazy').then((d) => d.Route),
)

const HomeworkTelecomSystemRouteRoute = HomeworkTelecomSystemRouteImport.update(
  {
    id: '/homework/telecom-system',
    path: '/homework/telecom-system',
    getParentRoute: () => rootRoute,
  } as any,
).lazy(() =>
  import('./routes/homework/telecom-system/route.lazy').then((d) => d.Route),
)

const HomeworkComputerSellingRouteRoute =
  HomeworkComputerSellingRouteImport.update({
    id: '/homework/computer-selling',
    path: '/homework/computer-selling',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/homework/computer-selling/route.lazy').then(
      (d) => d.Route,
    ),
  )

const HomeworkCalendarProblemRouteRoute =
  HomeworkCalendarProblemRouteImport.update({
    id: '/homework/calendar-problem',
    path: '/homework/calendar-problem',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/homework/calendar-problem/route.lazy').then(
      (d) => d.Route,
    ),
  )

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/homework/calendar-problem': {
      id: '/homework/calendar-problem'
      path: '/homework/calendar-problem'
      fullPath: '/homework/calendar-problem'
      preLoaderRoute: typeof HomeworkCalendarProblemRouteImport
      parentRoute: typeof rootRoute
    }
    '/homework/computer-selling': {
      id: '/homework/computer-selling'
      path: '/homework/computer-selling'
      fullPath: '/homework/computer-selling'
      preLoaderRoute: typeof HomeworkComputerSellingRouteImport
      parentRoute: typeof rootRoute
    }
    '/homework/telecom-system': {
      id: '/homework/telecom-system'
      path: '/homework/telecom-system'
      fullPath: '/homework/telecom-system'
      preLoaderRoute: typeof HomeworkTelecomSystemRouteImport
      parentRoute: typeof rootRoute
    }
    '/homework/triangle-judge': {
      id: '/homework/triangle-judge'
      path: '/homework/triangle-judge'
      fullPath: '/homework/triangle-judge'
      preLoaderRoute: typeof HomeworkTriangleJudgeRouteImport
      parentRoute: typeof rootRoute
    }
    '/homework/': {
      id: '/homework/'
      path: '/homework'
      fullPath: '/homework'
      preLoaderRoute: typeof HomeworkIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/homework/calendar-problem': typeof HomeworkCalendarProblemRouteRoute
  '/homework/computer-selling': typeof HomeworkComputerSellingRouteRoute
  '/homework/telecom-system': typeof HomeworkTelecomSystemRouteRoute
  '/homework/triangle-judge': typeof HomeworkTriangleJudgeRouteRoute
  '/homework': typeof HomeworkIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/homework/calendar-problem': typeof HomeworkCalendarProblemRouteRoute
  '/homework/computer-selling': typeof HomeworkComputerSellingRouteRoute
  '/homework/telecom-system': typeof HomeworkTelecomSystemRouteRoute
  '/homework/triangle-judge': typeof HomeworkTriangleJudgeRouteRoute
  '/homework': typeof HomeworkIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/homework/calendar-problem': typeof HomeworkCalendarProblemRouteRoute
  '/homework/computer-selling': typeof HomeworkComputerSellingRouteRoute
  '/homework/telecom-system': typeof HomeworkTelecomSystemRouteRoute
  '/homework/triangle-judge': typeof HomeworkTriangleJudgeRouteRoute
  '/homework/': typeof HomeworkIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/homework/calendar-problem'
    | '/homework/computer-selling'
    | '/homework/telecom-system'
    | '/homework/triangle-judge'
    | '/homework'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/homework/calendar-problem'
    | '/homework/computer-selling'
    | '/homework/telecom-system'
    | '/homework/triangle-judge'
    | '/homework'
  id:
    | '__root__'
    | '/'
    | '/homework/calendar-problem'
    | '/homework/computer-selling'
    | '/homework/telecom-system'
    | '/homework/triangle-judge'
    | '/homework/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  HomeworkCalendarProblemRouteRoute: typeof HomeworkCalendarProblemRouteRoute
  HomeworkComputerSellingRouteRoute: typeof HomeworkComputerSellingRouteRoute
  HomeworkTelecomSystemRouteRoute: typeof HomeworkTelecomSystemRouteRoute
  HomeworkTriangleJudgeRouteRoute: typeof HomeworkTriangleJudgeRouteRoute
  HomeworkIndexRoute: typeof HomeworkIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  HomeworkCalendarProblemRouteRoute: HomeworkCalendarProblemRouteRoute,
  HomeworkComputerSellingRouteRoute: HomeworkComputerSellingRouteRoute,
  HomeworkTelecomSystemRouteRoute: HomeworkTelecomSystemRouteRoute,
  HomeworkTriangleJudgeRouteRoute: HomeworkTriangleJudgeRouteRoute,
  HomeworkIndexRoute: HomeworkIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/homework/calendar-problem",
        "/homework/computer-selling",
        "/homework/telecom-system",
        "/homework/triangle-judge",
        "/homework/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/homework/calendar-problem": {
      "filePath": "homework/calendar-problem/route.tsx"
    },
    "/homework/computer-selling": {
      "filePath": "homework/computer-selling/route.tsx"
    },
    "/homework/telecom-system": {
      "filePath": "homework/telecom-system/route.tsx"
    },
    "/homework/triangle-judge": {
      "filePath": "homework/triangle-judge/route.tsx"
    },
    "/homework/": {
      "filePath": "homework/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
