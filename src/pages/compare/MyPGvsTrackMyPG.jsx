import { competitors } from '../../data/comparisons'
import { ComparePage } from './ComparePage'

export function MyPGvsTrackMyPG() {
  return <ComparePage competitor={competitors.basicRentTracker} />
}
