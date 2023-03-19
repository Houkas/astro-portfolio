import { createEffect, createSignal, onCleanup, Show } from "solid-js";
import Menu from "./Menu";

export default function Header(){

    const [isMenuDisplaied, setIsMenuDisplaied] = createSignal(false);

    return(
        <>
            <div class="flex flex-row-reverse ">
                <img class="cursor-pointer relative z-[11]" src="/burger_bg.svg" alt="menu burger" onClick={() => setIsMenuDisplaied(!isMenuDisplaied())} />
            </div>


            <div class={"header-fullscreen " + (isMenuDisplaied() === true ? 'fade-in': 'fade-out')} >
                <div class="flex flex-col justify-center items-center h-[100vh]">
                    <img src="/close.svg" alt="close button" class="close-button " onClick={() => setIsMenuDisplaied(!isMenuDisplaied())} />
                    <ul>
                        <li class="menu-item">Accueil</li>
                        <li class="menu-item">Photos</li>
                        <li class="menu-item">Contact</li>
                    </ul>
                </div>
                
            </div>


            
        </>
    );
}