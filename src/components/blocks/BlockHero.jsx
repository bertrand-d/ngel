"use client";

import Image from "next/image";
import Qualibat from "@/assets/img/logo-rge.png";
import Warranty from "@/assets/img/logo-garantie.png";
import doorWindows from "@/assets/img/icons/porte-fenetre.png";
import door from "@/assets/img/icons/porte.png";
import shutter from "@/assets/img/icons/volets.png";
import gate from "@/assets/img/icons/portail.png";
import { useState } from "react";
import ButtonPrimary from "../ButtonPrimary";

export default function BlockHero() {
    return (
        <section id="form-steps" className="max-container flex flex-col gap-md lg:flex-row lg:gap-xl">
            <div className="corner-left flex-1 h-fit">
                <div
                    className="relative min-h-[535px] flex flex-col justify-center gap-5 p-5 lg:p-10 lg:pb-2 hero-bg"
                >
                    <h1 className="h2-style text-secondary-1 text-center mb-5">Un projet de rénovation durable ?</h1>
                    <h2 className="h1-style text-primary-1 text-center mt-5 mb-5">Votre spécialiste n|gel proche de <span className="text-secondary-1">chez vous</span><br /> le réalise !</h2>
                    <div className="flex gap-5 justify-around mt-5">
                        <Image src={Warranty} alt="Warranty" width={128} height={100} />
                        <Image src={Qualibat} alt="Qualibat" width={128} height={100} />
                    </div>
                </div>
            </div>
            <div className="flex-1 flex flex-col gap-5 items-center justify-center">
                <ButtonPrimary />
                <MultiStepForm />
            </div>
        </section>
    );
}

