/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { getSession } from "@/utils/types";
import { Button, FormControl, MenuItem, Select } from "@mymoid/ui-components";
import { useEffect, useState } from "react";
import { session } from "@/utils/types";
import { useFetchCharacterByID } from "@/hooks/useFetchCharacterByID";
import { get } from "http";
import useSWR from "swr";
import Cookie from 'js-cookie';
import fetcher from "@/utils/fetcher";
import {
    TablePagination,
    tablePaginationClasses as classes,
} from '@mui/base/TablePagination';
import FirstPageRoundedIcon from '@mui/icons-material/FirstPageRounded';
import LastPageRoundedIcon from '@mui/icons-material/LastPageRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { styled } from "@mui/material";
import Table from "@/components/Table";
import TableCustomized from "@/components/Table";

export default function search() {
    const [session, setSession] = useState<session | null>(getSession())
    const [key, setKey] = useState<string | null>(null)
    const { data, error, isLoading } = useSWR(key, fetcher)

    useEffect(() => {
        if(data){
            console.log(data)
        }

    }, [data, error])

    return (
        <div>
            <Button onClick={() => setKey(`https://fallofthegods-data.onrender.com/${session!.user.token}/characters/game/list`)} loading={isLoading}>BUSCAR</Button>
            <TableCustomized data={data? data: null}></TableCustomized>
        </div>
    )
}