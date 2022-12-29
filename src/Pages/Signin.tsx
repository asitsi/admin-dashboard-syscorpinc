import React, { FC } from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import { Button, Checkbox, FormControlLabel, Typography, Link } from '@mui/material'
import loginImg from '../assets/images/Login/unsplash_QckxruozjRg.svg'
import './Signin.scss'
// import IconButton from '@mui/material/IconButton'
// import Visibility from '@mui/icons-material/Visibility'
// import VisibilityOff from '@mui/icons-material/VisibilityOff'
// import { IconButton, Input, InputAdornment } from '@mui/material'

interface InputProps {
  email?: string
  password?: string
}

const Signin: FC = () => {
  const [state, setState] = React.useState<InputProps>()
  // const [showPassword, setShowPassword] = React.useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target
    setState({ ...state, [name]: value })
  }

  // const handleClickShowPassword = (): void => { setShowPassword((show) => !show) }

  return (
    <div className='login-block'>
      <Grid container spacing={1} className="login-field-section">
        <div>
          <Grid>
            <h2>Sign in</h2>
          </Grid>
          <Grid item className='login-form'>
            <label>Email</label>
            <TextField id="standard-basic" aria-label='email' name='email' value={state?.email} onChange={() => handleChange} variant="standard" required fullWidth/>
            <br />
            <label>Password</label>
            <TextField id="standard-basic" aria-label='password' name='password' value={state?.password} onChange={() => handleChange} variant="standard" required fullWidth/>
            <FormControlLabel control={<Checkbox />} label="keep me login" /><Typography><Link href="#">Forget password</Link></Typography>
            <Button type="submit" className='signin-button' fullWidth>Sign in</Button>
          </Grid>
        </div>
      </Grid>
      <Grid>
        <img src={loginImg} alt='loginImg' />
      </Grid>
    </div>
  )
}

export default Signin
