import { ColorModeToggle } from "../components/color-mode-toggle";
import { center } from "../../styled-system/patterns";
import { css } from "../../styled-system/css";

function Home() {
  return (
    <>
      <div
        className={css({
          position: 'absolute',
          top: '8px',
          right: '32px',
        })}
      >
        <ColorModeToggle />
      </div>
      <div
        className={center({
         minH: '100vh',
        })}
      >
        Hello World
      </div>
    </>
  );
}

export default Home;
