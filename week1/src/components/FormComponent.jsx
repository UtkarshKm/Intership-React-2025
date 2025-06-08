import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

const FormComponent = () => {
	const navigate = useNavigate();

	// Form state - unified object approach
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		username: "",
		email: "",
		password: "",
		phoneNumber: "",
		countryCode: "+1",
		country: "",
		city: "",
		panNumber: "",
		aadharNumber: "",
	});
	// Error state - unified object approach
	const [errors, setErrors] = useState({});

	// Password visibility state
	const [showPassword, setShowPassword] = useState(false);

	// Constants
	const countryCodeToCountry = {"+1": "USA", "+44": "UK", "+91": "India"};
	const countries = ["USA", "Canada", "UK", "India"];
	const citiesByCountry = {
		USA: ["New York", "Los Angeles", "Chicago"],
		Canada: ["Toronto", "Vancouver", "Montreal"],
		UK: ["London", "Birmingham", "Manchester"],
		India: ["Mumbai", "Delhi", "Bangalore"],
	};

	// Validation functions
	const validateRequired = (value) => {
		return !value?.trim() ? "This field is required" : "";
	};

	const validateEmail = (email) => {
		if (!email.trim()) return "Email is required";
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return !emailRegex.test(email) ? "Please enter a valid email address" : "";
	};

	const validatePan = (pan) => {
		if (!pan.trim()) return "PAN number is required";
		const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
		return !panRegex.test(pan) ? "PAN format: ABCDE1234F" : "";
	};
	const validateAadhar = (aadhar) => {
		if (!aadhar.trim()) return "Aadhar number is required";
		const aadharRegex = /^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/;
		return !aadharRegex.test(aadhar)
			? "Aadhar format: XXXX XXXX XXXX (starts with 2-9)"
			: "";
	};

	const validatePhone = (phone) => {
		if (!phone.trim()) return "Phone number is required";
		const phoneRegex = /^[0-9]{10}$/;
		return !phoneRegex.test(phone)
			? "Phone number must be exactly 10 digits"
			: "";
	};

	// Unified field update handler
	const updateField = (field, value) => {
		setFormData((prev) => ({...prev, [field]: value}));
		// Real-time validation
		let error = "";
		switch (field) {
			case "email":
				error = validateEmail(value);
				break;
			case "phoneNumber":
				error = validatePhone(value);
				break;
			case "panNumber":
				error = validatePan(value);
				break;
			case "aadharNumber":
				error = validateAadhar(value);
				break;
			default:
				error = validateRequired(value);
		}

		setErrors((prev) => ({...prev, [field]: error}));
	};

	// Handle country code change with auto-country setting
	const handleCountryCodeChange = (e) => {
		const selectedCode = e.target.value;
		updateField("countryCode", selectedCode);

		if (countryCodeToCountry[selectedCode]) {
			updateField("country", countryCodeToCountry[selectedCode]);
			updateField("city", ""); // Reset city
			setErrors((prev) => ({...prev, city: ""}));
		}
	};

	// Handle country change with city reset
	const handleCountryChange = (e) => {
		const selectedCountry = e.target.value;
		updateField("country", selectedCountry);
		updateField("city", ""); // Reset city
		setErrors((prev) => ({...prev, city: ""}));
	};

	// Auto-format Aadhar number
	const handleAadharChange = (e) => {
		let value = e.target.value.replace(/\s/g, "").replace(/\D/g, "");
		if (value.length > 4 && value.length <= 8) {
			value = value.slice(0, 4) + " " + value.slice(4);
		} else if (value.length > 8) {
			value =
				value.slice(0, 4) + " " + value.slice(4, 8) + " " + value.slice(8, 12);
		}
		updateField("aadharNumber", value);
	};

	// Check if form is valid
	const isFormValid = () => {
		const requiredFields = Object.keys(formData).every((key) =>
			formData[key].trim()
		);
		const noErrors = Object.values(errors).every((error) => !error);
		return requiredFields && noErrors;
	};

	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();

		// Final validation check
		const finalErrors = {};
		finalErrors.firstName = validateRequired(formData.firstName);
		finalErrors.lastName = validateRequired(formData.lastName);
		finalErrors.username = validateRequired(formData.username);
		finalErrors.email = validateEmail(formData.email);
		finalErrors.password = validateRequired(formData.password);
		finalErrors.phoneNumber = validatePhone(formData.phoneNumber);
		finalErrors.country = validateRequired(formData.country);
		finalErrors.city = validateRequired(formData.city);
		finalErrors.panNumber = validatePan(formData.panNumber);
		finalErrors.aadharNumber = validateAadhar(formData.aadharNumber);

		setErrors(finalErrors);

		// Check if any errors exist
		if (Object.values(finalErrors).some((error) => error)) {
			return;
		}

		// Navigate to details page with form data
		navigate("/details", {state: formData});
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>First Name:</label>
				<input
					type="text"
					value={formData.firstName}
					onChange={(e) => updateField("firstName", e.target.value)}
					autoComplete="given-name"
				/>
				{errors.firstName && <div className="error">{errors.firstName}</div>}
			</div>
			<div>
				<label>Last Name:</label>
				<input
					type="text"
					value={formData.lastName}
					onChange={(e) => updateField("lastName", e.target.value)}
					autoComplete="family-name"
				/>
				{errors.lastName && <div className="error">{errors.lastName}</div>}
			</div>
			<div>
				<label>Username:</label>
				<input
					type="text"
					value={formData.username}
					onChange={(e) => updateField("username", e.target.value)}
					autoComplete="username"
				/>
				{errors.username && <div className="error">{errors.username}</div>}
			</div>
			<div>
				<label>E-mail:</label>
				<input
					type="email"
					value={formData.email}
					onChange={(e) => updateField("email", e.target.value)}
					placeholder="example@email.com"
					autoComplete="email"
				/>
				{errors.email && <div className="error">{errors.email}</div>}
			</div>{" "}
			<div>
				<label>Password:</label>
				<div
					style={{position: "relative", display: "flex", alignItems: "center"}}
				>
					<input
						type={showPassword ? "text" : "password"}
						value={formData.password}
						onChange={(e) => updateField("password", e.target.value)}
						autoComplete="new-password"
						style={{paddingRight: "40px", flex: 1}}
					/>{" "}
					<button
						type="button"
						onClick={() => setShowPassword(!showPassword)}
						style={{
							position: "absolute",
							right: "8px",
							background: "none",
							border: "none",
							cursor: "pointer",
							fontSize: "12px",
							color: "#007bff",
							padding: "2px 4px",
							textDecoration: "underline",
						}}
						aria-label={showPassword ? "Hide password" : "Show password"}
					>
						{showPassword ? "Hide" : "Show"}
					</button>
				</div>
				{errors.password && <div className="error">{errors.password}</div>}
			</div>
			<div>
				<label>Phone Number:</label>
				<select
					value={formData.countryCode}
					onChange={handleCountryCodeChange}
				>
					<option value="+1">+1</option>
					<option value="+44">+44</option>
					<option value="+91">+91</option>
				</select>{" "}
				<input
					type="tel"
					value={formData.phoneNumber}
					onChange={(e) => {
						// Only allow digits and limit to 10 characters
						const value = e.target.value.replace(/\D/g, "").slice(0, 10);
						updateField("phoneNumber", value);
					}}
					placeholder="1234567890"
					autoComplete="tel"
					maxLength="10"
				/>
				<small style={{color: "#666", fontSize: "12px"}}>
					Enter 10-digit phone number
				</small>
				{errors.phoneNumber && (
					<div className="error">{errors.phoneNumber}</div>
				)}
			</div>
			<div>
				<label>Country:</label>
				<select
					value={formData.country}
					onChange={handleCountryChange}
					autoComplete="country"
				>
					<option value="">Select Country</option>
					{countries.map((country) => (
						<option
							key={country}
							value={country}
						>
							{country}
						</option>
					))}
				</select>
				{errors.country && <div className="error">{errors.country}</div>}
			</div>
			<div>
				<label>City:</label>
				<select
					value={formData.city}
					onChange={(e) => updateField("city", e.target.value)}
					disabled={!formData.country}
					autoComplete="address-level2"
				>
					<option value="">Select City</option>
					{formData.country &&
						citiesByCountry[formData.country]?.map((city) => (
							<option
								key={city}
								value={city}
							>
								{city}
							</option>
						))}
				</select>
				{errors.city && <div className="error">{errors.city}</div>}
			</div>
			<div>
				<label>Pan Number:</label>
				<input
					type="text"
					value={formData.panNumber}
					onChange={(e) =>
						updateField("panNumber", e.target.value.toUpperCase())
					}
					placeholder="ABCDE1234F"
					maxLength="10"
					autoComplete="off"
				/>
				<small style={{color: "#666", fontSize: "12px"}}>
					Format: 5 letters + 4 digits + 1 letter
				</small>
				{errors.panNumber && <div className="error">{errors.panNumber}</div>}
			</div>
			<div>
				<label>Aadhar Number:</label>
				<input
					type="text"
					value={formData.aadharNumber}
					onChange={handleAadharChange}
					placeholder="2345 6789 0123"
					maxLength="14"
					autoComplete="off"
				/>
				<small style={{color: "#666", fontSize: "12px"}}>
					Format: XXXX XXXX XXXX (starts with 2-9)
				</small>
				{errors.aadharNumber && (
					<div className="error">{errors.aadharNumber}</div>
				)}
			</div>
			<button
				type="submit"
				disabled={!isFormValid()}
			>
				Submit
			</button>
		</form>
	);
};

export default FormComponent;
