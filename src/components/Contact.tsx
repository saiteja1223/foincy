import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Phone, Mail, MapPin } from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io5";
import emailjs from '@emailjs/browser';
const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleUserInput = (e:any) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });

    // Clear errors when user types
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let newErrors = { name: "", email: "", message: "" };
    let isValid = true;

    if (!userData.name.trim()) {
      newErrors.name = "Name is required.";
      isValid = false;
    }

    if (!userData.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
      newErrors.email = "Please enter a valid email.";
      isValid = false;
    }

    if (!userData.message.trim()) {
      newErrors.message = "Please enter a message.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };
  const sendEmail = async () => {
    setIsSending(true);
    try {
      await emailjs.send(
        "service_o0ga4ij",
        "template_hrx4jr8",
        {
          name: userData.name,
          email: userData.email,
          messege: userData.message,
        },
        "yCn_eaVlC0lBTNmA8"
      );

      setSuccessMessage("Your message has been sent successfully!");
      setUserData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setSuccessMessage("Something went wrong. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  const submitDetails = (e:any) => {
    e.preventDefault();

    if (validateForm()) {
      sendEmail();
      // console.log(userData);
      // alert("Form submitted successfully!");
      // setUserData({name:'',email:'',message:''});
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to transform your space? Get in touch with us today for a consultation
            and let's bring your vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form className="space-y-6" onSubmit={submitDetails}>
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={userData.name}
                  onChange={handleUserInput}
                  className={`w-full px-4 py-2 border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="Your name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={userData.email}
                  onChange={handleUserInput}
                  className={`w-full px-4 py-2 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  name="message"
                  value={userData.message}
                  onChange={handleUserInput}
                  className={`w-full px-4 py-2 border ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="Your message"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
            {successMessage && (
              <p className="text-green-600 text-center mt-4">{successMessage}</p>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-blue-600 mr-4" />
                  <a
    href="tel:9849139140"
    className="text-blue-600 hover:underline"
  >
    98491 39140
  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-blue-600 mr-4" />
                  <a
   href="mailto:Foincyinteriors@gmail.com"
    className="text-blue-600 hover:underline"
  >
    Foincyinteriors@gmail.com 
  </a>
                </div>
                <div className="flex items-center">
               
                  <IoLogoWhatsapp className="w-6 h-6 text-blue-600 mr-4" />
                  <a
    href="https://wa.me/9849139140"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:underline"
  >
   

                  <span>+91 98491 39140</span>  </a>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                  <a href=" https://goo.gl/maps/dBA2vq9F97wQeHQh9 "  className="text-blue-600 hover:underline">
                  <span>FOINCY INTERIORS & EXTERIORS</span></a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Business Hours</h3>
              <div className="space-y-2">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
