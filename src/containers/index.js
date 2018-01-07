import asyncComponent from '../components/AsyncComponent/AsyncComponent'

const AsyncHome = asyncComponent(() => import('./Home/Home'))
const AsyncAbout = asyncComponent(() => import('./About/About'))
const AsyncNotFound = asyncComponent(() => import('./NotFound/NotFound'))

export { AsyncHome as Home, AsyncAbout as About, AsyncNotFound as NotFound }
