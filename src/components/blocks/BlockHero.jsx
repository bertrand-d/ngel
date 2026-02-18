"use client";

import Image from "next/image";
import Qualibat from "@/assets/img/QUALIBAT RGE.jpg";
import Warranty from "@/assets/img/logo-garantie.png";
import { useState } from "react";

export default function BlockHero() {
    return (
        <section id="form-steps" className="max-container flex flex gap-xl">
            <div
                className="relative min-h-[535px] flex flex-col justify-center gap-5 flex-1 p-10 pb-2 hero-bg"
            >
                <h1 className="h2-style text-secondary-1 text-center mb-3">Un projet de rénovation durable ?</h1>
                <h2 className="h1-style text-primary-1 text-center mb-15">Votre spécialiste Ngel proche de <span className="text-tertiary-1">chez vous</span><br /> le réalise !</h2>
                <div className="flex gap-5 justify-around">
                    <Image src={Warranty} alt="Warranty" width={128} height={100} />
                    <Image src={Qualibat} alt="Qualibat" width={100} height={100} />
                </div>
            </div>
            <div className="flex-1">
                <MultiStepForm />
            </div>
        </section>
    );
}

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
    
    const [currentStep, setCurrentStep] = useState(0);

    // Définir le flux du formulaire selon les choix
    const getFormFlow = () => {
        const flows = {
            'fenetres': [
                { id: 'product', question: 'Quel(s) produit(s) recherchez-vous ?', type: 'choice', choices: ['Fenêtres et portes fenêtres', 'Portes d\'entrée', 'Volets', 'Portails et clôtures'] },
                { id: 'windowType', question: 'Quelle typologie de fenêtres recherchez-vous ?', type: 'choice', choices: ['Fenêtres PVC', 'Fenêtres ALU', 'Fenêtres BOIS'] },
                { id: 'quantity', question: 'Combien de menuiseries souhaitez-vous changer ?', type: 'choice', choices: ['1', '2', '3', '4', '5', 'Plus de 5'] },
                { id: 'workType', question: 'Quel type de travaux réalisez-vous ?', type: 'choice', choices: ['Construction neuve', 'Rénovation'] },
                { id: 'location', question: 'Quelle est la localisation de votre projet ?', type: 'location', fields: ['postalCode', 'city'] },
                { id: 'contact', question: 'Quelles sont vos coordonnées ?', type: 'contact', fields: ['lastName', 'firstName', 'email', 'phone', 'projectDescription'] }
            ],
            'portes': [
                { id: 'product', question: 'Quel(s) produit(s) recherchez-vous ?', type: 'choice', choices: ['Fenêtres et portes fenêtres', 'Portes d\'entrée', 'Volets', 'Portails et clôtures'] },
                { id: 'doorType', question: 'Quelle typologie de portes recherchez-vous ?', type: 'choice', choices: ['Porte PVC', 'Porte ALU Monobloc', 'Porte ALU', 'Porte ALU/BOIS', 'Porte BOIS', 'Porte RAU-FIPRO'] },
                { id: 'workType', question: 'Quel type de travaux réalisez-vous ?', type: 'choice', choices: ['Construction neuve', 'Rénovation'] },
                { id: 'location', question: 'Quelle est la localisation de votre projet ?', type: 'location', fields: ['postalCode', 'city'] },
                { id: 'contact', question: 'Quelles sont vos coordonnées ?', type: 'contact', fields: ['lastName', 'firstName', 'email', 'phone', 'projectDescription'] }
            ],
            'volets': [
                { id: 'product', question: 'Quel(s) produit(s) recherchez-vous ?', type: 'choice', choices: ['Fenêtres et portes fenêtres', 'Portes d\'entrée', 'Volets', 'Portails et clôtures'] },
                { id: 'shutterType', question: 'Quelle typologie de volets recherchez-vous ?', type: 'choice', choices: ['Volets PVC', 'Volets ALU'] },
                { id: 'quantity', question: 'Combien de menuiseries souhaitez-vous changer ?', type: 'choice', choices: ['1', '2', '3', '4', '5', 'Plus de 5'] },
                { id: 'workType', question: 'Quel type de travaux réalisez-vous ?', type: 'choice', choices: ['Construction neuve', 'Rénovation'] },
                { id: 'location', question: 'Quelle est la localisation de votre projet ?', type: 'location', fields: ['postalCode', 'city'] },
                { id: 'contact', question: 'Quelles sont vos coordonnées ?', type: 'contact', fields: ['lastName', 'firstName', 'email', 'phone', 'projectDescription'] }
            ],
            'portails': [
                { id: 'product', question: 'Quel(s) produit(s) recherchez-vous ?', type: 'choice', choices: ['Fenêtres et portes fenêtres', 'Portes d\'entrée', 'Volets', 'Portails et clôtures'] },
                { id: 'gateType', question: 'Quelle typologie de portails recherchez-vous ?', type: 'choice', choices: ['Portail PVC', 'Portail ALU'] },
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
            'Portails et clôtures': 'portails'
        };

        const flowKey = productMapping[formData.productType];
        return flows[flowKey] || flows.fenetres;
    };

    const steps = getFormFlow();
    const totalSteps = steps.length;
    const progress = ((currentStep + 1) / totalSteps) * 100;

    const handleChoice = (value) => {
        const step = steps[currentStep];
        
        if (step.id === 'product') {
            setFormData({ ...formData, productType: value });
            setCurrentStep(1);
        } else {
            setFormData({ ...formData, [step.id]: value });
            if (currentStep < totalSteps - 1) {
                setCurrentStep(currentStep + 1);
            }
        }
    };

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleNext = () => {
        if (currentStep < totalSteps - 1) {
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
        console.log('Données du formulaire:', formData);
        // Ici vous pouvez ajouter la logique d'envoi du formulaire
        alert('Demande envoyée avec succès !');
    };

    const currentStepData = steps[currentStep];

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg">
            {/* Barre de progression */}
            <div className="mb-8">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                        className="bg-primary-1 h-2.5 rounded-full transition-all duration-500"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <p className="text-sm text-gray-600 mt-2 text-center">
                    Étape {currentStep + 1} sur {totalSteps}
                </p>
            </div>

            {/* Question */}
            <h3 className="h4-style text-secondary-1 mb-6 text-center">
                {currentStepData.question}
            </h3>

            {/* Contenu de l'étape */}
            {currentStepData.type === 'choice' && (
                <>
                    <div className="grid grid-cols-1 gap-3">
                        {currentStepData.choices.map((choice, index) => (
                            <button
                                key={index}
                                onClick={() => handleChoice(choice)}
                                className="p-4 border-2 border-gray-300 rounded-lg hover:border-primary-1 hover:bg-primary-1 hover:text-white transition-all duration-300 text-left font-medium"
                            >
                                {choice}
                            </button>
                        ))}
                    </div>
                    {currentStep > 0 && (
                        <button
                            onClick={handleBack}
                            className="mt-4 w-full bg-gray-200 text-gray-700 py-3 px-6 rounded-lg font-bold hover:bg-gray-300 transition-colors duration-300"
                        >
                            Retour
                        </button>
                    )}
                </>
            )}

            {currentStepData.type === 'location' && (
                <form onSubmit={(e) => { e.preventDefault(); handleNext(); }} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Code postal
                        </label>
                        <input
                            type="text"
                            value={formData.postalCode}
                            onChange={(e) => handleInputChange('postalCode', e.target.value)}
                            required
                            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-primary-1 focus:outline-none"
                            placeholder="Ex: 75001"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Ville
                        </label>
                        <input
                            type="text"
                            value={formData.city}
                            onChange={(e) => handleInputChange('city', e.target.value)}
                            required
                            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-primary-1 focus:outline-none"
                            placeholder="Ex: Paris"
                        />
                    </div>
                    <div className="flex gap-3">
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
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Nom
                            </label>
                            <input
                                type="text"
                                value={formData.lastName}
                                onChange={(e) => handleInputChange('lastName', e.target.value)}
                                required
                                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-primary-1 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Prénom
                            </label>
                            <input
                                type="text"
                                value={formData.firstName}
                                onChange={(e) => handleInputChange('firstName', e.target.value)}
                                required
                                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-primary-1 focus:outline-none"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            required
                            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-primary-1 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Téléphone
                        </label>
                        <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            required
                            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-primary-1 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Votre projet en quelques mots
                        </label>
                        <textarea
                            value={formData.projectDescription}
                            onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                            rows="4"
                            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-primary-1 focus:outline-none"
                            placeholder="Décrivez votre projet..."
                        ></textarea>
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