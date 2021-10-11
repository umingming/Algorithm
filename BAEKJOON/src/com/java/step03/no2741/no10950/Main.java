package step03.no10950;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int test = scan.nextInt();
		
		for(int i=0; i<test; i++) {
			
			int a = scan.nextInt();
			int b = scan.nextInt();
			System.out.println(a + b);
		}
	}
}
