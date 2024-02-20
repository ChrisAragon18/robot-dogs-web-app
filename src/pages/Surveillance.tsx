import Navbar from '../components/Navbar';

function Surveillance() {
    return (
        <>
            <Navbar />
            
            <div className="container flex mx-auto m-10">
                {/* Camera Feed 1 */}
                <div className='p-8'>
                    <p>Robot 1</p>
                </div> 
                
                {/* Camera Feed 2 */}
                <div className='p-8'>
                    <p>Robot 2</p>
                </div> 
            </div>
        </>
        
    )
}

export default Surveillance