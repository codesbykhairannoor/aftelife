export type VaultStatus = 'ACTIVE' | 'WARNING' | 'TRIGGERED';

export interface DeadManConfig {
  lastCheckIn: Date;
  checkInIntervalDays: number;
  gracePeriodDays: number;
}

export const DeadManSwitch = {
  /**
   * Cek status brankas berdasarkan aktivitas terakhir
   */
  getStatus: (config: DeadManConfig): VaultStatus => {
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - config.lastCheckIn.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays >= config.checkInIntervalDays + config.gracePeriodDays) {
      return 'TRIGGERED'; // Sudah lewat batas, warisan harus dibuka
    }
    if (diffDays > config.checkInIntervalDays) {
      return 'WARNING'; // User belum check-in, kirim peringatan
    }
    return 'ACTIVE'; // User sehat walafiat
  },

  /**
   * Hitung sisa hari sebelum status berubah jadi WARNING
   */
  getDaysRemaining: (config: DeadManConfig): number => {
    const now = new Date();
    const nextCheckIn = new Date(config.lastCheckIn);
    nextCheckIn.setDate(nextCheckIn.getDate() + config.checkInIntervalDays);
    
    const diffTime = nextCheckIn.getTime() - now.getTime();
    return Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
  }
};
