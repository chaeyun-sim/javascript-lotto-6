import Lotto from '../../src/Model/Lotto';

describe('Lotto 클래스 테스트', () => {
  test.each(['', ,])('빈 문자열을 입력하면 예외가 발생한다.', input => {
    expect(() => new Lotto(input)).toThrow('[ERROR]');
  });

  test.each(['1,2,3,4', '1,2,3,4,5', '1,2,3,4,5,6,7'])(
    '입력된 숫자가 6개가 아니라면 예외가 발생한다.',
    input => {
      expect(() => new Lotto(input)).toThrow('[ERROR]');
    }
  );

  test('입력된 값에 중복된 숫자가 존재한다면 예외가 발생한다.', () => {
    expect(() => new Lotto('1,2,3,3,3,3')).toThrow('[ERROR]');
  });

  test.each(['0,1,2,3,4,5', '41,42,43,44,45,46'])(
    '입력된 값 중 1 이상, 45 이하의 범위를 벗어난 숫자가 있다면 예외가 발생한다.',
    input => {
      expect(() => new Lotto(input)).toThrow('[ERROR]');
    }
  );

  test.each(['1,2,3,,4,5', 'a,a,a,a,a,a', 'abcd!,abc!'])(
    '입력된 값 중 숫자에 문자가 포함되어 있다면 예외가 발생한다.',
    input => {
      expect(() => new Lotto(input)).toThrow('[ERROR]');
    }
  );
});
