export type VisualTheme = 
  | 'warm-gradient'
  | 'cool-gradient' 
  | 'night-sky'
  | 'aurora'
  | 'ember'
  | 'earth'
  | 'geometric'
  | 'orbs';

export type TransitionSpeed = 'slow' | 'medium' | 'static';

export interface AmbientSettings {
  theme: VisualTheme;
  transitionSpeed: TransitionSpeed;
  brightness: number; // 0-100
  isActive: boolean;
}

export interface ThemeConfig {
  id: VisualTheme;
  name: string;
  description: string;
  colors: string[];
}

export const THEME_CONFIGS: ThemeConfig[] = [
  {
    id: 'warm-gradient',
    name: 'Warm Glow',
    description: 'Soft amber and golden tones',
    colors: ['#d4a574', '#e8b88a', '#c4956a'],
  },
  {
    id: 'cool-gradient',
    name: 'Deep Ocean',
    description: 'Calming blues and teals',
    colors: ['#4a7c8c', '#3d6a8c', '#5a8a9c'],
  },
  {
    id: 'night-sky',
    name: 'Night Sky',
    description: 'Dark starlit atmosphere',
    colors: ['#1a1a2e', '#2a3a5e', '#3a4a6e'],
  },
  {
    id: 'aurora',
    name: 'Aurora',
    description: 'Northern lights inspired',
    colors: ['#4a8c8c', '#5a9cb0', '#7a8cb0'],
  },
  {
    id: 'ember',
    name: 'Ember',
    description: 'Warm fireplace glow',
    colors: ['#8c4a3a', '#d4845a', '#e8a86a'],
  },
  {
    id: 'earth',
    name: 'Earth Tones',
    description: 'Natural, grounding colors',
    colors: ['#6a5a4a', '#7a6a5a', '#8a7a6a'],
  },
  {
    id: 'geometric',
    name: 'Geometric',
    description: 'Subtle animated shapes',
    colors: ['#3a3a4a', '#4a4a5a', '#5a5a6a'],
  },
  {
    id: 'orbs',
    name: 'Floating Orbs',
    description: 'Gentle floating lights',
    colors: ['#4a5a7a', '#6a7a9a', '#8a9aba'],
  },
];
