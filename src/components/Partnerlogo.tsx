

const partnerLogos = [
    'logo1.png',
    'logo2.png',
    'logo3.png',
    // Add more logos as needed
];

const PartnerLogos = () => {
    return (
        <div className="partner-logos">
            {partnerLogos.map((logo, index) => (
                <img key={index} src={logo} alt={`Partner ${index}`} className="partner-logo" />
            ))}
        </div>
    );
};

export default PartnerLogos;