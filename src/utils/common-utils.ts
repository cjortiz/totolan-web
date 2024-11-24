import moment from "moment";
import { DateFormat, PaginationDto } from "../common";

import CryptoJS from "crypto-js";
import { SECRET_KEY } from "../config";

export const getN = (v: any): number => {
  const s: string = String(v).replace(/,/g, "");

  if (!Number.isNaN(Number(s))) {
    return Number(s);
  }

  return 0;
};

/**
 * Check if Filter Has Changes
 *
 * @param filterInitialValues Filter Initial Values
 * @param currentFilterValues Current Filter Values
 * @returns changesCount and changes keys
 */
export const checkIfFilterHasChanges = (
  filterInitialValues: object,
  currentFilterValues: object
): { changesCount: number; changedKeys: string[] } => {
  let changesCount = 0;
  const changedKeys: string[] = [];

  const keys1: string[] = filterInitialValues
    ? Object.keys(filterInitialValues)
    : [];

  for (const key of keys1) {
    if (
      currentFilterValues &&
      key &&
      Object.prototype.hasOwnProperty.call(currentFilterValues, key)
    ) {
      if (
        currentFilterValues[key] !== undefined &&
        !(
          Array.isArray(currentFilterValues[key]) &&
          currentFilterValues[key].length === 0
        )
      ) {
        if (
          moment.isMoment(currentFilterValues[key]) &&
          moment.isMoment(currentFilterValues[key])
        ) {
          const currentDate: string = currentFilterValues[key].format(
            DateFormat.MMDDYYYY
          );
          const filterDate: string = filterInitialValues[key].format(
            DateFormat.MMDDYYYY
          );
          if (filterDate !== currentDate) {
            changesCount++;
            changedKeys.push(key);
          }
        } else if (
          typeof filterInitialValues[key] === "object" &&
          typeof currentFilterValues[key] === "object"
        ) {
          if (
            Array.isArray(filterInitialValues[key]) &&
            Array.isArray(currentFilterValues[key])
          ) {
            if (currentFilterValues[key].length > 0) {
              // Check for non-empty array
              const sortedDefaultArray = [...filterInitialValues[key]].sort();
              const sortedFormArray = [...currentFilterValues[key]].sort();
              const arrayChangesResult = checkIfFilterArrayHasChanges(
                sortedDefaultArray,
                sortedFormArray
              );

              if (arrayChangesResult.changesCount > 0) {
                changesCount += arrayChangesResult.changesCount;
                changedKeys.push(key);
              }
            }
          } else {
            const formChangesResult = checkIfFilterHasChanges(
              filterInitialValues[key],
              currentFilterValues[key]
            );

            if (formChangesResult.changesCount > 0) {
              changesCount += formChangesResult.changesCount;
              changedKeys.push(key);
            }
          }
        } else {
          if (
            filterInitialValues[key] instanceof Date &&
            currentFilterValues[key] instanceof Date
          ) {
            if (
              !moment(filterInitialValues[key]).isSame(currentFilterValues[key])
            ) {
              changesCount++;
              changedKeys.push(key);
            }
          } else if (filterInitialValues[key] !== currentFilterValues[key]) {
            changesCount++;
            changedKeys.push(key);
          }
        }
      }
    } else {
      changesCount++;
      changedKeys.push(key);
    }
  }

  return { changesCount, changedKeys };
};

/**
 * Check id Filter Array has Changes
 *
 * @param defaultArrayValues defaukt array values
 * @param currentArrayValues current array values
 * @returns changesCount and changes keys
 */
