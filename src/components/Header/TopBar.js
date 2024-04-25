import React, { useState, useEffect } from 'react'
import { BsFacebook, BsGithub, BsWhatsapp, BsTwitter } from "react-icons/bs";
import dayjs from 'dayjs';

function TopBar() {

    const [time, setTime] = useState("")

    useEffect(() => {

        setInterval(() => {
            setTime(dayjs().format("DD/MM/YYYY, hh:mm:ss A"))
        })

    }, [])

    return (
        <header className='topbar'>
            <div className="container">
                <div className="row">
                    <div className="col-7">
                        <p className="mb-0 text-white">{time}</p>
                    </div>
                    <div className="col-5 text-end">
                        <a href="https://www.instagram.com/ganesh_maharaj_4_7?igsh=MXh4OTM1ZnZtZnlsZg%3D%3D&utm_source=qr" className='text-light' target="_blank"><BsFacebook className="mb-0 me-2" /></a>
                        <a href="https://github.com/GANESH-MAHARAJ" className='text-light' target="_blank"><BsGithub className="mb-0 me-2" /></a>
                        {/* <a href="https://twitter.com/AhmadJajja786" className='text-light'><BsWhatsapp className="mb-0 me-2" /></a> */}
                        <a href="https://twitter.com" className='text-light' target="_blank"><BsTwitter className="mb-0 me-2" /></a>
                        {/* <p className="mb-0">Social Media Icons</p> */}
                    </div>
                </div>
            </div>
            {/* <nav class="navbar navbar-expand-lg navbar-dark " >
                <div class="container-fluid">
                    <a class="navbar-brand" ></a>
                    <div class="collapse navbar-collapse  flex-grow-0" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="navbar-brand" href="#">
                                    <BsGithub />
                                    {/* Github *
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="navbar-brand" href="#">
                                    <BsFacebook />
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="navbar-brand" href="#">
                                    <BsWhatsapp />
                                    {/* whatsapp *
                                </a>
                            </li>
                            <li class="nav-item">

                            </li>
                        </ul>
                        <a class="navbar-brand" href="#">
                            <BsTwitter />
                            {/* twitter *
                        </a>
                    </div>
                </div>
            </nav> */}
        </header >
    )
}

export default TopBar;