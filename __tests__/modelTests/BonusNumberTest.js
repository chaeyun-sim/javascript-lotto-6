import BonusNumber from '../../src/Model/BonusNumber';

describe('BonusNumber 클래스 테스트', () => {
  test.each(['', ,])('빈 문자열이 입력되었다면 예외가 발생한다.', input => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    expect(() => new BonusNumber(winningNumbers, input)).toThrow('[ERROR]');
  });

  test.each(['n', '!!', '1O'])(
    '입력된 값에 숫자 외의 문자가 포함되어있다면 예외가 발생한다',
    input => {
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      expect(() => new BonusNumber(winningNumbers, input)).toThrow('[ERROR]');
    }
  );

  test('당첨 번호에 입력된 값이 포함되어있다면 예외가 발생한다.', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const input = 3;

    expect(() => new BonusNumber(winningNumbers, input)).toThrow('[ERROR]');
  });

  test.each(['0', '46'])(
    '입력된 값이 1보다 작거나 45보다 많다면 에러가 발생한다.',
    input => {
      const winningNumbers = [1, 2, 3, 4, 5, 6];

      expect(() => new BonusNumber(winningNumbers, input)).toThrow('[ERROR]');
    }
  );
});
