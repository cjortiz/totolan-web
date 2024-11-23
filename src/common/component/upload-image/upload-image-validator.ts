const IMAGE_TYPES = ["image/png", "image/jpeg", "image/gif", "image/svg+xml", "image/webp"];

export const checkFileType = (type: string): boolean => {
  return IMAGE_TYPES.includes(type);
};

export const checkFileSize = (size: number): boolean => {
  let isImageValid: boolean;
  if (size >= 2097152) {
    isImageValid = false;
  } else {
    isImageValid = true;
  }
  return isImageValid;
};

/**
 * @deprecated use the one that is inside the common constant
 */
export const BASE64REGEX = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
