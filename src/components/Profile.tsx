export default function Profile() {

    const profilePhoto: string = 'https://api.hugo-richard-work.fr/uploads/pp_2822f658e4.jpg';
    
    return(
        <div class="w-full flex flex-col justify-center items-center">
            <h1 class='text-center'>RICHARD<br/>Hugo</h1>
            <img src={profilePhoto} alt="photo de profile RICHARD Hugo" class="h-auto" style={'max-width:287px;'}/>
        </div>
    );
}