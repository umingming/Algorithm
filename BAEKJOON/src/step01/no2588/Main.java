package step01.no2588;

import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
//		int A = sc.nextInt();
		int B = sc.nextInt();
		
//		System.out.println((B-(B/(int)Math.pow(10, 1))*(int)Math.pow(10, 1)));
		System.out.println((B/(int)Math.pow(10, 2))*(int)Math.pow(10, 2));
		System.out.println(B-(B/(int)Math.pow(10, 2))*(int)Math.pow(10, 2));
		System.out.println(((B-(B/(int)Math.pow(10, 2))*(int)Math.pow(10, 2))/(int)Math.pow(10, 1)));
//		System.out.println((B/(int)Math.pow(10, 2)));
//		System.out.println(B);
	}

}
