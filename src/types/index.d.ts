export interface MenuOpenProps {
    water: boolean;
    environment: boolean;
    sand:boolean;
    grass:boolean;
  }
  
  export interface WaterControlsProps {
    menuOpen: MenuOpen;
    setMenuOpen: React.Dispatch<React.SetStateAction<MenuOpenProps>>;
  }
  