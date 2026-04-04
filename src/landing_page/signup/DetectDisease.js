import React, { useState } from "react";
import "./DetectDisease.css";
import Navbar from "../Navbar";

function DetectDisease() {
  const [image, setImage] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [result, setResult] = useState(null);
  const [isDetecting, setIsDetecting] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setImage(URL.createObjectURL(file));
      setResult(null); // Reset previous result when a new image is loaded
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(URL.createObjectURL(file));
      setResult(null); // Reset previous result
    }
  };

  const handleDetect = () => {
    if (!image) return;
    
    setIsDetecting(true);
    // Simulate a network request / processing delay
    setTimeout(() => {
      setResult({
        name: "Apple Scab",
        confidence: "98.5%",
        solution: "Remove and destroy fallen leaves. Apply fungicides like Captan or Mancozeb before the infection spreads.",
      });
      setIsDetecting(false);
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <div className="detect-page mt-5">
        <div className="detect-box">
          <div className="detect-left">
            <h2>Disease Detection</h2>
            <p>Upload a photo of your plant leaf to identify potential diseases and get actionable solutions automatically.</p>

            <form
              className="upload-form"
              onDragEnter={handleDrag}
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="file"
                id="file-upload"
                multiple={false}
                onChange={handleChange}
                accept="image/*"
              />
              <label
                htmlFor="file-upload"
                className={`upload-label ${dragActive ? "drag-active" : ""}`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <div>
                  <svg className="upload-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p>Drag and drop or <span>click to upload</span></p>
                  <p className="upload-hint">Supports: JPG, PNG, JPEG</p>
                </div>
              </label>
            </form>

            <button 
              className={`detect-btn-action ${!image ? "disabled" : ""}`} 
              onClick={handleDetect}
              disabled={!image || isDetecting}
            >
              {isDetecting ? "Analyzing Plant..." : "Detect Disease"}
            </button>
          </div>

          <div className="detect-right">
            <div className="preview-container">
              {image ? (
                <>
                  <img src={image} alt="Plant leaf preview" className="preview-image" />
                  {result && (
                    <div className="result-card fade-in">
                      <div className="result-header">
                        <h3>Detection Results</h3>
                        <span className="confidence-badge">Confidence: {result.confidence}</span>
                      </div>
                      <div className="result-body">
                        <p><strong>Disease:</strong> <span className="disease-name">{result.name}</span></p>
                        <p><strong>Solution:</strong> {result.solution}</p>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="empty-preview">
                  <svg className="leaf-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                    <path d="M12 21a9.004 9.004 0 008.716-6.747A8.995 8.995 0 0012 12a8.995 8.995 0 00-8.716 2.253A9.004 9.004 0 0012 21z" />
                  </svg>
                  <p>Image preview will appear here</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetectDisease;
