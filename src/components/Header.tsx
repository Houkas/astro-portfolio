import { createSignal } from "solid-js";

export default function Header() {
  const [isMenuDisplaied, setIsMenuDisplaied] = createSignal(false);

  return (
    <>
      <div class="flex flex-row-reverse fixed top-0 right-0 z-[20]">
        <img
          class="cursor-pointer relative z-[11]"
          src="/burger_bg.svg"
          alt="menu burger"
          onClick={() => setIsMenuDisplaied(!isMenuDisplaied())}
        />
      </div>
      <div
        class={
          "header-fullscreen " +
          (isMenuDisplaied() === true ? "fade-in" : "fade-out")
        }
      >
        {isMenuDisplaied() === true && (
          <div class="flex flex-col justify-center items-center h-[100vh]">
            <img
              src="/close.svg"
              alt="close button"
              class="close-button "
              onClick={() => setIsMenuDisplaied(!isMenuDisplaied())}
            />
            <ul>
              <li class="menu-item">
                <a href="/">Accueil</a>
              </li>
              <li class="menu-item">
                <a href="/photos">Photos</a>
              </li>
              <li class="menu-item">Contact</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
