import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import '../../index.css'
import astroContact from "../../assets/Simple_Torus.svg"


export const Contact = () => {

    const [formData, setFormData] = useState({
        company: "",
        email: "",
        plan: "",
        text: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        let errors = {};
        if (!formData.company.trim()) {
            errors.company = "Company name is required";
        }
        if (!formData.email.trim()) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Invalid email format";
        }
        if (!formData.plan.trim()) {
            errors.plan = "Plan is required";
        }
        if (!formData.plan.trim() || formData.text.length > 200) {
            errors.text = "Description must be less than 200 characters";
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);


        if (Object.keys(validationErrors).length === 0) {
            fetch("https://formspree.io/f/mzzbbewd", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
                .then((response) => {

                    if (response.ok) {
                        let timeInterval

                        Swal.fire({
                            title: "Success!",
                            text: "Form successfully submitted",
                            icon: "success",
                            showConfirmButton: false,
                            timer: 1500,
                            timerProgressBar: true,
                            allowOutsideClick: true,
                            didOpen: () => {
                                timeInterval = setInterval(() => {
                                    const content = Swal.getHtmlContainer();
                                    if (content) {
                                        const b = content.querySelector('b');
                                        if (b) {
                                            b.textContent = Math.ceil(Swal.getTimerLeft() / 1000);
                                        }
                                    }
                                }, 1000);
                            },
                            willClose: () => {
                                clearInterval(timeInterval);
                            }
                        });
                        setFormData({
                            company: "",
                            email: "",
                            plan: "",
                            text: ""
                        });
                    } else {
                        console.error("Error:", error);
                        Swal.fire({
                            title: "Error!",
                            text: "There was a problem submitting the form",
                            icon: "error",
                            confirmButtonText: "OK"
                        });
                    }
                })
                .catch((error) => {
                    console.error("Error:", error);
                    Swal.fire({
                        title: "Error!",
                        text: "Hubo un problema al enviar el formulario",
                        icon: "error",
                        confirmButtonText: "OK"
                    });
                });
        }
    };

    return (
        <section id='contact' className="homeContact">
            <h1 className="titleSection">Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div className="contactContainer">

                    <div className="inputContainer">
                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Company name"
                        />
                        {errors.company && <p className="errorText">{errors.company}</p>}
                    </div>

                    <div className="inputContainer">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                        />
                        {errors.email && <p className="errorText">{errors.email}</p>}
                    </div>

                    <div className="inputContainer">
                        <input
                            type="text"
                            name="plan"
                            value={formData.plan}
                            onChange={handleChange}
                            placeholder="Plans"
                        />
                        {errors.plan && <p className="errorText">{errors.plan}</p>}
                    </div>

                    <div className="inputContainer">
                    <textarea
                        name="text"
                        value={formData.text}
                        onChange={handleChange}
                        placeholder="Describe your project"
                    ></textarea>
                    {errors.text && <p className="errorText">{errors.text}</p>}
                    </div>

                    <button type="submit" className="button form">Send Form</button>
                </div>
                <div className="contactImageContainer">
                    <img className="contactImage" src={astroContact} alt="astronaut" />
                </div>
            </form>
        </section>
    )
}

