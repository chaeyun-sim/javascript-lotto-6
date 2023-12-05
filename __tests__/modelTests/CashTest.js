import Cash from '../../src/Model/Cash';

describe('Cash 클래스 테스트', () => {
  test.each(['', ,])('빈 문자열 입력 시 예외가 발생한다.', input => {
    expect(() => new Cash(input)).toThrow('[ERROR]');
  });

  test.each(['8000!', 'abcd', '1O0O'])(
    '숫자가 아닌 문자를 입력하면 예외가 발생한다.',
    input => {
      expect(() => new Cash(input)).toThrow('[ERROR]');
    }
  );

  test.each(['990', '999', '1'])(
    '입력된 값이 1000보다 작으면 예외가 발생한다.',
    input => {
      expect(() => new Cash(input)).toThrow('[ERROR]');
    }
  );

  test.each(['1001', '1010', '1100'])(
    '입력된 값이 1000원 단위가 아니라면 예외가 발생한다.',
    input => {
      expect(() => new Cash(input)).toThrow('[ERROR]');
    }
  );
});
