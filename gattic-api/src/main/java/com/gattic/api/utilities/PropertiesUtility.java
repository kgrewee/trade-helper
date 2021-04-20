package com.gattic.api.utilities;

import java.io.FileInputStream;
import java.util.Properties;

public class PropertiesUtility {

	public static String getAppVersion() throws Exception {

		String versionString = null;

		// to load application's properties, we use this class
		Properties mainProperties = new Properties();

		FileInputStream file;

		// the base folder is ./, the root of the main.properties file
		String path = "./main.properties";

		// load the file handle for main.properties
		file = new FileInputStream(path);

		// load all the properties from this file
		mainProperties.load(file);

		// we have loaded the properties, so close the file handle
		file.close();

		// retrieve the property we are intrested, the app.version
		versionString = mainProperties.getProperty("app.version");

		return versionString;
	}

}
