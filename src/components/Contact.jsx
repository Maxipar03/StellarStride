import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import '../index.css'
import astroContact from "../assets/astro.webp"


const Contact = () => {

    const [formData, setFormData] = useState({
        company: "",
        email: "",
        plan: "",
        text: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
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
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="contactImageContainer">
                <img className="contactImage" src={astroContact} alt="astronaut" />
            </div>
            <div className="contactContainer">
                <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                />
                <input
                    type="text"
                    name="plan"
                    value={formData.plan}
                    onChange={handleChange}
                    placeholder="Plans"
                    required
                />
                <textarea
                    name="text"
                    value={formData.text}
                    onChange={handleChange}
                    placeholder="Description"
                ></textarea>
                <button type="submit" className="button form">Send Form</button>
            </div>
        </form>
    )
}

export default Contact