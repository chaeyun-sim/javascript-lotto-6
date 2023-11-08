import { MissionUtils } from '@woowacourse/mission-utils';
import LottoTickets from '../src/LottoTickets'
import Lotto from '../src/Lotto';
import BonusNumber from '../src/BonusNumber'

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};


describe('당첨 내역 및 통계 출력 테스트', () => {
  test.each([
    [1000, [7,8,9,10,11,13], [1,2,3,4,5,6], 12,  0, 0.0],
    [1000, [1,2,3,7,8,9], [1,2,3,4,5,6], 12, 5000, 50.0],
    [1000, [1,2,3,4,5,6], [1,2,3,4,5,6], 12, 2000000000, 20000000.0],
  ])(
    "이 테스트에 대한 구입 금액은 %s원, 발행된 로또는 %s, 당첨 번호는 %s, 보너스 번호는 %s, 당첨 금액은 %s, 수익률은 %s%여야한다.",
    (money, randoms, winnings, bonus, expectedPrizeMoney, expectedStats) => {

      mockRandoms([randoms]);

      const tickets = new LottoTickets(money).publishTickets();
      const winningNumbers = new Lotto(winnings).returnWinningNumbers();
      const bonusNumber = new BonusNumber(bonus, winnings).returnValue();
      const stats = new Lotto(winnings).calculateWinningStats(tickets, winningNumbers, bonusNumber);
      const profit = new Lotto(winnings).getProfits(stats)
      const rate = new Lotto(winnings).calculateRate(profit, money) * 10

      expect(winningNumbers).toEqual(winnings)
      expect(bonusNumber).toEqual(bonus)
      expect(profit).toEqual(expectedPrizeMoney)
      expect(rate).toEqual(expectedStats)
    },
  );
})