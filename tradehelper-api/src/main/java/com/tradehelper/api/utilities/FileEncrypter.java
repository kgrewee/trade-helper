package com.tradehelper.api.utilities;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStreamReader;
import java.security.Key;
import java.security.NoSuchAlgorithmException;

import javax.crypto.Cipher;
import javax.crypto.CipherInputStream;
import javax.crypto.CipherOutputStream;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.SecretKey;
import javax.crypto.spec.IvParameterSpec;

public class FileEncrypter {
	private Cipher cipher;
	private Key secretKey;
	
	public FileEncrypter(SecretKey secretKey, String transformation) {
	    this.secretKey = secretKey;
	    try {
			this.cipher = Cipher.getInstance(transformation);
		} catch (NoSuchAlgorithmException | NoSuchPaddingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public void encrypt(String content, String fileName) {
	    try {
			cipher.init(Cipher.ENCRYPT_MODE, secretKey);
		    byte[] iv = cipher.getIV();

		    try (FileOutputStream fileOut = new FileOutputStream(fileName);
		      CipherOutputStream cipherOut = new CipherOutputStream(fileOut, cipher)) {
		        fileOut.write(iv);
		        cipherOut.write(content.getBytes());
		    }
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}
	
	public String decrypt(String fileName) {
	    String content = null;

	    try (FileInputStream fileIn = new FileInputStream(fileName)) {
	        byte[] fileIv = new byte[16];
	        fileIn.read(fileIv);
	        cipher.init(Cipher.DECRYPT_MODE, secretKey, new IvParameterSpec(fileIv));

	        try (
	                CipherInputStream cipherIn = new CipherInputStream(fileIn, cipher);
	                InputStreamReader inputReader = new InputStreamReader(cipherIn);
	                BufferedReader reader = new BufferedReader(inputReader)
	            ) {

	            StringBuilder sb = new StringBuilder();
	            String line;
	            while ((line = reader.readLine()) != null) {
	                sb.append(line + "\n");
	            }
	            content = sb.toString();
	        }

	    } catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	    return content;
	}
}
