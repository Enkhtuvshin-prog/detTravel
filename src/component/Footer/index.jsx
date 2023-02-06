import { Container, Grid, Typography, Box, Button } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
const text = ["Seslendirme ve Alt Jazz", "Media Market", "Gillie", "Size Last"];
const text1 = ["Self Betimes", "Yatırımcı İlişkileri", "Basal Himmler"];
const text2 =["Yard Market", "Is İmkanları", "Car Tercihleri" ];
const text3 = ["Hedge Karla", "Mullein Koşulları", "Mullein Koşulları"]
const Footer = () => {
    return (
        <Grid sx={{
            backgroundColor: "#141414"
        }}>
            <Container>
                <Box sx={{ display: "flex", justifyContent: "space-between", color: "#808080", paddingY: 8 }}>
                    <Typography color={"white"} variant={'h2'} fontWeight={600} > Trxvl.</Typography>
                    <Box>
                        {
                            text.map((text) => <Typography my={"5px"}>{text}</Typography>)
                        }
                        <Button variant="outlined" sx={{my: 2}}>Helmet KOD</Button>
                        <Typography>© 1997-2021 Netflix, Inc.</Typography>
                    </Box>
                    <Box>
                        {
                            text1.map((x) => <Typography my={"5px"}>{x}</Typography>)
                        }
                    </Box>
                    <Box>
                        {
                            text2.map((x) => <Typography my={"5px"}>{x}</Typography>)
                        }
                    </Box>
                    <Box>
                        {
                            text3.map((x) => <Typography my={"5px"}>{x}</Typography>)
                        }
                        <Box sx={{my: 1}}>
                            <FacebookIcon/> <InstagramIcon/> <TwitterIcon/> <YouTubeIcon/>
                        </Box>
                    </Box>
                </Box>
                

            </Container>
        </Grid>
    )
}

export default Footer