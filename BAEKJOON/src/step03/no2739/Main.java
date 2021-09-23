package step03.no2739;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int num = scan.nextInt();
		
		for(int i=1; i<=9; i++) {
				System.out.printf("%d * %d = %d%n", num, i, num * i);
		}
	}

}
