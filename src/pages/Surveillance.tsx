import Navbar from '../components/Navbar'

function Surveillance() {
    return (
        <>
            <Navbar />

            <div className="container flex mx-auto m-10">
                {/* Camera Feed 1 */}
                <div className='p-8'>
                    <p>Daisy</p>
                    <img src="http://10.12.42.22:3000/video_feed" alt="Video Feed for Daisy" />
                </div>

                {/* Camera Feed 2 */}
                <div className='p-8'>
                    <p>Milo</p>
                    {/* Add a similar img tag here when the video feed for Milo is available */}
                </div>
            </div>
        </>
    )
}

export default Surveillance
