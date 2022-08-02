const KEY_SO_EASY = 'W0W_KEY_SO_EASY';

export default {
  setSoEasy: () => globalThis.sessionStorage.setItem(KEY_SO_EASY, true),
  getSoEasy: () => globalThis.sessionStorage?.getItem(KEY_SO_EASY) ?? null,
};
