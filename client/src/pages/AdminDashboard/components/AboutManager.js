import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { getAbout, updateAbout, createAbout } from '../../../services/aboutService';

const AboutManager = () => {
  const [info, setInfo] = useState('');
  const [aboutId, setAboutId] = useState(null);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const res = await getAbout();
        if (res && res.info) {
          setInfo(res.info);
          setAboutId(res.id);
        }
      } catch (err) {
        console.error('Error fetching about info:', err);
      }
    };

    fetchAbout();
  }, []);

  const handleSave = async () => {
    try {
      if (aboutId) {
        await updateAbout(aboutId, { info });
      } else {
        const res = await createAbout({ info });
        setAboutId(res.id);
      }
      alert('About info updated successfully!');
    } catch (err) {
      console.error('Error saving about info:', err);
    }
  };

  return (
    <div className="admin-section">
      <h2 className="text-primary mb-4"><span role="img" aria-label="edit">✏️</span> Manage About Info</h2>
      <hr className="border-success mb-4" />

      <ReactQuill theme="snow" value={info} onChange={setInfo} className="mb-4" />

      <button onClick={handleSave} className="btn btn-success">Save Info</button>
    </div>
  );
};

export default AboutManager;
