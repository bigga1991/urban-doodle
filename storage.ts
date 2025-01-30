import type { FuelEntry, MileageEntry } from '@/types';

const STORAGE_KEYS = {
  FUEL_ENTRIES: 'fuel_entries',
  MILEAGE_ENTRIES: 'mileage_entries',
} as const;

export const storage = {
  getFuelEntries: (): FuelEntry[] => {
    if (typeof window === 'undefined') return [];
    const data = localStorage.getItem(STORAGE_KEYS.FUEL_ENTRIES);
    return data ? JSON.parse(data) : [];
  },

  setFuelEntries: (entries: FuelEntry[]): void => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEYS.FUEL_ENTRIES, JSON.stringify(entries));
  },

  getMileageEntries: (): MileageEntry[] => {
    if (typeof window === 'undefined') return [];
    const data = localStorage.getItem(STORAGE_KEYS.MILEAGE_ENTRIES);
    return data ? JSON.parse(data) : [];
  },

  setMileageEntries: (entries: MileageEntry[]): void => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEYS.MILEAGE_ENTRIES, JSON.stringify(entries));
  },
}; 