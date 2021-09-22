package step02;

import java.util.Scanner;

public class No9498Switch {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		int score = scan.nextInt();
		
		switch(score/10) {
		case 0, 1, 2, 3, 4, 5 : 
			System.out.println("F");
			break;
		case 6 :
			System.out.println("D");
			break;
		case 7 :
			System.out.println("C");
			break;
		case 8 : 
			System.out.println("B"); 
			break;
		case 9, 10 : 
			System.out.println("A"); 
			break;
		}

	}

}
