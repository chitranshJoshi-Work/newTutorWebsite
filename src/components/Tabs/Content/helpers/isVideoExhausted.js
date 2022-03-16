const isVideoExhausted = (content) => {
  return content?.isVideoRestricted && content?.videoCountAvailable === 0;
};

export default isVideoExhausted;
