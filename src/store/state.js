/**
 * Created by yangzhenfang on 2017/06/08.
 */
import {playMode} from '../common/js/config'
const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playlist: [],
  sequenceList: [],
  mode: playMode.sequence,
  currentIndex: -1
}

export default state
