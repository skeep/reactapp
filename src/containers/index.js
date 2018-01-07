import LoadableVisibility from 'react-loadable-visibility/react-loadable'
import Loader from '../components/Loader/Loader'

const LoadableHome = LoadableVisibility({
  loader: () => import('./Home/Home'),
  loading: Loader
})
const LoadableAbout = LoadableVisibility({
  loader: () => import('./About/About'),
  loading: Loader
})
const LoadableNotFound = LoadableVisibility({
  loader: () => import('./NotFound/NotFound'),
  loading: Loader
})

export {
  LoadableHome as Home,
  LoadableAbout as About,
  LoadableNotFound as NotFound
}
