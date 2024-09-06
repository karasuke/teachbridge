import React, { useState } from 'react';

export const Creators: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [uploadResponse, setUploadResponse] = useState<any>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFile(event.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            alert('Por favor, selecciona un archivo primero.');
            return;
        }

        const formData = new FormData();
        formData.append('name', selectedFile);

        try {
            const response = await fetch('http://localhost:8080/documents/upload', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Error en la subida del archivo');
            }

            const data = await response.json();
            setUploadResponse(data);
        } catch (error) {
            console.error('Error:', error);
            alert('Hubo un error al subir el archivo.');
        }
    };

    return (
        <div>
            <h2>Subir Archivo</h2>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Subir</button>
            {uploadResponse && (
                <div>
                    <h3>Respuesta del Servidor:</h3>
                    <pre>{JSON.stringify(uploadResponse, null, 2)}</pre>
                    {uploadResponse.fileId && (
                         <div>
                         <h3>Video Subido:</h3>
                         <iframe
                           id="video-iframe"
                           src={`https://drive.google.com/file/d/${uploadResponse.fileId}/preview`}
                           width="640"
                           height="480"
                           
                           title="Video Preview"
                         >
                           Tu navegador no soporta la reproducción de video.
                         </iframe>
                       </div>
                    )}
                </div>
            )}
        </div>
    );
};