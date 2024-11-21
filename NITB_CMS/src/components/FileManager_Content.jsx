import React, { useState } from 'react';
import styles from './FileManager_Content.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { main } from '@popperjs/core';

function FileManager_Content() {
    const [progress, setProgress] = useState(0);
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [orderBy, setOrderBy] = useState('');
    const [radioValue, setRadioValue] = useState('');

    const handleFileUpload = (e) => {
        const uploadedFile = e.target.files[0];
        setFile(uploadedFile);

        // Simulating file upload progress
        setProgress(0);
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 10;
            });
        }, 200);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log({
            title,
            summary,
            description,
            date,
            file,
            orderBy,
            radioValue,
        });
        alert('Form submitted successfully!');
    };

    return (
        <main className='main' id='main'>
        <div className={`${styles.container}  mt-3 `}>
            <h2>File Manager</h2>
            <form onSubmit={handleFormSubmit}>
                {/* Title */}
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>

                {/* Summary */}
                <div className="mb-3">
                    <label htmlFor="summary" className="form-label">Summary</label>
                    <textarea
                        className="form-control"
                        id="summary"
                        value={summary}
                        onChange={(e) => setSummary(e.target.value)}
                        rows="2"
                        required
                    ></textarea>
                </div>

                {/* Description */}
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description/Details</label>
                    <textarea
                        className="form-control"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows="4"
                        required
                    ></textarea>
                </div>

                {/* Date */}
                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Date</label>
                    <input
                        type="date"
                        className="form-control"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>

                {/* File Uploader */}
                <div className="mb-3">
                    <label htmlFor="file" className="form-label">File Uploader</label>
                    <input
                        type="file"
                        className="form-control"
                        id="file"
                        onChange={handleFileUpload}
                        required
                    />
                    <div className="progress mt-2">
                        <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: `${progress}%` }}
                            aria-valuenow={progress}
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >
                            {progress}%
                        </div>
                    </div>
                </div>

                {/* Order By */}
                <div className="mb-3">
                    <label htmlFor="orderBy" className="form-label">Order By</label>
                    <input
                        type="text"
                        className="form-control"
                        id="orderBy"
                        value={orderBy}
                        onChange={(e) => setOrderBy(e.target.value)}
                        required
                    />
                </div>

                {/* T/F Radio Buttons */}
                <div className="mb-3">
                    <label className="form-label">True/False</label>
                    <div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="radioOptions"
                                id="trueOption"
                                value="true"
                                checked={radioValue === 'true'}
                                onChange={(e) => setRadioValue(e.target.value)}
                            />
                            <label className="form-check-label" htmlFor="trueOption">
                                True
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="radioOptions"
                                id="falseOption"
                                value="false"
                                checked={radioValue === 'false'}
                                onChange={(e) => setRadioValue(e.target.value)}
                            />
                            <label className="form-check-label" htmlFor="falseOption">
                                False
                            </label>
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
        </main>
    
    );
}

export default FileManager_Content;
