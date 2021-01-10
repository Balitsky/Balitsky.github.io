import React, {useEffect, useState} from 'react'
import AudioData from '../WSAudio'
import loading from '../assets/loading.gif'

let mute: (mute: boolean) => void

const AudioStream: React.FC = () => {
    let [pending, setPending] = useState<boolean>(false)
    let [enable, setEnable] = useState<boolean>(true)

    const connect = () => {
        setPending(true)
        AudioData()
            .then(lopper => {
                mute = (flag: boolean) => lopper.mute(flag)
                setEnable(true)
            })
            .catch(() => setEnable(false))
            .finally(() => setPending(false))
    }

    useEffect(() => {
        connect()
    }, [])

    return (
        pending ?
            <>
                <h1 className="pending">PENDING</h1>
                <img className='loading' src={loading} alt='loading'/>
            </>
            :
            enable ?
                <div>
                    <button className="button waves-effect waves-light btn-large blue darken-1"
                            onClick={() => {
                                mute(false)
                            }}>Play</button>
                    <button className="button waves-effect waves-light btn-large blue darken-1"
                            onClick={() => mute(true)}>Mute</button>
                </div>
                :
                <>
                    <h1 className="not_available_data">Sorry, data not available</h1>
                    <button className="button waves-effect waves-light btn-large blue darken-1"
                            onClick={connect}>Try to connect
                    </button>
                </>
    )
}

export default AudioStream