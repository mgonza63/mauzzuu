import { useRouter } from 'next/router'
import Head from 'next/head'

export async function getServerSideProps({params, query}) {
        console.log(query)
    return {
         props: {
             players: query
         }
     }
}

export default function TeamPage({ players }) {
    // const router = useRouter()
    // let { p1, p2 } = router.query

    // useEffect(() => {
    //     window.location.assign('https://jebbit.com/')
    // })

    let formatPlayerName = (name) => {
        const formattedName = name.replace(/_/g, ' ').replace(/(?: |\b)(\w)/g, function(key, p1) {
            return key.toUpperCase();    
        })
        return formattedName
    }
    let metaTitle = `I've selected my 2023 All-Star Roster! ${formatPlayerName(players.p1)} is my captain`
    let metaDescription = 'Draft yours and receive a custom graphic like this one with your selections!'
    return (
        <div>
            <Head>
                <title>{metaTitle}</title>
                <meta property="description" content={metaDescription} />

                <meta property="og:title" content={metaTitle} key="title" />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:image" content={`https://mauzzuu.vercel.app/api/nba01?p1=${players.p1}&p2=${players.p2}`} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@mau_jebbit" />
                <meta name="twitter:title" content={metaTitle} />
                <meta name="twitter:description" content={metaDescription}/>
                <meta name="twitter:image" content={`https://mauzzuu.vercel.app/api/nba01?p1=${players.p1}&p2=${players.p2}`}/>

            </Head>
            <div>Loading...</div>
        </div>
        
    )
}