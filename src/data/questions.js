// Theory and Practice of Modern Cryptography Question Bank
// Total 120 questions extracted from Assignments 1 to 12

export const questions = [
  {
    "id": 1,
    "assignment": 1,
    "assignmentQ": 1,
    "question": "Let P, C, K denote plaintext space, ciphertext space and key space respectively. In Shift Cipher, P = C = K = Z26. If the key for Shift Cipher is k = 12 and plaintext is 22 then ciphertext is",
    "options": [
      "6",
      "7",
      "8",
      "9"
    ],
    "correctAnswer": 2,
    "explanation": "The encryption function of the Shift Cipher is C = (P + k) mod 26 where P is the plaintext and k is the key. Given P = 22 and k = 12, C = (22 + 12) mod 26 = 34 mod 26 = 8. Therefore, the ciphertext is 8. Hence, the correct answer is (c) 8."
  },
  {
    "id": 2,
    "assignment": 1,
    "assignmentQ": 2,
    "question": "Which of the following values of a is valid in an Affine Cipher?",
    "options": [
      "2",
      "13",
      "15",
      "26"
    ],
    "correctAnswer": 2,
    "explanation": "In the Affine Cipher, the keya must satisfy gcd(a, 26) = 1, so that a has a multiplicative inverse modulo 26. Checking the given values: gcd(2, 26) = 2, gcd(13, 26) = 13, gcd(15, 26) = 1, gcd(26, 26) = 26. Only 15 is relatively prime to 26. Therefore, the correct answer is (c) 15."
  },
  {
    "id": 3,
    "assignment": 1,
    "assignmentQ": 3,
    "question": "Frequency analysis exploits:",
    "options": [
      "The repetition of common letters in a language",
      "Weak passwords",
      "Key exchange failures",
      "Hardware vulnerabilities"
    ],
    "correctAnswer": 0,
    "explanation": "In natural languages, certain letters occur more frequently than others. For example, in English, letters such as E, T , and A appear more often than letters like Q or Z. Frequency analysis studies the frequency of symbols in the ciphertext and matches them with the known frequency distribution of letters in the language. This technique is particularly effective against monoalphabetic substitution ciphers. Therefore, the correct answer is (a) The repetition of common letters in a language ."
  },
  {
    "id": 4,
    "assignment": 1,
    "assignmentQ": 4,
    "question": "The key-space for vigenere cipher of length m (m is a positive integer) is",
    "options": [
      "( Z26)m",
      "( Z)m",
      "Z",
      "None of the above."
    ],
    "correctAnswer": 0,
    "explanation": "In the Vigen` ere cipher, a key consists ofm letters, where each letter corresponds to an element of Z26. Therefore, a key of length m can be represented as (k 1, k2, . . . , km) where each ki ∈ Z26. Hence, the set of all possible keys is ( Z26)m. Therefore, the correct answer is (a) (Z26)m."
  },
  {
    "id": 5,
    "assignment": 1,
    "assignmentQ": 5,
    "question": "Which are the most frequently found letters in the English language ?",
    "options": [
      "e,a",
      "e,o",
      "e,t",
      "e,i"
    ],
    "correctAnswer": 2,
    "explanation": "In English text, the letter E has the highest frequency of occurrence, followed by T . These frequency patterns are commonly used in cryptanalysis, particularly in frequency analysis attacks on substitution ciphers. Since E and T are among the most frequently occurring letters in English, the correct answer is (c) e, t ."
  },
  {
    "id": 6,
    "assignment": 1,
    "assignmentQ": 6,
    "question": "Which cipher is a well-known polyalphabetic cipher?",
    "options": [
      "Caesar Cipher",
      "Affine Cipher",
      "Vigen` ere Cipher",
      "Playfair Cipher"
    ],
    "correctAnswer": 2,
    "explanation": "A polyalphabetic cipher uses multiple substitution alphabets during encryption, making it more resistant to frequency analysis than monoalphabetic ciphers. The Vigen` ere Cipher is a classic polyalphabetic cipher that uses a keyword to determine different shifts for different letters of the plaintext. In contrast, Caesar and Affine ciphers are monoalphabetic substitution ciphers, while the Playfair cipher encrypts pairs of letters (digraphs). Therefore, the correct answer is (c) Vigen` ere Cipher."
  },
  {
    "id": 7,
    "assignment": 1,
    "assignmentQ": 7,
    "question": "The encryption function of the Affine Cipher is:",
    "options": [
      "E(x) = x + k (mod 26)",
      "E(x) = ax + b (mod 26)",
      "E(x) = ax (mod 26)",
      "E(x) = x2 + b (mod 26)"
    ],
    "correctAnswer": 1,
    "explanation": "The Affine Cipher is a substitution cipher that combines multiplication and addition modulo 26. If x represents the numerical value of a plaintext letter, the encryption function is E(x) = ax + b (mod 26) where a and b are keys, and gcd( a, 26) = 1. Therefore, the correct answer is (b) E(x) = ax + b (mod 26)."
  },
  {
    "id": 8,
    "assignment": 1,
    "assignmentQ": 8,
    "question": "Suppose the ciphertext for caeser cipher is “SDUWF”. Which of the following is the corresponding plaintext?",
    "options": [
      "parti",
      "block",
      "party",
      "none of these."
    ],
    "correctAnswer": 0,
    "explanation": "In a Caesar cipher, decryption is performed by shifting each ciphertext letter backward by the key value. Using the standard Caesar shift of 3: S → P, D → A, U → R, W → T, L → i. Thus, the ciphertext “SDUWB” decrypts to “PARTI”. Therefore, the correct answer is (a) parti."
  },
  {
    "id": 9,
    "assignment": 1,
    "assignmentQ": 9,
    "question": "In the Playfair cipher, the letters I and J are usually:",
    "options": [
      "Removed",
      "Treated as separate symbols",
      "Combined into one cell",
      "Replaced by X"
    ],
    "correctAnswer": 2,
    "explanation": "The Playfair cipher uses a 5 × 5 matrix to store the alphabet. Since the English alphabet contains 26 letters but the matrix has only 25 cells, the letters I and J are typically combined and placed in the same cell. Therefore, the correct answer is (c) Combined into one cell ."
  },
  {
    "id": 10,
    "assignment": 1,
    "assignmentQ": 10,
    "question": "A traditional cryptosystem consists of ............",
    "options": [
      "three tuple.",
      "four tuple.",
      "five tuple.",
      "six tuple."
    ],
    "correctAnswer": 2,
    "explanation": "A traditional cryptosystem is commonly defined as a five-tuple (P, C, K, E, D) where P is the plaintext space, C is the ciphertext space, K is the key space, E is the set of encryption functions, and D is the set of decryption functions. Therefore, a traditional cryptosystem consists of a five-tuple. Hence, the correct answer is (c)."
  },
  {
    "id": 11,
    "assignment": 2,
    "assignmentQ": 1,
    "question": "The key matrix for a Hill cipher scheme is K = \u0014R A E D \u0015 . Then what will be the ciphertext of the plaintext BOOK ?",
    "options": [
      "V QAD",
      "V QSE",
      "XT SE",
      "XT AD"
    ],
    "correctAnswer": 1,
    "explanation": "K = \u0014R A E D \u0015 = \u001417 0 4 3 \u0015 Plaintext component P1 = BO = \u0002 1 14 \u0003 , P2 = OK = \u0002 14 10 \u0003 Therefore, ciphertext components C1 = P1K = \u0002 1 14 \u0003 \u001417 0 4 3 \u0015 = \u0002 21 16 \u0003 = \u0002 V Q \u0003 C2 = P2K = \u0002 14 10 \u0003 \u001417 0 4 3 \u0015 = \u0002 18 4 \u0003 = \u0002 S E \u0003"
  },
  {
    "id": 12,
    "assignment": 2,
    "assignmentQ": 2,
    "question": "Which one of the following can be a key for the Hill cipher? A= \u00144 5 6 3 \u0015 , B= \u00144 5 6 7 \u0015 , C= \u00148 7 6 13 \u0015 , D= \u00149 7 4 13 \u0015",
    "options": [
      "A, B",
      "B, D",
      "C",
      "D"
    ],
    "correctAnswer": 3,
    "explanation": "A square matrix K can be used as a Hill cipher key iff gcd(det(K), 26) = 1. Here, det(A) = 8 mod 26, gcd(8, 26) = 2 ≠ 1. det(B) = 24 mod 26, gcd(24, 26) = 2 ≠ 1. det(C) = 10 mod 26, gcd(10, 26) = 2 ≠ 1. det(D) = 11 mod 26, gcd(11, 26) = 1."
  },
  {
    "id": 13,
    "assignment": 2,
    "assignmentQ": 3,
    "question": "In the key scheduling algorithm of substitution permutation network, thei-th round key Ki is the 16 consecutive bits of the key K = (k1, . . . , k32) starting from",
    "options": [
      "k3i−4",
      "k4i−3",
      "k5i−4",
      "k4i−5"
    ],
    "correctAnswer": 1,
    "explanation": "For a 32-bit key K = (k 1, . . . , k32) the 16-bit round key is generated using overlapping windows. For round i, the starting position is k4i−3."
  },
  {
    "id": 14,
    "assignment": 2,
    "assignmentQ": 4,
    "question": "Consider the following statements Statement 1: Substitution Permutation Network is a Stream cipher. Statement 2: The r-round block cipher uses r different round keys.",
    "options": [
      "Only Statement 1 is correct.",
      "Only Statement 2 is correct.",
      "Statement 1 and Statement 2 both are correct.",
      "Statement 1 and Statement 2 both are incorrect."
    ],
    "correctAnswer": 1,
    "explanation": "Statement 1 is incorrect as SPN is a block cipher structure. Statement 2 is correct as each round of an r-round block cipher typically uses its own round key Ki."
  },
  {
    "id": 15,
    "assignment": 2,
    "assignmentQ": 5,
    "question": "In DES encryption, the number of rounds and plaintext size (in bits) are respectively",
    "options": [
      "32,64",
      "8,128",
      "16,64",
      "8,64"
    ],
    "correctAnswer": 2,
    "explanation": "DES characteristics: Block size = 64 bits Number of rounds = 16"
  },
  {
    "id": 16,
    "assignment": 2,
    "assignmentQ": 6,
    "question": "What does left circular shift does in DES?",
    "options": [
      "1 or 2-bit circular left shift of an input key stream.",
      "1 or 2-bit circular left shift of an input plaintext stream.",
      "3 or 4-bit circular left shift of an input key stream.",
      "3 or 4-bit left shift of an input plaintext stream."
    ],
    "correctAnswer": 0,
    "explanation": "During DES key scheduling The 56-bit key is split into two halves. Each half undergoes a 1 or 2-bit circular left shift depending on the round."
  },
  {
    "id": 17,
    "assignment": 2,
    "assignmentQ": 7,
    "question": "Initial permutation (IP) function does the following",
    "options": [
      "changes the plaintext bits initially",
      "rearranges the plaintext bits",
      "rearranges the key stream bits",
      "XORs the 64-bit plaintext with the 64-bit key stream"
    ],
    "correctAnswer": 1,
    "explanation": "The Initial Permutation (IP) does not change bit values. It only permutes the plaintext bits. Therefore, it rearranges their positions."
  },
  {
    "id": 18,
    "assignment": 2,
    "assignmentQ": 8,
    "question": "In DES, the expand functionEoutputs ae-bit binary stream and there are totald S -boxes. Then (d, e) =",
    "options": [
      "(6, 48)",
      "(10 , 56)",
      "(8,32)",
      "(8,48)"
    ],
    "correctAnswer": 3,
    "explanation": "In DES, the expansion functionE takes input of 32 bits and outputs 48-bit binary stream by repeating some bits in specific positions. Therefore, e = 48. Also, DES contains 8 S-boxes. Therefore, d = 8."
  },
  {
    "id": 19,
    "assignment": 2,
    "assignmentQ": 9,
    "question": "How the expand function E works in DES?",
    "options": [
      "creates the additional bits by XORing input bits in specified combinations",
      "introduces random additional bits",
      "repeats a few specific bits of the input stream",
      "uses a pseudorandom generator to generate the additional bits"
    ],
    "correctAnswer": 2,
    "explanation": "The expansion function does not generate random bits. Instead, it expands 32 bits to 48 bits by repeating certain boundary bits according to a fixed table (discussed in class)."
  },
  {
    "id": 20,
    "assignment": 2,
    "assignmentQ": 10,
    "question": "Consider the following statements for DES. Statement 1: The round keys K1, K2, . . . , K16 may not be all different. Statement 1: The left circular shift is applied for round key generation in each round. Statement 3: In each of the 16-rounds the same permutation key P C2 is applied for round key generation.",
    "options": [
      "All the statements are true and Statement 2 and 3 are causes for Statement 1",
      "Statement 1 is false and Statement 2 and 3 are causes for that",
      "Statement 1 and 2 are true but Statement 3 is false",
      "All the Statements are true neither Statement 2 nor 3 is a cause for Statement 1"
    ],
    "correctAnswer": 1,
    "explanation": "Statement 1 is false because the round keys of 16 rounds in standard DES are all different. Statement 2 and 3 are true because for each round, a left circular shift is applied and the same permutation key P C2 is applied for round-key generation. Moreover, all the round keys are different because of the left circular shift before the application of the same permutation P C2."
  },
  {
    "id": 21,
    "assignment": 3,
    "assignmentQ": 1,
    "question": "Consider a brute-force attack on DES. Assuming an attacker can test 240 keys per second, the expected time required to recover the correct key is approximately:",
    "options": [
      "2 15 seconds",
      "2 16 seconds",
      "2 15 years",
      "2 16 years"
    ],
    "correctAnswer": 0,
    "explanation": "DES uses a 56-bit key, so the total number of possible keys is 256. In a brute-force attack, the correct key is equally likely to be anywhere in the key space. Therefore, on average, half of the keys must be tested: 256 2 = 255. Given that the attacker can test 2 40 keys per second, Time Required = 255 240 = 215 seconds. Hence, Expected attack time = 2 15 seconds"
  },
  {
    "id": 22,
    "assignment": 3,
    "assignmentQ": 2,
    "question": "Which of the following attacks exploits statistical properties of DES without performing an exhaustive key search?",
    "options": [
      "Brute-force attack",
      "Meet-in-the-middle attack",
      "Differential cryptanalysis",
      "Dictionary attack"
    ],
    "correctAnswer": 2,
    "explanation": "Differential cryptanalysis studies how differences in plaintext propagate through rounds and is a non-generic attack specifically exploiting DES structure."
  },
  {
    "id": 23,
    "assignment": 3,
    "assignmentQ": 3,
    "question": "Triple DES (3DES) using the EDE mode with keysK 1,K 2, and K3 performs:",
    "options": [
      "EK1(EK2(EK3(P )))",
      "DK1(EK2(DK3(P )))",
      "EK3(DK2(EK1(P )))",
      "DK3(DK2(DK1(P )))"
    ],
    "correctAnswer": 2,
    "explanation": "3DES encryption in EDE mode is C = EK3 (DK2 (EK1(P ))) ."
  },
  {
    "id": 24,
    "assignment": 3,
    "assignmentQ": 4,
    "question": "Which statement about DES S-boxes is correct?",
    "options": [
      "They are linear mappings overGF(2).",
      "Each S-box maps a 6-bit input to a 4-bit output.",
      "Each S-box maps a 6-bit input to a 4-bit output.",
      "They are identical to the AES S-box."
    ],
    "correctAnswer": 1,
    "explanation": "DES contains eight S-boxes, each taking 6 input bits and producing 4 output bits. These nonlinear substitutions provide the confusion necessary for DES."
  },
  {
    "id": 25,
    "assignment": 3,
    "assignmentQ": 5,
    "question": "AES operates on a state represented as:",
    "options": [
      "A 2× 8 byte matrix",
      "A 4 × 4 byte matrix",
      "An 8 × 8 bit matrix",
      "A 16 × 16 bit matrix"
    ],
    "correctAnswer": 1,
    "explanation": "AES processes a 128-bit block arranged as   s0,0 s0,1 s0,2 s0,3 s1,0 s1,1 s1,2 s1,3 s2,0 s2,1 s2,2 s2,3 s3,0 s3,1 s3,2 s3,3   ."
  },
  {
    "id": 26,
    "assignment": 3,
    "assignmentQ": 6,
    "question": "In AES, the SubBytes transformation is primarily designed to provide:",
    "options": [
      "Diffusion only",
      "Confusion only",
      "Key expansion",
      "Block padding"
    ],
    "correctAnswer": 1,
    "explanation": "SubBytes replaces each byte using a nonlinear S-box, introducing confusion and resisting linear and differential attacks."
  },
  {
    "id": 27,
    "assignment": 3,
    "assignmentQ": 7,
    "question": "The AES MixColumns operation can be viewed as multiplication of each column by which matrix overGF(2 8)?",
    "options": [
      "  1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1  ",
      "  2 3 1 1 1 2 3 1 1 1 2 3 3 1 1 2  ",
      "  1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1  ",
      "  2 3 1 1 1 2 3 1 1 1 3 2 3 1 1 2  "
    ],
    "correctAnswer": 1,
    "explanation": "In AES, the MixColumns transformation multiplies each state column by the fixed matrix   2 3 1 1 1 2 3 1 1 1 2 3 3 1 1 2   overGF (28). Therefore, option (b) is correct. (a) Incorrect. It is the identity matrix and leaves the column unchanged; hence no diffusion is achieved. (b) Correct. It is the standard AES MixColumns matrix. (c) Incorrect. All rows are identical, causing all output bytes to be computed similarly; this is not the AES transformation. (d) Incorrect. Although similar to the AES matrix, the The third row of the AES MixColumns matrix must be [1 1 2 3], but option (d) uses [1 1 3 2]. Hence, it does not match the AES specification.. Answer = (b)"
  },
  {
    "id": 28,
    "assignment": 3,
    "assignmentQ": 8,
    "question": "The inverse of the AES ShiftRows operation shifts:",
    "options": [
      "Rows cyclically to the left by the same offsets",
      "Columns cyclically upward",
      "Rows cyclically to the right by offsets equal to their row indices",
      "Columns cyclically downward"
    ],
    "correctAnswer": 2,
    "explanation": "Encryption shifts rows left by (0, 1, 2, 3) positions. Decryption shifts them right by the same respective offsets."
  },
  {
    "id": 29,
    "assignment": 3,
    "assignmentQ": 9,
    "question": "For AES-128, the total number of AddRoundKey operations performed during encryption is:",
    "options": [
      "9",
      "10",
      "11",
      "12"
    ],
    "correctAnswer": 2,
    "explanation": "AES-128 has: •One initial AddRoundKey, •Ten round-key additions during the 10 rounds. Hence, 1 + 10 = 11."
  },
  {
    "id": 30,
    "assignment": 3,
    "assignmentQ": 10,
    "question": "Consider anr-round AES. Which statement is correct?",
    "options": [
      "Every round contains MixColumns.",
      "The final round omits MixColumns.",
      "The first round omits SubBytes.",
      "The first round omits AddRoundKey."
    ],
    "correctAnswer": 1,
    "explanation": "The AES structure is: Initial AddRoundKey followed byr−1 regular rounds: SubBytes→ShiftRows→ MixColumns → AddRoundKey and a final round: SubBytes → ShiftRows → AddRoundKey. Therefore, the final round does not contain MixColumns."
  },
  {
    "id": 31,
    "assignment": 4,
    "assignmentQ": 1,
    "question": "The Autokey Cipher is an example of",
    "options": [
      "Asynchronous stream cipher",
      "Block cipher",
      "ECB mode",
      "Hash function"
    ],
    "correctAnswer": 0,
    "explanation": "The Autokey Cipher uses previous plaintext symbols to extend the key stream, making it a self-synchronizing (asynchronous) stream cipher."
  },
  {
    "id": 32,
    "assignment": 4,
    "assignmentQ": 2,
    "question": "Which stream cipher uses a keystream independent of the plaintext and ciphertext?",
    "options": [
      "Asynchronous stream cipher",
      "Synchronous stream cipher",
      "CBC mode",
      "ECB mode"
    ],
    "correctAnswer": 1,
    "explanation": "A synchronous stream cipher generates the keystream solely from the key and internal state."
  },
  {
    "id": 33,
    "assignment": 4,
    "assignmentQ": 3,
    "question": "The concept of perfect secrecy was introduced by",
    "options": [
      "Rivest",
      "Diffie",
      "Shannon",
      "Feistel"
    ],
    "correctAnswer": 2,
    "explanation": "Shannon formally defined perfect secrecy and proved that the One-Time Pad achieves it."
  },
  {
    "id": 34,
    "assignment": 4,
    "assignmentQ": 4,
    "question": "Which mode allows encryption and decryption to be performed in parallel?",
    "options": [
      "CBC",
      "ECB",
      "CTR",
      "Both (b) and (c)"
    ],
    "correctAnswer": 3,
    "explanation": "ECB and CTR modes process blocks independently, allowing parallel implementation."
  },
  {
    "id": 35,
    "assignment": 4,
    "assignmentQ": 5,
    "question": "Which mode of operation encrypts identical plaintext blocks into identical ciphertext blocks when the same key is used?",
    "options": [
      "CBC",
      "CFB",
      "ECB",
      "CTR"
    ],
    "correctAnswer": 2,
    "explanation": "In ECB (Electronic Codebook) mode, each plaintext block is encrypted independently: Ci = EK(Pi). Therefore, identical plaintext blocks produce identical ciphertext blocks, revealing patterns in the plaintext."
  },
  {
    "id": 36,
    "assignment": 4,
    "assignmentQ": 6,
    "question": "A One-Time Pad (OTP) provides perfect secrecy when",
    "options": [
      "The key is reused",
      "The key length equals the message length",
      "The key is public",
      "The key is shorter than the message"
    ],
    "correctAnswer": 1,
    "explanation": "Perfect secrecy is achieved when the key is truly random, used only once, and has the same length as the message."
  },
  {
    "id": 37,
    "assignment": 4,
    "assignmentQ": 7,
    "question": "Which mode transforms a block cipher into a synchronous stream cipher?",
    "options": [
      "CBC",
      "OFB",
      "ECB",
      "Playfair"
    ],
    "correctAnswer": 1,
    "explanation": "OFB generates a keystream independent of the plaintext and ciphertext, making it a synchronous stream cipher."
  },
  {
    "id": 38,
    "assignment": 4,
    "assignmentQ": 8,
    "question": "For a maximal-length 5-stage LFSR, the period is",
    "options": [
      "16",
      "31",
      "32",
      "64"
    ],
    "correctAnswer": 1,
    "explanation": "The maximum period of an n-stage LFSR is 2 n − 1. For n = 5, 25 − 1 = 31."
  },
  {
    "id": 39,
    "assignment": 4,
    "assignmentQ": 9,
    "question": "In OFB mode, a bit error in the ciphertext affects",
    "options": [
      "Only the corresponding plaintext bit",
      "Two plaintext blocks",
      "All subsequent plaintext blocks",
      "No plaintext blocks"
    ],
    "correctAnswer": 0,
    "explanation": "Since OFB generates an independent keystream, a bit error affects only the corresponding decrypted bit."
  },
  {
    "id": 40,
    "assignment": 4,
    "assignmentQ": 10,
    "question": "According to Shannon’s notion of perfect secrecy, which of the following conditions must hold for every plaintext M and ciphertext C?",
    "options": [
      "P (M | C) = P (C | M )",
      "P (M | C) = P (M )",
      "P (C | M ) = P (M )",
      "P (C) = 0"
    ],
    "correctAnswer": 1,
    "explanation": "Shannon defined a cryptosystem to have perfect secrecy if observing the ciphertext C provides no information about the plaintext M . Mathematically, this means P (M | C) = P (M ) for every plaintext M and ciphertext C. In other words, the probability distribution of the plaintext remains unchanged even after the ciphertext is observed. Therefore, the correct answer is (b)."
  },
  {
    "id": 41,
    "assignment": 5,
    "assignmentQ": 1,
    "question": "In an LFSR F , the output bits are calculated with the relation si+4 = si + si+2 + si+3 mod 2. Then which of the following cannot be a bit stream generated by F",
    "options": [
      "1010001",
      "0110100",
      "1100110",
      "1100101"
    ],
    "correctAnswer": 2,
    "explanation": "The rule is si+4 = si + si+2 + si+3 mod 2 For option (a), s0 = 1, s1 = 0, s2 = 1, s3 = 0 Therefore, s4 = s0 + s2 + s3 mod 2 = 1 + 1 + 0 mod 2 = 0 s5 = s1 + s3 + s4 mod 2 = 0 + 0 + 0 mod 2 = 0 s6 = s2 + s4 + s5 mod 2 = 1 + 0 + 0 mod 2 = 1. For option (b), s0 = 0, s1 = 1, s2 = 1, s3 = 0 Therefore, s4 = s0 + s2 + s3 mod 2 = 0 + 1 + 0 mod 2 = 1 s5 = s1 + s3 + s4 mod 2 = 1 + 0 + 1 mod 2 = 0 s6 = s2 + s4 + s5 mod 2 = 1 + 1 + 0 mod 2 = 0. For option (c), s0 = 1, s1 = 1, s2 = 0, s3 = 0 Therefore, s4 = s0 + s2 + s3 mod 2 = 1 + 0 + 0 mod 2 = 1 s5 = s1 + s3 + s4 mod 2 = 1 + 0 + 1 mod 2 = 0 s6 = s2 + s4 + s5 mod 2 = 0 + 1 + 0 mod 2 = 1. Therefore, 1100110 is not a correct sequence. The correct sequence should be 1100101. So option (c) cannot be a bit stream generated by F ."
  },
  {
    "id": 42,
    "assignment": 5,
    "assignmentQ": 2,
    "question": "LetC(D ) = 1 + c1D + . . .+ cLDL be the connection polynomial of an LFSR, then choose the correct option",
    "options": [
      "the LFSR is non-singular if cL ≠ 1",
      "If the initial content of stage i for 0 ≤ i ≤ L − 1 is si ∈ {0,1}, then the initial state is [s L−1, . . . , s0]",
      "ci = 0 means closed switch",
      "All of the above"
    ],
    "correctAnswer": 1,
    "explanation": "Option (a) is false as An LFSR is non-singular iff cL = 1 Option (b) is true. Option (c) is false as ci = 0 means open switch Therefore, correct answer is option (b)"
  },
  {
    "id": 43,
    "assignment": 5,
    "assignmentQ": 3,
    "question": "LetC(D ) = 1 + c1D + . . .+ cLDL be the connection polynomial of an LFSR, then sL =",
    "options": [
      "c1sL−1 + . . .+ cL−1s1 + CLs0 mod 2",
      "c1s1 + . . .+ cL−1sL−2 + CL−1sL−1 mod 2",
      "c1sL−1 + . . .+ cL−1s1 mod 2",
      "none of the above"
    ],
    "correctAnswer": 0,
    "explanation": "If C(D) = 1 + c1D + . . .+ cLDL be the connection polynomial of an LFSR, then sL = c1sL−1 + . . .+ cL−1s1 + CLs0 mod 2."
  },
  {
    "id": 44,
    "assignment": 5,
    "assignmentQ": 4,
    "question": "The maximum length of the sequence generated by an LFSR of length Lis",
    "options": [
      "2 L−1",
      "2 L −1",
      "2 L",
      "none of the above"
    ],
    "correctAnswer": 1,
    "explanation": "AnL-bit Linear Feedback Shift Register (LFSR) has L flip-flops, which means it can theoretically have a total of 2 L possible binary states. In a standard LFSR using XOR gates for feedback, if the register ever enters the all-zeros state (e.g., 0000), the feedback will always compute to 0. The register gets permanently stuck in that state and cannot generate a sequence. To prevent getting stuck, the all-zero state is excluded. Therefore, the maximum number of unique states the register can cycle through before repeating is: 2 L − 1."
  },
  {
    "id": 45,
    "assignment": 5,
    "assignmentQ": 5,
    "question": "Consider the following statements. Statement 1: One time pad is impractical. Statement 2: One time pad gives perfect secrecy.",
    "options": [
      "Statement 1 is true but Statement 2 is false",
      "Statement 2 is true but Statement 1 is false",
      "both Statement 1 and Statement 2 are true",
      "both Statement 1 and Statement 2 are false"
    ],
    "correctAnswer": 2,
    "explanation": "The One-Time Pad (OTP) is considered impractical for most modern applications due to several rigorous requirements: (1) The key must be at least as long as the message itself. (2) Securely sharing a massive key is difficult. (3) A key can never be reused, even partially. (4) The key must be generated using a truly random source, not a computer algorithm (pseudorandom), which is hardware-intensive. Also, it possesses perfect secrecy because a ciphertext provides no information about the plaintext."
  },
  {
    "id": 46,
    "assignment": 5,
    "assignmentQ": 6,
    "question": "According to Golomb’s randomness postulate (rule 2), in every period of a periodic pseudo-random stream which looks random, the following is true",
    "options": [
      "one-third the runs have length 1.",
      "18 the runs have length 3.",
      "18 the runs have length 2.",
      "12n the runs have lengthn + 1."
    ],
    "correctAnswer": 1,
    "explanation": "Golomb’s Randomness Postulate (Rule 2) It states: Half the runs have length 1. One-fourth have length 2. One-eighth have length 3. One-sixteenth have length 4."
  },
  {
    "id": 47,
    "assignment": 5,
    "assignmentQ": 7,
    "question": "LetC (τ ) is the auto-corelation function discussed in the Golomb’s postulates (Rule 3). then find the value ofc(1) for the sequence 011001000111101",
    "options": [
      "−1",
      "2",
      "1",
      "0"
    ],
    "correctAnswer": 0,
    "explanation": "The auto-corelation function discussed in the Golomb’s postulates (Rule 3) is c(τ ) = N −1X i=0 (−1)si⊕si+τ The given sequence has a period of N = 15. Original Sequence (s i) : 0 1 1 0 0 1 0 0 0 1 1 1 1 0 1 To find c(1), we cyclically shift the sequence to the right by τ = 1. Shifted Sequence (s i+1) : 1 0 1 1 0 0 1 0 0 0 1 1 1 1 0 Therefore, c(τ ) = −1"
  },
  {
    "id": 48,
    "assignment": 5,
    "assignmentQ": 8,
    "question": "Which one of the following can be a sequence of pseudorandom numbers generated by the linear congruence method (where Xn+1 = aXn + c mod m as discussed in the classes) if a = 3, m = 64",
    "options": [
      "(5, 17, 53, 33, 37, 49, 21, 1, 5, . . .)",
      "(5, 17, 53, 33, 37, 49, 12, 1, 5, . . .)",
      "(2 , 10, 34, 42, 9, 12, 2, . . .)",
      "(2, 10, 43, 42, 12, 9, 2, . . .)"
    ],
    "correctAnswer": 0,
    "explanation": "Testing Options (a) and (b)Both options start with X0 = 5 and X1 = 17. Find the increment c: X1 = (aX0 + c) (mod m) 17 = (3 × 5 + c) (mod 64) 17 = (15 + c) (mod 64) c = 17 − 15 = 2 Verify the rest of the sequence using c = 2 Calculate X6: X6 = (3×49+2) (mod 64) = (147+2) (mod 64) = 149 (mod 64) = 21 At this step, Option (a) has 21, while Option (b) has 12. Therefore, option (b) is incorrect. Other two options are also incorrect in the same way."
  },
  {
    "id": 49,
    "assignment": 5,
    "assignmentQ": 9,
    "question": "In the Diffie-Hellman key exchange protocol, suppose the underlying group isG=Z 17, and the generator is g = 7. If Alice chooses the private key a = 5 and shares ga with Bob and Bob chooses the private key b = 3 and shares gb with Alice, then their shared private key will be",
    "options": [
      "15",
      "5",
      "8",
      "3"
    ],
    "correctAnswer": 1,
    "explanation": "The shared private key is gab mod 17 = 7 5×3 mod 17 = 715 mod 17 = 5."
  },
  {
    "id": 50,
    "assignment": 5,
    "assignmentQ": 10,
    "question": "Which of the following is not a public key cryptosystem",
    "options": [
      "Elliptic curve cryptography",
      "RSA",
      "DES",
      "Markle Hellman knapsack"
    ],
    "correctAnswer": 2,
    "explanation": "DES is symmetric key cryptosystem."
  },
  {
    "id": 51,
    "assignment": 6,
    "assignmentQ": 1,
    "question": "In the Merkle–Hellman Knapsack Cryptosystem, the private key sequence must be:",
    "options": [
      "Arithmetic progression",
      "Geometric progression",
      "Superincreasing sequence",
      "Prime sequence"
    ],
    "correctAnswer": 2,
    "explanation": "A sequencew 1, w2, . . . , wn is superincreasing if wi > i−1X j=1 wj for everyi≥ 2. Merkle–Hellman uses a superincreasing sequence as the private key because the subset sum can then be solved efficiently using a greedy algorithm. (a) Incorrect. Arithmetic progression is not required. (b) Incorrect. Geometric progression is not required. (c) Correct. Private key must be superincreasing. (d) Incorrect. Elements need not all be prime."
  },
  {
    "id": 52,
    "assignment": 6,
    "assignmentQ": 2,
    "question": "The subset-sum problem asks whether, given integersa 1, a2, . . . , an and a targetS, there exists:",
    "options": [
      "A permutation of the integers equal to S",
      "A subset whose sum equals S",
      "A product equal to S",
      "A prime factorization of S"
    ],
    "correctAnswer": 1,
    "explanation": "The subset-sum problem determines whether nX i=1 xiai = S, x i ∈ {0,1} has a solution. (a) Incorrect. Order is irrelevant. (b) Correct. This is the definition. (c) Incorrect. Product is not considered. (d) Incorrect. Unrelated to subset-sum."
  },
  {
    "id": 53,
    "assignment": 6,
    "assignmentQ": 3,
    "question": "If gcd(252, 198) is computed using Euclid’s Algorithm, the result is:",
    "options": [
      "6",
      "9",
      "18",
      "36"
    ],
    "correctAnswer": 2,
    "explanation": "252 = 198(1) + 54 198 = 54(3) + 36 54 = 36(1) + 18 36 = 18(2) + 0 Hence, gcd(252,198) = 18. (a) Incorrect. (b) Incorrect. (c) Correct. (d) Incorrect."
  },
  {
    "id": 54,
    "assignment": 6,
    "assignmentQ": 4,
    "question": "According to B´ ezout’s Theorem, if gcd(a, b) =d, then:",
    "options": [
      "d = a + b",
      "d = ax + by for some integers x, y",
      "d = ab",
      "d = a − b"
    ],
    "correctAnswer": 1,
    "explanation": "B´ ezout’s Theorem states: gcd(a, b) =ax + by for some integers x and y. (a) Incorrect. (b) Correct. (c) Incorrect. (d) Incorrect."
  },
  {
    "id": 55,
    "assignment": 6,
    "assignmentQ": 5,
    "question": "The modular inverse of 7 modulo 26 is:",
    "options": [
      "11",
      "15",
      "19",
      "21"
    ],
    "correctAnswer": 1,
    "explanation": "We need 7x≡1 (mod 26). Testing options: 7×15 = 105 105≡1 (mod 26). Hence, 7−1 ≡15 (mod 26). (a) 7×11 ≡ 25 (mod 26) (b) Correct. (c) 7 × 19 ≡ 3 (mod 26) (d) 7 × 21 ≡ 17 (mod 26)"
  },
  {
    "id": 56,
    "assignment": 6,
    "assignmentQ": 6,
    "question": "The value of Euler’s Phi-function ϕ(35) is:",
    "options": [
      "20",
      "24",
      "28",
      "30"
    ],
    "correctAnswer": 1,
    "explanation": "35 = 5 × 7. Therefore, ϕ(35) = 35 \u0012 1 − 15 \u0013 \u00121− 17 \u0013 = 35· 45 · 67 = 24. (a) Incorrect. (b) Correct. (c) Incorrect. (d) Incorrect."
  },
  {
    "id": 57,
    "assignment": 6,
    "assignmentQ": 7,
    "question": "Find the value of 3100 (mod 7).",
    "options": [
      "1",
      "2",
      "4",
      "6"
    ],
    "correctAnswer": 2,
    "explanation": "Since 7 is prime and gcd(3, 7) = 1, by Fermat’s Little Theorem, 36 ≡1 (mod 7). Now, 100 = 6×16 + 4. Therefore, 3100 = (36)16 ·3 4 ≡1 16 ·3 4 (mod 7). Also, 32 = 9≡2 (mod 7), 34 = (32)2 ≡2 2 ≡4 (mod 7). Hence, 3100 ≡4 (mod 7). (a) Incorrect. 3 100 ̸≡1 (mod 7). (b) Incorrect. 3 100 ̸≡2 (mod 7). (c) Correct. (d) Incorrect. 3 100 ̸≡6 (mod 7)."
  },
  {
    "id": 58,
    "assignment": 6,
    "assignmentQ": 8,
    "question": "Letp= 11. The value of the Legendre Symbol \u0012 3 11 \u0013 is:",
    "options": [
      "1",
      "-1",
      "0",
      "11"
    ],
    "correctAnswer": 0,
    "explanation": "Squares modulo 11: 12 = 1,2 2 = 4,3 2 = 9,4 2 = 5,5 2 = 3. Since 52 ≡3 (mod 11), 3 is a quadratic residue modulo 11. Hence, \u0012 3 11 \u0013 = 1. (a) Correct. (b) Incorrect. (c) Occurs only when 11 | 3. (d) Invalid value."
  },
  {
    "id": 59,
    "assignment": 6,
    "assignmentQ": 9,
    "question": "Which of the following is a quadratic residue modulo 13?",
    "options": [
      "2",
      "5",
      "8",
      "10"
    ],
    "correctAnswer": 3,
    "explanation": "The quadratic residues modulo 13 are obtained by computing 12,2 2,3 2,4 2,5 2,6 2 (mod 13). 12 ≡1,2 2 ≡4,3 2 ≡9, 42 ≡16≡ 3, 52 ≡ 25 ≡ 12, 62 ≡ 36 ≡ 10 (mod 13). Hence the set of quadratic residues modulo 13 is {1, 3, 4, 9, 10, 12}. Checking the options: (a) 2 /∈ {1,3, 4, 9, 10, 12}. Incorrect. (b) 5 /∈ {1,3, 4, 9, 10, 12}. Incorrect. (c) 8 /∈ {1,3, 4, 9, 10, 12}. Incorrect. (d) 10 is a quadratic residue since 6 2 ≡ 10 (mod 13). Correct."
  },
  {
    "id": 60,
    "assignment": 6,
    "assignmentQ": 10,
    "question": "Using one iteration of the Solovay–Strassen primality test with base a= 2, determine whether n = 15 passes the test.",
    "options": [
      "Passes the test",
      "Fails the test (Composite)",
      "Cannot be determined",
      "15 is prime"
    ],
    "correctAnswer": 1,
    "explanation": "For the Solovay–Strassen test, we compare a n−1 2 (modn) with the Jacobi symbol \u0010 a n \u0011 . Fora= 2 andn= 15, 2 15−1 2 = 27 = 128≡8 (mod 15) . Now, \u0012 2 15 \u0013 = \u0012 2 3 \u0013 \u00122 5 \u0013 . Using \u0012 2 p \u0013 = (−1) p2−1 8 , we obtain \u0012 2 3 \u0013 =−1, \u0012 2 5 \u0013 =−1. Therefore, \u0012 2 15 \u0013 = (−1)(−1) = 1. Since 8̸≡1 (mod 15), the congruence required by the Solovay–Strassen test fails. (a) Incorrect. The congruence does not hold. (b) Correct. 15 is detected as composite. (c) Incorrect. The test gives a definite failure. (d) Incorrect. 15 = 3×5 is composite."
  },
  {
    "id": 61,
    "assignment": 7,
    "assignmentQ": 1,
    "question": "For RSA, if p = 11 and q = 13, then ϕ(n) equals:",
    "options": [
      "120",
      "143",
      "130",
      "110"
    ],
    "correctAnswer": 0,
    "explanation": "In RSA, if n = pq, where p and q are distinct prime numbers, then Euler’s totient function is ϕ(n) = (p − 1)(q − 1). Substituting p = 11 and q = 13, ϕ(n) = (11−1)(13−1) = 10×12 = 120. Therefore, ϕ(n) = 120. Hence, the correct answer is (a) 120."
  },
  {
    "id": 62,
    "assignment": 7,
    "assignmentQ": 2,
    "question": "For the curve y2 = x3 + ax + b, a necessary condition is:",
    "options": [
      "a + b = 0",
      "4 a3 + 27b2 ≠ 0",
      "a = b",
      "ab = 1"
    ],
    "correctAnswer": 1,
    "explanation": "An elliptic curve over a field is defined by the equation y2 = x3 + ax + b provided that the curve is non-singular. The nonsingularity condition requires that the discriminant of the curve be nonzero, i.e., 4a 3 + 27b2 ≠ 0. If 4a 3 + 27b2 = 0, the curve contains singular points (such as cusps or self-intersections) and is not a valid elliptic curve. Therefore, the correct answer is (b) 4a3 + 27b2 ≠ 0."
  },
  {
    "id": 63,
    "assignment": 7,
    "assignmentQ": 3,
    "question": "Which cryptosystem is based on integer factorization?",
    "options": [
      "RSA",
      "ElGamal",
      "ECC-ElGamal",
      "Diffie–Hellman"
    ],
    "correctAnswer": 0,
    "explanation": "The security of the RSA cryptosystem relies on the difficulty of factoring a large composite number n = pq, where p and q are large prime numbers. In contrast, ElGamal, ECC-ElGamal, and Diffie–Hellman are based on the hardness of the Discrete Logarithm Problem (DLP) or the Elliptic Curve Discrete Logarithm Problem (ECDLP). Therefore, the correct answer is (a) RSA."
  },
  {
    "id": 64,
    "assignment": 7,
    "assignmentQ": 4,
    "question": "If the same random value k is reused in ElGamal encryption, security may be:",
    "options": [
      "Improved",
      "Unaffected",
      "Compromised",
      "Perfect"
    ],
    "correctAnswer": 2,
    "explanation": "In the ElGamal cryptosystem, a fresh random valuek is chosen for each encryption. This randomness ensures that encrypting the same message multiple times produces different ciphertexts. If the same value of k is reused, relationships between ciphertexts may be revealed, allowing an attacker to obtain information about the plaintexts or even recover secret data. Therefore, reusing k weakens the security of ElGamal encryption and the security may be compromised. Hence, the correct answer is (c)."
  },
  {
    "id": 65,
    "assignment": 7,
    "assignmentQ": 5,
    "question": "The set of points on an elliptic curve together with the point at infinity forms:",
    "options": [
      "A ring",
      "A field",
      "A group",
      "A vector space"
    ],
    "correctAnswer": 2,
    "explanation": "The points on an elliptic curve, together with a special point called the point at infinity (O), satisfy the group axioms under the elliptic curve point addition operation. Therefore, the set of all points on an elliptic curve forms an abelian group. Hence, the correct answer is (c) A group."
  },
  {
    "id": 66,
    "assignment": 7,
    "assignmentQ": 6,
    "question": "Which theorem is fundamental to proving the correctness of RSA?",
    "options": [
      "Bayes’ Theorem",
      "Euler’s Theorem",
      "Pythagoras Theorem",
      "Wilson’s Theorem"
    ],
    "correctAnswer": 1,
    "explanation": "The correctness of RSA is based on Euler’s Theorem, which states that for any integer a such that gcd(a, n) = 1, aϕ(n) ≡ 1 (mod n), where ϕ(n) is Euler’s totient function. In RSA, the public and private exponents e and d are chosen such that ed ≡ 1 (mod ϕ(n)). Using Euler’s Theorem, it follows that (M e)d ≡ M (mod n) which ensures that decryption correctly recovers the original plaintext. Therefore, the correct answer is (b) Euler’s Theorem."
  },
  {
    "id": 67,
    "assignment": 7,
    "assignmentQ": 7,
    "question": "Consider the elliptic curve E : y2 = x3 + 2x + 3 over Z5. Which of the following points lies on the curve?",
    "options": [
      "(1 , 1)",
      "(1, 2)",
      "(2, 1)",
      "(3, 3)"
    ],
    "correctAnswer": 0,
    "explanation": "For (1, 1), 1 2 ≡ 1 (mod 5) and 1 3 + 2(1) + 3 = 6 ≡ 1 (mod 5). Hence, (1, 1) lies on the curve."
  },
  {
    "id": 68,
    "assignment": 7,
    "assignmentQ": 8,
    "question": "In ECC key generation, the public key corresponding to a private key d is",
    "options": [
      "d + P",
      "d − P",
      "Q = dP",
      "Q = P d"
    ],
    "correctAnswer": 2,
    "explanation": "Given a base point P and private key d, the public key is computed as Q = dP ."
  },
  {
    "id": 69,
    "assignment": 7,
    "assignmentQ": 9,
    "question": "Which of the following public-key cryptosystems is probabilistic, meaning that encrypting the same plaintext multiple times can produce different ciphertexts?",
    "options": [
      "RSA (without padding)",
      "ElGamal Encryption",
      "Both RSA and ElGamal",
      "Neither RSA nor ElGamal"
    ],
    "correctAnswer": 1,
    "explanation": "In standard RSA encryption, a plaintext M is encrypted as C = M e (mod n). For a fixed public key and plaintext, the ciphertext is always the same. Hence, RSA is deterministic. In ElGamal encryption, a fresh random value k is chosen for every encryption. The ciphertext is computed using this random value, so encrypting the same plaintext multiple times generally produces different ciphertexts. Therefore, ElGamal is a probabilistic encryption scheme, whereas standard RSA is deterministic. Hence, the correct answer is (b) ElGamal Encryption."
  },
  {
    "id": 70,
    "assignment": 7,
    "assignmentQ": 10,
    "question": "Consider the elliptic curve E : y2 ≡ x3+2x+2 (mod 17). Let P = (5, 1) and Q = (6, 3) be two distinct points on E. What is the value of P +Q?",
    "options": [
      "(10 , 6)",
      "(10 , 11)",
      "(7, 6)",
      "(7, 11)"
    ],
    "correctAnswer": 0,
    "explanation": "Since P ≠ Q, the slope is λ ≡ y2 − y1 x2 − x1 = 3 − 16 − 5 = 2 (mod 17). The coordinates of R = P + Q = (x3, y3) are x3 ≡ λ2 − x1 − x2 ≡ 22 − 5 − 6 ≡ 4 − 11 ≡ 10 (mod 17) . y3 ≡ λ(x1 − x3) − y1 ≡ 2(5 − 10) − 1 ≡ −11 ≡ 6 (mod 17). Therefore, P + Q = (10, 6)."
  },
  {
    "id": 71,
    "assignment": 8,
    "assignmentQ": 1,
    "question": "Consider the prime p = 23 and a = 13. Given that p ≡ 3 (mod 4) and 13 is a quadratic residue modulo 23, which pair of integers represents the two modular square roots of 13 (mod 23)?",
    "options": [
      "5 and 18",
      "6 and 17",
      "8 and 15",
      "9 and 14"
    ],
    "correctAnswer": 1,
    "explanation": "Applying the deterministic formula y = ±a(p+1)/4 mod p for p = 3 mod 4 gives 13 6 = 6 mod 23, yielding square roots 6 and 23 − 6 = 17."
  },
  {
    "id": 72,
    "assignment": 8,
    "assignmentQ": 2,
    "question": "In a Rabin Cryptosystem with private prime factors p = 7 and q = 11 (giving public key n = 77), a recipient receives the ciphertext C = 16. Which set represents the complete four possible plaintexts recovered via decryption?",
    "options": [
      "{4, 18, 59, 73}",
      "{9, 23, 54, 68}",
      "{2, 19, 58, 75}",
      "{4, 16, 61, 73}"
    ],
    "correctAnswer": 0,
    "explanation": "Solving mp = ±16(7+1)/4 = ±4 mod 7 (yielding 3, 4) and mq = ±16(11+1)/4 = ±4 mod 11 (yielding 4, 7), and then combining all four pairs using the Chinese Remainder Theorem produces 4, 18, 59, and 73."
  },
  {
    "id": 73,
    "assignment": 8,
    "assignmentQ": 3,
    "question": "In a symmetric-key message authentication scheme where Alice and Bob share keyK, what primary security guarantee is provided when Bob successfully verifies an incoming message m using K against thirdparty attacker Oscar?",
    "options": [
      "The message m is encrypted such that Bob cannot read its contents without Alice’s public key.",
      "The message m can be proven to a neutral third-party judge as originating strictly from Alice.",
      "The message m originated from someone holding key K and was not modified in transit.",
      "The message m is guaranteed to be immune to replay attacks without additional timestamps."
    ],
    "correctAnswer": 2,
    "explanation": "Because K is a secret shared exclusively between Alice and Bob, a valid ciphertext or authentication tag proves that the message was generated by a holder of K and has not been altered by an external adversary."
  },
  {
    "id": 74,
    "assignment": 8,
    "assignmentQ": 4,
    "question": "Consider a scheme where Alice sends m||y, where y = EK(m). Bob decrypts y to obtain m′ and performs the check m′ = m or not. What fundamental security limitation exists in relying solely on this check when EK is a malleable encryption scheme?",
    "options": [
      "Symmetric encryption schemes strictly prohibit sending plaintexts alongside ciphertexts.",
      "The equality check m′ = m requires an asymmetric public key infrastructure to compute.",
      "Bob must publicly disclose the shared key K to execute the decryption check.",
      "An attacker can manipulate both m and y such that the modified ciphertext decrypts to the modified message."
    ],
    "correctAnswer": 3,
    "explanation": "If the underlying cipher is malleable, Oscar can systematically alter y into y′ such that DK(y′) = m′, causing Bob’s m′ = m check to pass on a forged message."
  },
  {
    "id": 75,
    "assignment": 8,
    "assignmentQ": 5,
    "question": "Alice computes an authentication tag y = EK(H(m)) using a cryptographic hash function H where |H(m)| ≪ |m|, and transmitsm ∥ y to Bob. What is the main computational advantage of this design compared to sending m ∥ EK(m)?",
    "options": [
      "It provides non-repudiation so Alice cannot later deny generating H(m).",
      "It guarantees that the transmission channel becomes immune to packet drop attacks.",
      "It eliminates the requirement for Bob to store the shared symmetric key K.",
      "It reduces the computational overhead of symmetric encryption to a fixed-size block regardless of message length."
    ],
    "correctAnswer": 3,
    "explanation": "Hashing compresses an arbitrarily large message m into a small, fixed-size digest H(m), requiring symmetric encryption to process only a single short block rather than the entire large message."
  },
  {
    "id": 76,
    "assignment": 8,
    "assignmentQ": 6,
    "question": "Suppose a message authentication scheme generates y = EK(H(m)). If an adversary Oscar finds two distinct messages m1 ≠ m2 such that H(m1) = H(m2), how can Oscar execute a successful forgery attack against Bob?",
    "options": [
      "Oscar uses m2 to extract Alice’s private signing key sk from the hash digest H(m2).",
      "Oscar derives the shared secret key K directly by computing E−1(H(m1) ⊕ H(m2)).",
      "Oscar intercepts m1||y sent by Alice and replaces m1 with m2 while keeping y unchanged.",
      "Oscar causes Bob’s verification function to crash by inducing a buffer overflow in H."
    ],
    "correctAnswer": 2,
    "explanation": "Since H(m1) = H(m2), the tag y = EK(H(m1)) is identical to EK(H(m2)). Bob will evaluate H(m2), decrypt y to get H(m1), observe that H(m1) = H(m2), and accept m2 as authentic."
  },
  {
    "id": 77,
    "assignment": 8,
    "assignmentQ": 7,
    "question": "Why is a symmetric Message Authentication Code (MAC) inherently incapable of protecting Bob against a fraudulent claim if Alice denies sending a messagem?",
    "options": [
      "Oscar distributes forged symmetric keys to receivers during the initial key exchange.",
      "Bob possesses the exact same secret key K that Alice uses to generate authentication tags.",
      "Symmetric authentication tags do not contain any mathematical relation to the underlying message.",
      "Bob can invert any cryptographic hash function H using Alice’s public key."
    ],
    "correctAnswer": 1,
    "explanation": "Because K is symmetric and held by both parties, Bob has the exact mathematical capability to construct any valid tagM ACK(m′) himself. Hence, he cannot prove to a judge that the tag came from Alice."
  },
  {
    "id": 78,
    "assignment": 8,
    "assignmentQ": 8,
    "question": "Suppose Alice sends an authenticated order m to Bob using y = M ACK(m). Later, Alice claims in court that she never sent m and that Bob fabricated the message to claim damages. Why is a neutral judge unable to resolve this dispute?",
    "options": [
      "Hash function digests cannot be processed by asymmetric verification algorithms.",
      "MAC tags change dynamically every time the judge attempts to verify them.",
      "The secret key K is known to the external judge before the dispute arises.",
      "Both Alice and Bob have the capability to generate valid MAC tags using key K."
    ],
    "correctAnswer": 3,
    "explanation": "Symmetric key equivalence means any valid tag y under key K could have been produced either by Alice or by Bob. A third party cannot determine which of the two key-holders created it."
  },
  {
    "id": 79,
    "assignment": 8,
    "assignmentQ": 9,
    "question": "In a public-key digital signature scheme (KeyGen,Sign,Verify), how does Bob verify that signature y on message m was genuinely produced by Alice?",
    "options": [
      "Bob evaluates V erif ypkA(y, m) using Alice’s public key pkA and checks for 1.",
      "Bob transmits y and m to a central authority to re-encrypt the signature under pkB.",
      "Bob computes V erif yskB (y, m) using his own private key skB and checks for 1.",
      "Bob decrypts y using a shared symmetric key K to recover the hash digest H(m)."
    ],
    "correctAnswer": 0,
    "explanation": "Alice signs using her secret key skA, producing y = Sign skA(m). Anyone with access to Alice’s public key pkA can run V erif ypkA(y, m) to check validity."
  },
  {
    "id": 80,
    "assignment": 8,
    "assignmentQ": 10,
    "question": "Alice wants to transmit messagemto Bob such that Bob obtains non-repudiable proof of origin (authentication) AND eavesdropper Oscar learns nothing about m (confidentiality). Using Alice’s key pair (skA, pkA) and Bob’s key pair (sk B, pkB), which operational sequence correctly achieves both properties?",
    "options": [
      "Alice encrypts c = EncskB (m), computes y = Sign pkA(c), and Bob decrypts c with pkB then verifies y with skA.",
      "Alice computes signature y = Sign skA(m), encrypts c = EncpkB (m||y), and Bob decrypts c with skB then verifies y with pkA.",
      "Alice computes y = Sign pkB (m), encrypts c = EncskA(m||y), and Bob decrypts c with pkA then verifies y with skB.",
      "Alice encrypts c = EncpkA(m), computes y = Sign skB (c), and Bob decrypts c with skA then verifies y with pkB."
    ],
    "correctAnswer": 1,
    "explanation": "By signing m with her private key skA, Alice provides non-repudiation. By encrypting the combined message and signature (m||y) with Bob’s public key pkB, only Bob can decrypt c using skB, ensuring confidentiality."
  },
  {
    "id": 81,
    "assignment": 9,
    "assignmentQ": 1,
    "question": "In the RSA Signature Scheme, ifeis public exponent, d is private exponent and H is a hash function, a signature on message m is generated as",
    "options": [
      "s = me (mod n)",
      "s = H(m)d (mod n)",
      "s = H(m)e (mod n)",
      "s = dm (mod n)"
    ],
    "correctAnswer": 1,
    "explanation": "RSA signatures are produced using the private exponent. s = H(m)d (mod n). Verification checks se ≡ H(m) (mod n). (a) Incorrect. Uses public exponent. (b) Correct. (c) Incorrect. Anyone knowing e could generate signatures. (d) Incorrect."
  },
  {
    "id": 82,
    "assignment": 9,
    "assignmentQ": 2,
    "question": "In the ElGamal Signature Scheme, if the ephemeral key k satisfies gcd(k, p− 1) ≠ 1, then",
    "options": [
      "Signature size doubles",
      "Signature verification becomes faster",
      "k−1 (mod p − 1) may not exist",
      "The signature is always secure"
    ],
    "correctAnswer": 2,
    "explanation": "The signature requires s ≡ k−1(H(m) − xr) (mod p − 1). Therefore, k−1 (mod p − 1) exists only when gcd(k, p− 1) = 1. (a) Incorrect. (b) Incorrect. (c) Correct. (d) Incorrect."
  },
  {
    "id": 83,
    "assignment": 9,
    "assignmentQ": 3,
    "question": "A function f is called a one-way function if",
    "options": [
      "It is easy to compute and easy to invert.",
      "It is hard to compute but easy to invert.",
      "It is easy to compute, but computationally infeasible to invert.",
      "It cannot be computed in polynomial time."
    ],
    "correctAnswer": 2,
    "explanation": "A one-way function is computationally easy to evaluate but computationally infeasible to invert. Formally, given y = f (x), computing x from y should be infeasible for probabilistic polynomial-time algorithms. (a) Incorrect. (b) Incorrect. (c) Correct. (d) Incorrect."
  },
  {
    "id": 84,
    "assignment": 9,
    "assignmentQ": 4,
    "question": "Which security notion guarantees that an adversary cannot distinguish encryptions of two chosen plaintexts?",
    "options": [
      "EUF-CMA",
      "IND-CPA",
      "sEUF-CMA",
      "Collision Resistance"
    ],
    "correctAnswer": 1,
    "explanation": "IND-CPA requires that for chosen messages m0, m1, an adversary cannot distinguish Enc(m0) from Enc(m1) with probability significantly better than random guessing. (a) Signature security. (b) Correct. (c) Strong signature security. (d) Hash property."
  },
  {
    "id": 85,
    "assignment": 9,
    "assignmentQ": 5,
    "question": "In a table lookup attack against a symmetric cipher, the attacker primarily trades",
    "options": [
      "computation for communication",
      "memory for computation",
      "memory for storage",
      "randomness for security"
    ],
    "correctAnswer": 1,
    "explanation": "A table lookup attack performs expensive precomputation and stores the results. During the online attack, computation is reduced at the cost of increased memory usage, illustrating a memory–time trade-off. (a) Incorrect. (b) Correct. (c) Incorrect. (d) Incorrect."
  },
  {
    "id": 86,
    "assignment": 9,
    "assignmentQ": 6,
    "question": "Textbook RSA encryption c=m e (modn) is NOT IND-CPA secure mainly because it is",
    "options": [
      "randomized",
      "deterministic",
      "based on prime numbers",
      "inefficient"
    ],
    "correctAnswer": 1,
    "explanation": "The encryption algorithm is deterministic. Thus identical plaintexts always produce identical ciphertexts. This allows an adversary to distinguish encryptions. (a) Incorrect. (b) Correct. (c) Incorrect. (d) Incorrect."
  },
  {
    "id": 87,
    "assignment": 9,
    "assignmentQ": 7,
    "question": "Strong Existential Unforgeability under Chosen Message Attack (sEUFCMA) differs from EUF-CMA because it additionally prevents",
    "options": [
      "key recovery",
      "creating a new valid signature on an already signed message",
      "hash collisions",
      "chosen ciphertext attacks"
    ],
    "correctAnswer": 1,
    "explanation": "EUF-CMA prevents forging signatures on new messages. sEUF-CMA additionally prevents generating (m, σ′) where m has already been signed but σ′ ≠ σ. (a) Incorrect. (b) Correct. (c) Incorrect. (d) Incorrect."
  },
  {
    "id": 88,
    "assignment": 9,
    "assignmentQ": 8,
    "question": "For an ideal n-bit cryptographic hash function, the expected computational complexity of finding a collision using the birthday attack is",
    "options": [
      "O(2n)",
      "O(2n/2)",
      "O(n)",
      "O(log n)"
    ],
    "correctAnswer": 1,
    "explanation": "The birthday paradox shows that after approximately 2n/2 random hash evaluations, a collision is expected. Hence collision resistance requires approximately 2n/2 operations. (a) Preimage complexity. (b) Correct. (c) Incorrect. (d) Incorrect."
  },
  {
    "id": 89,
    "assignment": 9,
    "assignmentQ": 9,
    "question": "Hellman’s Time-Memory Trade-Off (TMTO) attack primarily reduces exhaustive search by",
    "options": [
      "replacing encryption with signatures",
      "precomputing chains that trade storage for online computation",
      "exploiting chosen ciphertexts",
      "factoring the encryption key"
    ],
    "correctAnswer": 1,
    "explanation": "Hellman’s method performs expensive precomputation and stores endpoints of chains. During the online attack, memory and computation are balanced to reduce search time. (a) Incorrect. (b) Correct. (c) Incorrect. (d) Incorrect."
  },
  {
    "id": 90,
    "assignment": 9,
    "assignmentQ": 10,
    "question": "Rainbow tables improve upon Hellman’s TMTO by",
    "options": [
      "storing every possible password",
      "using different reduction functions in successive columns",
      "using multiple encryption keys",
      "avoiding hash computations completely"
    ],
    "correctAnswer": 1,
    "explanation": "Rainbow tables use different reduction functions in every column to reduce chain merging, giving better success rates than Hellman’s original TMTO. (a) Incorrect. (b) Correct. (c) Incorrect. (d) Incorrect."
  },
  {
    "id": 91,
    "assignment": 10,
    "assignmentQ": 1,
    "question": "Differential cryptanalysis primarily studies the relationship between:",
    "options": [
      "Plaintext and ciphertext lengths.",
      "Differences in plaintext pairs and corresponding ciphertext differences.",
      "Encryption and decryption keys.",
      "Hash values and message lengths."
    ],
    "correctAnswer": 1,
    "explanation": "Differential cryptanalysis analyzes how a particular difference between two plaintexts propagates through the cipher and affects the corresponding ciphertext difference. This information can be used to recover secret-key information. (a) Incorrect. (b) Correct. (c) Incorrect. (d) Incorrect."
  },
  {
    "id": 92,
    "assignment": 10,
    "assignmentQ": 2,
    "question": "In an SPN (Substitution-Permutation Network) cipher, which component mainly provides non-linearity?",
    "options": [
      "Permutation layer",
      "XOR operation",
      "S-box",
      "Key schedule only"
    ],
    "correctAnswer": 2,
    "explanation": "TheS-box (Substitution box) provides the nonlinear transformation in an SPN cipher. Non-linearity is essential for resisting attacks such as differential and linear cryptanalysis. (a) Incorrect. (b) Incorrect. (c) Correct. (d) Incorrect."
  },
  {
    "id": 93,
    "assignment": 10,
    "assignmentQ": 3,
    "question": "Linear cryptanalysis attempts to find:",
    "options": [
      "A linear approximation relating plaintext, ciphertext, and key bits.",
      "The exact inverse of an S-box.",
      "The public key from the private key.",
      "A collision in a hash function."
    ],
    "correctAnswer": 0,
    "explanation": "Linear cryptanalysis uses approximate linear relationships involving plaintext bits, ciphertext bits, and key bits. By analyzing many plaintext-ciphertext pairs, an attacker may obtain information about the secret key. (a) Correct. (b) Incorrect. (c) Incorrect. (d) Incorrect."
  },
  {
    "id": 94,
    "assignment": 10,
    "assignmentQ": 4,
    "question": "The Piling-Up Lemma is mainly associated with:",
    "options": [
      "Secret sharing",
      "Linear cryptanalysis",
      "Ring signatures",
      "Identity-based encryption"
    ],
    "correctAnswer": 1,
    "explanation": "ThePiling-Up Lemmais used in linear cryptanalysis to calculate the probability that several independent linear approximations hold simultaneously. (a) Incorrect. (b) Correct. (c) Incorrect. (d) Incorrect."
  },
  {
    "id": 95,
    "assignment": 10,
    "assignmentQ": 5,
    "question": "In a (t, n)-threshold secret sharing scheme, the secret can be reconstructed using:",
    "options": [
      "Any 1 participant",
      "Exactlyt− 1 participants",
      "At least t participants",
      "All n + 1 participants"
    ],
    "correctAnswer": 2,
    "explanation": "In a (t, n)-threshold scheme, anyt or more participants can reconstruct the secret, whereas fewer than t participants should not be able to recover it. (a) Incorrect. (b) Incorrect. (c) Correct. (d) Incorrect."
  },
  {
    "id": 96,
    "assignment": 10,
    "assignmentQ": 6,
    "question": "In Shamir’s Secret Sharing Scheme, the secret is typically embedded as which coefficient of the polynomial?",
    "options": [
      "The highest-degree coefficient.",
      "The constant coefficient.",
      "The coefficient ofx 2 only.",
      "The last participant’s share."
    ],
    "correctAnswer": 1,
    "explanation": "In Shamir’s Secret Sharing Scheme, a polynomial is constructed as f(x) = a0 + a1x + a2x2 + · · ·+ at−1xt−1, where the secret is placed in the constant coefficient a0. Therefore, f (0) = a0 = Secret. Each participant receives a point (xi, f(xi)). When the threshold number of shares is available, polynomial interpolation can be used to recover the secret. (a) Incorrect. (b) Correct. (c) Incorrect. (d) Incorrect."
  },
  {
    "id": 97,
    "assignment": 10,
    "assignmentQ": 7,
    "question": "The main purpose of a threshold signature scheme is to:",
    "options": [
      "Allow anyone to generate a signature.",
      "Require cooperation of a minimum number of authorized signers.",
      "Eliminate the need for a private key.",
      "Encrypt a message using multiple public keys."
    ],
    "correctAnswer": 1,
    "explanation": "A threshold signature requires at least a specified numbertof authorized participants to cooperate to generate a valid signature. For example, in a (t, n)-threshold signature scheme, at leasttout ofnsigners are required. (a) Incorrect. (b) Correct. (c) Incorrect. (d) Incorrect."
  },
  {
    "id": 98,
    "assignment": 10,
    "assignmentQ": 8,
    "question": "In Identity-Based Encryption (IBE), which of the following can serve as a user’s public key?",
    "options": [
      "Only a randomly generated number.",
      "The user’s identity, such as an email address.",
      "The user’s password.",
      "The private key of the trusted authority."
    ],
    "correctAnswer": 1,
    "explanation": "In IBE, a user’s identity string can serve as the public encryption identifier. For example, an email address such asalice@example.com can be used as Alice’s public identity. A trusted authority called the Private Key Generator (PKG)generates the corresponding private key. (a) Incorrect. (b) Correct. (c) Incorrect. (d) Incorrect."
  },
  {
    "id": 99,
    "assignment": 10,
    "assignmentQ": 9,
    "question": "The primary goal of broadcast encryption is to:",
    "options": [
      "Send encrypted data to a selected group of users.",
      "Generate a hash value for every user.",
      "Replace all digital signatures.",
      "Allow only one user to receive every message."
    ],
    "correctAnswer": 0,
    "explanation": "Broadcast encryption enables a sender to encrypt a message so that only a selected set of authorized users can decrypt it, even though the ciphertext may be publicly broadcast. (a) Correct. (b) Incorrect. (c) Incorrect. (d) Incorrect."
  },
  {
    "id": 100,
    "assignment": 10,
    "assignmentQ": 10,
    "question": "Which property is a key feature of a ring signature?",
    "options": [
      "It reveals the exact identity of the signer.",
      "It hides the message from everyone.",
      "It provides signer ambiguity within a group of possible signers.",
      "It requires all members of the ring to sign."
    ],
    "correctAnswer": 2,
    "explanation": "A ring signature allows one member of a group to sign a message while keeping the actual signer anonymous among the ring members. Anyone can verify that the signature was generated by some member of the ring, but cannot determine which particular member generated it. (a) Incorrect. (b) Incorrect. (c) Correct. (d) Incorrect."
  },
  {
    "id": 101,
    "assignment": 11,
    "assignmentQ": 1,
    "question": "In Multi-Party Computation (MPC), which property ensures that an adversary cannot influence or select an honest party’s secret input based on their own input choice?",
    "options": [
      "Privacy",
      "Correctness",
      "Input Independence",
      "Fairness"
    ],
    "correctAnswer": 2,
    "explanation": "Input independence specifies that each participant must choose their private inputs independently without learning or being influenced by other parties’ inputs."
  },
  {
    "id": 102,
    "assignment": 11,
    "assignmentQ": 2,
    "question": "Which statement accurately distinguishes between Honest Majority MPC and Dishonest Majority MPC protocols?",
    "options": [
      "Dishonest majority protocols are generally more efficient than honest majority protocols.",
      "Standard secret-sharing techniques alone are sufficient to ensure security in dishonest majority MPC.",
      "Honest majority MPC requires more than half of the participants to behave honestly.",
      "Yao’s Garbled Circuits can only be applied in honest majority settings."
    ],
    "correctAnswer": 2,
    "explanation": "In an honest majority setting, security holds as long as strictly more than half (>50%) of the participants act honestly. Dishonest majority protocols require stronger techniques like Garbled Circuits or Oblivious Transfer to maintain security."
  },
  {
    "id": 103,
    "assignment": 11,
    "assignmentQ": 3,
    "question": "What primary limitation of standard Public Key Encryption (PKE) does Homomorphic Encryption overcome?",
    "options": [
      "Standard PKE does not support public verification.",
      "Standard PKE forces decryption to be an ”all-or-nothing” operation, preventing direct processing on encrypted data.",
      "Standard PKE is susceptible to brute-force key generation attacks.",
      "Standard PKE requires a symmetric key exchange prior to encryption."
    ],
    "correctAnswer": 1,
    "explanation": "Traditional PKE requires decrypting data completely to perform operations on it. Homomorphic Encryption allows arbitrary computations directly over ciphertexts without exposing plaintexts."
  },
  {
    "id": 104,
    "assignment": 11,
    "assignmentQ": 4,
    "question": "Why are lattice-based Fully Homomorphic Encryption (FHE) constructions considered prime candidates for post-quantum security?",
    "options": [
      "They rely strictly on integer factorization hardness assumptions.",
      "They provide computational efficiency without requiring polynomial evaluation.",
      "They offer apparent resistance to quantum computational attacks and rely on worst-case intractability assumptions.",
      "They eliminate the need for public parameter setups."
    ],
    "correctAnswer": 2,
    "explanation": "Lattice-based cryptosystems are inherently resistant to known quantum algorithms (like Shor’s algorithm) and base their security on worst-case hardness assumptions."
  },
  {
    "id": 105,
    "assignment": 11,
    "assignmentQ": 5,
    "question": "In an Inner Product Functional Encryption (IPFE) scheme with functional keysk ⃗ yand ciphertextct ⃗ x, what result is revealed upon decryption?",
    "options": [
      "The complete plaintext vector⃗ x",
      "The complete function key vector⃗ y",
      "Only the scalar inner product value ⟨⃗ x, ⃗ y⟩",
      "A randomized re-encryption of ⃗ x+ ⃗ y"
    ],
    "correctAnswer": 2,
    "explanation": "Functional encryption yields only the evaluated functional result. For IPFE, decrypting ciphertext ct⃗ xusing key sk⃗ yreveals only ⟨⃗ x, ⃗ y⟩ and no additional information about ⃗ x."
  },
  {
    "id": 106,
    "assignment": 11,
    "assignmentQ": 6,
    "question": "What main drawback of Homomorphic Encryption led to the development of Functional Encryption for multi-user access control?",
    "options": [
      "Homomorphic Encryption cannot evaluate linear functions.",
      "Homomorphic Encryption requires the single holder of the secret key to decrypt, making fine-grained output restriction to third parties impossible.",
      "Homomorphic Encryption works only with symmetric keys.",
      "Functional Encryption eliminates the need for mathematical hardness assumptions."
    ],
    "correctAnswer": 1,
    "explanation": "Homomorphic encryption requires the secret key owner to decrypt final results, giving them access to everything. Functional Encryption allows issuing restricted keys (sk f ) that decrypt only f (m) without revealing m."
  },
  {
    "id": 107,
    "assignment": 11,
    "assignmentQ": 7,
    "question": "In Fuzzy Identity-Based Encryption (Fuzzy IBE) with threshold parameterd, when can a user’s key set L successfully decrypt a ciphertext encrypted under attribute set W ?",
    "options": [
      "Only when L is an exact match with W (L = W )",
      "When the size of the set intersection satisfies |L ∩ W | ≥d",
      "When the union |L ∪ W | ≤d",
      "Only when all attributes in the universe U are present in L"
    ],
    "correctAnswer": 1,
    "explanation": "Fuzzy IBE requires the overlapping count of attributes between the user’s secret key set L and ciphertext attribute set W to meet or exceed threshold d."
  },
  {
    "id": 108,
    "assignment": 11,
    "assignmentQ": 8,
    "question": "What critical feature prevents two unauthorized users in an AttributeBased Encryption system from pooling their attributes together to decrypt a ciphertext neither could open individually?",
    "options": [
      "Scalability",
      "Bilinear Mapping",
      "Collusion Resistance",
      "Public Key Generation"
    ],
    "correctAnswer": 2,
    "explanation": "Collusion resistance ensures that combining multiple user secret keys provides no additional decryption capability beyond what each key permits."
  },
  {
    "id": 109,
    "assignment": 11,
    "assignmentQ": 9,
    "question": "What architectural issue in traditional Functional/Identity-Based Encryption does Registration-Based Encryption (RBE) solve?",
    "options": [
      "High noise growth during multiplication gates.",
      "The Key Escrow Problem, by replacing the trusted Private Key Generator with a transparent Key Curator.",
      "Lack of fine-grained access control.",
      "Inability to perform dynamic secret sharing."
    ],
    "correctAnswer": 1,
    "explanation": "Traditional IBE/FE relies on a central Private Key Generator (PKG) that knows master secret keys and can decrypt all traffic (Key Escrow Problem). RBE allows users to pick their own keypairs and register public keys with a transparent key curator."
  },
  {
    "id": 110,
    "assignment": 11,
    "assignmentQ": 10,
    "question": "In a Registered Attribute-Based Encryption (RABE) system, what does a user periodically retrieve from the transparent curator to decrypt ciphertexts matching their attributes?",
    "options": [
      "A new master secret key",
      "A helper decryption key (hsk )",
      "The sender’s private key",
      "A zero-knowledge proof commitment"
    ],
    "correctAnswer": 1,
    "explanation": "In RBE/RABE frameworks, users locally maintain their own secret key (sk ) and retrieve short helper secret keys (hsk ) generated deterministically from the aggregated master public key (mpk ) to perform decryption."
  },
  {
    "id": 111,
    "assignment": 12,
    "assignmentQ": 1,
    "question": "Which of the following best describes the primary objective of a ZeroKnowledge Proof (ZKP)?",
    "options": [
      "To reveal the witness efficiently.",
      "To prove the correctness of a statement while hiding the witness.",
      "To encrypt the witness before transmission.",
      "To authenticate the verifier."
    ],
    "correctAnswer": 1,
    "explanation": "A Zero-Knowledge Proof (ZKP)is a cryptographic protocol that enables a prover to convince a verifier that a given statement is true without revealing any additional information beyond the validity of the statement. In particular, the prover demonstrates knowledge of a secret value, called the witness, while keeping the witness completely hidden. Therefore, the primary objective of a Zero-Knowledge Proof is to prove the correctness of a statement while preserving the secrecy of the witness. Why the other options are incorrect: • (a) Incorrect. A ZKP never reveals the witness; its purpose is to keep the witness secret. • (c) Incorrect. Encrypting the witness is not the goal of a ZKP. Encryption protects data confidentiality, whereas ZKPs prove knowledge without revealing the data. • (d) Incorrect. The protocol is designed to authenticate the prover’s knowledge of the witness, not to authenticate the verifier."
  },
  {
    "id": 112,
    "assignment": 12,
    "assignmentQ": 2,
    "question": "Which property ensures that no computationally bounded prover can convince the verifier of a false statement except with negligible probability?",
    "options": [
      "Completeness",
      "Zero-Knowledge",
      "Soundness",
      "Succinctness"
    ],
    "correctAnswer": 2,
    "explanation": "Soundness is one of the three fundamental properties of a Zero-Knowledge Proof (ZKP). It guarantees that if the statement being proved is false, then no computationally bounded (polynomial-time) dishonest prover can convince the verifier to accept it, except with a negligible probability. Why the other options are incorrect: • Completeness: Ensures that an honest prover can always convince an honest verifier when the statement is true. It does not prevent cheating. • Zero-Knowledge: Guarantees that the verifier learns nothing beyond the validity of the statement. It protects the prover’s secret but does not ensure that false statements cannot be proven. • Succinctness: Refers to the efficiency of the proof, typically meaning that the proof is short and can be verified quickly. It is not one of the three fundamental properties of an interactive Zero-Knowledge Proof."
  },
  {
    "id": 113,
    "assignment": 12,
    "assignmentQ": 3,
    "question": "Why is the Ali Baba Cave protocol considered “zero knowledge”?",
    "options": [
      "Victor learns the password.",
      "Peggy reveals only half of the password.",
      "The interaction transcript can be simulated without knowing the password.",
      "The verifier stores no transcript."
    ],
    "correctAnswer": 2,
    "explanation": "A key characteristic of zero knowledge is that the interaction transcript can be generated (simulated) without access to the secret password. Since a simulated transcript is computationally indistinguishable from a real protocol execution, the transcript does not reveal any information about the secret. Hence, the verifier gains confidence in Peggy’s knowledge while learning nothing beyond the validity of the statement. Why the other options are incorrect: • Victor learns the password: Incorrect. The password is never revealed during the protocol. • Peggy reveals only half of the password: Incorrect. Zeroknowledge proofs do not reveal any portion of the secret. • The verifier stores no transcript: Incorrect. Whether the verifier stores the transcript is irrelevant to the zero-knowledge property. The essential requirement is that the transcript can be efficiently simulated without knowledge of the secret."
  },
  {
    "id": 114,
    "assignment": 12,
    "assignmentQ": 4,
    "question": "How do Non-Interactive Zero-Knowledge Proofs (NIZKs) primarily differ from standard interactive Zero-Knowledge Proofs (ZKPs)?",
    "options": [
      "require multiple verifier challenges.",
      "eliminate interaction by producing a single proof.",
      "reveal the witness.",
      "require several communication rounds."
    ],
    "correctAnswer": 1,
    "explanation": "A Non-Interactive Zero-Knowledge Proof (NIZK) eliminates the interaction between the prover and verifier. The prover generates a single proof that the verifier can verify without exchanging multiple challengeresponse messages. Why the other options are incorrect: • Require multiple verifier challenges: Incorrect. This is a feature of interactive ZKPs. • Reveal the witness: Incorrect. NIZKs preserve the zero-knowledge property and never reveal the witness. • Require several communication rounds: Incorrect. NIZKs require only a single proof."
  },
  {
    "id": 115,
    "assignment": 12,
    "assignmentQ": 5,
    "question": "The verifier in the Schnorr Identification Protocol checks",
    "options": [
      "gx = y",
      "gs = tyc",
      "gr = tc",
      "t = gsy"
    ],
    "correctAnswer": 1,
    "explanation": "In the Schnorr Identification Protocol, the prover sends s = r + cx, where r is random and x is the secret key. The verifier checks whether gs = tyc, which confirms the prover’s knowledge of the secret key without revealing it."
  },
  {
    "id": 116,
    "assignment": 12,
    "assignmentQ": 6,
    "question": "The Fiat–Shamir transform primarily converts",
    "options": [
      "symmetric encryption into public-key encryption.",
      "an interactive proof into a non-interactive proof.",
      "signatures into commitments.",
      "commitments into ciphertexts."
    ],
    "correctAnswer": 1,
    "explanation": "The Fiat–Shamir transform removes the interaction between the prover and verifier by replacing the verifier’s random challenge with the output of a cryptographic hash function. This converts an interactive proof into a non-interactive proof."
  },
  {
    "id": 117,
    "assignment": 12,
    "assignmentQ": 7,
    "question": "Which algorithm makes RSA and ECC fundamentally insecure in the presence of sufficiently powerful quantum computers?",
    "options": [
      "Grover’s Algorithm",
      "Pollard’s Rho Algorithm",
      "Shor’s Algorithm",
      "Baby-Step Giant-Step Algorithm"
    ],
    "correctAnswer": 2,
    "explanation": "Shor’s Algorithm efficiently solves the integer factorization and discrete logarithm problems, which form the security foundation of RSA, Diffie–Hellman, and ECC. Consequently, these cryptosystems become insecure on sufficiently powerful quantum computers. Why the other options are incorrect: • Grover’s Algorithm: Incorrect. It provides a quadratic speedup for brute-force search and primarily affects symmetric cryptography. • Pollard’s Rho Algorithm: Incorrect. It is a classical algorithm for solving discrete logarithm and factorization problems, but it is much less efficient than Shor’s algorithm. • Baby-Step Giant-Step Algorithm: Incorrect. It is a classical algorithm for solving the discrete logarithm problem with exponential complexity."
  },
  {
    "id": 118,
    "assignment": 12,
    "assignmentQ": 8,
    "question": "Grover’s algorithm primarily impacts which class of cryptographic primitives?",
    "options": [
      "RSA",
      "Elliptic Curve Cryptography",
      "Secret-key cryptography",
      "Digital certificates"
    ],
    "correctAnswer": 2,
    "explanation": "Grover’s algorithm provides a quadratic speedup for exhaustive key search, reducing the effective security of symmetric-key cryptographic schemes. Therefore, larger key sizes (e.g., AES-256 instead of AES-128) are recommended to maintain security against quantum attacks. • RSA: Incorrect. RSA is primarily broken by Shor’s algorithm. • Elliptic Curve Cryptography: Incorrect. ECC is also vulnerable to Shor’s algorithm. • Digital certificates: Incorrect. Certificates themselves are not affected; only the underlying cryptographic algorithms are."
  },
  {
    "id": 119,
    "assignment": 12,
    "assignmentQ": 9,
    "question": "Which of the following is NOT listed among the major approaches to Post-Quantum Cryptography?",
    "options": [
      "Lattice-based cryptography",
      "Code-based cryptography",
      "Pairing-based cryptography",
      "Hash-based cryptography"
    ],
    "correctAnswer": 2,
    "explanation": "The lecture lists the major families of Post-Quantum Cryptography as lattice-based, code-based, multivariate, hash-based, and isogeny-based cryptography. Pairing-based cryptography is not included among these approaches. Why the other options are incorrect: • Lattice-based cryptography: Incorrect. It is one of the major PQC approaches. • Code-based cryptography: Incorrect. It is a well-known PQC family. • Hash-based cryptography: Incorrect. It is one of the standardized approaches for post-quantum digital signatures."
  },
  {
    "id": 120,
    "assignment": 12,
    "assignmentQ": 10,
    "question": "Which NIST security category corresponds to security comparable to exhaustive search on AES-256?",
    "options": [
      "Category 1",
      "Category 3",
      "Category 4",
      "Category 5"
    ],
    "correctAnswer": 3,
    "explanation": "NIST Security Category 5 provides a security level comparable to the computational effort required for an exhaustive key search on AES-256, making it the highest of the five NIST security categories. Why the other options are incorrect: • Category 1: Incorrect. It corresponds to the security level of AES-128. • Category 3: Incorrect. It corresponds to the security level of AES-192. • Category 4: Incorrect. It corresponds to the security level of finding collisions in SHA-384, not AES-256."
  }
];

export default questions;
