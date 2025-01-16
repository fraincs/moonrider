const COLORS = {
  OFF: '#111',
  WHITE: '#f0f0f0',

  DARKRED: '#5A354B',
  RED: '#f971c3',
  BRIGHTRED: '#ffd3ee',

  DARKBLUE: '#2B4D4C',
  BLUE: '#6ff9ea',
  BRIGHTBLUE: '#d7fdf9',

  YELLOW: '#fff568',

  UI_ACCENT: '#08bfa2',
  UI_ACCENT2: '#f01978'
};

COLORS.schemes = {
  default: {
    name: 'Super Medium',
    off: '#111',
    primary: COLORS.RED,
    primarybright: COLORS.BRIGHTRED,
    secondary: COLORS.BLUE,
    secondarybright: COLORS.BRIGHTBLUE,
    tertiary: COLORS.YELLOW
  },

  blue: {
    name: 'Star Warrior',
    off: '#111',
    primary: '#1e4482',
    primarybright: '#0B4BB3',
    secondary: '#c27727',
    secondarybright: '#FFD840',
    tertiary: '#d7fdf9'
  },

  purple: {
    name: "Wes Anderson",
    off: "#2C2C2C",
    primary: "#D4A373",
    primarybright: "#F1C27D",
    secondary: "#6A4F39",
    secondarybright: "#BCA98C",
    tertiary: "#A0C9B3"
  },

  green: {
    name: 'Tron',
    off: '#0A0A0A',
    primary: '#00BFFF',
    primarybright: '#00FFFF',
    secondary: '#8A2BE2',
    secondarybright: '#9B30FF',
    tertiary: '#1C1C1C',
  },

  yellow: {
    name: "Halloween Flare",
    off: "#111",
    primary: "#F4A300",
    primarybright: "#FF6F00",
    secondary: "#8A2A2A",
    secondarybright: "#D98282",
    tertiary: "#6A4D3C"
  },

  red: {
    name: 'Trail Blazer',
    off: '#111',
    primary: '#E03A3E',
    primarybright: '#FA7578',
    secondary: '#DADADA',
    secondarybright: '#EFEFEF',
    tertiary: '#666'
  },

  rgb: {
    name: 'Mint Choco',
    off: '#111',
    primary: '#34eb89',
    primarYBRIGht: '#40fb95',
    secondary: '#34ebd8',
    secondarybright: '#40fbeA',
    tertiary: '#eb3434'
  },

  cheetah: {
    name: 'Cheetah SoL',
    off: '#111',
    primary: '#c27727',
    primarYBright: '#e68319',
    secondary: '#635c54',
    secondarybright: '#8a857f',
    tertiary: '#ebebeb'
  },

  black: {
    name: 'Ash Nova',
    off: '#111',
    primary: '#555',
    primarybright: '#808080',
    secondary: '#FFF',
    secondarybright: '#FFF',
    tertiary: '#B8B8B8'
  }
};

COLORS.options = Object.keys(COLORS.schemes);

if (typeof localStorage === 'undefined') {
  COLORS.initial = 'default';
} else {
  COLORS.initial = COLORS.schemes[localStorage.getItem('colorScheme') || 'default'];
}

module.exports = COLORS;
