import { useState, useEffect } from 'react';
import { UserState, CouponUsage } from './types';

const INITIAL_STATE: UserState = {
  usedPlaces: [],
  notes: {},
  couponsUsed: [],
  language: 'ru',
  baseLocation: { name: 'Triberg im Schwarzwald', lat: 48.1306, lng: 8.2325 },
  hasChosenLocation: false,
};

export function useAppStore() {
  const [state, setState] = useState<UserState>(() => {
    try {
      const saved = localStorage.getItem('lfp-state');
      if (saved) {
        const parsed = JSON.parse(saved);
        // Ensure defaults are present in loaded state
        return {
          ...INITIAL_STATE,
          ...parsed,
        };
      }
      return INITIAL_STATE;
    } catch (e) {
      return INITIAL_STATE;
    }
  });

  useEffect(() => {
    localStorage.setItem('lfp-state', JSON.stringify(state));
  }, [state]);

  const togglePlace = (id: string) => {
    setState((s) => ({
      ...s,
      usedPlaces: s.usedPlaces.includes(id)
        ? s.usedPlaces.filter((p) => p !== id)
        : [...s.usedPlaces, id],
    }));
  };

  const setNote = (id: string, note: string) => {
    setState((s) => ({
      ...s,
      notes: { ...s.notes, [id]: note },
    }));
  };

  const addCoupon = (usage: Omit<CouponUsage, 'id'>) => {
    setState((s) => {
      if (s.couponsUsed.length >= 6) return s;
      return {
        ...s,
        couponsUsed: [...s.couponsUsed, { ...usage, id: Date.now().toString() }],
      };
    });
  };

  const removeCoupon = (id: string) => {
    setState((s) => ({
      ...s,
      couponsUsed: s.couponsUsed.filter((c) => c.id !== id),
    }));
  };

  const setLanguage = (lang: 'ru' | 'de' | 'en') => {
    setState((s) => ({
      ...s,
      language: lang,
    }));
    window.location.reload();
  };

  const setBaseLocation = (location: { name: string; lat: number; lng: number }) => {
    setState((s) => ({
      ...s,
      baseLocation: location,
      hasChosenLocation: true,
    }));
  };

  const setHasChosenLocation = (val: boolean) => {
    setState((s) => ({
      ...s,
      hasChosenLocation: val,
    }));
  };

  return { 
    state, 
    togglePlace, 
    setNote, 
    addCoupon, 
    removeCoupon, 
    setLanguage, 
    setBaseLocation,
    setHasChosenLocation 
  };
}
