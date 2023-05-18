

      import React, {useState} from "react";

const Login = () => {
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({ name: '', password: '', email: '' });
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSaveData = (event) => {
      event.preventDefault();
      if (formData.name && formData.email && formData.password) {
        const newUser = { ...formData };
        setUsers([...users, newUser]);
        setFormData({ name: '', password: '', email: '' });
      }
    };
  
    return (
      <div className="container">
        <h1 className='text-center m-2'>Sign in</h1>
        <div className='row'>
          <div className='col-6'>
            <form>
              <div className="form-outline mb-4">
                Name: <input type="text" name='name' maxlength="11" value={formData.name} onChange={handleInputChange} className="input1 form-control" required/>
              </div>
              <div className="form-outline mb-4">
                Email: <input type="email"  name='email' value={formData.email} onChange={handleInputChange} className="input1 form-control" required/>
              </div>
              <div className="form-outline mb-4">
                password: <input  type="password" name='password' value={formData.password} onChange={handleInputChange} className="input1 form-control" required/>
              </div>
              <button className="btn btn-primary btn-block mb-4 center" type="button" onClick={handleSaveData} >Save Data</button>
            </form>
          </div>
          <div className='col-6'>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Password</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
  
export default Login;