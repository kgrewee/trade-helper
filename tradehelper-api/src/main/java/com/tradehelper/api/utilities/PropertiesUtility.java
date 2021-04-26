package com.tradehelper.api.utilities;

import java.io.FileInputStream;
import java.util.Properties;

import net.jacobpeterson.alpaca.AlpacaAPI;
import net.jacobpeterson.alpaca.enums.api.DataAPIType;
import net.jacobpeterson.alpaca.enums.api.EndpointAPIType;

public class PropertiesUtility {

	public static AlpacaAPI getAlpacaAPI() throws Exception {

		Properties prop = new Properties();

		FileInputStream file = new FileInputStream("./alpaca.properties");

		prop.load(file);

		file.close();

		return new AlpacaAPI(prop.getProperty("key_id"), prop.getProperty("secret"), EndpointAPIType.PAPER, DataAPIType.IEX);
	}

}
