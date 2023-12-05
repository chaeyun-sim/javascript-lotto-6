import { MissionUtils } from "@woowacourse/mission-utils"
import {GUIDE_TEXT} from '../constants/constants.js'

const InputView = {
	async inputMoney() {
		const input = await MissionUtils.Console.readLineAsync(GUIDE_TEXT.inputMoney);
		return String(input);
	},

	async inputWinningNumbers() {
		const input = await MissionUtils.Console.readLineAsync(
			GUIDE_TEXT.inputWinningNumbers
		);
		return String(input);
	},

	async inputBonusNumber() {
		const input = await MissionUtils.Console.readLineAsync(
			GUIDE_TEXT.inputBonusNumber
		);
		return String(input);
	},
};

export default InputView;