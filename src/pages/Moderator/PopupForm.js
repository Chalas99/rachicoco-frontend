import React, {useState} from 'react'

const PopupForm = () => {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
      // Initialize form data properties here
      // For example: name: '', email: '', etc.
    });
    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Perform form validation and handle form submission here
        // You can make API calls, update the database, etc.
        console.log(formData); // Example: Logging form data to the console
        setShowForm(false); // Close the form popup
      };
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
  
  return (
    <div>
     
          <button onClick={() => setShowForm(true)}>Open Form</button>
    
          {showForm && (
            <div className="popup">
              <form onSubmit={handleFormSubmit}>
                {/* Form fields */}
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {/* Additional form fields */}
                {/* ... */}
    
                <button type="submit">Submit</button>
              </form>
    
              <button onClick={() => setShowForm(false)}>Close</button>
            </div>
          )}
      </div>
  )
}

export default PopupForm