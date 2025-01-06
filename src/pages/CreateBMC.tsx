const CreateBMC = () => {


  const handleSubmit = () => {
  
    // Handle BMC creation logic
  };

  return (
    <div className="create-bmc-page">
      <h2>Create Your BMC</h2>
      <form onSubmit={handleSubmit}>
        <button type="submit">Create BMC</button>
      </form>
    </div>
  );
};

export default CreateBMC;
