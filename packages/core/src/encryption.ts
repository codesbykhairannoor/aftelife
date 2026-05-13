import CryptoJS from 'crypto-js';

/**
 * Aftelife Core Encryption Module
 * Uses AES-256 for securing user data before storage.
 */
export const Encryption = {
  /**
   * Encrypt data using a master key (derived from password + salt)
   */
  encrypt: (data: string, secretKey: string): string => {
    return CryptoJS.AES.encrypt(data, secretKey).toString();
  },

  /**
   * Decrypt data using the master key
   */
  decrypt: (cipherText: string, secretKey: string): string => {
    try {
      const bytes = CryptoJS.AES.decrypt(cipherText, secretKey);
      return bytes.toString(CryptoJS.enc.Utf8);
    } catch (e) {
      return ""; // Return empty string on decryption failure (wrong key)
    }
  },

  /**
   * Generate a random recovery key/phrase
   */
  generateVaultKey: (): string => {
    return CryptoJS.lib.WordArray.random(32).toString();
  }
};