// Règles de validation par champ
const validators = {
    postalCode: (value) => {
        const v = (value || '').trim();
        if (!v) return 'Le code postal est requis.';
        if (v.length < 3 || v.length > 12) return 'Entrez un code postal valide (3 à 12 caractères).';
        if (!/^[\p{L}\d\s\-]+$/u.test(v)) return 'Le code postal ne peut contenir que des lettres, chiffres, espaces ou tirets.';
        return null;
    },
    city: (value) => {
        const v = (value || '').trim();
        if (!v) return 'La ville est requise.';
        if (v.length < 2) return 'La ville doit contenir au moins 2 caractères.';
        if (!/^[\p{L}\s\-']+$/u.test(v)) return 'La ville ne doit contenir que des lettres, espaces, tirets ou apostrophes.';
        return null;
    },
    lastName: (value) => {
        const v = (value || '').trim();
        if (!v) return 'Le nom est requis.';
        if (v.length < 2) return 'Le nom doit contenir au moins 2 caractères.';
        if (!/^[\p{L}\s\-']+$/u.test(v)) return 'Le nom ne doit contenir que des lettres, espaces, tirets ou apostrophes.';
        return null;
    },
    firstName: (value) => {
        const v = (value || '').trim();
        if (!v) return 'Le prénom est requis.';
        if (v.length < 2) return 'Le prénom doit contenir au moins 2 caractères.';
        if (!/^[\p{L}\s\-']+$/u.test(v)) return 'Le prénom ne doit contenir que des lettres, espaces, tirets ou apostrophes.';
        return null;
    },
    email: (value) => {
        const v = (value || '').trim();
        if (!v) return 'L\'email est requis.';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(v)) return 'Entrez une adresse email valide (ex. nom@domaine.fr).';
        return null;
    },
    phone: (value) => {
        const v = (value || '').replace(/\s/g, '').replace(/[.\-]/g, '').replace(/^\+/, '');
        if (!v) return 'Le numéro de téléphone est requis.';
        if (!/^\d{9,15}$/.test(v)) return 'Entrez un numéro valide (9 à 15 chiffres, avec ou sans indicatif pays).';
        return null;
    },
    projectDescription: (value) => {
        const v = (value || '').trim();
        if (v.length > 2000) return 'La description ne doit pas dépasser 2000 caractères.';
        return null;
    }
};

function MultiStepForm() {
    const [formData, setFormData] = useState({
        productType: '',
        subType: '',
        quantity: '',
        workType: '',
        postalCode: '',
        city: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        projectDescription: ''
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [currentStep, setCurrentStep] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Définir le flux du formulaire selon les choix
    const getFormFlow = () => {
        const flows = {
            'fenetres': [
                { id: 'product', question: 'Choisissez votre ouvrage ?', type: 'choice', choices: [{ icon: doorWindows, label: 'Fenêtres et portes fenêtres' }, { icon: door, label: 'Portes d\'entrée' }, { icon: shutter, label: 'Volets' }, { icon: gate, label: 'Stores et Portes de garage' }] },
                { id: 'windowType', question: 'Quelle typologie de fenêtres recherchez-vous ?', type: 'choice', choices: ['Fenêtres PVC', 'Fenêtres ALU', 'Fenêtres Bois'] },
                { id: 'quantity', question: 'Combien de menuiseries souhaitez-vous changer ?', type: 'choice', choices: ['1', '2', '3', '4', '5', 'Plus de 5'] },
                { id: 'workType', question: 'Quel type de travaux réalisez-vous ?', type: 'choice', choices: ['Construction neuve', 'Rénovation'] },
                { id: 'location', question: 'Quelle est la localisation de votre projet ?', type: 'location', fields: ['postalCode', 'city'] },
                { id: 'contact', question: 'Quelles sont vos coordonnées ?', type: 'contact', fields: ['lastName', 'firstName', 'email', 'phone', 'projectDescription'] }
            ],
            'portes': [
                { id: 'product', question: 'Choisissez votre ouvrage ?', type: 'choice', choices: [{ icon: doorWindows, label: 'Fenêtres et portes fenêtres' }, { icon: door, label: 'Portes d\'entrée' }, { icon: shutter, label: 'Volets' }, { icon: gate, label: 'Stores et Portes de garage' }] },
                { id: 'doorType', question: 'Quelle typologie de portes recherchez-vous ?', type: 'choice', choices: ['Porte PVC', 'Porte ALU', 'Porte Bois', 'Porte Blindée'] },
                { id: 'workType', question: 'Quel type de travaux réalisez-vous ?', type: 'choice', choices: ['Construction neuve', 'Rénovation'] },
                { id: 'location', question: 'Quelle est la localisation de votre projet ?', type: 'location', fields: ['postalCode', 'city'] },
                { id: 'contact', question: 'Quelles sont vos coordonnées ?', type: 'contact', fields: ['lastName', 'firstName', 'email', 'phone', 'projectDescription'] }
            ],
            'volets': [
                { id: 'product', question: 'Choisissez votre ouvrage ?', type: 'choice', choices: [{ icon: doorWindows, label: 'Fenêtres et portes fenêtres' }, { icon: door, label: 'Portes d\'entrée' }, { icon: shutter, label: 'Volets' }, { icon: gate, label: 'Stores et Portes de garage' }] },
                { id: 'shutterType', question: 'Quelle typologie de volets recherchez-vous ?', type: 'choice', choices: ['Volet Roulant', 'Volet Battant', 'Volet Persienne'] },
                { id: 'quantity', question: 'Combien de menuiseries souhaitez-vous changer ?', type: 'choice', choices: ['1', '2', '3', '4', '5', 'Plus de 5'] },
                { id: 'workType', question: 'Quel type de travaux réalisez-vous ?', type: 'choice', choices: ['Construction neuve', 'Rénovation'] },
                { id: 'location', question: 'Quelle est la localisation de votre projet ?', type: 'location', fields: ['postalCode', 'city'] },
                { id: 'contact', question: 'Quelles sont vos coordonnées ?', type: 'contact', fields: ['lastName', 'firstName', 'email', 'phone', 'projectDescription'] }
            ],
            'stores': [
                { id: 'product', question: 'Choisissez votre ouvrage ?', type: 'choice', choices: [{ icon: doorWindows, label: 'Fenêtres et portes fenêtres' }, { icon: door, label: 'Portes d\'entrée' }, { icon: shutter, label: 'Volets' }, { icon: gate, label: 'Stores et Portes de garage' }] },
                { id: 'gateType', question: 'Quelle typologie de portes ou de stores recherchez-vous ?', type: 'choice', choices: ['Store', 'Moustiquaire', 'Porte de garage', 'Portail'] },
                { id: 'workType', question: 'Quel type de travaux réalisez-vous ?', type: 'choice', choices: ['Construction neuve', 'Rénovation'] },
                { id: 'location', question: 'Quelle est la localisation de votre projet ?', type: 'location', fields: ['postalCode', 'city'] },
                { id: 'contact', question: 'Quelles sont vos coordonnées ?', type: 'contact', fields: ['lastName', 'firstName', 'email', 'phone', 'projectDescription'] }
            ]
        };

        // Déterminer quel flux utiliser selon le choix du produit
        if (!formData.productType) {
            return [flows.fenetres[0]]; // Première étape commune
        }

        const productMapping = {
            'Fenêtres et portes fenêtres': 'fenetres',
            'Portes d\'entrée': 'portes',
            'Volets': 'volets',
            'Stores et Portes de garage': 'stores'
        };

        const flowKey = productMapping[formData.productType];
        return flows[flowKey] || flows.fenetres;
    };

    const steps = getFormFlow();
    const totalSteps = 6; // Nombre maximum d'étapes
    const progress = ((currentStep + 1) / totalSteps) * 100;

    const handleChoice = (value) => {
        const step = steps[currentStep];

        if (step.id === 'product') {
            setFormData({ ...formData, productType: value });
            setCurrentStep(1);
        } else {
            setFormData({ ...formData, [step.id]: value });
            if (currentStep < steps.length - 1) {
                setCurrentStep(currentStep + 1);
            }
        }
    };

    const validateField = (field) => {
        const validator = validators[field];
        if (!validator) return null;
        const message = validator(formData[field]);
        setErrors((prev) => ({ ...prev, [field]: message || '' }));
        return message;
    };

    const validateFields = (fields) => {
        const newErrors = {};
        fields.forEach((field) => {
            const validator = validators[field];
            if (validator) {
                const message = validator(formData[field]);
                if (message) newErrors[field] = message;
            }
        });
        setErrors((prev) => ({ ...prev, ...newErrors }));
        setTouched((prev) => ({ ...prev, ...Object.fromEntries(fields.map((f) => [f, true])) }));
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
        if (touched[field] && validators[field]) {
            const message = validators[field](value);
            setErrors((prev) => ({ ...prev, [field]: message || '' }));
        }
    };

    const handleBlur = (field) => {
        setTouched((prev) => ({ ...prev, [field]: true }));
        validateField(field);
    };

    const handleNext = () => {
        const step = steps[currentStep];
        if (step.type === 'location' && step.fields) {
            if (!validateFields(step.fields)) return;
        }
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const step = steps[currentStep];
        const contactFields = ['lastName', 'firstName', 'email', 'phone', 'projectDescription'];
        if (step.type === 'contact' && !validateFields(contactFields)) return;
        console.log('Données du formulaire:', formData);
        // Ici vous pouvez ajouter la logique d'envoi du formulaire (API, etc.)
        setIsSubmitted(true);
    };

    const currentStepData = steps[currentStep];

    // Écran de confirmation après envoi réussi
    if (isSubmitted) {
        return (
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-8">
                    <p className="text-sm text-gray-600 mb-2 text-center">
                        Formulaire envoyé
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                            className="bg-primary-1 h-2.5 rounded-full transition-all duration-500"
                            style={{ width: '100%' }}
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center py-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6" aria-hidden>
                        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h3 className="h4-style text-primary-1 mb-3">
                        Demande envoyée avec succès
                    </h3>
                    <p className="text-gray-600 mb-6">
                        Merci pour votre demande. Nous vous recontacterons dans les plus brefs délais.
                    </p>
                    <button
                        type="button"
                        onClick={() => {
                            setIsSubmitted(false);
                            setFormData({
                                productType: '', subType: '', quantity: '', workType: '',
                                postalCode: '', city: '', firstName: '', lastName: '',
                                email: '', phone: '', projectDescription: ''
                            });
                            setErrors({});
                            setTouched({});
                            setCurrentStep(0);
                        }}
                        className="bg-gray-200 text-gray-700 py-3 px-6 rounded-lg font-bold hover:bg-gray-300 transition-colors duration-300"
                    >
                        Faire une nouvelle demande
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg">
            {/* Barre de progression */}
            <div className="mb-8">
                <p className="text-sm text-gray-600 mb-2 text-center">
                    Étape {currentStep + 1} sur {totalSteps}
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                        className="bg-primary-1 h-2.5 rounded-full transition-all duration-500"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>

            {/* Question */}
            <h3 className="h4-style text-primary-1 mb-6 text-center">
                {currentStepData.question}
            </h3>

            {/* Contenu de l'étape */}
            {currentStepData.type === 'choice' && (
                <>
                    <div className="relative z-0 grid grid-cols-2 gap-3">
                        {currentStepData.choices.map((choice, index) => {
                            const value = typeof choice === 'string' ? choice : choice.label;
                            return (
                                <button
                                    key={index}
                                    onClick={() => handleChoice(value)}
                                    className="corner-both-sides flex flex-col items-center justify-center gap-2 bg-white text-secondary-1 cursor-pointer p-4 border-2 border-gray-300 hover:border-primary-1 lg:hover:bg-secondary-1 lg:hover:text-white transition-all duration-300 text-center font-medium"
                                >
                                    {choice.icon && <Image src={choice.icon} alt={choice.label} width={30} height={30} />}
                                    {typeof choice === 'string' ? choice : choice.label}
                                </button>
                            );
                        })}
                    </div>
                    {currentStep > 0 && (
                        <button
                            onClick={handleBack}
                            className="cursor-pointer mt-4 w-full bg-gray-200 text-gray-700 py-3 px-6 rounded-lg font-bold hover:bg-gray-300 transition-colors duration-300"
                        >
                            Retour
                        </button>
                    )}
                </>
            )}

            {currentStepData.type === 'location' && (
                <form onSubmit={(e) => { e.preventDefault(); handleNext(); }} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="postalCode">
                            Code postal
                        </label>
                        <input
                            id="postalCode"
                            type="text"
                            maxLength={12}
                            value={formData.postalCode}
                            onChange={(e) => {
                                const v = e.target.value.replace(/[^\p{L}\d\s\-]/gu, '').slice(0, 12);
                                handleInputChange('postalCode', v);
                            }}
                            onBlur={() => handleBlur('postalCode')}
                            className={`w-full p-3 border-2 rounded-lg focus:outline-none ${errors.postalCode ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-primary-1'}`}
                            placeholder="Ex: 75001"
                            aria-invalid={!!errors.postalCode}
                            aria-describedby={errors.postalCode ? 'postalCode-error' : undefined}
                        />
                        {errors.postalCode && (
                            <p id="postalCode-error" className="mt-1 text-sm text-red-600" role="alert">
                                {errors.postalCode}
                            </p>
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="city">
                            Ville
                        </label>
                        <input
                            id="city"
                            type="text"
                            value={formData.city}
                            onChange={(e) => handleInputChange('city', e.target.value)}
                            onBlur={() => handleBlur('city')}
                            className={`w-full p-3 border-2 rounded-lg focus:outline-none ${errors.city ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-primary-1'}`}
                            placeholder="Ex: Paris"
                            aria-invalid={!!errors.city}
                            aria-describedby={errors.city ? 'city-error' : undefined}
                        />
                        {errors.city && (
                            <p id="city-error" className="mt-1 text-sm text-red-600" role="alert">
                                {errors.city}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col-reverse lg:flex-row gap-3">
                        {currentStep > 0 && (
                            <button
                                type="button"
                                onClick={handleBack}
                                className="flex-1 bg-gray-200 text-gray-700 py-3 px-6 rounded-lg font-bold hover:bg-gray-300 transition-colors duration-300"
                            >
                                Retour
                            </button>
                        )}
                        <button
                            type="submit"
                            className="flex-1 bg-primary-1 text-white py-3 px-6 rounded-lg font-bold hover:bg-secondary-1 transition-colors duration-300"
                        >
                            Suivant
                        </button>
                    </div>
                </form>
            )}

            {currentStepData.type === 'contact' && (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid lg:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="lastName">
                                Nom
                            </label>
                            <input
                                id="lastName"
                                type="text"
                                value={formData.lastName}
                                onChange={(e) => handleInputChange('lastName', e.target.value)}
                                onBlur={() => handleBlur('lastName')}
                                className={`w-full p-3 border-2 rounded-lg focus:outline-none ${errors.lastName ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-primary-1'}`}
                                placeholder="Votre nom"
                                aria-invalid={!!errors.lastName}
                                aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                            />
                            {errors.lastName && (
                                <p id="lastName-error" className="mt-1 text-sm text-red-600" role="alert">
                                    {errors.lastName}
                                </p>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="firstName">
                                Prénom
                            </label>
                            <input
                                id="firstName"
                                type="text"
                                value={formData.firstName}
                                onChange={(e) => handleInputChange('firstName', e.target.value)}
                                onBlur={() => handleBlur('firstName')}
                                className={`w-full p-3 border-2 rounded-lg focus:outline-none ${errors.firstName ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-primary-1'}`}
                                placeholder="Votre prénom"
                                aria-invalid={!!errors.firstName}
                                aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                            />
                            {errors.firstName && (
                                <p id="firstName-error" className="mt-1 text-sm text-red-600" role="alert">
                                    {errors.firstName}
                                </p>
                            )}
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            onBlur={() => handleBlur('email')}
                            className={`w-full p-3 border-2 rounded-lg focus:outline-none ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-primary-1'}`}
                            placeholder="nom@exemple.fr"
                            aria-invalid={!!errors.email}
                            aria-describedby={errors.email ? 'email-error' : undefined}
                        />
                        {errors.email && (
                            <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                                {errors.email}
                            </p>
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="phone">
                            Téléphone
                        </label>
                        <input
                            id="phone"
                            type="tel"
                            inputMode="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            onBlur={() => handleBlur('phone')}
                            className={`w-full p-3 border-2 rounded-lg focus:outline-none ${errors.phone ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-primary-1'}`}
                            placeholder="Ex: 06 12 34 56 78 ou +33 6 12 34 56 78"
                            aria-invalid={!!errors.phone}
                            aria-describedby={errors.phone ? 'phone-error' : undefined}
                        />
                        {errors.phone && (
                            <p id="phone-error" className="mt-1 text-sm text-red-600" role="alert">
                                {errors.phone}
                            </p>
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="projectDescription">
                            Votre projet en quelques mots <span className="text-gray-500 font-normal">(optionnel, 2000 caractères max)</span>
                        </label>
                        <textarea
                            id="projectDescription"
                            value={formData.projectDescription}
                            onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                            onBlur={() => handleBlur('projectDescription')}
                            rows="4"
                            maxLength={2000}
                            className={`w-full p-3 border-2 rounded-lg focus:outline-none ${errors.projectDescription ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-primary-1'}`}
                            placeholder="Décrivez votre projet..."
                            aria-invalid={!!errors.projectDescription}
                            aria-describedby={errors.projectDescription ? 'projectDescription-error' : undefined}
                        />
                        {errors.projectDescription && (
                            <p id="projectDescription-error" className="mt-1 text-sm text-red-600" role="alert">
                                {errors.projectDescription}
                            </p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-primary-1 text-white py-3 px-6 rounded-lg font-bold hover:bg-secondary-1 transition-colors duration-300"
                    >
                        Envoyer ma demande
                    </button>
                </form>
            )}
        </div>
    );
}