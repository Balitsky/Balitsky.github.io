class ServerAudioAPI {
    public static connect(url: string): Promise<WebSocket> {
        return new Promise<WebSocket>((resolve, reject) => {
            let ws: WebSocket = new WebSocket(url)
            ws.onopen = () => resolve(ws)
            ws.onerror = (ev) => {
                ws.close()
                reject(ev)
            }
        })
    }
}

class AudioDataWrapper {
    private audioBlob: Blob[] = [];

    constructor(ws: WebSocket) {
        ws.onmessage = (m: MessageEvent) => {
            this.audioBlob = [new Blob([...this.audioBlob, m.data])]
        }
    }

    public data(): Blob[] {
        return this.audioBlob
    }
}

class LoopAudio {
    private audioElem: HTMLAudioElement

    constructor(wrapper: AudioDataWrapper) {
        let audio = this.audioElem = new Audio()
        let callback = () => this.waitData(wrapper, (data: Blob) => {
            audio.src = URL.createObjectURL(data)
            audio.play()
        })

        audio.onended = callback
        setTimeout(callback, 200)
    }

    private waitData(wrapper: AudioDataWrapper, callback: (data: Blob) => void): void {
        let data = wrapper.data().shift()
        data ? callback(data)
            : setTimeout(() => this.waitData(wrapper, callback), 200)
    }

    public mute(flag: boolean): void {
        this.audioElem.muted = flag
    }
}

const AudioData = () => {
    return ServerAudioAPI.connect('ws://localhost:8800')
        .then(ws => new AudioDataWrapper(ws))
        .then(wrapper => new LoopAudio(wrapper))
}
export default AudioData