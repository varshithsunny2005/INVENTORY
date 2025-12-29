import React, { useState } from "react";
import styles from "./auth.module.scss";
import { TiUserAddOutline } from "react-icons/ti";
import Card from "../../components/card/Card";
import { toast } from "react-toastify";
import { registerUser } from "../../services/authService";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { SET_LOGIN, SET_NAME } from "../../redux/features/auth/authSlice";
import Loader from "../../components/loader/Loader";
import { registerSchema } from "../../schemas/authSchema";

const initialState = {
  name: "",
  email: "",
  password: "",
  password2: "",
};

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const { name, email, password, password2 } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const register = async (e) => {
    e.preventDefault();

    const result = registerSchema.safeParse(formData);
    if (!result.success) {
      result.error.errors.forEach((err) => toast.error(err.message));
      return;
    }

    const userData = { name, email, password };
    setIsLoading(true);
    try {
      const data = await registerUser(userData);
      await dispatch(SET_LOGIN(true));
      await dispatch(SET_NAME(data.name));
      navigate("/dashboard");
    } catch (error) {
      // Optionally handle error
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`container ${styles.auth}`}>
      {isLoading && <Loader />}
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <TiUserAddOutline size={35} color="#999" />
          </div>
          <h2>Register</h2>

          <form onSubmit={register}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              value={password2}
              onChange={handleInputChange}
            />
            <button type="submit" className="--btn --btn-primary --btn-block">
              Register
            </button>
          </form>

          <span className={styles.register}>
            <Link to="/">Home</Link>
            <p> &nbsp; Already have an account? &nbsp;</p>
            <Link to="/login">Login</Link>
          </span>
        </div>
      </Card>
    </div>
  );
};

export default Register;
