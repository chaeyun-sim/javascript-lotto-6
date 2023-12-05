const UNIT = 1000;
const WinningMoney = [5000, 50000, 1500000, 30000000, 2000000000];

const STATS_TEXT = Object.freeze({
  fifth: '3개 일치 (5,000원) - ',
  fourth: '4개 일치 (50,000원) - ',
  third: '5개 일치 (1,500,000원) - ',
  second: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  first: '6개 일치 (2,000,000,000원) - ',
});

const GUIDE_TEXT = Object.freeze({
  inputMoney: '구입금액을 입력해 주세요.\n',
  printLotto: '개를 구매했습니다.',
  inputWinningNumbers: '당첨 번호를 입력해 주세요.\n',
  inputBonusNumber: '보너스 번호를 입력해 주세요.\n',
  winningState: '당첨 통계',
  divider: '---',
  returnRate: '총 수익률은 *%입니다.',
});

const ERROR_MESSAGE = Object.freeze({
  noInput: '[ERROR] 빈 문자열은 입력할 수 없습니다.',
  onlyNumber: '[ERROR] 숫자 외의 문자는 입력할 수 없습니다.',
  onlyNumberAndComma: '[ERROR] 숫자외 쉼표 외의 문자는 입력할 수 없습니다.',
  invalidRange: '[ERROR] 입력된 번호는 1 이상 45 이하여야 합니다.',
  invalidUnit: `[ERROR] ${UNIT}원 단위로 입력할 수 있습니다.`,
  minimum: `[ERROR] ${UNIT} 미만은 입력할 수 없습니다.`,
});

const PATTERN = Object.freeze({
  onlyNumber: /^(?:[1-9]|[1-3][0-9]|4[0-5])$/,
  numberWithComma:
    /^(?:[1-9]|[1-3][0-9]|4[0-5])(?:,[1-9]|[1-3][0-9]|4[0-5])*(?:,(?:[1-9]|[1-3][0-9]|4[0-5]))?$/,
});

export { UNIT, WinningMoney, STATS_TEXT, GUIDE_TEXT, ERROR_MESSAGE, PATTERN };
