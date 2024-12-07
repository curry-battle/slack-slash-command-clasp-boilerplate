const doPost = (e: GoogleAppsScript.Events.DoPost) => {
	checkAuthentication(e);
	const response = { text: e.parameter.text };

	return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(
		ContentService.MimeType.JSON,
	);
};

const checkAuthentication = (e: GoogleAppsScript.Events.DoPost) => {
	const verificationToken = PropertiesService.getScriptProperties().getProperty(
		"SLACK_VERIFICATION_TOKEN",
	);

	if (verificationToken != e.parameter.token) {
		throw new Error("Invalid token");
	}
};
