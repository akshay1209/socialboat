import React from 'react';
import logo from './logo.jpg';

function HomePage() {
    return (
        <div class="bg-sky-500/50 border-black" >
            <div class=" flex flex-row justify-around p-14">
                <img src={logo} alt='logo' class="rounded-full" height={200} width={200} />
                <ul class="flex coloumn items-center" style={{ listStyleType: "none" }}><li>
                    <li><p>I AM A FITTNESS FREAK, YOU CAN CONNECT WITH ME BY CLICKING FOLLOWING LINKS.</p></li>
                    <li><a href="www.facebook.com"> facebook </a></li>
                    <li><a href="www.facebook.com"> instagram  </a></li>
                    <li><a href="www.facebook.com"> linkedIn </a></li>
                </li></ul>
            </div>
        </div>
    )
}
export default HomePage;