import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import CountryCode from "../../../data/countrycode.json";
import { apiConnector } from "../../../services/apiconnector";
import { contactusEndpoint } from "../../../services/apis";

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },   // are both inbuilt in this - Yes
  } = useForm();

  const submitContactForm = async (data) => {
    // console.log("Form Submitted:", data);
    try {
      setLoading(true);

      // Why contactusEndpoint.CONTACT_US_API and not directly CONTACT_US_API?
      // The reason is that CONTACT_US_API is a string and if we directly use it, it will be a
      // string and not a variable. By using contactusEndpoint.CONTACT_US_API, we are using
      // the value of CONTACT_US_API variable which is a string. This is important because
      // when we use a variable, the value of the variable is used and not the variable name.
      // In this case, if we directly use CONTACT_US_API, it will be a string and not the
      // value of CONTACT_US_API variable which is a string.
      const response = await apiConnector("POST", contactusEndpoint.CONTACT_US_API);
      console.log("Contact Us Response", response);
      setLoading(false);
    } catch {
      console.log("Error in contact us form");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstname: "",
        lastname: "",
        message: "",
        phoneNo: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <form
      onSubmit={handleSubmit(submitContactForm)}
      className="max-w-2xl mx-auto bg-white p-8 shadow-lg rounded-lg"
    >
      {/* Name Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="firstname">
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            placeholder="Enter first name"
            {...register("firstname", { required: true })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          {errors.firstname && <span className="text-red-500 text-sm">Please enter your name.</span>}
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="lastname">
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            placeholder="Enter last name"
            {...register("lastname", { required: true })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          {errors.lastname && <span className="text-red-500 text-sm">Please enter your last name.</span>}
        </div>
      </div>

      {/* Email Field */}
      <div className="mt-4">
        <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter email address"
          {...register("email", { required: true })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        {errors.email && <span className="text-red-500 text-sm">Please enter your Email address.</span>}
      </div>

      {/* Phone Number */}
      <div className="mt-4">
        <label className="block text-gray-700 font-medium mb-1" htmlFor="phonenumber">
          Phone Number
        </label>
        <div className="flex">
          {/* Country Code */}
          <select
            id="countrycode"
            {...register("countrycode", { required: true })}
            className="p-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 bg-gray-50 w-32"
          >
            <option value="+91">+91 - India</option>
            {CountryCode.map((ele, i) => (
              <option key={i} value={ele.code}>
                {ele.code} - {ele.country}
              </option>
            ))}
          </select>

          {/* Phone Number Input */}
          <input
            type="number"
            id="phonenumber"
            placeholder="12345 67890"
            {...register("phoneNo", {
              required: "Please enter your Phone Number.",
              maxLength: { value: 12, message: "Invalid Phone Number" },
              minLength: { value: 10, message: "Invalid Phone Number" },
            })}
            className="w-full p-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {errors.phoneNo && <span className="text-red-500 text-sm">{errors.phoneNo.message}</span>}
      </div>

      {/* Message Field */}
      <div className="mt-4">
        <label className="block text-gray-700 font-medium mb-1" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          cols="30"
          rows="5"
          placeholder="Enter your message here"
          {...register("message", { required: true })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        {errors.message && <span className="text-red-500 text-sm">Please enter your Message.</span>}
      </div>

      {/* Submit Button */}
      <button
        disabled={loading}   // This will disable the button while the form is being submitted, 
        // so the user can't click the button multiple times and send the form multiple times.
        type="submit"
        className="mt-6 w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

    </form>

  );
};

export default ContactUsForm;
