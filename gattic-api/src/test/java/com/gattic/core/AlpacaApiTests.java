package com.gattic.core;
import java.time.Instant;
import java.time.ZoneId;
import java.time.ZoneOffset;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.Map;

import org.junit.Test;

import io.github.mainstringargs.alpaca.AlpacaAPI;
import io.github.mainstringargs.alpaca.enums.AssetStatus;
import io.github.mainstringargs.alpaca.enums.BarsTimeFrame;
import io.github.mainstringargs.alpaca.enums.OrderSide;
import io.github.mainstringargs.alpaca.enums.OrderStatus;
import io.github.mainstringargs.alpaca.enums.OrderTimeInForce;
import io.github.mainstringargs.alpaca.rest.exception.AlpacaAPIRequestException;
import io.github.mainstringargs.domain.alpaca.account.Account;
import io.github.mainstringargs.domain.alpaca.asset.Asset;
import io.github.mainstringargs.domain.alpaca.bar.Bar;
import io.github.mainstringargs.domain.alpaca.order.Order;

public class AlpacaApiTests {
	// This logs into Alpaca using the alpaca.properties file on the classpath.
	AlpacaAPI alpacaAPI = new AlpacaAPI();

	// Apple ticker text
	String aaplTicker = "AAPL";

	/**
	 * Gets the account information
	 */
	@Test
	public void accountTest() {
		try {
			Account alpacaAccount = alpacaAPI.getAccount();

			System.out.println("\n\nAccount Information:");
			System.out.println("\t" + alpacaAccount.toString().replace(",", ",\n\t"));
		} catch (AlpacaAPIRequestException e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * Gets a list of open positions
	 */
	@Test
	public void openPositionTest() {
		try {
			System.out.println("\n\nOpen Positions: \n\t" + alpacaAPI.getOpenPositions());
		} catch (AlpacaAPIRequestException e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * Gets  assets
	 */
	@Test
	public void assetsTest() {
		try {
			System.out.println("\n\nAssets: \n");
			int i = 0;
			for(Asset asset: alpacaAPI.getAssets(AssetStatus.ACTIVE, null)) {
				System.out.println("\t" + asset.toString().replace(",", ",\n\t") + "\n");
				i++;
				if(i > 3) {
					break;
				}
			}
		} catch (AlpacaAPIRequestException e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * Gets a list of orders
	 */
	@Test
	public void ordersTest() {
		try {
			System.out.println("\n\nOrders: \n");
			int i = 0;
			System.out.println(alpacaAPI.getOrders(OrderStatus.ALL, null, null, null, null, null));
			for(Order order: alpacaAPI.getOrders(OrderStatus.ALL, null, null, null, null, null)) {
				System.out.println("\t" + order.toString().replace(",", ",\n\t") + "\n");
				i++;
				if(i > 3) {
					break;
				}
			}
		} catch (AlpacaAPIRequestException e) {
			e.printStackTrace();
		}
	}
	
	
	/**
	 * Get bars
	 */
	@Test
	public void barsTest() {
		try {
		    ZonedDateTime start = ZonedDateTime.of(2019, 11, 18, 0, 0, 0, 0, ZoneId.of("America/New_York"));
		    ZonedDateTime end = ZonedDateTime.of(2019, 11, 22, 23, 59, 0, 0, ZoneId.of("America/New_York"));

		    Map<String, ArrayList<Bar>> bars = alpacaAPI.getBars(BarsTimeFrame.ONE_DAY, aaplTicker, null, start, end,
		            null, null);

		    System.out.println("\n\nBars:");
		    for (Bar bar : bars.get("AAPL")) {
		        System.out.println("\t==========");
		        System.out.println("\tUnix Time " + ZonedDateTime.ofInstant(Instant.ofEpochSecond(bar.getT()),
		                ZoneOffset.UTC));
		        System.out.println("\tOpen: $" + bar.getO());
		        System.out.println("\tHigh: $" + bar.getH());
		        System.out.println("\tLow: $" + bar.getL());
		        System.out.println("\tClose: $" + bar.getC());
		        System.out.println("\tVolume: " + bar.getV());
		    }
		} catch (AlpacaAPIRequestException e) {
		    e.printStackTrace();
		}
	}

	/**
	 * Performs a buy
	 */
	@Test
	public void buyTest() {
		try {
			Order aaplLimitOrder = alpacaAPI.requestNewLimitOrder(aaplTicker, 1, OrderSide.BUY, OrderTimeInForce.DAY,
					201.30, true);

			System.out.println("\n\nNew AAPL Order:");
			System.out.println("\t" + aaplLimitOrder.toString().replace(",", ",\n\t"));
		} catch (AlpacaAPIRequestException e) {
			e.printStackTrace();
		}
	}
}
