package com.gattic.api.controllers;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gattic.api.exceptions.AlpacaException;
import com.gattic.api.exceptions.MissingPropertiesFileException;

import net.jacobpeterson.abstracts.enums.SortDirection;
import net.jacobpeterson.alpaca.AlpacaAPI;
import net.jacobpeterson.alpaca.enums.api.DataAPIType;
import net.jacobpeterson.alpaca.enums.api.EndpointAPIType;
import net.jacobpeterson.alpaca.enums.order.OrderStatus;
import net.jacobpeterson.alpaca.rest.exception.AlpacaAPIRequestException;
import net.jacobpeterson.domain.alpaca.order.Order;

/**
 * Alpaca rest endpoints
 * 
 * @author kgrewe
 *
 */
@RestController
public class AlpacaController {
	AlpacaAPI alpacaAPI = new AlpacaAPI("PKEQ7DXG6G15945PSMQ9", "JPurZbmMPwVKi2R54gOJrJbh45B9lBXaSUMRvVhg", EndpointAPIType.PAPER, DataAPIType.IEX);
	
    /**
     * Base url
     * @return Welcome message
     */
    @RequestMapping("/")
    public String index(){
        return "Welcome to Gattic's Alpaca CLI";
    }
    
    /**
     * Get all orders
     * @return List of alpaca orders
     */
    @RequestMapping("/orders/all")
    public List<Order> getOrders() throws Exception {
    	
		try {
			return alpacaAPI.getOrders(
		            OrderStatus.ALL,
		            null,
		            ZonedDateTime.of(2020, 12, 23, 0, 0, 0, 0, ZoneId.of("America/New_York")),
		            null,
		            SortDirection.ASCENDING,
		            true,
		            Arrays.asList("AAPL", "TSLA"));
		} catch (AlpacaAPIRequestException e) {
			throw new AlpacaException("Cannot reach alpaca.  Check credentials in alpaca.properties", e);
		} catch (Exception e) {
			throw new MissingPropertiesFileException("Cannot find alpaca.properties", e);
		}
    }
    
    /**
     * Get open orders
     * @return List of alpaca orders
     */
    @RequestMapping("/orders/open")
    public List<Order> getOpenOrders() throws Exception {
    	
		try {
			return alpacaAPI.getOrders(
		            OrderStatus.OPEN,
		            null,
		            ZonedDateTime.of(2020, 12, 23, 0, 0, 0, 0, ZoneId.of("America/New_York")),
		            null,
		            SortDirection.ASCENDING,
		            true,
		            Arrays.asList("AAPL", "TSLA"));
		} catch (AlpacaAPIRequestException e) {
			throw new AlpacaException("Cannot reach alpaca.  Check credentials in alpaca.properties", e);
		}catch (Exception e) {
			throw new MissingPropertiesFileException("Cannot find alpaca.properties", e);
		}
    }
    
    /**
     * Get closed orders
     * @return List of alpaca orders
     */
    @RequestMapping("/orders/closed")
    public List<Order> getClosedOrders() throws Exception {
    	
		try {
			return alpacaAPI.getOrders(
		            OrderStatus.CLOSED,
		            null,
		            ZonedDateTime.of(2020, 12, 23, 0, 0, 0, 0, ZoneId.of("America/New_York")),
		            null,
		            SortDirection.ASCENDING,
		            true,
		            Arrays.asList("AAPL", "TSLA"));
		} catch (AlpacaAPIRequestException e) {
			throw new AlpacaException("Cannot reach alpaca.  Check credentials in alpaca.properties", e);
		} catch (Exception e) {
			throw new MissingPropertiesFileException("Cannot find alpaca.properties", e);
		}
    }
}
