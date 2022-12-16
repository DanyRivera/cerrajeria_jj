import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import MarkerIcon from 'leaflet/dist/images/marker-icon.png';
import L from 'leaflet';

const Ubicacion = () => {

    const markerIcon = new L.Icon({
        iconUrl: MarkerIcon,
        iconSize: [35, 45]
    })

    return (
        <section className='my-16 md:mx-24' id='ubicacion'>
            <h2 className='text-center text-3xl md:text-4xl'>Ubicación</h2>
            <MapContainer
                className="mt-10 md:p-3 h-[28rem] md:h-[35rem] z-10 md:rounded-xl"
                center={[19.00593, -98.19812]}
                zoom={18}
                scrollWheelZoom={true}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker icon={markerIcon} position={[19.00593, -98.19812]}>
                    <Popup >
                        <p>
                            Cerrajería J & J{' '}
                            <a
                                href="https://goo.gl/maps/i79jed82WidWk2Q57"
                                target="_blank"
                                rel="noreferrer"
                            >Ver En Maps</a>
                        </p>
                    </Popup>
                </Marker>
            </MapContainer>

        </section>
    )
}

export default Ubicacion