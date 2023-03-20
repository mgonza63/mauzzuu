import { useRouter } from 'next/router'
import Head from 'next/head'

export async function getServerSideProps({req, query}) {
    // console.log(query)
    return {
         props: {
             players: query
         }
     }
}

export default function TeamPage({ players }) {
    const router = useRouter()
    const { p1, p2 } = router.query
    console.log(players)

    // useEffect(() => {
    //     window.location.assign('https://jebbit.com/')
    // })
    return (
        <div>
            <Head>
                <title>{players.p1}</title>
                <meta property="og:title" content={players.p2} key="title" />
                <meta property="og:image" content={`https://mauzzuu.vercel.app/api/nba01?p1=${players.p1}&p2=${players.p2}`} />

            </Head>
            {p1}
            {p2}
        </div>
        
    )
}