import { Encryption } from './encryption';

const runSecurityAudit = () => {
  console.log("🔐 STARTING SECURITY AUDIT: ENCRYPTION\n");

  const secretData = "This is my crypto seed phrase: apple banana cherry...";
  const masterKey = "my-super-secret-password-123";

  console.log("Step 1: Encrypting sensitive data...");
  const cipherText = Encryption.encrypt(secretData, masterKey);
  console.log(`      -> CipherText Length: ${cipherText.length}`);
  
  if (cipherText === secretData) {
    console.log("❌ FAIL: Data was not encrypted!");
    return;
  }
  console.log("      -> [PASS] Data is obfuscated.");

  console.log("\nStep 2: Decrypting with CORRECT key...");
  const decryptedData = Encryption.decrypt(cipherText, masterKey);
  if (decryptedData === secretData) {
    console.log("      -> [PASS] Data recovered successfully.");
  } else {
    console.log("❌ FAIL: Could not recover data!");
  }

  console.log("\nStep 3: Decrypting with WRONG key...");
  const wrongKeyData = Encryption.decrypt(cipherText, "wrong-password");
  if (wrongKeyData === "" || wrongKeyData !== secretData) {
    console.log("      -> [PASS] Security maintained. Wrong key returns garbage/empty.");
  } else {
    console.log("❌ FAIL: Security breach! Wrong key recovered data.");
  }

  console.log("\n✅ SECURITY AUDIT COMPLETE.");
};

runSecurityAudit();
