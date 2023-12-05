import { MissionUtils } from '@woowacourse/mission-utils';
import { GUIDE_TEXT } from '../constants/constants.js';

const OutputView = {
  print(text) {
    MissionUtils.Console.print(text);
  },

  printLottosCount(count) {
    MissionUtils.Console.print(`\n${count}${GUIDE_TEXT.printLotto}`);
  },

  printLotto(lotto) {
    MissionUtils.Console.print(`[${lotto.join(', ')}]`);
  },

  printStats() {
    MissionUtils.Console.print(GUIDE_TEXT.winningState);
    MissionUtils.Console.print(GUIDE_TEXT.divider);
  },

  printReturnRate(rate) {
    MissionUtils.Console.print(GUIDE_TEXT.returnRate.replace('*', rate));
  },

  printError(error) {
    MissionUtils.Console.print(`${error.message}`);
  },
};

export default OutputView;
