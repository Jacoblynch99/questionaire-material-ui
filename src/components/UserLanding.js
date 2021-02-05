import {
    AppBar,
    Box,
    Select,
    MenuItem,
    Button,
    Typography,
    Card,
    CardContent,
    CardActions,
    Chip,
    Dialog,
    DialogTitle,
    DialogActions,
    Container,
    Grid,
    RadioGroup,
    Radio,
    FormControl,
    FormControlLabel,
    FormLabel,
    FormHelperText,
} from '@material-ui/core'
import React, { useState } from 'react'

const UserLanding = (props) => {
    const [value, setValue] = useState('white')
    const [pass, setPass] = useState(false)
    const [message, setMessage] = useState(
        'Good morrow traveler, make the right choice or DIE'
    )
    const [color1, setColor1] = useState('white')
    const [color2, setColor2] = useState('white')
    const [color3, setColor3] = useState('white')
    const [color4, setColor4] = useState('white')
    const [combinations, setCombinations] = useState([])

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('button hit')

        if (value === 'answer1') {
            setMessage('Not your brightest choice')
        } else if (value === 'answer2') {
            setMessage('Your answer could reflect more on your stupidity')
        } else if (value === 'answer3') {
            setMessage('Are you even trying?!')
        }
    }

    const submitColor = (color) => {
        if (color1 === 'white') {
            setColor1(color)
        } else if (color2 === 'white') {
            setColor2(color)
        } else if (color3 === 'white') {
            setColor3(color)
        } else if (color4 === 'white') {
            setColor4(color)
        } else {
            setCombinations([
                ...combinations,
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div
                        style={{
                            height: '25px',
                            width: '25px',
                            borderStyle: 'solid',
                            margin: '5px',
                            backgroundColor: color1,
                        }}
                    ></div>
                    <div
                        style={{
                            height: '25px',
                            width: '25px',
                            borderStyle: 'solid',
                            margin: '5px',
                            backgroundColor: color2,
                        }}
                    ></div>
                    <div
                        style={{
                            height: '25px',
                            width: '25px',
                            borderStyle: 'solid',
                            margin: '5px',
                            backgroundColor: color3,
                        }}
                    ></div>
                    <div
                        style={{
                            height: '25px',
                            width: '25px',
                            borderStyle: 'solid',
                            margin: '5px',
                            backgroundColor: color4,
                        }}
                    ></div>
                </div>,
            ])

            setColor1('white')
            setColor2('white')
            setColor3('white')
            setColor4('white')
        }
    }

    return (
        <Container
            maxWidth="md"
            style={{
                height: ' 100vh',
                width: '100vw',
            }}
        >
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <h2>{message}</h2>
                <Grid
                    item
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        flexDirection: 'column',
                    }}
                >
                    <form onSubmit={handleSubmit}>
                        <FormControl component="fieldset">
                            <RadioGroup
                                aria-label="questionnaire"
                                name="questionnaire"
                                value={value}
                                onChange={handleChange}
                            >
                                <FormControlLabel
                                    value="answer1"
                                    control={
                                        <Radio style={{ color: 'black' }} />
                                    }
                                    label="Answer 1"
                                />
                                <FormControlLabel
                                    value="answer2"
                                    control={
                                        <Radio style={{ color: 'black' }} />
                                    }
                                    label="Answer 2"
                                />
                                <FormControlLabel
                                    value="answer3"
                                    control={
                                        <Radio style={{ color: 'black' }} />
                                    }
                                    label="Answer 3"
                                />
                            </RadioGroup>
                            <Button
                                type="submit"
                                variant="outlined"
                                color="primary"
                            >
                                Submit
                            </Button>
                        </FormControl>
                    </form>
                </Grid>

                {/* ------------------- PUZZLE BELOW --------------------- */}

                <Grid item style={{ display: 'flex', flexDirection: 'row' }}>
                    <div
                        style={{
                            height: '100px',
                            width: '100px',
                            borderStyle: 'solid',
                            margin: '5px',
                            backgroundColor: color1,
                        }}
                    ></div>
                    <div
                        style={{
                            height: '100px',
                            width: '100px',
                            borderStyle: 'solid',
                            margin: '5px',
                            backgroundColor: color2,
                        }}
                    ></div>
                    <div
                        style={{
                            height: '100px',
                            width: '100px',
                            borderStyle: 'solid',
                            margin: '5px',
                            backgroundColor: color3,
                        }}
                    ></div>
                    <div
                        style={{
                            height: '100px',
                            width: '100px',
                            borderStyle: 'solid',
                            margin: '5px',
                            backgroundColor: color4,
                        }}
                    ></div>
                </Grid>
                <Grid item style={{ display: 'flex', flexDirection: 'row' }}>
                    <Button
                        onClick={() => submitColor('red')}
                        style={{
                            height: '50px',
                            width: '50px',
                            borderStyle: 'solid',
                            margin: '5px',
                            backgroundColor: 'red',
                        }}
                    ></Button>
                    <Button
                        onClick={() => submitColor('blue')}
                        style={{
                            height: '50px',
                            width: '50px',
                            borderStyle: 'solid',
                            margin: '5px',
                            backgroundColor: 'blue',
                        }}
                    ></Button>
                    <Button
                        onClick={() => submitColor('green')}
                        style={{
                            height: '50px',
                            width: '50px',
                            borderStyle: 'solid',
                            margin: '5px',
                            backgroundColor: 'green',
                        }}
                    ></Button>
                    <Button
                        onClick={() => submitColor('yellow')}
                        style={{
                            height: '50px',
                            width: '50px',
                            borderStyle: 'solid',
                            margin: '5px',
                            backgroundColor: 'yellow',
                        }}
                    ></Button>
                </Grid>

                {combinations.map((item, idx) => (
                    <div key={`${item}${idx}`}>{item}</div>
                ))}
            </Grid>
        </Container>
    )
}

export default UserLanding
