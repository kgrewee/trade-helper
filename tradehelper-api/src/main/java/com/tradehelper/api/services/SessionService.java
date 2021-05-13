package com.tradehelper.api.services;

import java.io.File;
import java.io.FileOutputStream;
import java.util.Properties;

import org.springframework.stereotype.Service;

import com.tradehelper.api.models.AlpacaSession;
import com.tradehelper.api.models.BinanceSession;

@Service
public class SessionService {
	public void createSession(AlpacaSession session) throws Exception {
		Properties props = new Properties();

		props.put("id", session.getId());
		props.put("exchange", session.getExchange());
		props.put("name", session.getName());
		props.put("key_id", session.getKey());
		props.put("secret", session.getSecret());
		props.put("base_api_url", session.getApiType());
		props.put("base_data_url", session.getDataType());

		String path = session.getId() + ".properties";
		FileOutputStream outputStrem = new FileOutputStream(path);

		props.store(outputStrem, "Session " + session.getId());
		System.out.println("Alpaca session created");
	}

	public void createSession(BinanceSession session) throws Exception {
		Properties props = new Properties();

		props.put("id", session.getId());
		props.put("exchange", session.getExchange());
		props.put("name", session.getName());
		props.put("exchange", session.getExchange());
		props.put("key_id", session.getKey());
		props.put("secret", session.getSecret());

		String path = session.getId() + ".properties";
		FileOutputStream outputStrem = new FileOutputStream(path);

		props.store(outputStrem, "Session " + session.getId());
		System.out.println("Binance session created");
	}
	
	public void deleteSession(String id) {
		File file = new File(id + ".properties");
		if (file.delete()) {
			System.out.println("Session deleted successfully");
		} else {
			System.out.println("Failed to delete session");
		}
	}
}
