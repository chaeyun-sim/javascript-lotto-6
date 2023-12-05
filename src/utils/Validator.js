import { ERROR_MESSAGE, PATTERN, UNIT } from '../constants/constants.js';
import CustomError from './CustomError.js';

const Validator = {
	/**
	 * 
	 * @param {string} input 
	 */
	checkCash(input) {
		this.emptyInput(input);
		if (!/\d+/g.test(input)) throw new Error(ERROR_MESSAGE.onlyNumber);

		if (Number(input) < UNIT) {
			throw new CustomError(ERROR_MESSAGE.minimum);
		}

		if (Number(input) % UNIT) {
			throw new CustomError(ERROR_MESSAGE.invalidUnit);
		}
	},

	/**
	 * 
	 * @param {string} input 
	 */
	emptyInput(input) {
		if (!input) throw new CustomError(ERROR_MESSAGE.noInput);
	},
};

export default Validator;
