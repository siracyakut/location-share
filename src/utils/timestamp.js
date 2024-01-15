export const getTimestamp = () => Math.floor(Date.now() / 1000);
export const addTimestampToSeconds = (seconds) =>
  Math.floor(Date.now() / 1000) + seconds;
