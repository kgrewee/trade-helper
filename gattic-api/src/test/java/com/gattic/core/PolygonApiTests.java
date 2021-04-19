package com.gattic.core;
import java.time.LocalDate;

import org.eclipse.jetty.websocket.api.WebSocketException;
import org.junit.jupiter.api.Test;

import io.github.mainstringargs.domain.polygon.aggregates.Aggregate;
import io.github.mainstringargs.domain.polygon.aggregates.AggregatesResponse;
import io.github.mainstringargs.domain.polygon.stocksplits.StockSplit;
import io.github.mainstringargs.domain.polygon.stocksplits.StockSplitsResponse;
import io.github.mainstringargs.domain.polygon.websocket.PolygonStreamMessage;
import io.github.mainstringargs.polygon.PolygonAPI;
import io.github.mainstringargs.polygon.enums.Timespan;
import io.github.mainstringargs.polygon.rest.exception.PolygonAPIRequestException;
import io.github.mainstringargs.polygon.websocket.listener.PolygonStreamListenerAdapter;
import io.github.mainstringargs.polygon.websocket.message.PolygonStreamMessageType;

public class PolygonApiTests {
	// This will use the key_id in the alpaca.properties file by default
	PolygonAPI polygonAPI = new PolygonAPI();
	
	// Apple ticker text
	String aaplTicker = "AAPL";
	
	/**
	 * Get a list of the exchanges polygon supports
	 */
	@Test
	public void exchangesTest() {
		try {
			polygonAPI.getExchanges().forEach(((e) -> System.out.println(e.getName())));
		} catch (PolygonAPIRequestException e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * Gets a stream of market data
	 */
	@Test
	public void streamTest() {
		// Add a Polygon stream listener to listen to "T.AAPL", "Q.AAPL", "A.AAPL",
		// "AM.AAPL", and status messages
		try {
			polygonAPI.addPolygonStreamListener(
					new PolygonStreamListenerAdapter(aaplTicker, PolygonStreamMessageType.values()) {
						@Override
						public void onStreamUpdate(PolygonStreamMessageType streamMessageType,
								PolygonStreamMessage streamMessage) {
							System.out.println("===> streamUpdate " + streamMessageType + " " + streamMessage);
						}
					});
		} catch (WebSocketException e) {
			e.printStackTrace();
		}
	}

	
	/**
	 * Gets a list of aggregates for a given ticker
	 */
	@Test
	public void aggregateTest() {

		try {
			AggregatesResponse aggregatesResponse = polygonAPI.getAggregates(aaplTicker, 1, Timespan.DAY,
					LocalDate.of(2019, 11, 18), LocalDate.of(2019, 11, 25), false);

			System.out.println("Aggregate Response:");
			System.out.println("\tStatus: " + aggregatesResponse.getStatus());
			System.out.println("\tCount: " + aggregatesResponse.getResultsCount());
			for (Aggregate aggregate : aggregatesResponse.getResults()) {
				System.out.println("\t" + aggregate.toString().replace(",", ",\n\t"));
			}
		} catch (PolygonAPIRequestException e) {
			e.printStackTrace();
		}
	}

	/**
	 * Gets the split stocks for a given ticker
	 */
	@Test
	public void splitStockTest() {
		try {
			StockSplitsResponse stockSplitsResponse = polygonAPI.getStockSplits(aaplTicker);

			System.out.println(aaplTicker + " Stock Split Response:");
			System.out.println("\tStatus: " + stockSplitsResponse.getStatus());
			System.out.println("\tCount: " + stockSplitsResponse.getCount());
			for (StockSplit stockSplit : stockSplitsResponse.getResults()) {
				System.out.println("\t" + stockSplit.toString().replace(",", ",\n\t"));
			}
		} catch (PolygonAPIRequestException e) {
			e.printStackTrace();
		}
	}
}
