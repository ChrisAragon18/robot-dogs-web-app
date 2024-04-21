import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'

function Search() {
    const [selectedImage, setSelectedImage] = useState<string | undefined>()
    const [isConfirmed, setIsConfirmed] = useState(false)
    const [selectedFile, setSelectedFile] = useState<File | undefined>()
    const [isSearching, setIsSearching] = useState(false)
    const [results, setResults] = useState<{ name: string, confidence: number } | null>(null)

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return // To handle the null case

        setSelectedFile(event.target.files[0])
        setSelectedImage(URL.createObjectURL(event.target.files[0]))
        setIsConfirmed(false) // Reset the confirmation state when a new image is uploaded
    }

    const handleConfirm = () => {
        // Create a FormData object
        let formData = new FormData()

        // Append the selected image file to the FormData object
        if (selectedFile) {
            formData.append('image', selectedFile)
        }

        // Send a POST request to the server with the image file
        fetch('http://10.12.42.22:3000/image', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error))

        setIsConfirmed(true) // Set the confirmation state to true when the image is confirmed
    }

    const handleSearch = () => {
        console.log('Start search')
        setIsSearching(true) // Set isSearching to true when the search starts

        fetch('http://10.12.42.22:3000/start_search')
            .then(response => response.text())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error))
    }

    // Add this useEffect hook
    useEffect(() => {
        if (isSearching) {
            const interval = setInterval(() => {
                fetch('http://10.12.42.22:3000/results')
                    .then(response => response.json())
                    .then(data => {
                        setResults(data)
                        if (data) {
                            setIsSearching(false)
                        }
                    })
                    .catch(error => console.error('Error:', error))
            }, 5000) // Fetch results every 5 seconds

            return () => clearInterval(interval) // Clean up on unmount or when isSearching changes to false
        }
    }, [isSearching]) // Run this effect when isSearching changes

    return (
        <>
            <Navbar />

            <div className="flex flex-col items-center justify-start h-screen pt-2">
                {isConfirmed && !isSearching && (
                    <div role="alert" className="alert alert-success mt-4 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Image confirmed!</span>
                    </div>
                )}

                {!isConfirmed && (
                    <>
                        <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" id="fileUpload" />
                        <button className="btn btn-secondary" onClick={() => document.getElementById('fileUpload')?.click()}>Upload Image</button>
                    </>
                )}
                {selectedImage && !isConfirmed && (
                    <div className="mt-4">
                        <img src={selectedImage} alt="Selected" className="w-48 h-48 object-cover" />
                        <button className="btn btn-secondary mt-4" onClick={handleConfirm}>Confirm</button>
                    </div>
                )}
                {isConfirmed && !isSearching && (
                    <button className="btn btn-secondary mt-4" onClick={handleSearch}>Start Search</button>
                )}
                {isSearching && (
                    <div role="alert" className="alert alert-info mt-4 mb-4">
                        <span>Currently searching...</span>
                    </div>
                )}
                {results && (
                    <div role="alert" className="alert alert-success mt-4 mb-4">
                        <span>Person found: {results.name} with confidence: {results.confidence}%</span>
                    </div>
                )}
            </div>
        </>
    )
}

export default Search
