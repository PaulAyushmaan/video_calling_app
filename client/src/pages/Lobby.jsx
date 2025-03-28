import React , {useCallback, useState} from 'react'

const LobbyScreen = () => {
    const [email, setEmail] = useState('')
    const [room, setRoom] = useState('')
    const handleSubmitForm = useCallback((e)=>{
        e.preventDefault()
        console.log({
            email,room
        })
    }
    ,[email,room])
    return (
        <div>
            <h1>Lobby</h1>
            <form action="" onSubmit={handleSubmitForm}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <br />
                <label htmlFor="room">Room Number</label>
                <input type="text" id="room" name="room" value={room} onChange={(e)=>setRoom(e.target.value)} />
                <br />
                <button type="submit">Join Room</button>
            </form>
        </div>
    )
}

export default LobbyScreen