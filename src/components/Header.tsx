import { createSignal } from "solid-js";

export default function Header() {
  const [isMenuDisplaied, setIsMenuDisplaied] = createSignal(false);

  return (
    <>
      <div class="flex flex-row-reverse fixed top-0 right-0 z-[100]">
        <img
          width='48'
          height='48'
          class="cursor-pointer relative z-[11]"
          src="/burger_bg.svg"
          alt="menu burger"
          onClick={() => setIsMenuDisplaied(!isMenuDisplaied())}
        />
      </div>
      {isMenuDisplaied() === true && (
      <div
        class={
          "header-fullscreen " +
          (isMenuDisplaied() === true ? "fade-in" : "fade-out")
        }
      >

          <div class="flex flex-col justify-center items-center h-[100vh]">
            <img
              width='14'
              height='14'
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
                <a href="/galerie-photos">Galerie photos</a>
              </li>
              <li class="menu-item">
                <a href="https://www.instagram.com/hugo_richard_/" target="_blank">
                  <img src="/icon_instagram.svg" alt="lien vers mon instagram"/>
                </a>
                
              </li>
            </ul>
          </div>
        
      </div>
      )}
    </>
  );
}
