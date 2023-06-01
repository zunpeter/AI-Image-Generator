import { useState, useRef } from "react"

const Modal = ({ setModalOpen, setSelectedImage, selectedImage, generateVariations }) => {
    const [error, setError] = useState(null)
    const ref = useRef(null)
    console.log('selectedImage', selectedImage)
    const closeModal = () => {
        setModalOpen(false)
        setSelectedImage(null)
    }
    const checkSize = () => {
        if (ref.current.width == 256 && ref.current.height == 256) {
            generateVariations()
        } else {
            setError('Error: Choose 256x256 image only')
        }
    }
    return (
        <div className="modal">
            <div onClick={closeModal}>X</div>
            <div className="img-container">
                {/* {setSelectedImage && <img ref={ref} src={URL.createObjectURL(setSelectedImage)} alt="uploaded image" />} */}
                {setSelectedImage && <img ref={ref} src={setSelectedImage} alt="uploaded image" />}
            </div>
            <p>{error || "* Image must be 256x256"}</p>
            {!error && <button onClick={checkSize}>Generate</button>}
            {error && <button onClick={closeModal}>Close this and try again</button>}

        </div>
    )
}

export default Modal