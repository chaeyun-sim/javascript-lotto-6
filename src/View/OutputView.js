import { MissionUtils } from "@woowacourse/mission-utils"
import {GUIDE_TEXT} from '../constants/constants.js'

const OutputView = {
  print(text) {
    MissionUtils.Console.print(text)
  },

  printLottos(text, lottos){
    MissionUtils.Console.print(GUIDE_TEXT.printLotto);
    lottos.forEach((lotto) => MissionUtils.Console.print(lotto));
  },

  printStats() {
    MissionUtils.Console.print(GUIDE_TEXT.winningState)
    MissionUtils.Console.print(GUIDE_TEXT.divider)
  },

  printReturnRate(rate) {
    MissionUtils.Console.print(GUIDE_TEXT.returnRate.replace('*', rate))
  }
}

export default OutputView;