const KEY_NICKNAME = 'W0W_KEY_NICKNAME';

export default {
  setNickname: (nickname: string) =>
    globalThis.localStorage.setItem(KEY_NICKNAME, nickname),
  getNickname: () => globalThis.localStorage.getItem(KEY_NICKNAME) ?? null,
};
