package step01;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class No1000 {

	public static void main(String[] args) throws Exception{
		BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
		int a = Integer.parseInt(reader.readLine());
		int b = Integer.parseInt(reader.readLine());
		
		System.out.println(a + b);

	}

}
