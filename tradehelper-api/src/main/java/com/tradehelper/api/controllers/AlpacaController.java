package com.tradehelper.api.controllers;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tradehelper.api.exceptions.AlpacaException;
import com.tradehelper.api.exceptions.MissingPropertiesFileException;
import com.tradehelper.api.utilities.PropertiesUtility;

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
	
    /**
     * Base url
     * @return Welcome message
     */
    @RequestMapping("/")
    public String index(){
        return "Welcome to TradeHelper API";
    }
    
    /**
     * Get all orders
     * @return List of alpaca orders
     */
    @RequestMapping("/orders/all")
    public List<Order> getOrders() throws Exception {
    	
		try {
			return PropertiesUtility.getAlpacaAPI().getOrders(
		            OrderStatus.ALL,
		            null,
		            ZonedDateTime.of(2020, 12, 23, 0, 0, 0, 0, ZoneId.of("America/New_York")),
		            null,
		            null,
		            true,
		            Arrays.asList("AAPL", "TSLA"));
		} catch (AlpacaAPIRequestException e) {
			throw new AlpacaException("Can't reach alpaca.  Check credentials in alpaca.properties", e);
		} catch (Exception e) {
			throw new MissingPropertiesFileException("Can't find alpaca.properties", e);
		}
    }
    
    /**
     * Get open orders
     * @return List of alpaca orders
     */
    @RequestMapping("/orders/open")
    public List<Order> getOpenOrders() throws Exception {
    	
		try {
			return PropertiesUtility.getAlpacaAPI().getOrders(
		            OrderStatus.OPEN,
		            null,
		            ZonedDateTime.of(2020, 12, 23, 0, 0, 0, 0, ZoneId.of("America/New_York")),
		            null,
		            null,
		            true,
		            Arrays.asList("AAPL", "TSLA"));
		} catch (AlpacaAPIRequestException e) {
			throw new AlpacaException("Can't reach alpaca.  Check credentials in alpaca.properties", e);
		}catch (Exception e) {
			throw new MissingPropertiesFileException("Can't find alpaca.properties", e);
		}
    }
    
    /**
     * Get closed orders
     * @return List of alpaca orders
     */
    @RequestMapping("/orders/closed")
    public List<Order> getClosedOrders() throws Exception {
    	
		try {
			return PropertiesUtility.getAlpacaAPI().getOrders(
		            OrderStatus.CLOSED,
		            null,
		            ZonedDateTime.of(2020, 12, 23, 0, 0, 0, 0, ZoneId.of("America/New_York")),
		            null,
		            null,
		            true,
		            Arrays.asList("AAPL", "TSLA"));
		} catch (AlpacaAPIRequestException e) {
			throw new AlpacaException("Can't reach alpaca.  Check credentials in alpaca.properties", e);
		} catch (Exception e) {
			throw new MissingPropertiesFileException("Can't find alpaca.properties", e);
		}
    }
}
