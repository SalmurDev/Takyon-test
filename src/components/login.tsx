import { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [selected, setSelected] = useState(true)
    const [redMail, setRedMail] = useState(false)
    const [redPass, setRedPass] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    
    async function postLogin(email: string, password: string) {
        if (email === '') {
            setRedMail(true)
            return
        }
        setRedMail(false)
        if (password === '') {
            setRedPass(true)
            return
        }
        setRedPass(false)
        try {
            setIsLoading(true)
            const result = await fetch('https://staging-api.takyon.io/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: email, password: password })
            })
            setIsLoading(false)
            if (result.status === 200) alert('successfully logged in!')
            else alert('incorrect credentials, please try again')
        } catch (error) {
            alert('login error')
        }
    }

    function Loader() {
        return <div className="">
            <div className="loader">
            </div>
        </div>
    }

    return <div className='form'>
        <div className='select'>
            <section
                className={selected ? '' : 'grey'}
                onClick={() => { !selected && setSelected(true) }}
            >
                <p>Log in</p>
            </section>
            <section
                className={!selected ? '' : 'grey'}
                onClick={() => { selected && setSelected(false) }}
            >
                <p>Register</p>
            </section>
        </div>
        <div className='input'>
            <label>Email</label>
            <input
                type="text"
                placeholder="insert email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={redMail ? 'red' : ''}
            ></input>
        </div>
        <div className='input'>
            <label>Password</label>
            <input
                type="password"
                placeholder="insert password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={redPass ? 'red' : ''}
            ></input>
        </div>
        <a href='http://localhost:3000/'>Forgot password?</a>
        <button
            onClick={() => postLogin(email, password)}
        >LOG IN</button>
        {isLoading &&<Loader></Loader>}
    </div>
}