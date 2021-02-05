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
    const [value, setValue] = useState(null)
    const [pass, setPass] = useState(false)
    const [message, setMessage] = useState(
        'Good morrow traveler, make the right choice or DIE'
    )

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

    return (
        <Container maxWidth="md">
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Grid item>
                    <form onSubmit={handleSubmit}>
                        <FormControl component="fieldset">
                            <h2>Answer the best way you can</h2>
                            <RadioGroup
                                aria-label="questionnaire"
                                name="questionnaire"
                                value={value}
                                onChange={handleChange}
                            >
                                <FormControlLabel
                                    value="answer1"
                                    control={<Radio />}
                                    label="Answer 1"
                                />
                                <FormControlLabel
                                    value="answer2"
                                    control={<Radio />}
                                    label="Answer 2"
                                />
                                <FormControlLabel
                                    value="answer3"
                                    control={<Radio />}
                                    label="Answer 3"
                                />
                                <FormControlLabel
                                    value="disabled"
                                    disabled
                                    control={<Radio />}
                                    label="(Disabled option)"
                                />
                            </RadioGroup>
                            <h1>{message}</h1>
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
                        }}
                    ></div>
                    <div
                        style={{
                            height: '100px',
                            width: '100px',
                            borderStyle: 'solid',
                            margin: '5px',
                        }}
                    ></div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default UserLanding
