package com.tradehelper.api.models;

import java.io.Serializable;

public class BinanceSession extends Session implements Serializable {
	private String key;
	private String secret;

	public BinanceSession() {
		super("", "", null);
		this.key = "";
		this.secret = "";
	}

	public BinanceSession(String id, String name, Exchange exchange, String key, String secret) {
		super(id, name, exchange);
		this.key = key;
		this.secret = secret;
	}

	public String getKey() {
		return key;
	}

	public void setKey(String key) {
		this.key = key;
	}

	public String getSecret() {
		return secret;
	}

	public void setSecret(String secret) {
		this.secret = secret;
	}

}
