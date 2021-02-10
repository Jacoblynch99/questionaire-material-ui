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
    const [condition1, setCondition1] = useState([0, 'red'])
    const [condition2, setCondition2] = useState([0, 'red'])
    const [condition3, setCondition3] = useState([0, 'red'])
    const [condition4, setCondition4] = useState([0, 'red'])
    // const [clue1, setClue1] = useState('')
    // const [clue2, setClue2] = useState('')
    // const [clue3, setClue3] = useState('')
    // const [clue4, setClue4] = useState('')
    // const [maxRed, setMaxRed] = useState(0)
    // const [maxBlue, setMaxBlue] = useState(0)
    // const [maxYellow, setMaxYellow] = useState(0)
    // const [maxGreen, setMaxGreen] = useState(0)
    const [combinations, setCombinations] = useState([])

    // let attempt = 'active'

    useEffect(() => {
        createWinCondition()
    }, [])

    // useEffect(() => {
    //     setClues()
    // })
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
        // const first = Math.floor(Math.random() * 4)
        // const second = Math.floor(Math.random() * 4)
        // const third = Math.floor(Math.random() * 4)
        // const fourth = Math.floor(Math.random() * 4)

        const first = 0
        const second = 0
        const third = 1
        const fourth = 1

        let red = 0
        let blue = 0
        let yellow = 0
        let green = 0

        switch (first) {
            case 0:
                red++
                setCondition1([red, 'red'])
                // setMaxRed([red, 'red'])
                console.log('red')
                break
            case 1:
                blue++
                setCondition1([blue, 'blue'])
                // setMaxBlue([blue, 'blue'])
                console.log('blue')
                break
            case 2:
                yellow++
                setCondition1([yellow, 'yellow'])
                // setMaxYellow([yellow, 'yellow'])
                console.log('yellow')
                break
            case 3:
                green++
                setCondition1([green, 'green'])
                // setMaxGreen([green, 'green'])
                console.log('green')
                break
            default:
                console.log('ruh roo raggy')
                break
        }
        switch (second) {
            case 0:
                red++
                setCondition2([red, 'red'])
                // setMaxRed([red, 'red'])
                console.log('red')
                break
            case 1:
                blue++
                setCondition2([blue, 'blue'])
                // setMaxBlue([blue, 'blue'])
                console.log('blue')
                break
            case 2:
                yellow++
                setCondition2([yellow, 'yellow'])
                // setMaxYellow([yellow, 'yellow'])
                console.log('yellow')
                break
            case 3:
                green++
                setCondition2([green, 'green'])
                // setMaxGreen([green, 'green'])
                console.log('green')
                break
            default:
                console.log('ruh roo raggy')
                break
        }
        switch (third) {
            case 0:
                red++
                setCondition3([red, 'red'])
                // setMaxRed([red, 'red'])
                console.log('red')
                break
            case 1:
                blue++
                setCondition3([blue, 'blue'])
                // setMaxBlue([blue, 'blue'])
                console.log('blue')
                break
            case 2:
                yellow++
                setCondition3([yellow, 'yellow'])
                // setMaxYellow([yellow, 'yellow'])
                console.log('yellow')
                break
            case 3:
                green++
                setCondition3([green, 'green'])
                // setMaxGreen([green, 'green'])
                console.log('green')
                break
            default:
                console.log('ruh roo raggy')
                break
        }
        switch (fourth) {
            case 0:
                red++
                setCondition4([red, 'red'])
                // setMaxRed([red, 'red'])
                console.log('red')
                break
            case 1:
                blue++
                setCondition4([blue, 'blue'])
                // setMaxBlue([blue, 'blue'])
                console.log('blue')
                break
            case 2:
                yellow++
                setCondition4([yellow, 'yellow'])
                // setMaxYellow([yellow, 'yellow'])
                console.log('yellow')
                break
            case 3:
                green++
                setCondition4([green, 'green'])
                // setMaxGreen([green, 'green'])
                console.log('green')
                break
            default:
                console.log('ruh roo raggy')
                break
        }
    }

    const setColors = (color) => {
        if (color1[1] === 'white') {
            if (color === 'red') {
                setColor1([0, 'red'])
            } else if (color === 'blue') {
                setColor1([0, 'blue'])
            } else if (color === 'yellow') {
                setColor1([0, 'yellow'])
            } else if (color === 'green') {
                setColor1([0, 'green'])
            }
        } else if (color2[1] === 'white') {
            if (color === 'red') {
                setColor2([0, 'red'])
            } else if (color === 'blue') {
                setColor2([0, 'blue'])
            } else if (color === 'yellow') {
                setColor2([0, 'yellow'])
            } else if (color === 'green') {
                setColor2([0, 'green'])
            }
        } else if (color3[1] === 'white') {
            if (color === 'red') {
                setColor3([0, 'red'])
            } else if (color === 'blue') {
                setColor3([0, 'blue'])
            } else if (color === 'yellow') {
                setColor3([0, 'yellow'])
            } else if (color === 'green') {
                setColor3([0, 'green'])
            }
        } else if (color4[1] === 'white') {
            if (color === 'red') {
                setColor4([0, 'red'])
            } else if (color === 'blue') {
                setColor4([0, 'blue'])
            } else if (color === 'yellow') {
                setColor4([0, 'yellow'])
            } else if (color === 'green') {
                setColor4([0, 'green'])
            }
        }
    }

    const setClues = () => {
        const answerArr = [condition1, condition2, condition3, condition4]
        const guessArr = [color1[1], color2[1], color3[1], color4[1]]
        let yellowCount = 0
        let redCount = 0
        let blueCount = 0
        let greenCount = 0
        const clueArr = []

        // for (let i = 0; i < answerArr.length; i++) {

        // }

        for (let i = 0; i < answerArr.length; i++) {
            if (guessArr[i] === answerArr[i][1]) {
                clueArr.push('O')
            } else if (
                guessArr[i] === 'red' &&
                answerArr[i][1] !== guessArr[i] &&
                redCount < answerArr[i][0]
            ) {
                clueArr.push('~')
            } else if (
                guessArr[i] === 'blue' &&
                answerArr[i][1] !== guessArr[i] &&
                blueCount < answerArr[i][0]
            ) {
                clueArr.push('~')
            } else if (
                guessArr[i] === 'green' &&
                answerArr[i][1] !== guessArr[i] &&
                greenCount < answerArr[i][0]
            ) {
                clueArr.push('~')
            } else if (
                guessArr[i] === 'yellow' &&
                answerArr[i][1] !== guessArr[i] &&
                yellowCount < answerArr[i][0]
            ) {
                clueArr.push('~')
            } else if (
                guessArr[i] !== answerArr[0] &&
                guessArr[i] !== answerArr[1] &&
                guessArr[i] !== answerArr[2] &&
                guessArr[i] !== answerArr[3]
            ) {
                clueArr.push('X')
            }
            if (guessArr[i] === 'red') {
                redCount++
            } else if (guessArr[i] === 'blue') {
                blueCount++
            } else if (guessArr[i] === 'green') {
                greenCount++
            } else if (guessArr[i] === 'yellow') {
                yellowCount++
            }
        }
        return clueArr

        // setting clue 1 here

        // if (color1[1] === condition1[1] && color1[0] === condition1[0]) {
        //     setClue1('O')
        // } else if (
        //     color1[1] === condition2[1] ||
        //     color1[1] === condition3[1] ||
        //     color1[1] === condition4[1]
        // ) {
        //     setClue1('~')
        // } else {
        //     setClue1('X')
        // }
        // // setting clue 2 here
        // if (color2[1] === condition2[1]) {
        //     setClue2('O')
        // } else if (
        //     color2[1] === condition1[1] ||
        //     color2[1] === condition3[1] ||
        //     color2[1] === condition4[1]
        // ) {
        //     setClue2('~')
        // } else {
        //     setClue2('X')
        // }
        // // setting clue 3 here
        // if (color3[1] === condition3[1]) {
        //     setClue3('O')
        // } else if (
        //     color3[1] === condition2[1] ||
        //     color3[1] === condition1[1] ||
        //     color3[1] === condition4[1]
        // ) {
        //     setClue3('~')
        // } else {
        //     setClue3('X')
        // }
        // // setting clue 4 here
        // if (color4[1] === condition4[1]) {
        //     setClue4('O')
        // } else if (
        //     color4[1] === condition2[1] ||
        //     color4[1] === condition1[1] ||
        //     color4[1] === condition3[1]
        // ) {
        //     setClue4('~')
        // } else {
        //     setClue4('X')
        // }
    }

    const submitColor = () => {
        // setting clue 1 here

        let clues = setClues()

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
                    <div>{clues}</div>
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
