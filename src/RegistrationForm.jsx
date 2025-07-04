import React from 'react';
import { useFormik } from 'formik';
import LabelField from './micro/labelField';
import InputFields from './micro/InputFields';
import ButtonInputField from './micro/ButtonFields';
import DropInputField from './micro/dropbox'

export default function RegistrationForm() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      gender: ''
    },
    validate: values => {
      const errors = {};
     const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.com$/;
      const nameRegExp = /^[a-zA-Z]+$/;

      if (!values.firstName) {
        errors.firstName = 'First name is required';
      } else if (!nameRegExp.test(values.firstName)){
          errors.firstName = "only text allowded"
      }

      if (!values.lastName) {
        errors.lastName = 'Last name is required';
      } else if (!nameRegExp.test(values.lastName)){
          errors.lastName = "only text allowded"
      }
      
      if (!values.email) {
        errors.email = 'Email is required';
      } else if (!emailPattern.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if (!values.password) {
        errors.password = 'Password is required';
      } else if (values.password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
      } 


      if (!values.gender) {
        errors.gender = 'Please select a gender';
      }

      return errors;
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const getInputClass = (field) =>
  `w-full px-3 py-2 border rounded-lg focus:outline-none ${
    formik.errors[field] && formik.touched[field]
      ? 'border-red-500 focus:ring-red-500 focus:ring-2'
      : 'border-gray-300 focus:ring-blue-500 focus:ring-2'
  }`;


  return (
 <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md space-y-6">

  <header className="text-center">
    <h2 className="text-2xl font-semibold text-gray-800">User Registration</h2>
  </header>

  {/* First Name */}
  <div>
    <LabelField htmlFor="firstName" name="First Name" className="block text-gray-700 mb-1 font-medium" />
    <InputFields
      id="firstName"
      name="firstName"
      type="text"
      onChange={formik.handleChange}
      value={formik.values.firstName}
      className={getInputClass("firstName")}
    />
    {formik.errors.firstName && <div className="text-red-600 text-sm mt-1">{formik.errors.firstName}</div>}
  </div>

  {/* Last Name */}
  <div>
    <LabelField htmlFor="lastName" name="Last Name" className="block text-gray-700 mb-1 font-medium" />
    <InputFields
      id="lastName"
      name="lastName"
      type="text"
      onChange={formik.handleChange}
      value={formik.values.lastName}
      className={getInputClass("lastName")}
    />
    {formik.errors.lastName && <div className="text-red-600 text-sm mt-1">{formik.errors.lastName}</div>}
  </div>

  {/* Email */}
  <div>
    <LabelField htmlFor="email" name="Email" className="block text-gray-700 mb-1 font-medium" />
    <InputFields
      id="email"
      name="email"
      type="email"
      onChange={formik.handleChange}
      value={formik.values.email}
      className={getInputClass("email")}
    />
    {formik.errors.email && <div className="text-red-600 text-sm mt-1">{formik.errors.email}</div>}
  </div>

  {/* Gender */}
  <div>
    <LabelField htmlFor="gender" name="Gender" className="block text-gray-700 mb-2 font-medium" />
    <div className="flex items-center gap-4">
      <label className="flex items-center gap-1 text-gray-700">
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={formik.handleChange}
          checked={formik.values.gender === 'male'}
          className="accent-blue-500"
        />
        Male
      </label>
      <label className="flex items-center gap-1 text-gray-700">
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={formik.handleChange}
          checked={formik.values.gender === 'female'}
          className="accent-blue-500"
        />
        Female
      </label>
    </div>
    {formik.errors.gender && <div className="text-red-600 text-sm mt-1">{formik.errors.gender}</div>}
  </div>

  {/* Country Dropdown */}
  <div>
    <DropInputField
      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      htmlFor="country"
      label="Country"
      id="country"
      values={["India", "U.S.A", "Bhutan", "Nepal", "China", "Indonesia", "Thailand"]}
      value={formik.values.country}
      onChange={formik.handleChange}
    />
    {formik.errors.country && <div className="text-red-600 text-sm mt-1">{formik.errors.country}</div>}
  </div>

  {/* Password */}
  <div>
    <LabelField htmlFor="password" name="Password" className="block text-gray-700 mb-1 font-medium" />
    <InputFields
      id="password"
      name="password"
      type="password"
      onChange={formik.handleChange}
      value={formik.values.password}
      className={getInputClass("password")}
    />
    {formik.errors.password && <div className="text-red-600 text-sm mt-1">{formik.errors.password}</div>}
  </div>

  {/* Submit Button */}
  <div>
    <ButtonInputField
      type="submit"
      id="submit"
      name="Submit"
      className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
    />
  </div>

   <div>
    <ButtonInputField
      type="submit"
      id="cancel"
      name="cancel"
      className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
    />
  </div>

</form>

  );
}
