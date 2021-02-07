import {
    Button,
    Container,
    Grid,
    RadioGroup,
    Radio,
    FormControl,
    FormControlLabel,
} from '@material-ui/core'

import React, { useState, useEffect } from 'react'

const UserLanding = (props) => {
    const [value, setValue] = useState('white')
    // const [pass, setPass] = useState(false)
    const [message, setMessage] = useState(
        'Good morrow traveler, make the right choice or DIE'
    )

    // rework condition system
    const [color1, setColor1] = useState([0, 'white'])
    const [color2, setColor2] = useState([0, 'white'])
    const [color3, setColor3] = useState([0, 'white'])
    const [color4, setColor4] = useState([0, 'white'])
    const [condition1, setCondition1] = useState('red')
    const [condition2, setCondition2] = useState('red')
    const [condition3, setCondition3] = useState('red')
    const [condition4, setCondition4] = useState('red')
    const [clue1, setClue1] = useState('')
    const [clue2, setClue2] = useState('')
    const [clue3, setClue3] = useState('')
    const [clue4, setClue4] = useState('')
    const [maxRed, setMaxRed] = useState([0, 'red'])
    const [maxBlue, setMaxBlue] = useState([0, 'blue'])
    const [maxYellow, setMaxYellow] = useState([0, 'yellow'])
    const [maxGreen, setMaxGreen] = useState([0, 'green'])
    const [combinations, setCombinations] = useState([])

    useEffect(() => {
        createWinCondition()
    }, [])

    useEffect(() => {
        setClues()
    })
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

        // const first = 0
        // const second = 0
        // const third = 0
        // const fourth = 0

        let red = 0
        let blue = 0
        let yellow = 0
        let green = 0

        switch (first) {
            case 0:
                setCondition1('red')
                red++
                setMaxRed([red, 'red'])
                console.log('first red')
                break
            case 1:
                setCondition1('blue')
                blue++
                setMaxBlue([blue, 'blue'])
                console.log('first blue')
                break
            case 2:
                setCondition1('yellow')
                yellow++
                setMaxYellow([yellow, 'yellow'])
                console.log('first yellow')
                break
            case 3:
                setCondition1('green')
                green++
                setMaxGreen([green, 'green'])
                console.log('first green')
                break
        }
        switch (second) {
            case 0:
                setCondition2('red')
                red++
                setMaxRed([red, 'red'])
                console.log('second red')
                break
            case 1:
                setCondition2('blue')
                blue++
                setMaxBlue([blue, 'blue'])
                console.log('second blue')
                break
            case 2:
                setCondition2('yellow')
                yellow++
                setMaxYellow([yellow, 'yellow'])
                console.log('second yellow')
                break
            case 3:
                setCondition2('green')
                green++
                setMaxGreen([green, 'green'])
                console.log('second green')
                break
        }
        switch (third) {
            case 0:
                setCondition3('red')
                red++
                setMaxRed([red, 'red'])
                console.log('third red')
                break
            case 1:
                setCondition3('blue')
                blue++
                setMaxBlue([blue, 'blue'])
                console.log('third blue')
                break
            case 2:
                setCondition3('yellow')
                yellow++
                setMaxYellow([yellow, 'yellow'])
                console.log('third yellow')
                break
            case 3:
                setCondition3('green')
                green++
                setMaxGreen([green, 'green'])
                console.log('third green')
                break
        }
        switch (fourth) {
            case 0:
                setCondition4('red')
                red++
                setMaxRed([red, 'red'])
                console.log('fourth red')
                break
            case 1:
                setCondition4('blue')
                blue++
                setMaxBlue([blue, 'blue'])
                console.log('fourth blue')
                break
            case 2:
                setCondition4('yellow')
                yellow++
                setMaxYellow([yellow, 'yellow'])
                console.log('fourth yellow')
                break
            case 3:
                setCondition4('green')
                green++
                setMaxGreen([green, 'green'])
                console.log('fourth green')
                break
        }
    }

    const setColors = (color) => {
        let redCount = 0
        let blueCount = 0
        let greenCount = 0
        let yellowCount = 0
        console.log(maxRed, maxGreen, maxYellow, maxBlue)
        if (color1[1] === 'white') {
            if (color === 'red') {
                redCount++
                setColor1([redCount, 'red'])
            } else if (color === 'blue') {
                blueCount++
                setColor1([blueCount, 'blue'])
            } else if (color === 'yellow') {
                yellowCount++
                setColor1([yellowCount, 'yellow'])
            } else if (color === 'green') {
                greenCount++
                setColor1([greenCount, 'green'])
            }
        } else if (color2[1] === 'white') {
            if (color === 'red') {
                redCount++
                setColor2([redCount, 'red'])
            } else if (color === 'blue') {
                blueCount++
                setColor2([blueCount, 'blue'])
            } else if (color === 'yellow') {
                yellowCount++
                setColor2([yellowCount, 'yellow'])
            } else if (color === 'green') {
                greenCount++
                setColor2([greenCount, 'green'])
            }
        } else if (color3[1] === 'white') {
            if (color === 'red') {
                redCount++
                setColor3([redCount, 'red'])
            } else if (color === 'blue') {
                blueCount++
                setColor3([blueCount, 'blue'])
            } else if (color === 'yellow') {
                yellowCount++
                setColor3([yellowCount, 'yellow'])
            } else if (color === 'green') {
                greenCount++
                setColor3([greenCount, 'green'])
            }
        } else if (color4[1] === 'white') {
            if (color === 'red') {
                redCount++
                setColor4([redCount, 'red'])
            } else if (color === 'blue') {
                blueCount++
                setColor4([blueCount, 'blue'])
            } else if (color === 'yellow') {
                yellowCount++
                setColor4([yellowCount, 'yellow'])
            } else if (color === 'green') {
                greenCount++
                setColor4([greenCount, 'green'])
            }
        }
    }

    const setClues = () => {
        // setting clue 1 here

        if (color1[1] === condition1) {
            setClue1('O')
        } else if (
            color1[1] === condition2 ||
            color1[1] === condition3 ||
            color1[1] === condition4
        ) {
            setClue1('~')
        } else {
            setClue1('X')
        }
        // setting clue 2 here
        if (color2[1] === condition2) {
            setClue2('O')
        } else if (
            color2[1] === condition1 ||
            color2[1] === condition3 ||
            color2[1] === condition4
        ) {
            setClue2('~')
        } else {
            setClue2('X')
        }
        // setting clue 3 here
        if (color3[1] === condition3) {
            setClue3('O')
        } else if (
            color3[1] === condition2 ||
            color3[1] === condition1 ||
            color3[1] === condition4
        ) {
            setClue3('~')
        } else {
            setClue3('X')
        }
        // setting clue 4 here
        if (color4[1] === condition4) {
            setClue4('O')
        } else if (
            color4[1] === condition2 ||
            color4[1] === condition1 ||
            color4[1] === condition3
        ) {
            setClue4('~')
        } else {
            setClue4('X')
        }
    }

    const submitColor = () => {
        // setting clue 1 here

        if (
            color1[1] === condition1 &&
            color2[1] === condition2 &&
            color3[1] === condition3 &&
            color4[1] === condition4
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
                            backgroundColor: color1[1],
                        }}
                    ></div>
                    <div
                        style={{
                            height: '25px',
                            width: '25px',
                            borderStyle: 'solid',
                            margin: '5px',
                            backgroundColor: color2[1],
                        }}
                    ></div>
                    <div
                        style={{
                            height: '25px',
                            width: '25px',
                            borderStyle: 'solid',
                            margin: '5px',
                            backgroundColor: color3[1],
                        }}
                    ></div>
                    <div
                        style={{
                            height: '25px',
                            width: '25px',
                            borderStyle: 'solid',
                            margin: '5px',
                            backgroundColor: color4[1],
                        }}
                    ></div>
                    <div>{clue1}</div>
                    <div>{clue2}</div>
                    <div>{clue3}</div>
                    <div>{clue4}</div>
                </div>,
            ])

            setColor1([0, 'white'])
            setColor2([0, 'white'])
            setColor3([0, 'white'])
            setColor4([0, 'white'])
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
                            backgroundColor: color1[1],
                        }}
                    ></div>
                    <div
                        style={{
                            height: '100px',
                            width: '100px',
                            borderStyle: 'solid',
                            margin: '5px',
                            backgroundColor: color2[1],
                        }}
                    ></div>
                    <div
                        style={{
                            height: '100px',
                            width: '100px',
                            borderStyle: 'solid',
                            margin: '5px',
                            backgroundColor: color3[1],
                        }}
                    ></div>
                    <div
                        style={{
                            height: '100px',
                            width: '100px',
                            borderStyle: 'solid',
                            margin: '5px',
                            backgroundColor: color4[1],
                        }}
                    ></div>
                </Grid>
                <Grid item style={{ display: 'flex', flexDirection: 'row' }}>
                    <Button
                        onClick={() => setColors('red')}
                        style={{
                            height: '50px',
                            width: '50px',
                            borderStyle: 'solid',
                            margin: '5px',
                            backgroundColor: 'red',
                        }}
                    ></Button>
                    <Button
                        onClick={() => setColors('blue')}
                        style={{
                            height: '50px',
                            width: '50px',
                            borderStyle: 'solid',
                            margin: '5px',
                            backgroundColor: 'blue',
                        }}
                    ></Button>
                    <Button
                        onClick={() => setColors('green')}
                        style={{
                            height: '50px',
                            width: '50px',
                            borderStyle: 'solid',
                            margin: '5px',
                            backgroundColor: 'green',
                        }}
                    ></Button>
                    <Button
                        onClick={() => setColors('yellow')}
                        style={{
                            height: '50px',
                            width: '50px',
                            borderStyle: 'solid',
                            margin: '5px',
                            backgroundColor: 'yellow',
                        }}
                    ></Button>
                </Grid>
                <Grid item>
                    <Button onClick={submitColor} style={{ color: 'black' }}>
                        Submit
                    </Button>
                </Grid>

                {combinations.map((item, idx) => (
                    <div key={`${item}${idx}`}>{item}</div>
                ))}
            </Grid>
        </Container>
    )
}

export default UserLanding
