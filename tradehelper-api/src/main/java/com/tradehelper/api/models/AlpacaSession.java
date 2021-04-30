package com.tradehelper.api.models;

import java.io.Serializable;

import com.tradehelper.api.enums.Exchange;

import net.jacobpeterson.alpaca.enums.api.DataAPIType;
import net.jacobpeterson.alpaca.enums.api.EndpointAPIType;

public class AlpacaSession extends Session implements Serializable {
	private String key;
	private String secret;
	private EndpointAPIType apiType;
	private DataAPIType dataType;

	public AlpacaSession() {
		super("", "", null);
		this.key = "";
		this.secret = "";
		this.apiType = null;
		this.dataType = null;
	}

	public AlpacaSession(String id, String name, Exchange exchange, String key, String secret, EndpointAPIType apiType,
			DataAPIType dataType) {
		super(id, name, exchange);
		this.key = key;
		this.secret = secret;
		this.apiType = apiType;
		this.dataType = dataType;
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

	public EndpointAPIType getApiType() {
		return apiType;
	}

	public void setApiType(EndpointAPIType apiType) {
		this.apiType = apiType;
	}

	public DataAPIType getDataType() {
		return dataType;
	}

	public void setDataType(DataAPIType dataType) {
		this.dataType = dataType;
	}

}
