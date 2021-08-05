package com.tradehelper.api.models;

public abstract class Session {
    private String id;
    private String name;
    private Exchange exchange;
    
    public Session() {
    	this.id = "";
    	this.name = "";
    	this.exchange = null;
    }
    
	public Session(String id, String name, Exchange exchange) {
		super();
		this.id = id;
		this.name = name;
		this.exchange = exchange;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Exchange getExchange() {
		return exchange;
	}

	public void setExchange(Exchange exchange) {
		this.exchange = exchange;
	}
}
