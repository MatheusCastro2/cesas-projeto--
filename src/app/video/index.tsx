
import './styles.css'

export default function Video() {
    return (
        <video className="card-video" autoPlay loop muted playsInline>
            <source src={'/assets/cesasvid.mp4'} type="video/mp4" />
            Seu navegador não suporta o vídeo.
        </video>
    )
}