'use client'
import { cinzel } from "@/utils/fonts";
import Link from "next/link";
import Cookies from 'js-cookie';
import Image from 'next/image';
import logo from '../../assets/images/logo.png';
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import useLogout from '@/hooks/useLogout';
import { getSession } from "@/utils/types";
import { session } from "@/utils/types";

export default function Layout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    const params = useSearchParams();
    const router = useRouter();
    const [session, setSession] = useState<session | null>(getSession());
    const [sessionBoolean, setSessionBoolean] = useState<boolean>(false);


    useEffect(() => {
        if (getSession().username != null) {
            setSession(getSession());
            setSessionBoolean(true);
        }
        else if(getSession().username == null){
            setSessionBoolean(false)
            setSession(null)
        }else{
            setSessionBoolean(false)
            setSession(null)
            logout()
        }
    }, [params]);

    function logout() {
        setSession(null);
        setSessionBoolean(false);
        Cookies.remove('session');
        Cookies.remove('email');
        Cookies.remove('token');
        router.refresh();    
    }
    

    return (
        <>
            <header className={`w-screen h-24 bg-zinc-900 flex flex-row self-start justify-self-start`}>
                <ul className="w-1/2 h-full flex flex-row items-center justify-start gap-6 pl-4">
                    <Image src={logo} className="w-20 h-20" alt="logo" width={100} height={100} />
                    {/* <li className={`${cinzel.className} font-bold text-xl bg-clip-text bg-gradient-to-r from-teal-500 to-green-500`}>Leaves & Shadows</li> */}
                    <div className="w-auto text-center">
                        <p className={`${cinzel.className} font-bold text-xl text-green-50`}>Leaves & Shadows</p>
                        <p className={`${cinzel.className} font-bold text-m text-green-50`}>Fall of the Gods</p>

                    </div>
                </ul>
                <div className="w-1/2 h-full flex flex-row items-center justify-end pr-4 gap-4">
                    {
                        sessionBoolean
                            ?
                            <>
                                <button className="w-40 h-12 rounded bg-zinc-950 flex text-white ">
                                    <Link href="/dashboard/profile" className={`${cinzel.className} text-green-40 0bg-zinc-950 hover:bg-green-500 hover:text-white w-full h-full rounded text-center items-center justify-center flex transition duration-500 ease-in-out`}>{session ? session.username : "Login"}</Link>
                                </button>
                                <button onClick={logout} className={`w-40 h-12 rounded bg-zinc-950 flex text-white text-center justify-center items-center ${cinzel.className} hover:bg-green-500 transition duration-500 ease-in-out`}>
                                    Logout
                                </button>
                            </>
                            : <button className="w-40 h-12 rounded bg-zinc-950 flex text-white">
                                <Link href="/dashboard/login" className={`${cinzel.className} text-green-40 0bg-zinc-950 hover:bg-green-500 hover:text-white w-full h-full rounded text-center items-center justify-center flex transition duration-500 ease-in-out`}>{"Login"}</Link>

                            </button>
                    }
                </div>
            </header>
            {children}
        </>
    )
}