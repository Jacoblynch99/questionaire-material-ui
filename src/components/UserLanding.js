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
import React, { useState, useEffect } from 'react'

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
    const [condition1, setCondition1] = useState('red')
    const [condition2, setCondition2] = useState('red')
    const [condition3, setCondition3] = useState('red')
    const [condition4, setCondition4] = useState('red')
    const [combinations, setCombinations] = useState([])

    useEffect(() => {
        createWinCondition()
    }, [])

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (value === 'answer1') {
            setMessage('Not your brightest choice')
        } else if (value === 'answer2') {
            setMessage('Your answer could reflect more on your stupidity')
        } else if (value === 'answer3') {
            setMessage('Are you even trying?!')
        }
    }

    const createWinCondition = () => {
        const first = Math.floor(Math.random() * 4)
        const second = Math.floor(Math.random() * 4)
        const third = Math.floor(Math.random() * 4)
        const fourth = Math.floor(Math.random() * 4)

        switch (first) {
            case 0:
                setCondition1('red')
                console.log('first red')
                break
            case 1:
                setCondition1('blue')
                console.log('first blue')
                break
            case 2:
                setCondition1('yellow')
                console.log('first yellow')
                break
            case 3:
                setCondition1('green')
                console.log('first green')
                break
        }
        switch (second) {
            case 0:
                setCondition2('red')
                console.log('second red')
                break
            case 1:
                setCondition2('blue')
                console.log('second blue')
                break
            case 2:
                setCondition2('yellow')
                console.log('second yellow')
                break
            case 3:
                setCondition2('green')
                console.log('second green')
                break
        }
        switch (third) {
            case 0:
                setCondition3('red')
                console.log('third red')
                break
            case 1:
                setCondition3('blue')
                console.log('third blue')
                break
            case 2:
                setCondition3('yellow')
                console.log('third yellow')
                break
            case 3:
                setCondition3('green')
                console.log('third green')
                break
        }
        switch (fourth) {
            case 0:
                setCondition4('red')
                console.log('fourth red')
                break
            case 1:
                setCondition4('blue')
                console.log('fourth blue')
                break
            case 2:
                setCondition4('yellow')
                console.log('fourth yellow')
                break
            case 3:
                setCondition4('green')
                console.log('fourth green')
                break
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
        } else if (
            color1 === condition1 &&
            color2 === condition2 &&
            color3 === condition3 &&
            color4 === condition4
        ) {
            console.log('you win!!!')
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
