package com.tradehelper.api.controllers;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tradehelper.api.exceptions.AlpacaException;
import com.tradehelper.api.exceptions.MissingPropertiesFileException;
import com.tradehelper.api.utilities.PropertiesUtility;

import net.jacobpeterson.alpaca.enums.asset.AssetStatus;
import net.jacobpeterson.alpaca.enums.order.OrderStatus;
import net.jacobpeterson.alpaca.rest.exception.AlpacaAPIRequestException;
import net.jacobpeterson.domain.alpaca.account.Account;
import net.jacobpeterson.domain.alpaca.asset.Asset;
import net.jacobpeterson.domain.alpaca.clock.Clock;
import net.jacobpeterson.domain.alpaca.order.Order;
import net.jacobpeterson.domain.alpaca.position.Position;

/**
 * Alpaca rest endpoints
 * 
 * @author kgrewe
 *
 */
@RestController
@RequestMapping("alpaca")
public class AlpacaController {

	/**
	 * Base url
	 * 
	 * @return Welcome message
	 */
	@RequestMapping("")
	public String index() {
		return "Welcome to TradeHelper Alpaca API";
	}

	/**
	 * Gets account information
	 * 
	 * @return Account
	 * @throws Exception
	 */
	@RequestMapping("/account")
	public Account getAccount() throws Exception {
		try {
			return PropertiesUtility.getAlpacaAPI().getAccount();
		} catch (AlpacaAPIRequestException e) {
			throw new AlpacaException("Can't reach alpaca.  Check credentials in alpaca.properties", e);
		} catch (Exception e) {
			throw new MissingPropertiesFileException("Can't find alpaca.properties", e);
		}
	}

	/**
	 * Gets all positions
	 * 
	 * @return List of positions
	 * @throws Exception
	 */
	@RequestMapping("/positions")
	public List<Position> getPositions() throws Exception {
		try {
			return PropertiesUtility.getAlpacaAPI().getOpenPositions();
		} catch (AlpacaAPIRequestException e) {
			throw new AlpacaException("Can't reach alpaca.  Check credentials in alpaca.properties", e);
		} catch (Exception e) {
			throw new MissingPropertiesFileException("Can't find alpaca.properties", e);
		}
	}

	/**
	 * Gets all active US assets
	 * 
	 * @return List of active US assets
	 * @throws Exception
	 */
	@RequestMapping("/assets/active")
	public List<Asset> getUSAssets() throws Exception {
		try {
			return PropertiesUtility.getAlpacaAPI().getAssets(AssetStatus.ACTIVE, "us_equity");
		} catch (AlpacaAPIRequestException e) {
			throw new AlpacaException("Can't reach alpaca.  Check credentials in alpaca.properties", e);
		} catch (Exception e) {
			throw new MissingPropertiesFileException("Can't find alpaca.properties", e);
		}
	}

	/**
	 * Gets the current market clock
	 * 
	 * @return Current market clock
	 * @throws Exception
	 */
	@RequestMapping("/clock")
	public Clock getClock() throws Exception {
		try {
			return PropertiesUtility.getAlpacaAPI().getClock();
		} catch (AlpacaAPIRequestException e) {
			throw new AlpacaException("Can't reach alpaca.  Check credentials in alpaca.properties", e);
		} catch (Exception e) {
			throw new MissingPropertiesFileException("Can't find alpaca.properties", e);
		}
	}

	/**
	 * Get orders by type
	 * 
	 * @return List of alpaca orders
	 */
	@GetMapping("/orders/{type}")
	public List<Order> getOrders(@PathVariable String type) throws Exception {
		try {
			switch (type) {
			case "all":
			case "ALL":
				return PropertiesUtility.getAlpacaAPI().getOrders(OrderStatus.ALL, null,
						ZonedDateTime.of(2020, 12, 23, 0, 0, 0, 0, ZoneId.of("America/New_York")), null, null, true,
						null);
			case "closed":
			case "CLOSED":
				return PropertiesUtility.getAlpacaAPI().getOrders(OrderStatus.CLOSED, null,
						ZonedDateTime.of(2020, 12, 23, 0, 0, 0, 0, ZoneId.of("America/New_York")), null, null, true,
						null);
			case "open":
			case "OPEN":
				return PropertiesUtility.getAlpacaAPI().getOrders(OrderStatus.OPEN, null,
						ZonedDateTime.of(2020, 12, 23, 0, 0, 0, 0, ZoneId.of("America/New_York")), null, null, true,
						null);
			default:
				return PropertiesUtility.getAlpacaAPI().getOrders(OrderStatus.ALL, null,
						ZonedDateTime.of(2020, 12, 23, 0, 0, 0, 0, ZoneId.of("America/New_York")), null, null, true,
						null);
			}

		} catch (AlpacaAPIRequestException e) {
			throw new AlpacaException("Can't reach alpaca.  Check credentials in alpaca.properties", e);
		} catch (Exception e) {
			throw new MissingPropertiesFileException("Can't find alpaca.properties", e);
		}
	}
}
