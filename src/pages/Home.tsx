import { ColorModeToggle } from "../components/color-mode-toggle";
import { panda, Stack } from "../../styled-system/jsx";
import { css, cx } from "../../styled-system/css";
import { container } from "../../styled-system/patterns";
import { badge, button } from "../../styled-system/recipes";
import Enterprise from "../components/enterprise";
import { styledBage, styledSpan } from "./style";

function Home() {
  return (
    <>
      <panda.header
        display={"flex"}
        justifyContent={"end"}
        position="sticky"
        top={0}
        zIndex={"modal"}
        bg={"gray.950"}
        width={"full"}
      >
        <ColorModeToggle />
      </panda.header>

      <panda.section
        bg="white"
        _dark={{
          bg: "gray.800",
        }}
        minH="100vh"
        display="flex"
        alignItems="center"
      >
        <div
          className={container({
            py: { base: 8, lg: 16 },
            px: { base: 4, lg: 12 },
            textAlign: "center",
            maxWidth: { base: "6xl", lg: "7xl" },
          })}
        >
          <a
            href="#"
            className={cx(
              badge({
                size: "xs",
                variant: "solid",
              }),
              styledBage
            )}
          >
            <span className={styledSpan}>New</span>
            <span>Journey Beyond the Stars</span>
          </a>

          <panda.h1
            letterSpacing="tight"
            fontWeight="bold"
            lineHeight="1.2"
            mb="4"
            fontSize={{ base: "4xl", md: "5xl" }}
            color="gray.900"
            _dark={{ color: "white" }}
          >
            Unlock the Universe’s Hidden Frontiers
          </panda.h1>

          <p
            className={css({
              mb: 8,
              fontSize: "lg",
              fontWeight: "normal",
              color: "gray.500",
              lg: { fontSize: "xl" },
              sm: { px: 16 },
              xl: { px: 48 },
              _dark: { color: "gray.400" },
            })}
          >
            At Galaxos, we venture into uncharted space, blending innovation and
            exploration to shape the future across galaxies.
          </p>

          <Stack
            justify="center"
            align="center"
            direction={{ base: "column", sm: "row" }}
            gap="6"
            mb="8"
            px={{ base: 4, lg: 16 }}
          >
            <button
              className={cx(
                button({ color: "yellow", size: "lg" }),
                css({ minWidth: "100px", rounded: "md" })
              )}
            >
              Start Journey
              <svg
                className={css({ ml: 2, mr: 1, w: 5, h: 5 })}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <button
              className={cx(
                button({ color: "white", size: "lg" }),
                css({ minWidth: "100px", rounded: "md" })
              )}
            >
              <svg
                className={css({ mr: 2, ml: 1, w: 5, h: 5 })}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
              </svg>
              Watch video
            </button>
          </Stack>
          <Enterprise />
        </div>
      </panda.section>
    </>
  );
}

export default Home;
