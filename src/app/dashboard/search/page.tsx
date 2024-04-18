'use client'
import React, { useEffect, useState } from 'react'
import { getSession, type session } from '@/utils/types'
import { Button } from '@mymoid/ui-components'
import useSWR from 'swr'
import fetcher from '@/utils/fetcher'
import {
} from '@mui/base/TablePagination'
import TableCustomized from '@/components/Table'

export default function search (): JSX.Element {
  const [session] = useState<session | null>(getSession())
  const [key, setKey] = useState<string | null>(null)
  const { data, isLoading } = useSWR(key, fetcher)
  return (
        <div>
            <Button onClick={() => { setKey(`https://fallofthegods-data.onrender.com/${session!.user.token}/characters/game/list`) }} loading={isLoading}>BUSCAR</Button>
            <TableCustomized data={data || null}></TableCustomized>
        </div>
  )
}
