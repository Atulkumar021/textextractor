import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import './Imgupload.css';

const ImageUpload = () => {
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [text, setText] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [isTextExtracted, setIsTextExtracted] = useState(false);
    const [isLoadingImage, setIsLoadingImage] = useState(false);
    const [isLoadingText, setIsLoadingText] = useState(false);
    const [copyButtonText, setCopyButtonText] = useState('Copy'); // New state for copy button text
    const textRef = useRef(null);

    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        const reader = new FileReader();
    
        reader.onloadstart = () => setIsLoadingImage(true);

        reader.onloadend = () => {
            setImage(reader.result.split(',')[1]); // Remove the prefix `data:image/...;base64,`
            setImagePreview(reader.result);
            setIsLoadingImage(false);
            setIsTextExtracted(false);
        };
        reader.readAsDataURL(file);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*' });

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        setText('');
        setIsLoadingText(true);
        try {
            const response = await axios.post('https://text-extractor-422317.de.r.appspot.com/detect-text', { image });
        
            console.log("This is response data", response?.data[0]?.description);
            setText(response?.data[0]?.description);
            setIsTextExtracted(true);
            textRef.current.scrollIntoView({ behavior: 'smooth' });
        } catch (error) { 
            console.error('Error detecting text:', error);
           
        } finally {
            setIsLoadingText(false);
        }
    };

    useEffect(() => {
        if (isTextExtracted && textRef.current) {
            textRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [isTextExtracted]);

    const handleCopy = () => {
        navigator.clipboard.writeText(text).then(() => {
            setCopyButtonText('Copied'); // Change button text to "Copied"
            setTimeout(() => setCopyButtonText('Copy'), 2000); // Revert back to "Copy" after 2 seconds
        }).catch(err => {
            console.error('Could not copy text: ', err);
        });
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        setIsEditing(false);
    };

    const handleDownload = () => {
        const element = document.createElement("a");
        const file = new Blob([text], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = "extracted_text.txt";
        document.body.appendChild(element); 
        element.click();
    };

    return (
        <div className='completecont'>
        <div className="container">
            <div className="upload-container">
                <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop an image here, or click to select one</p>
                </div>
                {isLoadingImage && <div className="loader">Loading...</div>}
                {imagePreview && (
                    <img src={imagePreview} alt="Preview" className="image-preview" />
                )}
            </div>
            
            <button 
                type="submit" 
                className="detect-text-button" 
                onClick={handleSubmit} 
                disabled={!image || isTextExtracted || isLoadingText}
            >
                {isLoadingText ? 'Please Wait...' : 'Extract Text'}
            </button>
            {text && (
                <div className="detected-text" ref={textRef}>
                    <h3>Extracted Text:</h3>
                    {isEditing ? (
                        <textarea
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            rows="10"
                        />
                    ) : (
                        <p>{text}</p>
                    )}
                    <div className="button-container">
                        <button className="copy-button" onClick={handleCopy}>{copyButtonText}</button>
                        {isEditing ? (
                            <button className="edit-button" onClick={handleSave}>Save</button>
                        ) : (
                            <button className="edit-button" onClick={handleEdit}>Edit</button>
                        )}
                        <button className="download-button" onClick={handleDownload}>Download as TXT</button>
                    </div>
                </div>
            )}
        </div>
        </div>
    );
};

export default ImageUpload;