const checkIfFilterArrayHasChanges = (
  defaultArrayValues: object[],
  currentArrayValues: object[]
): { changesCount: number; changedKeys: string[] } => {
  if (defaultArrayValues.length !== currentArrayValues.length) {
    return { changesCount: 1, changedKeys: [] };
  }

  let arrayChangesCount = 0;
  const changedKeys: string[] = [];

  for (let i = 0; i < defaultArrayValues.length; i++) {
    if (
      typeof defaultArrayValues[i] === "object" &&
      typeof currentArrayValues[i] === "object"
    ) {
      const elementChangesResult = checkIfFilterHasChanges(
        defaultArrayValues[i],
        currentArrayValues[i]
      );

      if (elementChangesResult.changesCount > 0) {
        arrayChangesCount += elementChangesResult.changesCount;
        changedKeys.push(`[${i}]`); // Use an index as the key for array elements
      }
    } else {
      // Check for date changes using moment.js
      if (
        defaultArrayValues[i] instanceof Date &&
        currentArrayValues[i] instanceof Date
      ) {
        if (!moment(defaultArrayValues[i]).isSame(currentArrayValues[i])) {
          arrayChangesCount++;
          changedKeys.push(`[${i}]`);
        }
      } else if (defaultArrayValues[i] !== currentArrayValues[i]) {
        arrayChangesCount++;
        changedKeys.push(`[${i}]`);
      }
    }
  }

  return { changesCount: arrayChangesCount, changedKeys };
};

/**
 * Gets the string of a given value.
 * @param {any} v - Any value.
 * @returns {string} A string.
 */
export const getS = (v: any): string => {
  if (
    v === null ||
    v === undefined ||
    (typeof v === "object" && v.toString() === "[object Object]")
  )
    return "";

  if (v === true) {
    return "1";
  } else if (v === false) {
    return "0";
  }

  return String(v);
};

/***
 * Common for Pagination Change on Common Table
 *
 * @param page - on common table page
 * @param pagSize - on common table pageSize
 * @param filter - filter DTO
 * @param setFilter - setting new filter
 * @param setIsPageChanged - setting status when changing pages (for tables with dynamic columns)
 */
export const commonPaginationChangeHandler = <T extends PaginationDto>(
  page: number,
  pageSize: number,
  filter: T,
  setFilter: (filter: T) => void
) => {
  setFilter({
    ...filter,
    pageNumber: page,
    pageSize: pageSize,
    resetPage: false,
  });
};

/**
 * Encrypts a payload using AES encryption with ECB mode and PKCS7 padding.
 *
 * @param {string} payload - The plaintext payload to be encrypted.
 * @returns {string} The Base64-encoded encrypted text.
 * @throws {Promise} Rejected with an error if encryption fails.
 */
export const encryptPayload = (payload: string) => {
  try {
    // Decode the Base64 encoded secret key
    const secretKey = CryptoJS.enc.Base64.parse(SECRET_KEY);

    // Encryption
    const encrypted = CryptoJS.AES.encrypt(payload, secretKey, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    });

    // Encode salt and encrypted text to Base64
    const encodedText = CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
    // CONSOLE LOG HERE FOR DEVELOPMENT PURPOSES
    // console.log("Original Text:", payload);
    // console.log("Encrypted Text:", encodedText);
    return encodedText;
  } catch (error) {
    return Promise.reject(error);
  }
};

// /**
//  * Decrypts an AES-encrypted response using ECB mode and PKCS7 padding.
//  *
//  * @param {string} encodedText - The Base64-encoded encrypted text to be decrypted.
//  * @returns {Object} The decrypted JSON object.
//  * @throws {Promise} Rejected with an error if decryption fails.
//  */
// export const decryptResponse = (encodedText: string) => {
//   try {
//     // Decode the Base64 encoded secret key
//     const secretKey = CryptoJS.enc.Base64.parse(SECRET_KEY);

//     // Decode Base64 encoded text to ciphertext
//     const ciphertext = CryptoJS.enc.Base64.parse(encodedText);

//     // Decryption
//     const decrypted = CryptoJS.AES.decrypt(
//       {
//         ciphertext,
//         iv,
//         salt,
//         algorithm,
//         key,
//         mode,
//         padding,
//         blockSize,
//         formatter,
//       },
//       secretKey,
//       {
//         mode: CryptoJS.mode.ECB,
//         padding: CryptoJS.pad.Pkcs7,
//       }
//     );

//     // Convert the decrypted data to a string
//     const decryptedText = decrypted.toString(CryptoJS.enc.Utf8);
//     // CONSOLE LOG HERE FOR DEVELOPMENT PURPOSES
//     // console.log("Encrypted Text:", encodedText);
//     // console.log("Decrypted Text:", decryptedText);
//     return JSON.parse(decryptedText);
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };
