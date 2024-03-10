export const fileFormat = (url = "") => {
  const fileExtension = url.split(".")[-1];
  if (
    fileExtension === "mp4" ||
    fileExtension === "webm" ||
    fileExtension === "ogg"
  ) {
    return "video";
  } else if (fileExtension === "mp3" || fileExtension === "wav") {
    return "audio";
  } else if (
    fileExtension === "png" ||
    fileExtension === "jpg" ||
    fileExtension === "jpeg" ||
    fileExtension === "gif"
  ) {
    return "image";
  }
  return "file";
};

export const transformImage = (url = "", width = 100) => url;
