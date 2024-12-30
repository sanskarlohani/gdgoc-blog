import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Text,
  Spacer,
  IconButton,
  Button,
  Image,
} from "@chakra-ui/react";
import "../../App.css";
import { Menu, MenuButton, MenuList, MenuItem, MenuGroup, MenuDivider } from "@chakra-ui/menu";
import { HamburgerIcon, ArrowDownIcon } from "@chakra-ui/icons";
import { toast } from "react-toastify";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";
const img = "/image.png"

function Nav() {
  const [width, setWidth] = useState(window.innerWidth);

  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out successfully");
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Failed to logout");
    }
  };



  return (
    <Box py="3" px={["6", "10"]} width="100%">
      <Flex justify="center" align="center">
        <Link to="/">
          <Image src={img} width="150px" height="90px" />
        </Link>


        <Spacer />

        <Box ml="2">
          {currentUser ? (
            <Menu>
              {width > 768 ? (
                <MenuButton as={Button} rightIcon={<ArrowDownIcon />}>
                  My profile
                </MenuButton>
              ) : (
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  variant="outline"
                  textColor={"black"}
                  filter={"brightness(1.5)"}
                >
                  <HamburgerIcon />
                </MenuButton>
              )}
              <MenuList >
                <MenuGroup  >
                  <MenuItem as={Link} to="/write" _hover={{
                    bg: "skyblue",
                    color: "white",
                    transform: "scale(1.1)",
                  }}>
                    Write article
                  </MenuItem>
                  <MenuItem as={Link} to="/my-articles" _hover={{
                    bg: "skyblue",
                    color: "white",
                    transform: "scale(1.1)",
                  }}>
                    My articles
                  </MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup _hover={{
                  bg: "skyblue",
                  color: "white",

                }} title={currentUser?.displayName || "Guest User"}>
                  <MenuItem onClick={handleLogout} _hover={{
                    bg: "skyblue",
                    color: "white",
                    transform: "scale(1.1)",
                  }}>Logout</MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          ) : (
            <Button as={Link} to="/login" colorScheme="blue">
              Sign Up
            </Button>
          )}
        </Box>
      </Flex>

    </Box>
  );
}

export default Nav;
