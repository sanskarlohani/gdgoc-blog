import { IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/color-mode";
import { Button } from "@chakra-ui/react";
function ToggleTheme() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode} >
      {colorMode === 'light' ? <SunIcon/>: <MoonIcon/>}
    </Button>
  );
}

export default ToggleTheme;
