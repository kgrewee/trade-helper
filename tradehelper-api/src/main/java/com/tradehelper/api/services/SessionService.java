package com.tradehelper.api.services;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import org.springframework.stereotype.Service;

import com.tradehelper.api.models.AlpacaSession;
import com.tradehelper.api.models.BinanceSession;
import com.tradehelper.api.models.Exchange;
import com.tradehelper.api.models.Session;
import com.tradehelper.api.utilities.FileUtility;

import net.jacobpeterson.alpaca.enums.api.DataAPIType;
import net.jacobpeterson.alpaca.enums.api.EndpointAPIType;

@Service
public class SessionService {

	public List<Session> getAllSessions() throws Exception {
		List<Session> sessions = new ArrayList<Session>();
		List<String> files = FileUtility.findFiles(Paths.get(""), ".session");
		files.forEach(x -> {
			try (InputStream input = new FileInputStream(x)) {
				Properties prop = new Properties();

				prop.load(input);

				switch (prop.getProperty("exchange")) {
				case "ALPACA":
					sessions.add(new AlpacaSession(prop.getProperty("id"), prop.getProperty("name"), Exchange.ALPACA,
							prop.getProperty("key_id"), prop.getProperty("secret"), EndpointAPIType.PAPER,
							DataAPIType.IEX));
					break;
				case "BINANCE":
					sessions.add(new BinanceSession(prop.getProperty("id"), prop.getProperty("name"), Exchange.BINANCE,
							prop.getProperty("key_id"), prop.getProperty("secret")));
					break;
				default:

				}

			} catch (IOException ex) {
				ex.printStackTrace();
			}
		});
		return sessions;
	}

	public void createSession(AlpacaSession session) throws Exception {
		Properties props = new Properties();

		try {
			props.put("id", session.getId());
			props.put("exchange", session.getExchange().toString());
			props.put("name", session.getName());
			props.put("key_id", session.getKey());
			props.put("secret", session.getSecret());
			props.put("base_api_url", session.getApiType().toString());
			props.put("base_data_url", session.getDataType().toString());

			String path = session.getId() + ".session";
			FileOutputStream outputStrem = new FileOutputStream(path);
			props.store(outputStrem, "Session " + session.getId());
		} catch (Exception e) {
			e.printStackTrace();
		}
		System.out.println("Alpaca session created");
	}

	public void createSession(BinanceSession session) throws Exception {
		Properties props = new Properties();

		try {
			props.put("id", session.getId());
			props.put("exchange", session.getExchange().toString());
			props.put("name", session.getName());
			props.put("key_id", session.getKey());
			props.put("secret", session.getSecret());

			String path = session.getId() + ".session";
			FileOutputStream outputStrem = new FileOutputStream(path);
			props.store(outputStrem, "Session " + session.getId());
		} catch (Exception e) {
			e.printStackTrace();
		}

		System.out.println("Binance session created");
	}

	public void deleteSession(String id) {
		File file = new File(id + ".session");
		if (file.delete()) {
			System.out.println("Session deleted successfully");
		} else {
			System.out.println("Failed to delete session");
		}
	}
}
