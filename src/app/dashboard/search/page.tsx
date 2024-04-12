'use client'
import { getSession } from "@/utils/types";
import { Button } from "@mymoid/ui-components";
import { useEffect, useState } from "react";
import { session } from "@/utils/types";
import { useFetchCharacterByID } from "@/hooks/useFetchCharacterByID";
import { get } from "http";
import useSWR from "swr";
import Cookie from 'js-cookie';
import fetcher from "@/utils/fetcher";

export default function search() {
    const [session, setSession] = useState<session | null>(getSession())
    const [key, setKey] = useState<string | null>(null)
    const {data, error, isLoading} = useSWR(key, fetcher)

    useEffect(() => {
        console.log(data)
    }, [data, error])

    return (
        <div>
            <Button onClick={() => setKey(`https://fallofthegods-data.onrender.com/${session!.token}/characters/game/list`)} loading={isLoading}>BUSCAR</Button>
            
        </div>
    )
}