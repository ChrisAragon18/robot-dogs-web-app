import Navbar from '../components/Navbar'

function Control() {
    return (
        <>
            <Navbar />
            {/* Controler */}
            <div className='container flex mx-auto p-8'>
                <div id='controls' className='grid grid-cols-3 gap-4 '>

                    <div className='grid-cols-subgrid col-span-3 mx-auto'>
                        <button
                            className="bg-blue-400 hover:bg-blue-700 text-black text-2xl font-bold p-10 py-4 rounded"
                        >↑</button>
                    </div>

                    <button
                        className="bg-blue-400 hover:bg-blue-700 text-black text-2xl font-bold p-10 py-4 rounded"
                    >←</button>
                    <button
                        className="bg-blue-400 hover:bg-blue-700 text-black text-2xl font-bold p-10 py-4 rounded"
                    >↓</button>
                    <button
                        className="bg-blue-400 hover:bg-blue-700 text-black text-2xl font-bold p-10 py-4 rounded"
                    >→</button>
                </div>

                <div>
                    something
                </div>
            </div>
        </>
    )
}

export default Control