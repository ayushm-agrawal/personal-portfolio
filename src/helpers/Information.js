import UniversityLogo from "../resources/university-of-nebraska.png"
import ManifoldLogo from "../resources/MCT.png"
import OpenMinedLogo from "../resources/openmined.png"
import React from "react"

const researchAreasOfInterest = 'Computer Vision, Interpretability, Natural Language Processing, Fundamental Machine Learning';

const homeExperience = [
    ["1", UniversityLogo, 'University of Nebraska', 'Current','#90e190', 'Software Developer at University of Nebraska'],
    ["2", ManifoldLogo, 'Manifold Computing', 'Current','#90e190', 'Independent Researcher at Manifold Computing'],
    ["3", OpenMinedLogo, 'OpenMined', 'Previous','crimson', 'Independent Research Engineer at OpenMined']]

const socialUrls = {
    "twitter": "https://twitter.com/AyushMAgr",
    "instagram": "https://instagram.com/ayushm.agrawal",
    "linkedin": "https://www.linkedin.com/in/ayushmagrawal",
    "github": "https://github.com/ayushm-agrawal",
    "scholar": "https://scholar.google.com/citations?user=eUbagqkAAAAJ&hl=en",
    "mail": "mailto:ayushmagrawal@outlook.com?subject=Hi, Let's Connect!"
}

const aboutDescription = "I am a full-time Software Engineer at University of Nebraska developing applications in Spring Framework and ReactJS. While I develop efficient applications from 9 to 5, I spend my after work hours as an independent researcher working on problems related to Computer Vision and Interpretability. Over the past two years, I have grown a lot as a developer and researcher, and have published two workshop papers at NIPS 2020. ";

const contactCollaboration = "I am open, and looking to collaborate on projects!"


export {homeExperience, researchAreasOfInterest, socialUrls, contactCollaboration, aboutDescription}