import { ImageResponse } from '@vercel/og';
 
export const config = {
  runtime: 'edge',
};
 
export default function (req) {
    let players = [
        {
        "name": "kevin_durant",
        "image": "https://s3.amazonaws.com/jebbit-assets/images/SbfD0c0x/business-images/6gAYFajLRNqLz0Z4Y8NT_2SMReflKSW657VS2cLyg_Kevin_Durant_2_1.png"
        },
        {
        "name": "jayson_tatum",
        "image": "https://s3.amazonaws.com/jebbit-assets/images/SbfD0c0x/business-images/Ehb9aTsQQexYLlH0grbQ_7gOBzfAZQ0aacFQrx5gS_Jayson_Tatum.png"
        },
        {
        "name": "luka_doncic",
        "image": "https://s3.amazonaws.com/jebbit-assets/images/SbfD0c0x/business-images/KycGcJFOQFaz8yilfhEy_VM6TlRfRNu30iYbhD2hb_Luka_Doncic.png"
        }

    ]

    const { searchParams } = new URL(req.url)
    const p1 = searchParams.get('p1');
    const p2 = searchParams.get('p2');
    const p3 = searchParams.get('p3');

    const getPlayerImage = (playerName) => {
        const playerObject = players.filter(player => player.name == playerName)
        const playerImage = playerObject[0].image
        
        return playerImage
    }    
    console.log(getPlayerImage(p1))

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: 'url("https://s3.amazonaws.com/jebbit-assets/images/JOkPc2zT/business-images/QZk53OLSmdlfVXHbkYAE_Mobile-Team-Picker_2021_Blue-Background_750x1334.jpeg")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <img src={getPlayerImage(p1)} style={{
            width: 400,
            position: 'absolute',
            left: 0,
            top: 150,
        }}/>

        <img src={getPlayerImage(p2)} style={{
            width: 200,
            position: 'absolute',
            right: 50,
            bottom: 150,
        }}/>
        NBA
      </div>
    ),
    {
      width: 670,
      height: 600,
    },
  );
}