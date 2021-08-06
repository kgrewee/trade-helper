package com.tradehelper.api.services;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;

import org.springframework.stereotype.Service;

import com.tradehelper.api.models.AlpacaSession;
import com.tradehelper.api.models.BinanceSession;
import com.tradehelper.api.models.Exchange;
import com.tradehelper.api.models.Session;
import com.tradehelper.api.utilities.FileEncrypter;
import com.tradehelper.api.utilities.FileUtility;

import net.jacobpeterson.alpaca.enums.api.DataAPIType;
import net.jacobpeterson.alpaca.enums.api.EndpointAPIType;

@Service
public class SessionService {
	SecretKey secretKey;
	FileEncrypter fileEncrypter;

	public SessionService() {
		try {
			System.out.println("Creating key");
			secretKey = KeyGenerator.getInstance("AES").generateKey();
			fileEncrypter = new FileEncrypter(secretKey, "AES/CBC/PKCS5Padding");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	public Session getSession(String id) throws Exception {
		Session s = null;
		//InputStream input = new FileInputStream(id + ".session")
		try (InputStream input = new ByteArrayInputStream(fileEncrypter.decrypt(id + ".session").getBytes())) {
			Properties prop = new Properties();

			prop.load(input);

			switch (prop.getProperty("exchange")) {
			case "ALPACA":
				s = new AlpacaSession(prop.getProperty("id"), prop.getProperty("name"), Exchange.ALPACA,
						prop.getProperty("key"), prop.getProperty("secret"), EndpointAPIType.PAPER, DataAPIType.IEX);
				break;
			case "BINANCE":
				s = new BinanceSession(prop.getProperty("id"), prop.getProperty("name"), Exchange.BINANCE,
						prop.getProperty("key"), prop.getProperty("secret"));
				break;
			default:

			}

		} catch (IOException ex) {
			ex.printStackTrace();
		}
		return s;
	}

	public List<Session> getAllSessions() throws Exception {
		List<Session> sessions = new ArrayList<Session>();
		List<String> files = FileUtility.findFiles(Paths.get(""), ".session");
		files.forEach(x -> {
			System.out.println(fileEncrypter.decrypt(x));
			try (InputStream input = new ByteArrayInputStream(fileEncrypter.decrypt(x).getBytes())) {
				Properties prop = new Properties();

				prop.load(input);
				
				switch (prop.getProperty("exchange")) {
				case "ALPACA":
					sessions.add(new AlpacaSession(prop.getProperty("id"), prop.getProperty("name"), Exchange.ALPACA,
							prop.getProperty("key"), prop.getProperty("secret"), EndpointAPIType.PAPER,
							DataAPIType.IEX));
					break;
				case "BINANCE":
					sessions.add(new BinanceSession(prop.getProperty("id"), prop.getProperty("name"), Exchange.BINANCE,
							prop.getProperty("key"), prop.getProperty("secret")));
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
			props.put("key", session.getKey());
			props.put("secret", session.getSecret());
			props.put("base_api_url", session.getApiType().toString());
			props.put("base_data_url", session.getDataType().toString());

			String path = session.getId() + ".session";
			fileEncrypter.encrypt(FileUtility.getPropertiesAsString(props), path);
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
			props.put("key", session.getKey());
			props.put("secret", session.getSecret());

			String path = session.getId() + ".session";
			fileEncrypter.encrypt(FileUtility.getPropertiesAsString(props), path);
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
