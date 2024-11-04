import { useState } from 'react';
import { addProduct } from '../../redux/apiCalls';
import { useDispatch } from 'react-redux';
import './newProduct.css';

function NewProduct() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [cloudinaryUrl, setCloudinaryUrl] = useState(null);
  const dispatch = useDispatch();

  const cloudinaryName = import.meta.env.VITE_CLOUD_NAME;
  const cloudinaryPreset = import.meta.env.VITE_CLOUD_PRESET;

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCat = (e) => {
    setCat(e.target.value.split(','));
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreviewUrl(URL.createObjectURL(selectedFile));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (!file) {
      console.error('No file selected');
      return;
    }

    // Upload to Cloudinary
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', cloudinaryPreset);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudinaryName}/image/upload`,
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await response.json();
      const downloadURL = data.secure_url;
      setCloudinaryUrl(downloadURL);

      const product = { ...inputs, img: downloadURL, categories: cat };
      addProduct(product, dispatch);
    } catch (error) {
      console.error('Error uploading to Cloudinary:', error);
    }
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input
            type="file"
            id="file"
            accept="image/jpeg, image/png, image/jpg"
            onChange={handleFileChange}
          />
          {previewUrl && (
            <img
              src={previewUrl}
              alt="Local preview"
              style={{ width: '200px', height: 'auto', marginTop: '10px' }}
            />
          )}
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            name="title"
            type="text"
            placeholder="Apple Airpods"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            name="desc"
            type="text"
            placeholder="description..."
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input
            name="price"
            type="number"
            placeholder="100"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Categories</label>
          <input type="text" placeholder="men, women" onChange={handleCat} />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <select name="inStock" onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <button onClick={handleClick} className="addProductButton">
          Create
        </button>
      </form>
    </div>
  );
}

export default NewProduct;
