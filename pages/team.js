import { useRouter } from 'next/router'
import { Inter } from 'next/font/google'
import { useEffect } from 'react'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

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

    useEffect(() => {
        window.location.assign('https://jebbit.com/')
    })

    let formatPlayerName = (name) => {
        const formattedName = name.replace(/_/g, ' ').replace(/(?: |\b)(\w)/g, function(key, p1) {
            return key.toUpperCase();    
        })
        return formattedName
    }
    let metaTitle = `I've selected my 2023 All-Star Roster! ${formatPlayerName(players.p1)} is my captain`
    let metaDescription = 'Draft yours and receive a custom graphic like this one with your selections!'
    return (
        <div className='wrapper'>
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
            <div className={inter.className}>Loading...</div>
            <img src='https://uploads-ssl.webflow.com/61533c36571fb3795e94c3ef/61534400571fb372f594ed25_jebbit-logo-color.png' />
            <style jsx>{`
                .wrapper {
                    height: 100vh;
                    display: grid;
                    place-items: center;
                    grid-template-rows: 1fr auto;
                }
                img {
                    width: 150px;
                    padding: 2rem;
                }
            `}</style>
        </div>
        
    )
}