import vgdo_logo from "../assets/VGDOSecondary.png"

export const Footer = () => {

     return ( 
        <footer className="flex w-full mt-auto items-center bg-[rgb(26,23,23)] z-50 border-t-4 border-red-600">
            <img src={vgdo_logo} className="m-2 ml-5 h-10"></img>
            <div className="flex justify-center w-full lg:mr-10">
                <ul className="flex">   
                    <li className=" mx-5">
                        <a href="#about" >Instagram</a>
                    </li>
                    <li className=" mx-5">
                        <a href="#about" >Youtube</a>
                    </li>
                    <li className=" mx-5">
                        <a href="#about" >MavEngage</a>
                    </li>
                    <li className=" mx-5">
                        <a href="#about" >GitHub</a>
                    </li>
                    <li className=" mx-5">
                        <a href="#about" >Discord</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}