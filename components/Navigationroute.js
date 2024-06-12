"use client"
import React, { useState } from "react";

const LocationComponent = () => {
	const [location, setLocation] = useState(null);

	const getLocation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					setLocation({
						latitude: position.coords.latitude,
						longitude: position.coords.longitude,
					});
				},
				(error) => {
					console.error(error);
				}
			);
		} else {
			console.error("Geolocation is not supported by this browser.");
		}
	};

	return (
		<div>
			<button onClick={getLocation}>Get Location</button>
			{location && (
				<div>
					Latitude: {location.latitude}
					<br />
					Longitude: {location.longitude}
				</div>
			)}
		</div>
	);
};

export default LocationComponent;
