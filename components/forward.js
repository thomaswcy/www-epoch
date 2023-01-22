import { Box, Grid, Heading, Image, Link } from 'theme-ui'
import FilmGrain from '../components/filmGrain'
import { Text, Button } from 'theme-ui'
import { useState } from 'react'
import theme from '../lib/theme'
import Sparkles from './sparkles'

let hoverable = {
  cursor: 'pointer',
  transition: 'transform .125s ease-in-out, box-shadow .125s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}

function Modal(props) {
  return (
    <Box
      sx={{
        display: props.open == false ? 'none' : 'flex',
        position: 'fixed',
        height: '100vh',
        width: '100vw',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '999',
        top: 0,
        background: `rgba(0, 0, 0, 0.7)`,
        color: 'white',
      }}
      onClick={() => props.setOpen(false)}
    >
      <Box
        sx={{
          width: '90vw',
          maxWidth: '800px',
          bg: 'black',
          borderRadius: 6,
          overflow: 'hidden',
        }}
      >
        <Box
          bg={props.data.colour}
          px={3}
          pb={2}
          pt={'12px'}
          sx={{ fontSize: 3, fontWeight: 700 }}
        >
          {props.data.title}
        </Box>
        <Box
          p={3}
          sx={{
            fontSize: '18px',
            border: '3px solid',
            borderColor: props.data.colour,
            borderBottomLeftRadius: 6,
            borderBottomRightRadius: 6,
          }}
        >
          {props.data.description}
        </Box>
      </Box>
    </Box>
  )
}

export default function Forward() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)
  let modalData = {
    0: {
      title: 'Organised by the Hack Club community, for you.',
      description: (
        <Grid columns="2fr 1fr">
          <Box>
            Hack Club is a worldwide community of high school hackers. We’re
            artists, writers, engineers, tinkerers, campers, filmmakers,
            volunteers. We make things. We help one another. We have fun.
            <br /> <br />
            Reboot has been organised by the community in public on the{' '}
            <Link href="https://hackclub.com/slack" target="_blank">
              Hack Club Slack
            </Link>
            . Everything from this website to Reboot's dinner menu, was created
            by teenagers just like yourself and you're welcome to help out in{' '}
            <i>#epoch-bts</i> on{' '}
            <Link href="https://hackclub.com/slack" target="_blank">
              the Slack
            </Link>
            .
          </Box>
          <Image
            src="https://cloud-ajzzyogfc-hack-club-bot.vercel.app/0screenshot_2022-10-25_at_5.46.44_pm.png"
            sx={{ borderRadius: 6 }}
            alt="Hack Clubbers at a high-school hackathon."
          />
        </Grid>
      ),
      colour: 'red',
    },
    1: {
      title: 'Shanghai, China',
      description: (
        <Grid columns={2}>
          <Box sx={{ lineHeight: '1.6' }}>
            <b>Reboot is taking place at:</b>
            <br />
            Placeholder I
            <br />
            Placeholder II,
            <br />
            Placeholder III
            <br />
            Shanghai, China
            <Grid columns={2} mt={3}>
              <Image
                alt="Placeholder"
                sx={{ borderRadius: 4, objectFit: 'cover', height: '200px' }}
                src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Cyber_City_Skyline.jpeg"
              />
              <Image
                alt="Placeholder"
                sx={{ borderRadius: 4, objectFit: 'cover', height: '200px' }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Cyber_City_View.jpg/2560px-Cyber_City_View.jpg"
              />
            </Grid>
          </Box>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14024.938975122483!2d77.0909444!3d28.5025843!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xae4dc02e39c2931f!2sMasters&#39;%20Union%20School%20of%20Business!5e0!3m2!1sen!2ssg!4v1666690637009!5m2!1sen!2ssg"
            style={{
              borderRadius: 4,
              border: 0,
              width: '100%',
              height: '100%',
            }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Grid>
      ),
      colour: 'orange',
    },

  }
  return (
    <>
      <Modal open={open} data={modalData[index]} setOpen={setOpen} />
      <Box mt={3}>
        <Grid
          columns={2}
          sx={{
            gap: 3,
            mt: 4,
            margin: 'auto',
            fontSize: '1.5em',
            fontWeight: 600,
            color: 'white',
          }}
        >
          <Box sx={{ padding: '16px', background: 'green', borderRadius: 4 }}>
            December 30th to January 1st
          </Box>
          <Box
            onClick={() => {
              setIndex(1)
              setOpen(true)
            }}
            sx={{
              padding: '16px',
              background: 'orange',
              borderRadius: 4,
              ...hoverable,
            }}
          >
            Cyber City, Delhi NCR
          </Box>
          <Box
            onClick={() => {
              setIndex(2)
              setOpen(true)
            }}
            sx={{
              padding: '16px',
              background: 'purple',
              borderRadius: 4,
              ...hoverable,
            }}
          >
            ₹12.5 Lakh in travel stipends
          </Box>
          <Box
            onClick={() => {
              setIndex(0)
              setOpen(true)
            }}
            sx={{
              padding: '16px',
              background: 'red',
              borderRadius: 4,
              ...hoverable,
            }}
          >
            Organised by the Hack Club community, for you.
          </Box>
        </Grid>
      </Box>
    </>
  )
}
