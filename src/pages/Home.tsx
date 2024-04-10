import Navbar from '../components/Navbar'

function Home() {
    return (
        <>
            <div>
                <Navbar />
                <div className="flex justify-center space-x-4">
                    <div className="card w-96 bg-secondary shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-black">Welcome!</h2>
                            <p className="text-black text-center">Introducting FAU's robot dogs, Daisy and Milo! You are currently on the web app that allows control of the robot dogs, surveillance from the dog's cameras, and search using facial recognition.</p>
                        </div>
                    </div>

                    <div className="card w-96 bg-secondary shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-black">Meet Daisy!</h2>
                            <figure><img src="/assets/images/daisy.jpg" alt="Daisy" /></figure>

                        </div>
                    </div>

                    <div className="card w-96 bg-secondary shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-black">Meet Milo!</h2>
                            <figure><img src="" alt="Milo" /></figure>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
