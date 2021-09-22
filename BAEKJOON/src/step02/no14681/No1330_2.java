package step02;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class No1330_2 {

	public static void main(String[] args) throws Exception{
		BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
		int a = Integer.parseInt(reader.readLine());
		int b = Integer.parseInt(reader.readLine());
		
		if(a > b) {
			System.out.println(">");
		} else if(a < b) {	
			System.out.println("<");
		} else if(a == b) {
			System.out.println("==");
		}

	}	

}
