/* eslint-disable @typescript-eslint/no-extraneous-class */
import crypto from 'crypto'

export class Cipher {
  static generateSalt (): Buffer {
    return crypto.randomBytes(16)
  }

  static hashPassword (password: string, salt: Buffer): Buffer {
    const hash = crypto.createHmac('sha256', salt)
    hash.update(password)
    const hashedPassword = hash.digest()
    return hashedPassword
  }

  static verifyPassword (
    enteredPassword: string,
    salt: Buffer,
    storedHashedPassword: Buffer
  ): boolean {
    const calculatedHash = this.hashPassword(enteredPassword, salt)
    return crypto.timingSafeEqual(calculatedHash, storedHashedPassword)
  }

  static generateToken (): string {
    return crypto.randomBytes(16).toString('hex')
  }

  static convertToHex (data: Buffer): string {
    return data.toString('hex')
  }

  static convertFromHex (data: string): Buffer {
    return Buffer.from(data, 'hex')
  }
}
