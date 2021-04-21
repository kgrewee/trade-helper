package com.tradehelper.test;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.Arrays;
import java.util.List;
import org.junit.jupiter.api.Test;

import net.jacobpeterson.abstracts.enums.SortDirection;
import net.jacobpeterson.alpaca.AlpacaAPI;
import net.jacobpeterson.alpaca.enums.asset.AssetStatus;
import net.jacobpeterson.alpaca.enums.marketdata.BarsTimeFrame;
import net.jacobpeterson.alpaca.enums.order.OrderSide;
import net.jacobpeterson.alpaca.enums.order.OrderStatus;
import net.jacobpeterson.alpaca.enums.order.OrderTimeInForce;
import net.jacobpeterson.alpaca.rest.exception.AlpacaAPIRequestException;
import net.jacobpeterson.domain.alpaca.account.Account;
import net.jacobpeterson.domain.alpaca.asset.Asset;
import net.jacobpeterson.domain.alpaca.marketdata.historical.bar.BarsResponse;
import net.jacobpeterson.domain.alpaca.order.CancelledOrder;
import net.jacobpeterson.domain.alpaca.order.Order;
import net.jacobpeterson.domain.alpaca.position.Position;

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

			//System.out.println("\n\nAccount Information:");
			//System.out.println("\t" + alpacaAccount.toString().replace(",", ",\n\t"));
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
			List<Position> positions = alpacaAPI.getOpenPositions();
			//System.out.println("\n\nOpen Positions: \n\t" + positions);
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
			//System.out.println("\n\nAssets: \n");
			for(Asset asset: alpacaAPI.getAssets(AssetStatus.ACTIVE, null)) {
				
			}
		} catch (AlpacaAPIRequestException e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * Gets a list of orders
	 * @throws Exception 
	 */
	@Test
	public void ordersTest() throws Exception {
		try {
		    // Print all the 'Order's of AAPL and TSLA after 12/23/2020 
		    // in ascending (oldest to newest) order
		    List<Order> orders = alpacaAPI.getOrders(
		            OrderStatus.ALL,
		            null,
		            ZonedDateTime.of(2020, 12, 23, 0, 0, 0, 0, ZoneId.of("America/New_York")),
		            null,
		            SortDirection.ASCENDING,
		            true,
		            Arrays.asList("AAPL", "TSLA"));
		    orders.forEach(System.out::println);
		    
		    // Request a new limit order for TSLA for 100 shares at a limit price
		    // of 600.00 and TIF of DAY.
		    Order limitOrderTSLA = alpacaAPI.requestNewLimitOrder(
		            "TSLA",
		            100,
		            OrderSide.BUY,
		            OrderTimeInForce.DAY,
		            600.00,
		            false);
		    
		    // Check if my TSLA limit order has filled 5 seconds later and if it hasn't
		    // replace it with a market order so it fills!
		    Thread.sleep(5000);
		    limitOrderTSLA = alpacaAPI.getOrder(limitOrderTSLA.getId(), false);
		    if (limitOrderTSLA.getFilledAt() == null) {
		        Order replacedOrder = alpacaAPI.replaceOrder(
		                limitOrderTSLA.getId(),
		                100,
		                OrderTimeInForce.DAY,
		                null,
		                null,
		                null,
		                null);
		    }
		    
		    // Cancel all open orders
		    List<CancelledOrder> cancelledOrders = alpacaAPI.cancelAllOrders();
		    /*for (CancelledOrder cancelledOrder : cancelledOrders) {
		        System.out.println("Cancelled Order: " + cancelledOrder.getOrder());
		    }
		    */
		    // Request a new fractional market order for 0.5 shares of GME 
		    alpacaAPI.requestNewFractionalMarketOrder("GME", 0.5, OrderSide.BUY);
		    // Request a new notional market order for $25 worth of GME shares
		    alpacaAPI.requestNewNotionalMarketOrder("GME", 25d, OrderSide.BUY);
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
		    // Get hour bars of AAPL from 2/22/2021 at 9:30 AM to 2/24/2021 at 4 PM and print them out
		    BarsResponse appleBarsResponse = alpacaAPI.getBars(
		            "AAPL",
		            ZonedDateTime.of(2021, 2, 22, 9, 30, 0, 0, ZoneId.of("America/New_York")),
		            ZonedDateTime.of(2021, 2, 24, 12 + 4, 0, 0, 0, ZoneId.of("America/New_York")),
		            null,
		            null,
		            BarsTimeFrame.HOUR);
		    //appleBarsResponse.getBars().forEach(System.out::println);
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

			//System.out.println("\n\nNew AAPL Order:");
			//System.out.println("\t" + aaplLimitOrder.toString().replace(",", ",\n\t"));
		} catch (AlpacaAPIRequestException e) {
			e.printStackTrace();
		}
	}
}
