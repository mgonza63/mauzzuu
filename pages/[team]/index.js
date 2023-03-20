import { useRouter } from 'next/router'
import Head from 'next/head'
import {useEffect} from 'react'


export default function TeamPage() {
    const router = useRouter()
    const { p1, p2 } = router.query
    // useEffect(() => {
    //     window.location.assign('https://jebbit.com/')
    // })
    return (
        <div>
            <Head>
                <title>{p1}</title>
                <meta property="og:title" content={p2} key="title" />
                <meta property="og:image" content={`https://mauzzuu.vercel.app/api/nba01?p1=${p1}&p2=${p2}`} />

            </Head>
            {p1}
            {p2}
        </div>
        
    )
}