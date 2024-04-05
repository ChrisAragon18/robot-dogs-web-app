import { useState } from 'react'
import Navbar from '../components/Navbar'

function Search() {
    const [selectedImage, setSelectedImage] = useState<string | undefined>();
    const [isConfirmed, setIsConfirmed] = useState(false)

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return // To handle the null case

        setSelectedImage(URL.createObjectURL(event.target.files[0]))
        setIsConfirmed(false) // Reset the confirmation state when a new image is uploaded
    }

    const handleConfirm = () => {
        // Handle the confirmation here. For example, you can send the image to your server or to the robot.
        console.log('Image confirmed')
        setIsConfirmed(true) // Set the confirmation state to true when the image is confirmed
    }

    return (
        <>
            <Navbar />

            <div className="flex flex-col items-center justify-start h-screen pt-2">
                {isConfirmed && (
                    <div role="alert" className="alert alert-success mt-4 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Image confirmed!</span>
                    </div>
                )}

                <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" id="fileUpload" />
                <button className="btn btn-secondary" onClick={() => document.getElementById('fileUpload')?.click()}>Upload Image</button>
                {selectedImage && (
                    <div className="mt-4">
                        <img src={selectedImage} alt="Selected" className="w-48 h-48 object-cover" />
                        <button className="btn btn-secondary mt-4" onClick={handleConfirm}>Confirm</button>
                    </div>
                )}
            </div>
        </>
    )
}

export default Search
